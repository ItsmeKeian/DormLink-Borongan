import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BedDouble,
  Plus,
  Calendar,
  MessageSquare,
  User,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

export default function LandlordLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await fetch(
      "http://localhost/dormlink-borongan-api/logout.php",
      { credentials: "include" }
    );

    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r">

        <div className="p-5 text-xl font-bold text-blue-900">
          DormLink
        </div>

        <MenuItem
          to="/landlord/dashboard"
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active={location.pathname === "/landlord/dashboard"}
        />

        <MenuItem
          to="/landlord/dorms"
          icon={<BedDouble size={18} />}
          label="My Dorms"
          active={location.pathname === "/landlord/dorms"}
        />

        <MenuItem
          to="/landlord/add"
          icon={<Plus size={18} />}
          label="Add Dorm"
          active={location.pathname === "/landlord/add"}
        />

        <MenuItem
          to="/landlord/bookings"
          icon={<Calendar size={18} />}
          label="Bookings"
          active={location.pathname === "/landlord/bookings"}
        />

        <MenuItem
          to="/landlord/messages"
          icon={<MessageSquare size={18} />}
          label="Messages"
          active={location.pathname === "/landlord/messages"}
        />

        <MenuItem
          to="/landlord/profile"
          icon={<User size={18} />}
          label="Profile"
          active={location.pathname === "/landlord/profile"}
        />

        <MenuItem
          to="/landlord/settings"
          icon={<Settings size={18} />}
          label="Settings"
          active={location.pathname === "/landlord/settings"}
        />

        <button
          onClick={handleLogout}
          className="flex gap-3 items-center px-5 py-3 w-full text-left text-gray-600 hover:bg-gray-100"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>


      {/* MAIN */}
      <div className="flex flex-col flex-1">

        {/* TOPBAR */}
        <div className="flex gap-4 justify-end items-center px-6 h-14 bg-white border-b">

          <Bell />

          <div className="flex justify-center items-center w-8 h-8 text-white bg-blue-900 rounded-full">
            L
          </div>

        </div>


        {/* CONTENT */}
        <div className="overflow-auto p-6">

          <Outlet />

        </div>

      </div>

    </div>
  );
}



function MenuItem({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`w-full flex items-center gap-3 px-5 py-3 text-left
      ${
        active
          ? "text-blue-900 bg-blue-50"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}