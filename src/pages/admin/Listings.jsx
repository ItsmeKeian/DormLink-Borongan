export default function Listings() {
    return (
      <div className="space-y-6">
  
        <h1 className="text-2xl font-semibold">
          Listings
        </h1>
  
  
        <div className="p-4 bg-white rounded-xl border">
  
          <table className="w-full text-sm">
  
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Dorm</th>
                <th>Owner</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
  
  
            <tbody>
  
              <tr className="border-b">
                <td className="py-2">Girls Dorm</td>
                <td>Maria</td>
                <td>1500</td>
  
                <td className="text-green-600">
                  Active
                </td>
  
                <td className="flex gap-2 py-2">
  
                  <button className="px-2 py-1 bg-gray-200 rounded">
                    View
                  </button>
  
                  <button className="px-2 py-1 text-white bg-red-500 rounded">
                    Delete
                  </button>
  
                </td>
              </tr>
  
  
              <tr>
                <td className="py-2">Boarding House</td>
                <td>Juan</td>
                <td>2000</td>
  
                <td className="text-yellow-600">
                  Pending
                </td>
  
                <td className="flex gap-2 py-2">
  
                  <button className="px-2 py-1 text-white bg-green-600 rounded">
                    Approve
                  </button>
  
                  <button className="px-2 py-1 text-white bg-red-500 rounded">
                    Delete
                  </button>
  
                </td>
              </tr>
  
  
            </tbody>
  
          </table>
  
        </div>
  
      </div>
    );
  }