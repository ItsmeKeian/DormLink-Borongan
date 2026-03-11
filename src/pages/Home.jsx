import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ListingCard from "../components/ListingCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}

      <section className="px-8 pt-24 pb-28 lg:px-20">

        <div className="grid gap-16 items-center lg:grid-cols-2">

          <div>

            <h1 className="text-6xl font-bold leading-tight text-gray-900">
              Find Verified Boarding Houses in Borongan
            </h1>

            <p className="mt-6 max-w-lg text-lg text-gray-600">
              Safe, admin-approved rentals near ESSU Borongan
              with real locations and secure messaging.
            </p>

            <div className="flex gap-4 mt-10">

              <Link to="/browse">
                <button className="px-8 py-4 text-white bg-blue-900 rounded-full shadow">
                  Browse Listings
                </button>
              </Link>

              <Link to="/register">
                <button className="px-8 py-4 rounded-full border">
                  List Property
                </button>
              </Link>

            </div>

          </div>


          {/* MAP */}

          <div className="h-[450px] rounded-3xl overflow-hidden shadow-xl">

            <MapContainer
              center={[11.6085, 125.4310]}
              zoom={14}
              className="w-full h-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[11.6085, 125.4310]} />
            </MapContainer>

          </div>

        </div>

      </section>



      {/* ================= FEATURED ================= */}

      <section className="px-8 py-24 bg-gray-50 lg:px-20">

        <h2 className="mb-10 text-3xl font-bold">
          Featured Boarding Houses
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {[1,2,3,4].map(i => (

            <ListingCard
              key={i}
              listing={{
                id: i,
                title: "Boarding House",
                price: 2500,
                distance: 0.4,
                status: "available",
                image:
                  "",
              }}
            />

          ))}

        </div>

      </section>



      {/* ================= LISTINGS + MAP ================= */}

      <section className="px-8 py-28 lg:px-20">

        <div className="grid gap-16 lg:grid-cols-2">

          <div className="grid gap-8 sm:grid-cols-2">

            {[1,2,3,4].map(i => (

              <ListingCard
                key={i}
                listing={{
                  id: i,
                  title: "Boarding House",
                  price: 2500,
                  distance: 0.4,
                  status: "available",
                  image:
                    "",
                }}
              />

            ))}

          </div>


          <div className="h-[600px] rounded-3xl overflow-hidden shadow-xl sticky top-24">

            <MapContainer
              center={[11.6085, 125.4310]}
              zoom={14}
              className="w-full h-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[11.6085, 125.4310]} />
            </MapContainer>

          </div>

        </div>

      </section>



      {/* ================= INFO SECTION ================= */}

      <section className="px-8 py-28 bg-gray-50 lg:px-20">

        <div className="grid gap-16 items-center lg:grid-cols-2">

          <div>

            <h2 className="text-4xl font-bold">
              Safe & Verified Listings
            </h2>

            <p className="mt-4 text-gray-600">
              All dorms are reviewed by admin to ensure safety,
              real location, and student-friendly prices.
            </p>

            <button className="px-6 py-3 mt-6 text-white bg-blue-900 rounded-xl">
              Browse Listings
            </button>

          </div>

          <div className="h-[400px] bg-gray-200 rounded-3xl" />

        </div>

      </section>



      {/* ================= STATS ================= */}

      <section className="py-20">

        <div className="grid grid-cols-2 gap-10 mx-auto max-w-6xl text-center md:grid-cols-4">

          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p>Listings</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p>Students</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Landlords</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p>Verified</p>
          </div>

        </div>

      </section>



      {/* ================= LANDLORD CTA ================= */}

      <section className="py-28 text-center text-white bg-blue-900">

        <h2 className="text-4xl font-bold">
          Are you a Landlord?
        </h2>

        <p className="mt-4">
          List your boarding house and reach ESSU students.
        </p>

        <Link to="/register">

          <button className="px-8 py-4 mt-8 text-blue-900 bg-white rounded-full">
            List Property
          </button>

        </Link>

      </section>



      {/* ================= FINAL CTA ================= */}

      <section className="py-28 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Find Your Boarding House?
        </h2>

        <Link to="/browse">

          <button className="px-10 py-4 mt-8 text-white bg-blue-900 rounded-full">
            Browse Now
          </button>

        </Link>

      </section>


    </div>
  );
}