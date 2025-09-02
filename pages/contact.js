import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import MapSection from "../components/MapSection";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", form);
    alert("Thank you! Your request has been submitted.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      <Head>
        <title>Contact Us - IndoreDwell</title>
        <meta
          name="description"
          content="Contact our brokers for property inquiries"
        />
      </Head>

      <Header />

      {/* Top Section: Broker Details */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Office */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <FaMapMarkerAlt className="text-yellow-500 text-3xl" />
            <h3 className="font-semibold text-lg">Office Address</h3>
            <p>Nanda Nagar, Indore, MP 452001</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <FaPhoneAlt className="text-yellow-500 text-3xl" />
            <h3 className="font-semibold text-lg">Phone</h3>
            <p>+91 98933 16916</p>
            <p>+91 70490 00425</p>
          </div>

          {/* Email & Social */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <FaEnvelope className="text-yellow-500 text-3xl" />
            <h3 className="font-semibold text-lg">Email & Social</h3>
            <p>
              <a
                href="mailto:sourabhnihore@gmail.com"
                className="text-blue-600 hover:underline"
              >
                info@indoreproperties.com
              </a>
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com/iamsrv__"
                target="_blank"
                rel="noreferrer"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/indoredwell"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Broker Experience */}
        <div className="container mx-auto mt-12 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Broker</h2>
          <p className="text-gray-700 max-w-2xl">
            Our lead broker, <span className="font-bold">Mr. Sourabh Nihore</span>,
            has over <span className="font-semibold">12 years</span> of experience
            in Indore real estate. With expertise in luxury apartments, villas, and
            plots, he has successfully helped hundreds of families find their dream
            homes. Certified with <span className="font-semibold">NAR/CREA</span>,
            and known for providing professional and trustworthy guidance.
          </p>
        </div>
      </section>

      {/* Bottom Section: Request Visit / Query Form */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Request a Visit or Ask a Query
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 placeholder-transparent focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:outline-none"
                placeholder="Your Name"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-500">
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 placeholder-transparent focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:outline-none"
                placeholder="Your Email"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-500">
                Email
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 placeholder-transparent focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:outline-none"
                placeholder="Your Phone"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-500">
                Phone
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 placeholder-transparent focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-500">
                Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>


      <MapSection />
      <Footer />
    </div>
  );
}
