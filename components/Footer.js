import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container py-10 grid md:grid-cols-3 gap-6">
        {/* Logo */}
        <div className="flex flex-col items-start md:items-start">
          <Link href="/" className="flex items-center mb-4">
            <Image
              src="/images/logo.png"
              alt="IndoreDwell Logo"
              width={200}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          <p className="text-gray-400 text-sm">
            Find your dream home in Indore with trusted listings and verified
            details.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/listings"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Listings
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-2">Get in Touch</h4>
          <div className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt className="text-yellow-500" />
            <a href="tel:+919893316916" className="hover:underline">
              +91 98933 16916
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm mb-4">
            <FaEnvelope className="text-yellow-500" />
            <a
              href="mailto:sourabhnihore@gmail.com"
              className="hover:underline"
            >
              info@indoreproperties.com
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/iamsrv__"
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-pink-600 transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/indoredwell"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} IndoreDwell. All rights reserved.
      </div>
    </footer>
  );
}
