"use client";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export default function DealMascot() {
  const [show, setShow] = useState(true);

  // Auto show after 2s delay
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ x: -300, y: 50, opacity: 0 }}
      animate={{ x: 20, y: -20, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed bottom-4 left-4 z-50"
    >
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-2xl p-4 flex items-center space-x-3">
        
        {/* Cartoon-style person image (replace with SVG, PNG or even Lottie) */}
        <img
          src="/images/deal-mascot.png"
          alt="Deal Mascot"
          className="h-20 w-20 animate-bounce"
        />

        {/* Text bubble */}
        <div>
          <p className="font-bold text-lg">⏳ Hurry!</p>
          <p className="text-sm">Hot deals closing fast. Don’t miss out!</p>
        </div>

        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 hover:text-gray-200"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  );
}
