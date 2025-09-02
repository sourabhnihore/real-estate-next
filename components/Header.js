"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="IndoreDwell Logo"
            width={150}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-cream hover:text-yellow-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/listings"
            className="text-cream hover:text-yellow-400 transition-colors"
          >
            Listings
          </Link>
          <Link
            href="/contact"
            className="text-cream hover:text-yellow-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream hover:text-yellow-400 transition"
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu (slide down) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-cream hover:text-yellow-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/listings"
            onClick={() => setMenuOpen(false)}
            className="block text-cream hover:text-yellow-400 transition-colors"
          >
            Listings
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-cream hover:text-yellow-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
