export default function Browse() {
    return (
      <div className="space-y-6">
  
        <h1 className="text-2xl font-semibold">
          Browse Dorms
        </h1>
  
  
        {/* SEARCH */}
        <div className="flex gap-3 p-4 bg-white rounded-xl border">
  
          <input
            placeholder="Search dorm..."
            className="flex-1 px-3 py-2 rounded-lg border"
          />
  
          <select className="px-3 py-2 rounded-lg border">
            <option>All</option>
            <option>Boys</option>
            <option>Girls</option>
          </select>
  
          <button className="px-4 py-2 text-white bg-blue-900 rounded-lg">
            Search
          </button>
  
        </div>
  
  
  
        {/* LIST */}
        <div className="grid grid-cols-4 gap-4">
  
          <DormCard />
          <DormCard />
          <DormCard />
          <DormCard />
  
        </div>
  
      </div>
    );
  }
  
  
  
  function DormCard() {
    return (
      <div className="overflow-hidden bg-white rounded-xl border">
  
        <img
          src="https://via.placeholder.com/300"
          className="object-cover w-full h-40"
        />
  
        <div className="p-3 space-y-1">
  
          <p className="font-semibold">
            Girls Dorm
          </p>
  
          <p className="text-sm text-gray-500">
            Borongan City
          </p>
  
          <p className="font-bold text-blue-900">
            ₱1500 / month
          </p>
  
          <button className="py-1 mt-2 w-full text-white bg-blue-900 rounded">
            View
          </button>
  
        </div>
  
      </div>
    );
  }