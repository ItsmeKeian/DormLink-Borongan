export default function Dashboard() {
    return (
      <div className="space-y-6">
  
        <h1 className="text-2xl font-semibold">
          Admin Dashboard
        </h1>
  
  
        {/* CARDS */}
        <div className="grid grid-cols-4 gap-4">
  
          <Card title="Total Users" value="12" />
          <Card title="Total Dorms" value="5" />
          <Card title="Bookings" value="8" />
          <Card title="Reports" value="1" />
  
        </div>
  
  
  
        {/* QUICK ACTIONS */}
        <div className="p-4 bg-white rounded-xl border">
  
          <h2 className="mb-3 font-semibold">
            Quick Actions
          </h2>
  
          <div className="flex gap-3">
  
            <a
              href="/admin/users"
              className="px-4 py-2 text-white bg-blue-900 rounded-lg"
            >
              Manage Users
            </a>
  
            <a
              href="/admin/listings"
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Manage Listings
            </a>
  
            <a
              href="/admin/reports"
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              View Reports
            </a>
  
          </div>
  
        </div>
  
  
  
        {/* RECENT ACTIVITY */}
        <div className="p-4 bg-white rounded-xl border">
  
          <h2 className="mb-3 font-semibold">
            Recent Activity
          </h2>
  
          <table className="w-full text-sm">
  
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">User</th>
                <th>Action</th>
                <th>Date</th>
              </tr>
            </thead>
  
            <tbody>
  
              <tr className="border-b">
                <td className="py-2">Juan</td>
                <td>Booked Dorm</td>
                <td>June 10</td>
              </tr>
  
              <tr>
                <td className="py-2">Maria</td>
                <td>Added Dorm</td>
                <td>June 12</td>
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