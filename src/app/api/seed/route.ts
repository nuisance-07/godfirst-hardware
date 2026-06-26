import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Product } from "@/models/Product";

const initialProducts = [
  {
    name: "Welding Rods",
    slug: "welding-rods",
    category: "Steel & Welding",
    price: 650,
    unit: "per packet",
    description: "High-quality welding rods for professional and industrial welding applications. Ensure strong, durable joints with minimal spatter.",
    images: ["/images/placeholder.png"],
    brand: "Generic",
    inStock: true,
    featured: true,
  },
  {
    name: "Mombasa Cement",
    slug: "mombasa-cement",
    category: "Cement & Binding",
    price: 820,
    unit: "per 50kg bag",
    description: "Mombasa Cement is known for its high compressive strength and consistency. Ideal for general construction, plastering, and bricklaying.",
    images: ["/images/placeholder.png"],
    brand: "Mombasa Cement",
    inStock: true,
    featured: true,
  },
  {
    name: "Bamburi Nguvu Cement",
    slug: "bamburi-nguvu-cement",
    category: "Cement & Binding",
    price: 950,
    unit: "per 50kg bag",
    description: "Bamburi Nguvu is a premium cement offering extra strength and faster setting time. Perfect for structural concrete applications like columns, slabs, and beams.",
    images: ["/images/placeholder.png"],
    brand: "Bamburi Cement",
    inStock: true,
    featured: true,
  },
  {
    name: "Bamburi Fundi Cement",
    slug: "bamburi-fundi-cement",
    category: "Cement & Binding",
    price: 720,
    unit: "per 50kg bag",
    description: "Bamburi Fundi is specially formulated for masonry and plastering work. It provides excellent workability and a smooth finish.",
    images: ["/images/placeholder.png"],
    brand: "Bamburi Cement",
    inStock: true,
    featured: true,
  },
  {
    name: "White Cement",
    slug: "white-cement",
    category: "Cement & Binding",
    price: 3400,
    unit: "per 50kg bag",
    description: "Premium white cement for decorative architectural finishes, terrazzo flooring, and specialized masonry work where a bright white color is desired.",
    images: ["/images/placeholder.png"],
    brand: "Generic",
    inStock: true,
    featured: false,
  },
  {
    name: "Gyproc Filler",
    slug: "gyproc-filler",
    category: "Finishing & Fillers",
    price: 2800,
    unit: "per bag",
    description: "High-performance joint filler for plasterboard and drywall applications. Easy to mix and apply, providing a smooth, crack-free finish.",
    images: ["/images/placeholder.png"],
    brand: "Gyproc",
    inStock: true,
    featured: true,
  },
  {
    name: "Dura Coat Skimcoat Filler",
    slug: "dura-coat-skimcoat-filler",
    category: "Finishing & Fillers",
    price: 1800,
    unit: "per bag",
    description: "Dura Coat Skimcoat provides an ultra-smooth finish for interior walls and ceilings prior to painting. Excellent adhesion and workability.",
    images: ["/images/placeholder.png"],
    brand: "Dura Coat",
    inStock: true,
    featured: true,
  },
  {
    name: "Orient Fan",
    slug: "orient-fan",
    category: "Electrical & Fixtures",
    price: 3800,
    unit: "per piece",
    description: "High-quality Orient ceiling fan offering powerful air delivery and energy efficiency. Durable motor and sleek design suitable for any room.",
    images: ["/images/placeholder.png"],
    brand: "Orient",
    inStock: true,
    featured: true,
  },
  {
    name: "Gypsum Powder POP",
    slug: "gypsum-powder-pop",
    category: "Finishing & Fillers",
    price: 2800,
    unit: "per bag",
    description: "Plaster of Paris (POP) gypsum powder for creating intricate ceiling designs, cornices, and decorative moldings. Fast setting and highly durable.",
    images: ["/images/placeholder.png"],
    brand: "Generic",
    inStock: true,
    featured: false,
  }
];

export async function GET(req: Request) {
  try {
    await dbConnect();
    
    // Check if products already exist
    const count = await Product.countDocuments();
    if (count > 0) {
      return NextResponse.json({ message: "Database already seeded." });
    }

    // Insert products
    await Product.insertMany(initialProducts);

    return NextResponse.json({ success: true, message: `Successfully seeded ${initialProducts.length} products.` });
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json({ error: "Failed to seed database" }, { status: 500 });
  }
}
