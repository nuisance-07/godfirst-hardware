import mongoose from "mongoose";

export interface IPageView {
  path: string;
  userAgent?: string;
  ip?: string;
  fingerprint?: string;
  timestamp: Date;
}

const PageViewSchema = new mongoose.Schema<IPageView>({
  path: { type: String, required: true },
  userAgent: { type: String },
  ip: { type: String },
  fingerprint: { type: String },
  timestamp: { type: Date, default: Date.now },
});

export const PageView = mongoose.models.PageView || mongoose.model<IPageView>("PageView", PageViewSchema, "godfirst_pageviews");
