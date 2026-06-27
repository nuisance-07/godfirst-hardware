"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import MpesaPaymentModal from "./MpesaPaymentModal";

interface MpesaPayButtonProps {
  productName: string;
  productSlug: string;
  amount: number;
}

export default function MpesaPayButton({ productName, productSlug, amount }: MpesaPayButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-sm hover:shadow-md"
      >
        <CreditCard size={20} />
        Pay with M-Pesa
      </button>

      <MpesaPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
        productSlug={productSlug}
        amount={amount}
      />
    </>
  );
}
