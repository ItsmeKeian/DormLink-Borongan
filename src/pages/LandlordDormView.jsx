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

      {/* GALLERY */}

      <div className="grid grid-cols-3 gap-2">

            {images.map((img, i) => (

            <img
                key={i}
                src={`http://localhost/dormlinkborongan/php/uploads/${img.image}`}
                className={`object-cover w-full rounded-xl cursor-pointer 
                ${i === 0 ? "col-span-2 row-span-2 h-[400px]" : "h-48"}
                `}
                onClick={() => openGallery(i)}
            />

            ))}

            </div>



      {/* INFO */}

      <div className="mt-6 space-y-2">

      <p className="text-sm text-gray-700">
            <span className="font-medium">Price:</span> ₱{listing.price}
            </p>
            <p>Rooms: {listing.rooms}</p>
            <p>Slots: {listing.available_slots}</p>
            <p>Gender: {listing.gender}</p>

            {/* STATUS */}

            <div className="mt-2">

                {listing.status === "pending" && (
                <span className="px-2 py-1 text-xs text-yellow-800 bg-yellow-200 rounded">
                    Pending approval
                </span>
                )}

                {listing.status === "approved" && (
                <span className="px-2 py-1 text-xs text-green-800 bg-green-200 rounded">
                    Approved
                </span>
                )}

                {listing.status === "rejected" && (
                <span className="px-2 py-1 text-xs text-red-800 bg-red-200 rounded">
                    Rejected
                </span>
                )}

            </div>

            </div>



      {/* BUTTONS */}

      <div className="flex gap-4 mt-6">

        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg transition hover:bg-blue-700"
        >
          Edit
        </button>

        <button
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg transition hover:bg-red-700"
        >
          Delete
        </button>

      </div>



      {/* MODAL */}

      {showGallery && (

        <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-90">


      

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