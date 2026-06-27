import ScrollReveal from "@/components/ui/ScrollReveal";
import { ShieldCheck, Award, Clock, Truck, Package, BadgePercent } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "1000+", label: "Products Available", icon: Package },
  { value: "100%", label: "Quality Guarantee", icon: Award },
  { value: "24hr", label: "Fast Delivery", icon: Truck },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0B1120] relative overflow-clip">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint opacity-40" />
      {/* Radial glow */}
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none transform-gpu" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">The Dhawakah Advantage</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase mb-6">Why Choose Us</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">
                At Dhawakah Hardware, we provide top-quality construction materials at the most competitive prices in Mombasa. Whether you&apos;re building from scratch or renovating, our extensive stock and expert advice ensure your project stays on track and on budget.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} className="space-y-6">
              {[
                { title: "Competitive Pricing", desc: "Best prices in Mombasa — we match or beat any genuine quote from other hardware stores.", icon: BadgePercent },
                { title: "Genuine Brands Only", desc: "We stock only genuine, certified products from trusted manufacturers like Bamburi, Dura Coat, and Orient.", icon: ShieldCheck },
                { title: "Bulk Order Discounts", desc: "Special pricing for contractors and bulk buyers. The more you buy, the more you save.", icon: Package },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-glow transition-all">
                    <feature.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white text-lg mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={0.4 + (index * 0.1)} direction="up">
                <div className="card-accent bg-[#111827] border border-slate-700/50 p-8 flex flex-col items-center justify-center text-center rounded-xl hover:border-primary/40 hover:shadow-glow transition-all h-full">
                  <stat.icon size={32} className="text-primary mb-4" />
                  <div className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
