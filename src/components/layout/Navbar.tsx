"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HardHat } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-white/90 dark:bg-black/80 backdrop-blur-md border-gray-200 dark:border-white/10 shadow-sm dark:shadow-lg py-4"
          : "bg-white/50 dark:bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <HardHat size={28} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-2xl tracking-wider text-gray-900 dark:text-white uppercase group-hover:text-primary transition-colors">
              Godfirst
            </span>
            <span className="font-sans text-xs tracking-[0.2em] text-gray-500 dark:text-secondary uppercase">
              Hardware
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-sans text-sm font-medium tracking-wide transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                pathname === link.href ? "text-primary after:w-full" : "text-gray-600 dark:text-gray-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-primary text-white font-semibold rounded-sm hover:bg-primary-hover transition-colors"
          >
            Get a Quote
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-gray-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 py-6 px-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium py-2 border-b border-gray-100 dark:border-white/5 transition-colors",
                pathname === link.href ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-6 py-3 bg-primary text-white text-center font-semibold rounded-sm hover:bg-primary-hover transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
