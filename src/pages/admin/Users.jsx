export default function Users() {
    return (
      <div className="space-y-6">
  
        <h1 className="text-2xl font-semibold">
          Users
        </h1>
  
  
        <div className="p-4 bg-white rounded-xl border">
  
          <table className="w-full text-sm">
  
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
  
  
            <tbody>
  
              <tr className="border-b">
                <td className="py-2">Juan</td>
                <td>juan@gmail.com</td>
  
                <td>
                  <select className="px-2 py-1 rounded border">
                    <option>student</option>
                    <option>landlord</option>
                    <option>admin</option>
                  </select>
                </td>
  
                <td>
                  <button className="px-2 py-1 text-white bg-red-500 rounded">
                    Delete
                  </button>
                </td>
              </tr>
  
  
              <tr>
                <td className="py-2">Maria</td>
                <td>maria@gmail.com</td>
  
                <td>
                  <select className="px-2 py-1 rounded border">
                    <option>landlord</option>
                    <option>student</option>
                    <option>admin</option>
                  </select>
                </td>
  
                <td>
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