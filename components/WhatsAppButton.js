import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919893316916"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
