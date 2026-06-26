import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Dark overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-6 max-w-4xl mx-auto">
            Ready to start your project?
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-white/90 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
            Get the best prices on quality building materials. Contact us for bulk orders and special quotes.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/products"
            className="group px-8 py-4 bg-white text-primary font-semibold rounded-sm hover:bg-gray-100 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Browse Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-all w-full sm:w-auto justify-center text-center"
          >
            Get a Quote
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
