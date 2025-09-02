"use client";
import { useState, useEffect } from "react";
import { XMarkIcon, FireIcon } from "@heroicons/react/24/solid";

export default function HotDeals() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  const offers = [
    "Get 5% off on Plot No. 12, Vijay Nagar",
    "Zero brokerage on 2BHK flats this week",
    "Exclusive deal: Luxury Villa starting ₹75L",
    "Book today, get free interior consultation",
  ];

  // Auto-rotate offers every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [offers.length]);

  if (!visible) return null;

  return (
    <div className="fixed top-24 right-4 z-50 animate-bounce">
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white shadow-xl rounded-2xl px-5 py-3 flex items-center space-x-3">
        <FireIcon className="h-6 w-6 text-white animate-pulse" />
        <div className="overflow-hidden">
          <p className="font-bold text-sm">🔥 Hot Deal</p>
          <p className="text-xs transition-all duration-500 ease-in-out">
            {offers[index]}
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="ml-2 hover:text-gray-200"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
