import dbConnect from "@/lib/mongodb";
import { Product, IProduct } from "@/models/Product";

export interface ProductData {
  id: string;
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

function mapToPlainObject(doc: any): ProductData {
  return {
    id: doc._id.toString(),
    slug: doc.slug,
    name: doc.name,
    category: doc.category,
    price: doc.price,
    unit: doc.unit,
    description: doc.description,
    images: doc.images,
    brand: doc.brand,
    inStock: doc.inStock,
    featured: doc.featured,
    specifications: doc.specifications || [],
  };
}

export async function getProducts(): Promise<ProductData[]> {
  await dbConnect();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();
  return products.map(mapToPlainObject);
}

export async function getFeaturedProducts(): Promise<ProductData[]> {
  await dbConnect();
  const products = await Product.find({ featured: true }).lean();
  return products.map(mapToPlainObject);
}

export async function getProductBySlug(slug: string): Promise<ProductData | null> {
  await dbConnect();
  const product = await Product.findOne({ slug }).lean();
  if (!product) return null;
  return mapToPlainObject(product);
}

export async function getProductsByCategory(category: string): Promise<ProductData[]> {
  await dbConnect();
  const products = await Product.find({ category }).sort({ createdAt: -1 }).lean();
  return products.map(mapToPlainObject);
}

export async function getCategories(): Promise<string[]> {
  await dbConnect();
  const categories = await Product.distinct("category");
  return categories;
}
