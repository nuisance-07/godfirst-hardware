"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh(); // Force a refresh to apply middleware bypass
      } else {
        const data = await res.json();
        setError(data.message || "Invalid password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-dark-surface p-4">
        <div className="w-full max-w-md bg-black border border-white/10 rounded-sm p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="text-primary w-8 h-8" />
            </div>
          </div>
          
          <h1 className="font-heading text-2xl font-bold text-white text-center uppercase tracking-wide mb-2">
            Admin Access
          </h1>
          <p className="text-gray-400 text-center mb-8 text-sm">
            Enter your secure passcode to view the dashboard.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Passcode"
                className="w-full bg-dark-surface border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-center tracking-widest"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-sm border border-red-400/20">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-black font-semibold py-3 flex items-center justify-center gap-2 rounded-sm hover:bg-primary-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Verifying..." : "Access Dashboard"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
