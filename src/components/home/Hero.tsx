import Link from "next/link";
import { ArrowRight, HardHat } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/hero-bg.png"
          alt="Godfirst Hardware Store"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-white dark:to-[#0a0a0c]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center mt-16">
        <ScrollReveal delay={0.2} direction="up" className="flex flex-col items-center justify-center gap-6 mb-8">
          <div className="w-28 h-28 md:w-36 md:h-36 bg-primary/90 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm">
            <HardHat size={72} className="text-white md:w-20 md:h-20" />
          </div>
          <div className="flex flex-col text-center">
            <span className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-wider text-white uppercase drop-shadow-xl leading-none">
              Godfirst
            </span>
            <span className="font-sans text-xl md:text-3xl tracking-[0.4em] text-gray-300 uppercase mt-4 drop-shadow-lg">
              Hardware
            </span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4} direction="up">
          <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto font-light mb-12 tracking-wide">
            Your One-Stop Shop for Quality Building & Construction Materials.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6} direction="up" className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/products"
            className="group px-8 py-4 bg-primary text-white font-semibold rounded-sm hover:bg-primary-hover transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Browse Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-sm hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto justify-center text-center"
          >
            Get a Quote
          </Link>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce z-20">
        <span className="text-xs uppercase tracking-widest text-gray-900 dark:text-white">Scroll Down</span>
        <div className="w-[1px] h-12 bg-primary" />
      </div>
    </section>
  );
}
