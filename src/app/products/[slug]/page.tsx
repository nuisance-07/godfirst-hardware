import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/data/products";
import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";

export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Godfirst Hardware`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) notFound();

  const whatsappMessage = `Hello! I'm interested in: ${product.name} (Ksh ${product.price.toLocaleString()}/=). Is it available?`;
  const whatsappUrl = `https://wa.me/254764831754?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <PageTransition>
      <div className="bg-white dark:bg-dark-surface pt-32 pb-8 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <Link href="/products" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Products
            </Link>
          </ScrollReveal>
        </div>
      </div>

      <div className="py-12 bg-gray-50 dark:bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <ScrollReveal direction="right">
              <div className="aspect-square bg-white dark:bg-dark-surface border border-gray-200 dark:border-white/10 rounded-sm overflow-hidden relative">
                <Image
                  src={product.images[0] || "/images/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Details */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div>
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">{product.category}</span>
                  <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">{product.name}</h1>
                  {product.brand && (
                    <span className="text-gray-500 dark:text-gray-400 text-lg mt-1 block">Brand: {product.brand}</span>
                  )}
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    Ksh {product.price.toLocaleString()}/=
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">{product.unit}</span>
                </div>

                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold ${
                  product.inStock 
                    ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400" 
                    : "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                }`}>
                  {product.inStock ? "✓ In Stock" : "✕ Out of Stock"}
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {product.description}
                </p>

                {product.specifications && product.specifications.length > 0 && (
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-4">Specifications</h3>
                    <div className="space-y-3">
                      {product.specifications.map((spec, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="text-primary shrink-0" size={18} />
                          <span className="text-gray-700 dark:text-gray-300">
                            <strong>{spec.key}:</strong> {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-sm hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={20} />
                    Order on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-sm hover:bg-primary-hover transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>

                {/* Payment Info */}
                <div className="mt-8 p-6 bg-white dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-sm">
                  <h4 className="font-heading font-semibold text-gray-900 dark:text-white mb-3">Payment Details</h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p><strong>Paybill:</strong> 247247</p>
                    <p><strong>Account:</strong> 0764831754</p>
                    <p><strong>Bank:</strong> Equity Bank</p>
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
