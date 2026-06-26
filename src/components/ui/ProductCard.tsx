import Link from "next/link";
import Image from "next/image";
import { ProductData } from "@/data/products";

export default function ProductCard({ product }: { product: ProductData }) {
  return (
    <div className="group bg-white dark:bg-dark-surface border border-gray-200 dark:border-white/5 rounded-sm overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 flex flex-col h-full shadow-sm dark:shadow-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-black">
        <Image
          alt={product.name}
          src={product.images[0] || "/images/placeholder.png"}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
          {product.category}
        </div>
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading font-semibold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        {product.brand && (
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.brand}</span>
        )}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              Ksh {product.price.toLocaleString()}/=
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{product.unit}</div>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white group-hover:bg-primary group-hover:text-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
