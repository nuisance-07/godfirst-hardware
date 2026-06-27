import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Order } from "@/models/Order";

/**
 * Payment status polling endpoint.
 * Frontend calls this to check if the payment has been completed.
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const checkoutRequestId = searchParams.get("checkoutRequestId");

    if (!checkoutRequestId) {
      return NextResponse.json(
        { success: false, error: "checkoutRequestId is required" },
        { status: 400 }
      );
    }

    await dbConnect();

    const order = await Order.findOne({ checkoutRequestId }).lean();

    if (!order) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      status: order.status,
      mpesaReceiptNumber: order.mpesaReceiptNumber || null,
      amount: order.amount,
      productName: order.productName,
      resultDesc: order.resultDesc || null,
    });
  } catch (error: any) {
    console.error("Status check error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to check payment status" },
      { status: 500 }
    );
  }
}
