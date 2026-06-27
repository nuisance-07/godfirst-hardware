import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default async function FeaturedProducts() {
  const allFeatured = await getFeaturedProducts();
  const featuredProducts = allFeatured.slice(0, 8);

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B1120] relative overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-blueprint opacity-15 dark:opacity-30" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal>
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">Top Picks</span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white uppercase">Featured Products</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <Link 
              href="/products"
              className="group flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors font-medium"
            >
              View All Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1} direction="up">
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        {featuredProducts.length === 0 && (
          <ScrollReveal>
            <div className="text-center py-16">
              <p className="text-slate-500 dark:text-slate-400 text-lg">Products coming soon! Check back shortly.</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
