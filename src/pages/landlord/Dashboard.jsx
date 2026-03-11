export default function Dashboard() {
    return (
      <div className="space-y-6">
  
        <h1 className="text-2xl font-semibold">
          Landlord Dashboard
        </h1>
  
  
        {/* CARDS */}
        <div className="grid grid-cols-4 gap-4">
  
          <Card title="Total Dorms" value="2" />
          <Card title="Total Rooms" value="8" />
          <Card title="Bookings" value="5" />
          <Card title="Messages" value="1" />
  
        </div>
  
  
  
        {/* QUICK ACTIONS */}
        <div className="p-4 bg-white rounded-xl border">
  
          <h2 className="mb-3 font-semibold">
            Quick Actions
          </h2>
  
          <div className="flex gap-3">
  
            <button className="px-4 py-2 text-white bg-blue-900 rounded-lg">
              Add Dorm
            </button>
  
            <button className="px-4 py-2 bg-gray-200 rounded-lg">
              My Dorms
            </button>
  
            <button className="px-4 py-2 bg-gray-200 rounded-lg">
              Bookings
            </button>
  
          </div>
  
        </div>
  
  
  
        {/* RECENT BOOKINGS */}
        <div className="p-4 bg-white rounded-xl border">
  
          <h2 className="mb-3 font-semibold">
            Recent Bookings
          </h2>
  
          <table className="w-full text-sm">
  
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Student</th>
                <th>Dorm</th>
                <th>Status</th>
              </tr>
            </thead>
  
            <tbody>
  
              <tr className="border-b">
                <td className="py-2">Juan</td>
                <td>Girls Dorm</td>
                <td>Pending</td>
              </tr>
  
              <tr>
                <td className="py-2">Maria</td>
                <td>Boarding House</td>
                <td>Approved</td>
              </tr>
  
            </tbody>
  
          </table>
  
        </div>
  
  
      </div>
    );
  }
  
  
  
  function Card({ title, value }) {
    return (
      <div className="p-4 bg-white rounded-xl border">
  
        <p className="text-sm text-gray-500">
          {title}
        </p>
  
        <p className="text-2xl font-bold text-blue-900">
          {value}
        </p>
  
      </div>
    );
  }