import Link from "next/link";
import PageTransition from "@/components/ui/PageTransition";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-heading text-8xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Page Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-sm hover:bg-primary-hover transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </PageTransition>
  );
}
