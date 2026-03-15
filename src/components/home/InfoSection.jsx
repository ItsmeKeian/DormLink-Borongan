export default function InfoSection() {
    return (
      <section className="px-8 py-28 bg-gray-50 lg:px-20">
  
        <div className="grid gap-16 items-center lg:grid-cols-2">
  
          <div>
  
            <h2 className="text-4xl font-bold">
              Safe & Verified Listings
            </h2>
  
            <p className="mt-4 text-gray-600">
              All dorms are reviewed by admin to ensure safety,
              real location, and student-friendly prices.
            </p>
  
            <button className="px-6 py-3 mt-6 text-white bg-blue-900 rounded-xl">
              Browse Listings
            </button>
  
          </div>
  
          <div className="h-[400px] bg-gray-200 rounded-3xl" />
  
        </div>
  
      </section>
    );
  }