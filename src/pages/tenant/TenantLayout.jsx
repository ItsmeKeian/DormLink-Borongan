import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  Calendar,
  MessageSquare,
  User,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

export default function TenantLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
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
          to="/tenant/dashboard"
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active={location.pathname === "/tenant/dashboard"}
        />

        <MenuItem
          to="/tenant/browse"
          icon={<Search size={18} />}
          label="Browse Dorms"
          active={location.pathname === "/tenant/browse"}
        />

        <MenuItem
          to="/tenant/bookings"
          icon={<Calendar size={18} />}
          label="My Bookings"
          active={location.pathname === "/tenant/bookings"}
        />

        <MenuItem
          to="/tenant/messages"
          icon={<MessageSquare size={18} />}
          label="Messages"
          active={location.pathname === "/tenant/messages"}
        />

        <MenuItem
          to="/tenant/profile"
          icon={<User size={18} />}
          label="Profile"
          active={location.pathname === "/tenant/profile"}
        />

        <MenuItem
          to="/tenant/settings"
          icon={<Settings size={18} />}
          label="Settings"
          active={location.pathname === "/tenant/settings"}
        />

        <button
          onClick={logout}
          className="flex gap-3 px-5 py-3 w-full text-gray-600 hover:bg-gray-100"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>


      {/* MAIN */}
      <div className="flex flex-col flex-1">

        <div className="flex justify-end items-center px-6 h-14 bg-white border-b">

          <Bell />

          <div className="flex justify-center items-center w-8 h-8 text-white bg-blue-900 rounded-full">
            T
          </div>

        </div>

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
      className={`w-full flex gap-3 px-5 py-3
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