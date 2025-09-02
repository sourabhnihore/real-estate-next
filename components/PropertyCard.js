import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid"; // Tailwind Heroicons
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

export default function PropertyCard({ p }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition p-4 flex flex-col">
      {/* Property Image */}
      <img
        src={p.image}
        alt={p.title}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Title & Price */}
      <div className="mt-3 flex flex-col gap-1">
        <h3 className="font-semibold text-lg text-gray-800">{p.title}</h3>
        <p className="text-yellow-600 font-bold">{p.price}</p>
      </div>

      {/* Features - two per row */}
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600">
        {p.features.map((f, i) => (
          <span
            key={i}
            className="bg-gray-100 px-2 py-1 rounded text-center text-gray-700"
          >
            {f}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        {/* Call Agent */}
        <a
          href="tel:+919893316916"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded transition"
        >
          <PhoneIcon className="w-5 h-5" />
          Call
        </a>

        {/* WhatsApp */}
        <a
          href={
            "https://wa.me/?text=Interested%20in%20" +
            encodeURIComponent(p.title)
          }
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition"
        >
          <FaWhatsapp className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
