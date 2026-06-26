import Link from "next/link";
import { Package, Wrench, PaintBucket, Lightbulb, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = [
  {
    title: "Cement & Binding",
    description: "Premium cement from leading brands — Bamburi, Mombasa Cement, and more. Perfect for every construction need.",
    icon: Package,
    href: "/products?category=Cement+%26+Binding",
    delay: 0.1,
  },
  {
    title: "Steel & Welding",
    description: "Quality welding rods, steel bars, and reinforcement materials for structural integrity.",
    icon: Wrench,
    href: "/products?category=Steel+%26+Welding",
    delay: 0.2,
  },
  {
    title: "Finishing & Fillers",
    description: "Gyproc fillers, gypsum powder, skimcoat, and finishing materials for flawless surfaces.",
    icon: PaintBucket,
    href: "/products?category=Finishing+%26+Fillers",
    delay: 0.3,
  },
  {
    title: "Electrical & Fixtures",
    description: "Orient fans, electrical fittings, and quality fixtures for residential and commercial projects.",
    icon: Lightbulb,
    href: "/products?category=Electrical+%26+Fixtures",
    delay: 0.4,
  },
];

export default function CategoriesOverview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-surface relative">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">What We Offer</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase">Product Categories</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <ScrollReveal key={index} delay={category.delay} direction="up">
              <Link href={category.href} className="block group h-full">
                <div className="bg-white dark:bg-black/50 border border-gray-200 dark:border-white/5 p-10 h-full hover:bg-gray-50 dark:hover:bg-black/80 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col items-start rounded-sm shadow-sm dark:shadow-none">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                    <category.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow text-sm">
                    {category.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Shop Now <ArrowRight size={16} />
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
