export default function Bookings() {
    return (
      <div className="space-y-6">
  
        <h1 className="text-2xl font-semibold">
          Bookings
        </h1>
  
  
        <div className="p-4 bg-white rounded-xl border">
  
          <table className="w-full text-sm">
  
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Student</th>
                <th>Dorm</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
  
  
            <tbody>
  
              <tr className="border-b">
                <td className="py-2">Juan Dela Cruz</td>
                <td>Girls Dorm</td>
                <td>June 10</td>
                <td className="text-yellow-600">
                  Pending
                </td>
  
                <td className="flex gap-2 py-2">
  
                  <button className="px-2 py-1 text-white bg-green-600 rounded">
                    Approve
                  </button>
  
                  <button className="px-2 py-1 text-white bg-red-500 rounded">
                    Reject
                  </button>
  
                </td>
              </tr>
  
  
              <tr>
                <td className="py-2">Maria</td>
                <td>Boarding House</td>
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