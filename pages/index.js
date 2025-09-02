import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import Slider from "react-slick";
import Map from "../components/Map";
import MapSection from "../components/MapSection";
import Image from "next/image";
import HotDeal from "../components/HotDeal";
import HotDealMultiple from "../components/HotDealMultiple";
import DealMascot from "../components/DealMascot";
import PropertySliderClient from "../components/PropertySliderClient";

// List of images in public/images folder
const images = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  // Add more images here
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch property data from API
    fetch("/api/listings")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Error fetching properties:", err));
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

 

  return (
    <div>
      <Head>
        <title>Find Your Dream Home - Indore</title>
        <meta
          name="description"
          content="Browse trusted listings of apartments, houses, and plots with verified details. Easy search, instant contact, and fast support."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <HotDealMultiple />
      <main>
        <section className="relative hero flex items-center justify-center h-[80vh] w-full overflow-hidden">
          {/* Background images with fade effect */}
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`hero-${index}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Content */}
          <div className="relative z-10 text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
              Find Your Dream Home in Indore
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
              Browse trusted listings of apartments, houses, and plots with
              verified details. Easy search, instant contact, and fast support.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/listings"
                className="px-6 py-3 bg-yellow-500 rounded font-semibold"
              >
                Search Properties
              </Link>
              <a
                href="tel:+919893316916"
                className="px-6 py-3 bg-gray-800 rounded"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Explore Featured Properties
          </h2>
          {properties.length ? (
            <PropertySliderClient properties={properties} />
          ) : (
            <p>Loading properties...</p>
          )}
        </section>
      </main>

      <MapSection />
      {/* <Map /> */}
      <Footer />
    </div>
  );
}
