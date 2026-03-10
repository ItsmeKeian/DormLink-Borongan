import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ListingCard from "../components/ListingCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative px-8 lg:px-20 pt-24 pb-28 bg-white overflow-hidden">

        {/* Soft Glow Background */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Find Verified Boarding Houses in Borongan
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              Discover safe, admin-approved rentals near ESSU Borongan
              with real locations and secure in-app messaging.
            </p>

            <div className="mt-10 flex gap-4">
              <Link to="/browse">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-900 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all"
                >
                  Browse Listings
                </motion.button>
              </Link>

              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-gray-300 px-10 py-4 rounded-full hover:bg-gray-100 transition-all"
                >
                  List Property
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT MAP */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[450px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <MapContainer
              center={[11.6085, 125.4310]}
              zoom={14}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution="&copy; OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[11.6085, 125.4310]} />
            </MapContainer>
          </motion.div>

        </div>
      </section>

      {/* ================= MARKETPLACE ================= */}
      <section className="px-8 lg:px-20 py-28 bg-gray-50 border-t border-gray-100">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >

          {/* LEFT GRID */}
          <div className="grid sm:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <ListingCard
                  listing={{
                    id: item,
                    title: "Cozy Boarding House",
                    price: 2500,
                    distance: 0.4,
                    status: "available",
                    image:
                      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* MAP */}
          <div className="h-[650px] rounded-3xl overflow-hidden shadow-xl sticky top-24">
            <MapContainer
              center={[11.6085, 125.4310]}
              zoom={14}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              <TileLayer
                attribution="&copy; OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[11.6085, 125.4310]} />
            </MapContainer>
          </div>

        </motion.div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="px-8 lg:px-20 py-28 bg-white border-t border-gray-100 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900"
        >
          Built for ESSU Students
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-4 gap-10">
          {[
            "Verified Listings",
            "Admin Moderated",
            "Real Locations",
            "Secure Messaging",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 p-8 rounded-3xl shadow-sm"
            >
              <p className="font-semibold text-gray-900">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-900 py-28 px-8 lg:px-20 text-center text-white">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Ready to Find Your Boarding House?
        </motion.h2>

        <Link to="/browse">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-white text-blue-900 px-12 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Browse Now
          </motion.button>
        </Link>
      </section>

    </div>
  );
}