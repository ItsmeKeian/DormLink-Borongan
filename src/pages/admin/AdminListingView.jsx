import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function AdminListingView() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [images, setImages] = useState([]);


  useEffect(() => {

    fetch(
      `http://localhost/dormlinkborongan/php/get_listing.php?id=${id}`
    )
      .then(res => res.json())
      .then(data => {

        setListing(data.listing);
        setImages(data.images);

      });

  }, [id]);


  if (!listing) return <div>Loading...</div>;


  return (

    <div className="p-6 space-y-6">

      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500"
      >
        ← Back
      </button>


      <h1 className="text-2xl font-semibold">
        {listing.title}
      </h1>

      <p className="text-gray-500">
        {listing.address}
      </p>


      {/* GALLERY + MAP */}

      <div className="grid grid-cols-2 gap-4">

        {/* GALLERY */}

        <div className="grid grid-cols-2 gap-2">

          {images.map(img => (

            <img
              key={img.id}
              src={`http://localhost/dormlinkborongan/php/uploads/${img.image}`}
              className="object-cover w-full h-40 rounded"
            />

          ))}

        </div>


        {/* MAP */}

        <div className="h-[400px] rounded-xl overflow-hidden">

          <MapContainer
            center={[
              Number(listing.latitude),
              Number(listing.longitude)
            ]}
            zoom={16}
            className="w-full h-full"
          >

            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
              position={[
                Number(listing.latitude),
                Number(listing.longitude)
              ]}
            />

          </MapContainer>

        </div>

      </div>


      {/* DETAILS */}

      <div className="grid grid-cols-2 gap-6">

        <div>

          <p>Price: ₱{listing.price}</p>
          <p>Rooms: {listing.rooms}</p>
          <p>Slots: {listing.available_slots}</p>
          <p>Gender: {listing.gender}</p>

        </div>

        <div>

          <p>{listing.description}</p>

        </div>

      </div>

    </div>

  );

}