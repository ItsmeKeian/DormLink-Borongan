export default function Reports() {
    return (
      <div className="space-y-6">
  
        <h1 className="text-2xl font-semibold">
          Reports
        </h1>
  
  
        <div className="p-4 bg-white rounded-xl border">
  
          <table className="w-full text-sm">
  
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">User</th>
                <th>Report</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
  
  
            <tbody>
  
              <tr className="border-b">
                <td className="py-2">Juan</td>
                <td>Dorm is fake</td>
                <td>June 10</td>
  
                <td className="flex gap-2 py-2">
  
                  <button className="px-2 py-1 bg-gray-200 rounded">
                    View
                  </button>
  
                  <button className="px-2 py-1 text-white bg-green-600 rounded">
                    Resolve
                  </button>
  
                  <button className="px-2 py-1 text-white bg-red-500 rounded">
                    Delete
                  </button>
  
                </td>
              </tr>
  
  
              <tr>
                <td className="py-2">Maria</td>
                <td>Spam listing</td>
                <td>June 12</td>
  
                <td className="flex gap-2 py-2">
  
                  <button className="px-2 py-1 bg-gray-200 rounded">
                    View
                  </button>
  
                  <button className="px-2 py-1 text-white bg-green-600 rounded">
                    Resolve
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