import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Order } from "@/models/Order";

/**
 * M-Pesa Callback endpoint.
 * Safaricom sends the payment result here after the customer
 * confirms or cancels the STK Push on their phone.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("M-Pesa Callback received:", JSON.stringify(body, null, 2));

    const { Body } = body;
    if (!Body || !Body.stkCallback) {
      return NextResponse.json({ ResultCode: 0, ResultDesc: "Accepted" });
    }

    const {
      MerchantRequestID,
      CheckoutRequestID,
      ResultCode,
      ResultDesc,
      CallbackMetadata,
    } = Body.stkCallback;

    await dbConnect();

    if (ResultCode === 0) {
      // Payment successful — extract metadata
      const metadata: Record<string, any> = {};
      if (CallbackMetadata && CallbackMetadata.Item) {
        for (const item of CallbackMetadata.Item) {
          metadata[item.Name] = item.Value;
        }
      }

      await Order.findOneAndUpdate(
        { checkoutRequestId: CheckoutRequestID },
        {
          status: "completed",
          resultCode: ResultCode,
          resultDesc: ResultDesc,
          mpesaReceiptNumber: metadata.MpesaReceiptNumber || "",
          callbackData: metadata,
        }
      );

      console.log(
        `Payment completed: ${metadata.MpesaReceiptNumber} - KSh ${metadata.Amount}`
      );
    } else {
      // Payment failed or cancelled
      await Order.findOneAndUpdate(
        { checkoutRequestId: CheckoutRequestID },
        {
          status: "failed",
          resultCode: ResultCode,
          resultDesc: ResultDesc,
        }
      );

      console.log(`Payment failed: ${ResultDesc}`);
    }

    // Always respond with success to Safaricom
    return NextResponse.json({ ResultCode: 0, ResultDesc: "Accepted" });
  } catch (error: any) {
    console.error("Callback processing error:", error);
    // Still return success to Safaricom to prevent retries
    return NextResponse.json({ ResultCode: 0, ResultDesc: "Accepted" });
  }
}
