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
    <section className="py-24 bg-dark-surface relative overflow-clip">
      {/* Abstract Background Element */}
      <div className="hidden md:block absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none transform-gpu" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">The Godfirst Advantage</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase mb-6">Why Choose Us</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                At Godfirst Hardware, we provide top-quality construction materials at the most competitive prices in Mombasa. Whether you&apos;re building from scratch or renovating, our extensive stock and expert advice ensure your project stays on track and on budget.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} className="space-y-6">
              {[
                { title: "Competitive Pricing", desc: "Best prices in Mombasa — we match or beat any genuine quote from other hardware stores.", icon: BadgePercent },
                { title: "Genuine Brands Only", desc: "We stock only genuine, certified products from trusted manufacturers like Bamburi, Dura Coat, and Orient.", icon: ShieldCheck },
                { title: "Bulk Order Discounts", desc: "Special pricing for contractors and bulk buyers. The more you buy, the more you save.", icon: Package },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 dark:text-white text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={0.4 + (index * 0.1)} direction="up">
                <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-white/5 p-8 flex flex-col items-center justify-center text-center rounded-sm hover:border-primary/50 dark:hover:border-primary/30 shadow-sm dark:shadow-none transition-colors h-full">
                  <stat.icon size={36} className="text-primary mb-4" />
                  <div className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
