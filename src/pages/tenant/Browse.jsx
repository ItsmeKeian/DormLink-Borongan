import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip, useMapEvents } from "react-leaflet";

import ListingCard from "../../components/ListingCard";
import { getDistanceFromESSU } from "../../utils/distance";

export default function Browse() {
  
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [zoom, setZoom] = useState(15);


  // ================= FETCH =================

  useEffect(() => {

    fetch("http://localhost/dormlinkborongan/php/getListings.php")
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.log(err));

  }, []);



  // ================= ICON =================

  const markerIcon = (price, title, zoom) =>
    L.divIcon({
      className: "",
      iconSize: [120, 40],
      iconAnchor: [14, 28],
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



  // ================= MAP EVENTS =================

  function MapEvents() {
    useMapEvents({
      zoomend(e) {
        setZoom(e.target.getZoom());
      },
    });
    return null;
  }



  return (

    <section className="px-6 py-6">

      {/* TOP */}

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-lg font-semibold">
          All available dorms near ESSU
        </h2>

        <select className="px-3 py-1 rounded border">

          <option>All</option>
          <option>Dorm</option>
          <option>Apartment</option>
          <option>Boarding House</option>
          <option>Bedspace</option>

        </select>

      </div>



      <div className="grid gap-6 lg:grid-cols-2">


        {/* LEFT CARDS */}

        <div className="grid grid-cols-2 gap-4 max-h-[650px] overflow-y-auto">

        {listings.map(dorm => {

        const distance = getDistanceFromESSU(
          Number(dorm.latitude),
          Number(dorm.longitude)
        );

        return (

          <div
            key={dorm.id}
            onClick={() => navigate(`/tenant/listing/${dorm.id}`)}
            className="cursor-pointer"
          >

            <ListingCard
              listing={{
                id: dorm.id,
                title: dorm.title,
                price: dorm.price,
                status: dorm.status,
                distance: distance,
                image: dorm.image
                  ? `http://localhost/dormlinkborongan/php/uploads/${dorm.image}`
                  : "/noimg.jpg",
              }}
            />

          </div>

        );

        })}

        </div>



        {/* MAP */}

        <div className="h-[650px] rounded-3xl overflow-hidden shadow">

          <MapContainer
            center={[11.6596, 125.4431]}
            zoom={zoom}
            className="w-full h-full"
          >

            <MapEvents />

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