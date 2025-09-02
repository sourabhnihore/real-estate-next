// components/PropertySliderClient.js
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard"; // adjust path

// IMPORTANT: import slick CSS once (in _app.js is best)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 right-[-20px] z-20 -translate-y-1/2 cursor-pointer p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 left-[-20px] z-20 -translate-y-1/2 cursor-pointer p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

export default function PropertySliderClient({ properties = [] }) {
  const [mounted, setMounted] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    // Only run on client
    setMounted(true);

    const calcSlides = () => {
      const w = window.innerWidth;
      if (w < 640) setSlidesToShow(1);     // mobile
      else if (w < 1024) setSlidesToShow(2); // tablet
      else setSlidesToShow(3);             // desktop
    };

    // initial calc and add listener
    calcSlides();
    window.addEventListener("resize", calcSlides);

    return () => window.removeEventListener("resize", calcSlides);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: slidesToShow > 1,     // hide arrows on 1-slide mobile view
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // keep responsive empty because we control slidesToShow directly
  };

  // SSR fallback (renders server/initially) — prevents slider from mounting on server
  if (!mounted) {
    return (
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.slice(0, 6).map((p) => (
            <div key={p.id} className="px-0">
              <PropertyCard p={p} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Client-only slider (key forces re-init when slidesToShow changes)
  return (
    <div className="px-4">
      <Slider key={slidesToShow} {...settings}>
        {properties.map((p) => (
          <div key={p.id} className="px-2">
            <PropertyCard p={p} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
