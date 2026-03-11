import { Link } from "react-router-dom";

export default function ListingDetail() {

  const isLoggedIn = false; // replace with real auth later

  return (
    <div className="bg-white">

      {/* TITLE + ACTIONS */}
      <section className="px-8 pt-10 lg:px-20">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Cozy Boarding House near ESSU
        </h1>

        <div className="mt-2 text-sm text-gray-500">
          0.4 km from ESSU Borongan · Verified listing
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="px-8 mt-6 lg:px-20">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[520px] rounded-2xl overflow-hidden">

          <div className="col-span-2 row-span-2">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              className="object-cover w-full h-full"
            />
          </div>

          <img
            src="https://images.unsplash.com/photo-1560448075-bb485b067938"
            className="object-cover w-full h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc"
            className="object-cover w-full h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1560448074-1bfe3f0b11a1"
            className="object-cover w-full h-full"
          />
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560448074-3b4f3d3b8e2b"
              className="object-cover w-full h-full"
            />
            <button className="absolute right-4 bottom-4 px-4 py-2 text-sm font-medium bg-white rounded-lg shadow-md">
              Show all photos
            </button>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="grid gap-16 px-8 py-16 lg:px-20 lg:grid-cols-3">

        {/* LEFT INFO */}
        <div className="space-y-8 lg:col-span-2">

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Entire rental near ESSU Borongan
            </h2>
            <p className="mt-2 text-gray-500">
              1 room · Shared bathroom · Fully furnished
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p className="leading-relaxed text-gray-700">
              Fully furnished boarding room located walking distance from ESSU.
              Safe neighborhood, accessible to main road, and suitable for students.
            </p>
          </div>

          {/* LOCATION (GATED) */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="mb-3 font-semibold text-gray-900">
              Location
            </h3>

            {!isLoggedIn ? (
              <div className="p-6 text-center bg-gray-100 rounded-xl">
                <p className="font-medium text-gray-700">
                  Login to view exact location
                </p>
                <Link to="/login">
                  <button className="px-6 py-2 mt-4 text-white bg-blue-900 rounded-lg">
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
        <div className="sticky top-24 p-6 rounded-2xl border border-gray-200 shadow-lg h-fit">

          <p className="text-2xl font-semibold text-gray-900">
            ₱2,500
            <span className="text-base font-normal text-gray-500">
              {" "} / month
            </span>
          </p>

          <button className="py-3 mt-6 w-full font-medium text-white bg-blue-900 rounded-xl transition hover:shadow-lg">
            Login to Message
          </button>

          <p className="mt-4 text-xs text-center text-gray-400">
            Contact details are visible after login.
          </p>

        </div>

      </section>

    </div>
  );
}