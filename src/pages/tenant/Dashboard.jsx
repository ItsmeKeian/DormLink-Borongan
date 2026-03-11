export default function Dashboard() {
    return (
      <div className="space-y-6">
  
        <h1 className="text-2xl font-semibold">
          Tenant Dashboard
        </h1>
  
  
        {/* CARDS */}
        <div className="grid grid-cols-4 gap-4">
  
          <Card title="My Bookings" value="1" />
          <Card title="Messages" value="2" />
          <Card title="Saved Dorms" value="3" />
          <Card title="Notifications" value="1" />
  
        </div>
  
  
  
        {/* QUICK ACTIONS */}
        <div className="p-4 bg-white rounded-xl border">
  
          <h2 className="mb-3 font-semibold">
            Quick Actions
          </h2>
  
          <div className="flex gap-3">
  
            <a
              href="/tenant/browse"
              className="px-4 py-2 text-white bg-blue-900 rounded-lg"
            >
              Browse Dorms
            </a>
  
            <a
              href="/tenant/bookings"
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              My Bookings
            </a>
  
            <a
              href="/tenant/messages"
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Messages
            </a>
  
          </div>
  
        </div>
  
  
  
        {/* RECENT BOOKINGS */}
        <div className="p-4 bg-white rounded-xl border">
  
          <h2 className="mb-3 font-semibold">
            Recent Activity
          </h2>
  
          <table className="w-full text-sm">
  
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Dorm</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
  
            <tbody>
  
              <tr className="border-b">
                <td className="py-2">Girls Dorm</td>
                <td>June 10</td>
                <td className="text-yellow-600">
                  Pending
                </td>
              </tr>
  
              <tr>
                <td className="py-2">Boarding House</td>
                <td>June 12</td>
                <td className="text-green-600">
                  Approved
                </td>
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