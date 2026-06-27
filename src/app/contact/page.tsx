import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone, Mail, MapPin, MessageCircle, Clock, CreditCard } from "lucide-react";

export const metadata = {
  title: "Contact Us | Dhawakah Hardware",
  description: "Get in touch with Dhawakah Hardware for quotes, bulk orders, and product inquiries.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-white dark:bg-[#111827] pt-32 pb-16 border-b border-slate-200 dark:border-slate-700/50 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-blueprint opacity-15 dark:opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">Get In Touch</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white uppercase mb-6 transition-colors duration-300">
              Contact Us
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors duration-300">
              Have a question or need a quote? We&apos;re here to help with all your building material needs.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 md:py-24 bg-slate-50 dark:bg-[#0B1120] transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-6">Reach Out to Us</h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    Whether you need a single bag of cement or a bulk order for your construction project, our team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-glow transition-all">
                      <Phone className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h4>
                      <p className="text-slate-600 dark:text-slate-400">0764 831 754</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-glow transition-all">
                      <MessageCircle className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">WhatsApp</h4>
                      <a href="https://wa.me/254764831754" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-glow transition-all">
                      <Mail className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h4>
                      <p className="text-slate-600 dark:text-slate-400">info@godfirsthardware.co.ke</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-glow transition-all">
                      <MapPin className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h4>
                      <p className="text-slate-600 dark:text-slate-400">Mombasa, Kenya</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-glow transition-all">
                      <Clock className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Working Hours</h4>
                      <p className="text-slate-600 dark:text-slate-400">Mon - Sat: 7:00 AM - 7:00 PM</p>
                      <p className="text-slate-600 dark:text-slate-400">Sunday: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Payment Info Card */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                {/* Payment Details */}
                <div className="card-accent bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700/50 rounded-xl p-8 shadow-sm hover:shadow-glow transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="text-primary" size={24} />
                    <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Payment Details</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-700/50">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">Paybill Number</span>
                      <span className="font-bold text-slate-900 dark:text-white text-lg">247247</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-700/50">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">Account Number</span>
                      <span className="font-bold text-slate-900 dark:text-white text-lg">0764831754</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">Bank</span>
                      <span className="font-bold text-slate-900 dark:text-white text-lg">Equity Bank</span>
                    </div>
                  </div>
                </div>

                {/* Quick Order CTA */}
                <div className="bg-gradient-to-br from-primary via-sky-500 to-cyan-400 rounded-xl p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-blueprint opacity-10" />
                  <div className="relative z-10">
                    <h3 className="font-heading text-2xl font-bold text-white mb-4">Quick Order via WhatsApp</h3>
                    <p className="text-white/90 mb-6">
                      Send us your order list on WhatsApp and we&apos;ll prepare everything for pickup or delivery.
                    </p>
                    <a
                      href="https://wa.me/254764831754?text=Hello!%20I%20would%20like%20to%20place%20an%20order."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
                    >
                      <MessageCircle size={20} />
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
