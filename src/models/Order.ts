import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  merchantRequestId: string;
  checkoutRequestId: string;
  phone: string;
  amount: number;
  productName: string;
  productSlug: string;
  accountReference: string;
  mpesaReceiptNumber?: string;
  status: "pending" | "completed" | "failed";
  resultCode?: number;
  resultDesc?: string;
  callbackData?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    merchantRequestId: { type: String, required: true },
    checkoutRequestId: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    amount: { type: Number, required: true },
    productName: { type: String, required: true },
    productSlug: { type: String, required: true },
    accountReference: { type: String, required: true },
    mpesaReceiptNumber: { type: String },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    resultCode: { type: Number },
    resultDesc: { type: String },
    callbackData: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
);

export const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
