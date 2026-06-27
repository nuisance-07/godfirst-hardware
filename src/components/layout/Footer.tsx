import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-slate-700/50 pt-16 pb-8 relative overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-blueprint opacity-20" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-6 flex items-center">
              <Image src="/logo.png" alt="Dhawakah Hardware Logo" width={300} height={100} className="h-24 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your one-stop shop for quality building and construction materials. Competitive prices, genuine brands, and reliable service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-primary transition-colors text-sm">Products</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Product Categories</h4>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm hover:text-slate-200 transition-colors cursor-default">Cement & Binding</li>
              <li className="text-slate-400 text-sm hover:text-slate-200 transition-colors cursor-default">Steel & Welding</li>
              <li className="text-slate-400 text-sm hover:text-slate-200 transition-colors cursor-default">Finishing & Fillers</li>
              <li className="text-slate-400 text-sm hover:text-slate-200 transition-colors cursor-default">Electrical & Fixtures</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Mombasa, <br />
                  Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-slate-400 text-sm">0764 831 754</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-slate-400 text-sm">info@dhawakahhardware.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Dhawakah Hardware. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-slate-500 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
