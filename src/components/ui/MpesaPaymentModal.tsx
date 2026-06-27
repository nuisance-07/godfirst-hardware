"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Phone, Loader2, CheckCircle2, XCircle, Smartphone } from "lucide-react";

interface MpesaPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productSlug: string;
  amount: number;
}

type PaymentState = "idle" | "submitting" | "waiting" | "success" | "failed";

export default function MpesaPaymentModal({
  isOpen,
  onClose,
  productName,
  productSlug,
  amount,
}: MpesaPaymentModalProps) {
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<PaymentState>("idle");
  const [error, setError] = useState("");
  const [checkoutRequestId, setCheckoutRequestId] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      // Delay reset to allow closing animation
      const timer = setTimeout(() => {
        setState("idle");
        setError("");
        setCheckoutRequestId("");
        setReceiptNumber("");
        setCustomerMessage("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Poll payment status when waiting
  const pollStatus = useCallback(async (reqId: string) => {
    let attempts = 0;
    const maxAttempts = 40; // ~2 minutes (3s intervals)

    const poll = async () => {
      if (attempts >= maxAttempts) {
        setState("failed");
        setError("Payment timed out. Please check your M-Pesa messages and try again.");
        return;
      }

      try {
        const res = await fetch(`/api/mpesa/status?checkoutRequestId=${reqId}`);
        const data = await res.json();

        if (data.success) {
          if (data.status === "completed") {
            setState("success");
            setReceiptNumber(data.mpesaReceiptNumber || "");
            return;
          } else if (data.status === "failed") {
            setState("failed");
            setError(data.resultDesc || "Payment was not completed.");
            return;
          }
        }

        // Still pending — poll again
        attempts++;
        setTimeout(poll, 3000);
      } catch {
        attempts++;
        setTimeout(poll, 3000);
      }
    };

    // Start polling after a short delay (give user time to see the prompt)
    setTimeout(poll, 5000);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic phone validation
    const cleaned = phone.replace(/[\s\-\+]/g, "");
    if (cleaned.length < 9 || cleaned.length > 13) {
      setError("Please enter a valid Kenyan phone number");
      return;
    }

    setState("submitting");

    try {
      const res = await fetch("/api/mpesa/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: cleaned,
          amount,
          productName,
          productSlug,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setCheckoutRequestId(data.checkoutRequestId);
        setCustomerMessage(data.message);
        setState("waiting");
        pollStatus(data.checkoutRequestId);
      } else {
        setState("idle");
        setError(data.error || "Failed to initiate payment");
      }
    } catch {
      setState("idle");
      setError("Network error. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={state === "submitting" || state === "waiting" ? undefined : onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-[#111827] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-200 dark:border-slate-700/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-sky-400 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Phone size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-lg">Pay with M-Pesa</h3>
              <p className="text-white/80 text-xs">Lipa Na M-Pesa</p>
            </div>
          </div>
          {state !== "submitting" && state !== "waiting" && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Product & Amount */}
          <div className="bg-slate-50 dark:bg-[#0B1120] rounded-xl p-4 mb-6 border border-slate-200 dark:border-slate-700/50">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Paying for</p>
            <p className="font-heading font-semibold text-slate-900 dark:text-white text-lg truncate">
              {productName}
            </p>
            <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700/50">
              <p className="text-sm text-slate-500 dark:text-slate-400">Amount</p>
              <p className="font-heading font-extrabold text-2xl text-primary">
                KSh {amount.toLocaleString()}/=
              </p>
            </div>
          </div>

          {/* --- IDLE: Phone Input Form --- */}
          {state === "idle" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  M-Pesa Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Smartphone size={20} />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0712345678"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-lg tracking-wide"
                    required
                    autoFocus
                  />
                </div>
                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                  You will receive an M-Pesa prompt on this number
                </p>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3 text-sm text-red-700 dark:text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all shadow-sm hover:shadow-md text-lg"
              >
                Pay KSh {amount.toLocaleString()}/=
              </button>
            </form>
          )}

          {/* --- SUBMITTING: Loading --- */}
          {state === "submitting" && (
            <div className="text-center py-8">
              <Loader2 size={48} className="text-primary mx-auto animate-spin mb-4" />
              <p className="font-heading font-semibold text-slate-900 dark:text-white text-lg">
                Sending payment request...
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Please wait while we connect to M-Pesa
              </p>
            </div>
          )}

          {/* --- WAITING: Waiting for PIN --- */}
          {state === "waiting" && (
            <div className="text-center py-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center">
                <Smartphone size={40} className="text-green-600 dark:text-green-400 animate-pulse" />
              </div>
              <p className="font-heading font-bold text-slate-900 dark:text-white text-lg mb-2">
                Check Your Phone
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-1">
                {customerMessage || "An M-Pesa prompt has been sent to your phone."}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Enter your M-Pesa PIN to complete the payment.
              </p>

              {/* Animated waiting dots */}
              <div className="flex items-center justify-center gap-2">
                <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce [animation-delay:0ms]" />
                <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce [animation-delay:150ms]" />
                <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
              <p className="text-xs text-slate-400 mt-4">Waiting for confirmation...</p>
            </div>
          )}

          {/* --- SUCCESS --- */}
          {state === "success" && (
            <div className="text-center py-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center">
                <CheckCircle2 size={44} className="text-green-600 dark:text-green-400" />
              </div>
              <p className="font-heading font-bold text-slate-900 dark:text-white text-xl mb-2">
                Payment Successful!
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Your payment of <strong>KSh {amount.toLocaleString()}/=</strong> has been received.
              </p>
              {receiptNumber && (
                <div className="bg-slate-50 dark:bg-[#0B1120] rounded-xl p-3 border border-slate-200 dark:border-slate-700/50 inline-block">
                  <p className="text-xs text-slate-500 dark:text-slate-400">M-Pesa Receipt</p>
                  <p className="font-mono font-bold text-slate-900 dark:text-white text-lg">
                    {receiptNumber}
                  </p>
                </div>
              )}
              <button
                onClick={onClose}
                className="mt-6 w-full py-3 bg-gradient-to-r from-primary to-sky-400 text-white font-semibold rounded-xl hover:shadow-glow transition-all"
              >
                Done
              </button>
            </div>
          )}

          {/* --- FAILED --- */}
          {state === "failed" && (
            <div className="text-center py-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-red-100 dark:bg-red-900/20 rounded-2xl flex items-center justify-center">
                <XCircle size={44} className="text-red-600 dark:text-red-400" />
              </div>
              <p className="font-heading font-bold text-slate-900 dark:text-white text-xl mb-2">
                Payment Failed
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">
                {error || "The payment could not be completed. Please try again."}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setState("idle");
                    setError("");
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-primary to-sky-400 text-white font-semibold rounded-xl hover:shadow-glow transition-all"
                >
                  Try Again
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-[#0B1120] border-t border-slate-200 dark:border-slate-700/50 text-center">
          <p className="text-xs text-slate-400">
            Secured by Safaricom M-Pesa • Powered by Daraja API
          </p>
        </div>
      </div>
    </div>
  );
}
