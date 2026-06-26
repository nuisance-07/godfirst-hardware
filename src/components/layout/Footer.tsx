import Link from "next/link";
import { Phone, MapPin, Mail, HardHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md">
                <HardHat size={28} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl tracking-wider text-gray-900 dark:text-white uppercase">
                  Godfirst
                </span>
                <span className="font-sans text-xs tracking-[0.2em] text-primary uppercase">
                  Hardware
                </span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-secondary text-sm leading-relaxed mb-6">
              Your one-stop shop for quality building and construction materials. Competitive prices, genuine brands, and reliable service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 dark:text-secondary hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/products" className="text-gray-600 dark:text-secondary hover:text-primary transition-colors text-sm">Products</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-secondary hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-secondary hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-6">Product Categories</h4>
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-secondary text-sm hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">Cement & Binding</li>
              <li className="text-gray-600 dark:text-secondary text-sm hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">Steel & Welding</li>
              <li className="text-gray-600 dark:text-secondary text-sm hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">Finishing & Fillers</li>
              <li className="text-gray-600 dark:text-secondary text-sm hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">Electrical & Fixtures</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-secondary text-sm">
                  Mombasa, <br />
                  Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-gray-600 dark:text-secondary text-sm">0764 831 754</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-gray-600 dark:text-secondary text-sm">info@godfirsthardware.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-secondary text-sm">
            &copy; {new Date().getFullYear()} Godfirst Hardware. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-gray-500 dark:text-secondary hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 dark:text-secondary hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
