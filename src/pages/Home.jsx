import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ListingCard from "../components/ListingCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import L from "leaflet";
import { useMapEvents } from "react-leaflet";


export default function Home() {
  
  const [zoom, setZoom] = useState(15);


  const houseIcon = new L.Icon({
    iconUrl: "/house.png",
    iconSize: [28, 28],
    iconAnchor: [14, 28],
  });
  
 
  const markerIcon = (price, title, zoom) =>
    L.divIcon({
      className: "",
      iconSize: [120, 40],
      iconAnchor: [14, 28], // ✅ IMPORTANT
      html: `
        <div style="display:flex;align-items:center;gap:4px">
  
          <img src="/house.png"
            style="width:28px;height:28px"
          />
  
          ${
            zoom >= 16
              ? `<div style="
                  background:white;
                  padding:2px 6px;
                  border-radius:6px;
                  font-size:12px;
                  font-weight:600;
                  box-shadow:0 2px 4px rgba(0,0,0,0.2);
                ">
                  ${title} ₱${price}
                </div>`
              : ""
          }
  
        </div>
      `,
    });
  
  

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost/dormlinkborongan/php/getListings.php")
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.log(err));
  }, []);


  function MapEvents({ setZoom }) {
    useMapEvents({
      zoomend(e) {
        setZoom(e.target.getZoom());
      },
    });
    return null;
  }
  
  

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}

      <section className="px-8 pt-24 pb-28 min-h-screen lg:px-20">


        <div className="grid gap-16 items-center lg:grid-cols-2">

          <div>

            <h1 className="text-7xl font-bold leading-tight text-blue-900">
              Find Verified Boarding Houses in Borongan
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
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

          <div className="h-[650px] rounded-3xl overflow-hidden shadow-xl">

          <MapContainer
              center={[11.659633748282928, 125.44316608609613]}
              zoom={15}
              className="w-full h-full"
            >

              <MapEvents setZoom={setZoom} />

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {listings.map((dorm) => {

              const lat = Number(dorm.latitude);
              const lng = Number(dorm.longitude);

              if (!lat || !lng) return null;

              return (
                <Marker
                  key={dorm.id}
                  position={[lat, lng]}
                  icon={markerIcon(
                    dorm.price,
                    dorm.title,
                    zoom
                  )}
                >

                  <Tooltip>
                    {dorm.title} ₱{dorm.price}
                  </Tooltip>

                </Marker>
              );

              })}



            </MapContainer>

          </div>

        </div>

      </section>



      {/* ================= FEATURED ================= */}

      <section className="px-8 py-24 min-h-screen bg-gray-200 lg:px-20">

        <h2 className="mb-10 text-3xl font-bold text-blue-900">
          Featured Boarding Houses
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {[1,2,3,4,5,6,7,8].map(i => (

            <ListingCard
              key={i}
              listing={{
                id: i,
                title: "Boarding House",
                price: 2500,
                distance: 0.4,
                status: "available",
                image: "",
              }}
            />

          ))}

        </div>

      </section>



      {/* ================= LISTINGS + MAP ================= */}

      <section className="px-8 py-28 min-h-screen lg:px-20">

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
                  image: "",
                }}
              />

            ))}

          </div>


          <div className="h-[600px] rounded-3xl overflow-hidden shadow-xl sticky top-24">

          <MapContainer
              center={[11.659633748282928, 125.44316608609613]}
              zoom={16}
              className="w-full h-full"
            >

            <MapEvents setZoom={setZoom} />

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {listings.map((dorm) => {

              const lat = Number(dorm.latitude);
              const lng = Number(dorm.longitude);

              if (!lat || !lng) return null;

              return (
                <Marker
                  key={dorm.id}
                  position={[lat, lng]}
                  icon={markerIcon(
                    dorm.price,
                    dorm.title,
                    zoom
                  )}
                >

                  <Tooltip>
                    {dorm.title} ₱{dorm.price}
                  </Tooltip>

                </Marker>
              );

              })}



            </MapContainer>

          </div>

        </div>

      </section>



      {/* ================= INFO ================= */}

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