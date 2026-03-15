import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";


export default function ListingDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [images, setImages] = useState([]);

  const [showGallery, setShowGallery] = useState(false);
  const [current, setCurrent] = useState(0);


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


  if (!listing) return <div className="p-10">Loading...</div>;


  const openGallery = (index) => {

    setCurrent(index);
    setShowGallery(true);

  };


  const next = () => {

    setCurrent(
      (current + 1) % images.length
    );

  };


  const prev = () => {

    setCurrent(
      (current - 1 + images.length) % images.length
    );

  };



  return (

    <div className="px-6 mx-auto max-w-[1600px]">

      {/* BACK BUTTON */}

      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-900 hover:underline"
      >
        ← Back to listings
      </button>


      {/* TITLE */}

      <h1 className="text-2xl font-semibold">
        {listing.title}
      </h1>

      <p className="mb-4 text-gray-500">
        {listing.address}
      </p>



      {/* ================= GALLERY ================= */}

      <div className="grid gap-8 lg:grid-cols-2">

              {/* LEFT */}

              <div>

                {/* GALLERY */}
                <div className="grid grid-cols-4 gap-2">

                  {images[0] && (
                    <div className="col-span-2 row-span-2">
                      <img
                        src={`http://localhost/dormlinkborongan/php/uploads/${images[0].image}`}
                        className="object-cover w-full h-[420px] rounded-xl cursor-pointer"
                        onClick={() => openGallery(0)}
                      />
                    </div>
                  )}

                  {images.slice(1, 5).map((img, i) => (
                    <img
                      key={i}
                      src={`http://localhost/dormlinkborongan/php/uploads/${img.image}`}
                      className="object-cover w-full h-48 rounded-xl cursor-pointer"
                      onClick={() => openGallery(i + 1)}
                    />
                  ))}

                </div>

              </div>


              {/* RIGHT */}

              <div>

                <div className="h-[420px] overflow-hidden rounded-xl shadow">

                  {listing.latitude && listing.longitude && (

                    <MapContainer
                      center={[
                        Number(listing.latitude),
                        Number(listing.longitude),
                      ]}
                      zoom={16}
                      className="w-full h-full"
                    >

                      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                      <Marker
                        position={[
                          Number(listing.latitude),
                          Number(listing.longitude),
                        ]}
                      />

                    </MapContainer>

                  )}

                </div>

              </div>

              </div>



      {/* ================= CONTENT ================= */}

      <div className="grid gap-8 mt-8 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div>

              {/* PRICE */}
              <h2 className="text-xl font-semibold">
                ₱{listing.price} / month
              </h2>

              <div className="mt-3 text-gray-600">
                <p>Rooms: {listing.rooms}</p>
                <p>Slots: {listing.available_slots}</p>
                <p>Gender: {listing.gender}</p>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-6">
                <h3 className="font-semibold">Description</h3>
                <p className="mt-2 text-gray-700">
                  {listing.description}
                </p>
              </div>

              {/* AMENITIES */}
              <div className="mt-6">
                <h3 className="font-semibold">Amenities</h3>

                <div className="grid grid-cols-2 gap-2 mt-2">

                  {listing.wifi == 1 && <p>✔ Wifi</p>}
                  {listing.aircon == 1 && <p>✔ Aircon</p>}
                  {listing.own_cr == 1 && <p>✔ Own CR</p>}
                  {listing.parking == 1 && <p>✔ Parking</p>}

                </div>
              </div>

            </div>


            {/* RIGHT SIDE */}
            <div className="space-y-4">


              {/* PRICE CARD */}
              <div className="p-6 rounded-xl border shadow">

                <p className="text-2xl font-semibold">
                  ₱{listing.price}
                </p>

                <p className="text-gray-500">
                  per month
                </p>

                <button className="w-full py-2.5 mt-4 text-white bg-blue-800 rounded-lg hover:bg-blue-700">
                  Message landlord
                </button>

              </div>

            </div>

            </div>



      {/* ================= MODAL ================= */}

     

       

              {showGallery && (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90">

          {/* BACK BUTTON */}

         

          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-6 text-4xl text-white z-[10000]"
          >
            ✕
          </button>


          {/* PREV */}

          <button
            onClick={prev}
            className="absolute left-4 z-50 text-5xl text-white"
          >
            ❮
          </button>


          {/* IMAGE */}

          <img
            src={`http://localhost/dormlinkborongan/php/uploads/${images[current].image}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />


          {/* NEXT */}

          <button
            onClick={next}
            className="absolute right-4 z-50 text-5xl text-white"
          >
            ❯
          </button>

        </div>

        )}


    </div>

  );

}