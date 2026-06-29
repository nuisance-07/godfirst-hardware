import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | Dhawakah Hardware",
  description: "Learn about Dhawakah Hardware, your trusted partner for quality building and construction materials in Mombasa.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B1120]">
          <div className="absolute inset-0 bg-blueprint opacity-40" />
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">Our Story</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase mb-6 max-w-4xl mx-auto">
              Building Trust, One Material at a Time.
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Dhawakah Hardware has been serving the construction industry in Mombasa with genuine, high-quality building materials at unbeatable prices.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#0B1120]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <ScrollReveal direction="right">
              <div className="card-accent bg-[#111827] p-10 md:p-12 rounded-xl border border-slate-700/50 h-full relative overflow-hidden group hover:border-primary/40 hover:shadow-glow transition-all">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                <h2 className="font-heading text-3xl font-bold text-white uppercase mb-6">Our Mission</h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                  To be the most reliable and affordable hardware supplier in Mombasa, providing genuine construction materials that empower builders to create durable, quality structures. We believe every project deserves the best materials at a fair price.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="card-accent bg-[#111827] p-10 md:p-12 rounded-xl border border-slate-700/50 h-full relative overflow-hidden group hover:border-primary/40 hover:shadow-glow transition-all">
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                <h2 className="font-heading text-3xl font-bold text-white uppercase mb-6">Our Vision</h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                  To become the leading one-stop hardware destination on the Kenyan coast, known for our unmatched product variety, competitive pricing, and exceptional customer service in the construction and building sector.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-rose-400 mx-auto rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Genuine Products", desc: "We only stock certified, genuine materials from trusted brands. No shortcuts, no counterfeits." },
              { title: "Fair Pricing", desc: "Transparent pricing with no hidden costs. We offer bulk discounts and always aim to give you the best deal." },
              { title: "Customer First", desc: "Your project is our priority. We provide expert advice and reliable delivery to keep your build on schedule." }
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="card-accent bg-[#0B1120] p-8 rounded-xl text-center border border-slate-700/50 hover:border-primary/40 hover:shadow-glow transition-all">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-400">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
