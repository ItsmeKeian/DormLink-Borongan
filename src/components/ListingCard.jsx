import { Link } from "react-router-dom";

export default function ListingCard({ listing }) {

  const imageSrc =
    listing?.image
      ? listing.image
      : "/noimg.jpg";

  return (

    <Link to={`/listing/${listing?.id}`}>

      <div className="overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 group hover:shadow-xl hover:-translate-y-1">

        {/* IMAGE */}

        <div className="overflow-hidden relative">

          <img
            src={imageSrc}
            alt={listing?.title}
            className="object-cover w-full h-56 transition duration-500 group-hover:scale-105"
          />


          {/* STATUS BADGE */}

          <div className="absolute top-4 left-4">

            {listing?.status === "pending" && (
              <span className="px-3 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full shadow">
                Pending
              </span>
            )}

            {listing?.status === "approved" && (
              <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full shadow">
                Available
              </span>
            )}

            {listing?.status === "rejected" && (
              <span className="px-3 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full shadow">
                Rejected
              </span>
            )}

          </div>

        </div>


        {/* CONTENT */}

        <div className="p-5">

          <div className="flex justify-between items-start">

            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-blue-700">
              {listing?.title}
            </h3>

            <span className="text-lg font-bold text-blue-900">
              ₱{listing?.price}
            </span>

          </div>


          {/* DISTANCE */}

          {listing?.distance && (

            <div className="mt-3">

              <span className="px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded-full">
                {listing.distance} km from ESSU
              </span>

            </div>

          )}

        </div>

      </div>

    </Link>

  );

}