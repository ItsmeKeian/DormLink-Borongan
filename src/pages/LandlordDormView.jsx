import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LandlordDormView() {

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


  if (!listing) return <div className="p-6">Loading...</div>;


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

    <div className="p-6 mx-auto max-w-5xl">

      {/* BACK */}

      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-gray-600 hover:underline"
      >
        ← Back
      </button>



      {/* TITLE */}

      <h1 className="text-2xl font-semibold">
        {listing.title}
      </h1>

      <p className="mb-4 text-gray-500">
        {listing.address}
      </p>



      {/* GALLERY */}

      <div className="grid grid-cols-4 gap-2">

        {images[0] && (

          <div className="col-span-2 row-span-2">

            <img
              src={`http://localhost/dormlinkborongan/php/uploads/${images[0].image}`}
              className="object-cover w-full h-full rounded-xl cursor-pointer"
              onClick={() => openGallery(0)}
            />

          </div>

        )}


        {images.slice(1, 5).map((img, i) => (

          <img
            key={i}
            src={`http://localhost/dormlinkborongan/php/uploads/${img.image}`}
            className="object-cover w-full h-40 rounded-xl cursor-pointer"
            onClick={() => openGallery(i + 1)}
          />

        ))}

      </div>



      {/* INFO */}

      <div className="mt-6 space-y-2">

        <p>Price: ₱{listing.price}</p>
        <p>Rooms: {listing.rooms}</p>
        <p>Slots: {listing.available_slots}</p>
        <p>Gender: {listing.gender}</p>

      </div>



      {/* BUTTONS */}

      <div className="flex gap-4 mt-6">

        <button
          className="px-4 py-2 text-white bg-blue-600 rounded"
        >
          Edit
        </button>

        <button
          className="px-4 py-2 text-white bg-red-600 rounded"
        >
          Delete
        </button>

      </div>



      {/* MODAL */}

      {showGallery && (

        <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-90">


          {/* BACK */}

          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 left-6 px-4 py-2 text-white bg-black bg-opacity-60 rounded"
          >
            ← Back
          </button>


          {/* CLOSE */}

          <button
            className="absolute top-4 right-6 text-3xl text-white"
            onClick={() => setShowGallery(false)}
          >
            ✕
          </button>


          {/* PREV */}

          <button
            className="absolute left-4 text-4xl text-white"
            onClick={prev}
          >
            ❮
          </button>


          <img
            src={`http://localhost/dormlinkborongan/php/uploads/${images[current].image}`}
            className="max-h-[85vh] rounded-lg"
          />


          <button
            className="absolute right-4 text-4xl text-white"
            onClick={next}
          >
            ❯
          </button>


        </div>

      )}


    </div>

  );

}