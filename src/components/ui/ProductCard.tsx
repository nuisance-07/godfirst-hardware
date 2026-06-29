import Link from "next/link";
import Image from "next/image";
import { ProductData } from "@/data/products";

export default function ProductCard({ product }: { product: ProductData }) {
  return (
    <div className="group bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden hover:shadow-glow dark:hover:border-primary/40 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          alt={product.name}
          src={product.images[0] || "/images/placeholder.png"}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 bg-gradient-to-r from-primary to-red-400 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
          {product.category}
        </div>
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        {product.brand && (
          <span className="text-sm text-slate-500 dark:text-slate-400 mb-2">{product.brand}</span>
        )}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">
              Ksh {product.price.toLocaleString()}/=
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{product.unit}</div>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-red-400 group-hover:text-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
