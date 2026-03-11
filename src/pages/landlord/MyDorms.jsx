export default function MyDorms() {
    return (
      <div className="space-y-6">
  
        {/* HEADER */}
        <div className="flex justify-between items-center">
  
          <h1 className="text-2xl font-semibold">
            My Dorms
          </h1>
  
          <button className="px-4 py-2 text-white bg-blue-900 rounded-lg">
            Add Dorm
          </button>
  
        </div>
  
  
        {/* DORM LIST */}
        <div className="grid grid-cols-3 gap-4">
  
          <DormCard
            name="Girls Dorm"
            price="1500"
            rooms="5"
            image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
          />
  
          <DormCard
            name="Boarding House"
            price="2000"
            rooms="8"
            image="https://images.unsplash.com/photo-1501183638710-841dd1904471"
          />
  
        </div>
  
      </div>
    );
  }
  
  
  
  function DormCard({ name, price, rooms, image }) {
    return (
      <div className="overflow-hidden bg-white rounded-xl border">
  
        <img
          src={image}
          className="object-cover w-full h-40"
        />
  
        <div className="p-4">
  
          <h3 className="font-semibold">
            {name}
          </h3>
  
          <p className="text-sm text-gray-500">
            ₱{price} / month
          </p>
  
          <p className="text-sm text-gray-500">
            Rooms: {rooms}
          </p>
  
  
          <div className="flex gap-2 mt-3">
  
            <button className="px-3 py-1 bg-gray-200 rounded">
              Edit
            </button>
  
            <button className="px-3 py-1 text-white bg-red-500 rounded">
              Delete
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }