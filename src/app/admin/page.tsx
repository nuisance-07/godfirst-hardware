import dbConnect from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { PageView } from "@/models/PageView";
import { Package, Eye, DollarSign, LogOut } from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/ui/PageTransition";

export const revalidate = 0; // Prevent caching

export const metadata = {
  title: "Admin Dashboard | Godfirst Hardware",
};

async function getDashboardStats() {
  await dbConnect();

  // Inventory Stats
  const products = await Product.find({}).lean();
  const totalProducts = products.length;
  const featuredProducts = products.filter((p: any) => p.featured).length;
  const totalValue = products.reduce((sum: number, p: any) => sum + (p.price || 0), 0);

  // Visitor Stats
  const pageViews = await PageView.find({}).lean();
  const totalPageViews = pageViews.length;

  // Today's Stats
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  const todayPageViews = pageViews.filter((v: any) => new Date(v.timestamp) >= todayDate).length;

  return {
    totalProducts,
    featuredProducts,
    totalValue,
    totalPageViews,
    todayViews: todayPageViews,
  };
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-surface pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">Godfirst Control Panel</span>
              <h1 className="font-heading text-4xl font-bold text-white uppercase">
                Admin Dashboard
              </h1>
            </div>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider font-semibold"
            >
              <LogOut size={16} /> Exit Dashboard
            </Link>
          </div>

          {/* Traffic Overview */}
          <h2 className="text-xl font-heading font-semibold text-white uppercase tracking-wider mb-6 border-b border-white/10 pb-4">
            Website Traffic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <StatCard 
              title="Today's Page Views" 
              value={stats.todayViews.toString()} 
              icon={<Eye size={24} className="text-primary" />} 
            />
            <StatCard 
              title="All-Time Page Views" 
              value={stats.totalPageViews.toString()} 
              icon={<Eye size={24} className="text-blue-400" />} 
            />
          </div>

          {/* Inventory Overview */}
          <h2 className="text-xl font-heading font-semibold text-white uppercase tracking-wider mb-6 border-b border-white/10 pb-4">
            Inventory Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              title="Total Products" 
              value={stats.totalProducts.toString()} 
              icon={<Package size={24} className="text-green-400" />} 
            />
            <StatCard 
              title="Featured Products" 
              value={stats.featuredProducts.toString()} 
              icon={<Package size={24} className="text-yellow-400" />} 
            />
            <StatCard 
              title="Total Inventory Value" 
              value={formatCurrency(stats.totalValue)} 
              icon={<DollarSign size={24} className="text-primary" />} 
            />
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-black border border-white/5 p-6 rounded-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110">
        {icon}
      </div>
      <div className="relative z-10">
        <h3 className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">{title}</h3>
        <div className="text-3xl font-bold text-white">{value}</div>
      </div>
    </div>
  );
}
