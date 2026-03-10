import { Link } from "react-router-dom";
import Badge from "./ui/Badge";

export default function ListingCard({ listing }) {
  return (
    <Link to={`/listing/${listing?.id || 1}`}>
      <div className="group bg-white/90 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100">
        
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={listing?.image || "https://via.placeholder.com/400x300"}
            alt={listing?.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Availability Badge Overlay */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium shadow-sm">
              {listing?.status === "available" ? "Available" : "Occupied"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-700 transition">
              {listing?.title || "Cozy Boarding House"}
            </h3>

            <span className="font-bold text-blue-900 text-lg">
              ₱{listing?.price || "2500"}
            </span>
          </div>

          <div className="mt-3">
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              {listing?.distance || "0.5"} km from ESSU
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}