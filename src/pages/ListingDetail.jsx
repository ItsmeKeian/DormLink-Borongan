import { Link } from "react-router-dom";

export default function ListingDetail() {

  const isLoggedIn = false; // replace with real auth later

  return (
    <div className="bg-white">

      {/* TITLE + ACTIONS */}
      <section className="px-8 lg:px-20 pt-10">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Cozy Boarding House near ESSU
        </h1>

        <div className="mt-2 text-sm text-gray-500">
          0.4 km from ESSU Borongan · Verified listing
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="px-8 lg:px-20 mt-6">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[520px] rounded-2xl overflow-hidden">

          <div className="col-span-2 row-span-2">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              className="w-full h-full object-cover"
            />
          </div>

          <img
            src="https://images.unsplash.com/photo-1560448075-bb485b067938"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1560448074-1bfe3f0b11a1"
            className="w-full h-full object-cover"
          />
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560448074-3b4f3d3b8e2b"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium">
              Show all photos
            </button>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-8 lg:px-20 py-16 grid lg:grid-cols-3 gap-16">

        {/* LEFT INFO */}
        <div className="lg:col-span-2 space-y-8">

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Entire rental near ESSU Borongan
            </h2>
            <p className="text-gray-500 mt-2">
              1 room · Shared bathroom · Fully furnished
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Fully furnished boarding room located walking distance from ESSU.
              Safe neighborhood, accessible to main road, and suitable for students.
            </p>
          </div>

          {/* LOCATION (GATED) */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              Location
            </h3>

            {!isLoggedIn ? (
              <div className="bg-gray-100 p-6 rounded-xl text-center">
                <p className="font-medium text-gray-700">
                  Login to view exact location
                </p>
                <Link to="/login">
                  <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg">
                    Login
                  </button>
                </Link>
              </div>
            ) : (
              <div className="h-64 bg-gray-200 rounded-xl">
                {/* Real Map Component Here */}
              </div>
            )}
          </div>

        </div>

        {/* RIGHT PRICING CARD */}
        <div className="border border-gray-200 rounded-2xl p-6 shadow-lg h-fit sticky top-24">

          <p className="text-2xl font-semibold text-gray-900">
            ₱2,500
            <span className="text-base font-normal text-gray-500">
              {" "} / month
            </span>
          </p>

          <button className="mt-6 w-full bg-blue-900 text-white py-3 rounded-xl font-medium hover:shadow-lg transition">
            Login to Message
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Contact details are visible after login.
          </p>

        </div>

      </section>

    </div>
  );
}