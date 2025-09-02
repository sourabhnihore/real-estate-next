import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="bg-gray-50 py-12 mt-12">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Visit Our Office
          </h2>
          <p className="text-gray-600 mt-2">
            Come meet our experienced brokers and discuss your dream property. 
            We are located in the heart of Indore with easy access to all areas.
          </p>
        </div>

        {/* Map + Info */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Broker Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6587511931198!2d75.87634617460174!3d22.740921779372176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5db277e8ed%3A0xd93d33f390833d20!2s1305%2C%20Nanda%20Nagar%20Main%20Rd%2C%20Janta%20Quarter%2C%20Indore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1756815188317!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col justify-center gap-4 px-4">
            <h3 className="text-xl font-semibold text-gray-800">
              IndoreDwell Office
            </h3>
            <p className="text-gray-600">
              Nanda Nagar, Indore, MP 452001
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <FaPhoneAlt className="text-yellow-500" /> 
              <a href="tel:+919893316916" className="hover:underline">
                +91 98933 16916
              </a>
            </p>
            <p className="text-gray-600">
              Office Hours: Mon-Sat, 10:00 AM - 7:00 PM
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6587511931198!2d75.87634617460174!3d22.740921779372176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5db277e8ed%3A0xd93d33f390833d20!2s1305%2C%20Nanda%20Nagar%20Main%20Rd%2C%20Janta%20Quarter%2C%20Indore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1756815188317!5m2!1sen!2sin"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition"
              >
                Get Directions
              </a>
              <a
                href="tel:+919893316916"
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
