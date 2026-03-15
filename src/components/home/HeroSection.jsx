import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { Link } from "react-router-dom";

export default function HeroSection({
  listings,
  zoom,
  setZoom,
  markerIcon,
  MapEvents,
}) {
  return (
    <section className="px-8 pt-24 pb-28 min-h-screen lg:px-20">

      <div className="grid gap-16 items-center lg:grid-cols-2">

        {/* LEFT */}

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
  );
}