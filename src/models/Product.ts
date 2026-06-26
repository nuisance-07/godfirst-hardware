import mongoose from "mongoose";

export interface IProduct {
  _id?: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  images: string[];
  brand?: string;
  inStock: boolean;
  featured: boolean;
  specifications?: { key: string; value: string }[];
}

const ProductSchema = new mongoose.Schema<IProduct>({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true, default: "per piece" },
  description: { type: String, required: true },
  images: [{ type: String }],
  brand: { type: String },
  inStock: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  specifications: [{
    key: { type: String },
    value: { type: String }
  }]
}, {
  timestamps: true
});

export const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema, "godfirst_products");
