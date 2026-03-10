// pages/AdminDashboard.jsx
export default function AdminDashboard() {
    return (
      <div className="p-6">
  
        <h1 className="text-2xl font-semibold mb-6">
          Admin Panel
        </h1>
  
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            Pending Listings
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            Reports
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            Users
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            Analytics
          </div>
        </div>
  
      </div>
    );
  }