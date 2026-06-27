import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Order } from "@/models/Order";
import { initiateSTKPush, formatPhoneNumber } from "@/lib/mpesa";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone, amount, productName, productSlug } = body;

    // Validate required fields
    if (!phone || !amount || !productName || !productSlug) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: phone, amount, productName, productSlug" },
        { status: 400 }
      );
    }

    // Validate amount
    const parsedAmount = Number(amount);
    if (isNaN(parsedAmount) || parsedAmount < 1) {
      return NextResponse.json(
        { success: false, error: "Amount must be at least KSh 1" },
        { status: 400 }
      );
    }

    // Validate and format phone number
    let formattedPhone: string;
    try {
      formattedPhone = formatPhoneNumber(phone);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid phone number. Use format like 0712345678" },
        { status: 400 }
      );
    }

    // Generate a short account reference
    const accountRef = `GF-${productSlug.substring(0, 8).toUpperCase()}`;

    // Initiate STK Push
    const stkResponse = await initiateSTKPush({
      phone: formattedPhone,
      amount: parsedAmount,
      accountReference: accountRef,
      transactionDesc: "Payment",
    });

    // Check if STK Push was accepted
    if (stkResponse.ResponseCode !== "0") {
      return NextResponse.json(
        {
          success: false,
          error: stkResponse.ResponseDescription || "Failed to initiate payment",
        },
        { status: 400 }
      );
    }

    // Save the pending order to MongoDB
    await dbConnect();
    await Order.create({
      merchantRequestId: stkResponse.MerchantRequestID,
      checkoutRequestId: stkResponse.CheckoutRequestID,
      phone: formattedPhone,
      amount: parsedAmount,
      productName,
      productSlug,
      accountReference: accountRef,
      status: "pending",
    });

    return NextResponse.json({
      success: true,
      message: stkResponse.CustomerMessage,
      checkoutRequestId: stkResponse.CheckoutRequestID,
    });
  } catch (error: any) {
    console.error("STK Push error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to initiate payment" },
      { status: 500 }
    );
  }
}
