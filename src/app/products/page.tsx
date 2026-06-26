import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductCard from "@/components/ui/ProductCard";
import { getProducts, getCategories } from "@/data/products";
import Link from "next/link";

export const metadata = {
  title: "Products | Godfirst Hardware",
  description: "Browse our complete catalog of building and construction materials at the best prices in Mombasa.",
};

export const revalidate = 0;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const params = await searchParams;
  const allProducts = await getProducts();
  const categories = await getCategories();
  
  let filteredProducts = allProducts;
  
  if (params.category) {
    filteredProducts = filteredProducts.filter(p => p.category === params.category);
  }
  
  if (params.search) {
    const search = params.search.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(search) || 
      p.brand?.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search)
    );
  }

  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-white dark:bg-dark-surface pt-32 pb-16 border-b border-black/5 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">Our Catalog</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white uppercase mb-6 transition-colors duration-300">
              All Products
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
              Browse our complete range of quality building and construction materials.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Filters & Products */}
      <div className="py-12 bg-gray-50 dark:bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          {/* Category Filters */}
          <ScrollReveal className="flex flex-wrap gap-3 mb-12 justify-center">
            <Link
              href="/products"
              className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-all border ${
                !params.category
                  ? "bg-primary text-white border-primary"
                  : "bg-white dark:bg-black/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-primary hover:text-primary"
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/products?category=${encodeURIComponent(cat)}`}
                className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-all border ${
                  params.category === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white dark:bg-black/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </Link>
            ))}
          </ScrollReveal>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.05} direction="up">
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                {params.category ? `No products found in "${params.category}".` : "No products available yet. Check back soon!"}
              </p>
              <Link href="/products" className="text-primary hover:underline font-medium">
                View all products
              </Link>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
