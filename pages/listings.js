import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import { useEffect, useState } from "react";

export default function Listings() {
  const [allListings, setAllListings] = useState([]); // all listings from API
  const [filteredListings, setFilteredListings] = useState([]); // filtered ones
  const [search, setSearch] = useState({
    location: "",
    propertyType: "",
    minPrice: "",
  });

  useEffect(() => {
    fetch("/api/listings")
      .then((r) => r.json())
      .then((data) => {
        setAllListings(data);
        setFilteredListings(data);
      });
  }, []);

  const handleSearch = () => {
  const results = allListings.filter((listing) => {
    const location = listing.location || '' // fallback to empty string
    const type = listing.type || ''
    const price = listing.price || 0

    const matchesLocation =
      search.location === '' ||
      location.toLowerCase().includes(search.location.toLowerCase())

    const matchesType =
      search.propertyType === '' || type === search.propertyType

    const matchesPrice =
      search.minPrice === '' || price >= Number(search.minPrice)

    return matchesLocation && matchesType && matchesPrice
  })

  setFilteredListings(results)
}

  return (
    <div>
      <Head>
        <title>Listings - Indore</title>
        <meta name="description" content="View property listings" />
      </Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Explore Featured Properties
        </h1>

        {/* Search Section */}
        <section className="bg-white border border-gray-300 rounded-lg py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-end justify-center">
              {/* Location Input with icon & floating label */}
              <div className="relative w-full md:w-1/4">
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  value={search.location}
                  onChange={(e) =>
                    setSearch({ ...search, location: e.target.value })
                  }
                  className="peer w-full px-4 py-3 rounded  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                />
                {/* <label
                  htmlFor="location"
                  className="absolute left-10 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-sm peer-focus:text-yellow-500 bg-gray-100 px-1"
                >
                  Location
                </label> */}
                {/* <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  📍
                </span> */}
              </div>

              {/* Property Type Dropdown */}
              <div className="relative w-full md:w-1/4">
                <select
                  value={search.propertyType}
                  onChange={(e) =>
                    setSearch({ ...search, propertyType: e.target.value })
                  }
                  className="peer w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition appearance-none"
                >
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="plot">Plot</option>
                </select>
                {/* <label className="absolute left-4 -top-2 text-sm text-yellow-500 pointer-events-none">
                  Property Type
                </label> */}
              </div>

              {/* Minimum Price Dropdown */}
              <div className="relative w-full md:w-1/4">
                <select
                  value={search.minPrice}
                  onChange={(e) =>
                    setSearch({ ...search, minPrice: e.target.value })
                  }
                  className="peer w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition appearance-none"
                >
                  <option value="">Min Price</option>
                  <option value="1000000">₹10 Lakh</option>
                  <option value="2000000">₹20 Lakh</option>
                  <option value="3000000">₹30 Lakh</option>
                  <option value="5000000">₹50 Lakh</option>
                </select>
                {/* <label className="absolute left-4 -top-2 text-sm text-yellow-500 pointer-events-none">
                  Min Price
                </label> */}
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full md:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded font-semibold text-white transition transform hover:scale-105"
              >
                Search
              </button>
            </div>
          </div>
        </section>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((l) => (
            <PropertyCard key={l.id} p={l} />
          ))}
        </div> */}
        {filteredListings.length === 0 ? (
          <p className="text-center text-gray-500">No properties found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((l) => (
              <PropertyCard key={l.id} p={l} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
