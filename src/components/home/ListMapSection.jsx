import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import ListingCard from "../ListingCard";

export default function ListMapSection({
  listings,
  zoom,
  setZoom,
  markerIcon,
  MapEvents,
}) {
  return (
    <section className="px-8 py-28 min-h-screen lg:px-20">

      <div className="grid gap-16 lg:grid-cols-2">

        {/* LEFT LIST */}

        <div className="grid gap-8 sm:grid-cols-2">

          {listings.slice(0, 4).map((dorm) => (

            <ListingCard
              key={dorm.id}
              listing={{
                id: dorm.id,
                title: dorm.title,
                price: dorm.price,
                distance: 0,
                status: dorm.status,
                image: dorm.image,
              }}
            />

          ))}

        </div>


        {/* MAP */}

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
  );
}