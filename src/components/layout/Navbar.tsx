"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Logo from "@/components/ui/Logo";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/95 dark:bg-[#0B1120]/90 backdrop-blur-xl border-b border-slate-200 dark:border-sky-500/10 shadow-sm dark:shadow-glow py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center group py-1">
          <Logo className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform origin-left" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-sans text-sm font-medium tracking-wide transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                pathname === link.href ? "text-primary after:w-full" : "text-slate-600 dark:text-slate-300 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-primary to-sky-400 text-white font-semibold rounded-lg hover:from-primary-hover hover:to-primary transition-all shadow-sm hover:shadow-glow"
          >
            Get a Quote
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 dark:bg-[#0B1120]/98 backdrop-blur-xl border-b border-slate-200 dark:border-sky-500/10 py-6 px-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium py-2 border-b border-slate-100 dark:border-white/5 transition-colors",
                pathname === link.href ? "text-primary" : "text-slate-600 dark:text-slate-300 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-primary to-sky-400 text-white text-center font-semibold rounded-lg hover:from-primary-hover hover:to-primary transition-all"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
