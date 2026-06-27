import Link from "next/link";
import { ArrowRight, HardHat } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import Image from "next/image";
import Logo from "../ui/Logo";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/hero-bg.png"
          alt="Dhawakah Hardware Store"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120]/90 via-[#0B1120]/70 to-primary/20" />
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 bg-blueprint opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center mt-16">
        <ScrollReveal delay={0.2} direction="up" className="flex flex-col items-center justify-center gap-6 mb-8">
          <div className="flex justify-center mb-8">
            <Logo className="h-28 md:h-40 lg:h-48 w-auto drop-shadow-2xl" />
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4} direction="up">
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light mb-12 tracking-wide">
            Your One-Stop Shop for Quality Building & Construction Materials.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6} direction="up" className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/products"
            className="group px-8 py-4 bg-gradient-to-r from-primary to-sky-400 text-white font-semibold rounded-lg hover:shadow-glow-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Browse Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-4 bg-transparent border border-sky-400/40 text-white font-semibold rounded-lg hover:bg-sky-400/10 hover:border-sky-400 transition-all w-full sm:w-auto justify-center text-center backdrop-blur-sm"
          >
            Get a Quote
          </Link>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce z-20">
        <span className="text-xs uppercase tracking-widest text-slate-300">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
