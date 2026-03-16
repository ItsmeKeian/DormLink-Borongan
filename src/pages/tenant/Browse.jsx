import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Browse() {

  const [category, setCategory] = useState("All");

  const listings = [
    {
      id: 1,
      name: "Girls Dorm",
      price: 1500,
      lat: 11.6085,
      lng: 125.4310,
      category: "Dorm",
    },
    {
      id: 2,
      name: "Boarding House",
      price: 2000,
      lat: 11.609,
      lng: 125.432,
      category: "Boarding House",
    },
  ];


  const filtered =
    category === "All"
      ? listings
      : listings.filter(
          (l) => l.category === category
        );


  return (

    <div className="flex flex-col h-screen">

      {/* TOP SEARCH */}
      <div className="flex gap-2 p-4 bg-white border-b">

        <input
          placeholder="Search dorm..."
          className="px-3 py-2 w-full rounded border"
        />

        <select
          className="px-3 py-2 rounded border"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>All</option>
          <option>Dorm</option>
          <option>Apartment</option>
          <option>Boarding House</option>
          <option>Bedspace</option>
        </select>

      </div>


      {/* BODY */}
      <div className="flex flex-1">

        {/* LEFT CARDS */}
        <div className="grid overflow-y-auto grid-cols-1 gap-4 p-4 w-1/2 bg-gray-50">

{filtered.map((d) => (

  <div
    key={d.id}
    className="overflow-hidden bg-white rounded-2xl shadow transition cursor-pointer hover:shadow-lg"
  >

    {/* IMAGE */}
    <img
      src="https://via.placeholder.com/400x200"
      className="object-cover w-full h-40"
    />

    {/* BODY */}
      <div className="p-3">

        <div className="flex justify-between">

          <h3 className="font-semibold">
            {d.name}
          </h3>

          <span className="font-semibold text-blue-900">
            ₱{d.price}
          </span>

        </div>

        <p className="text-sm text-gray-500">
          Borongan City
        </p>

        <button
          className="py-1 mt-2 w-full text-white bg-blue-900 rounded"
        >
          View
        </button>

      </div>

    </div>

  ))}

  </div>


        {/* RIGHT MAP */}
        <div className="flex-1">

          <MapContainer
            center={[11.6085, 125.4310]}
            zoom={15}
            className="h-full"
          >

            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filtered.map((d) => (

              <Marker
                key={d.id}
                position={[d.lat, d.lng]}
              >
                <Popup>
                  {d.name} <br />
                  ₱{d.price}
                </Popup>
              </Marker>

            ))}

          </MapContainer>

        </div>

      </div>

    </div>

  );
}