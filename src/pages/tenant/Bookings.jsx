export default function Bookings() {
    return (
      <div className="space-y-6">
  
        <h1 className="text-2xl font-semibold">
          My Bookings
        </h1>
  
  
        <div className="p-4 bg-white rounded-xl border">
  
          <table className="w-full text-sm">
  
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Dorm</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
  
  
            <tbody>
  
              <tr className="border-b">
                <td className="py-2">Girls Dorm</td>
                <td>June 10</td>
  
                <td className="text-yellow-600">
                  Pending
                </td>
  
                <td>
                  <button className="px-2 py-1 text-white bg-red-500 rounded">
                    Cancel
                  </button>
                </td>
              </tr>
  
  
              <tr>
                <td className="py-2">Boarding House</td>
                <td>June 12</td>
  
                <td className="text-green-600">
                  Approved
                </td>
  
                <td>-</td>
              </tr>
  
            </tbody>
  
          </table>
  
        </div>
  
      </div>
    );
  }