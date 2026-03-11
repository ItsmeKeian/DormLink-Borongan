import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  Flag,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

export default function AdminLayout() {
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
          DormLink Admin
        </div>

        <Menu
          to="/admin/dashboard"
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active={location.pathname === "/admin/dashboard"}
        />

        <Menu
          to="/admin/users"
          icon={<Users size={18} />}
          label="Users"
          active={location.pathname === "/admin/users"}
        />

        <Menu
          to="/admin/listings"
          icon={<Building2 size={18} />}
          label="Listings"
          active={location.pathname === "/admin/listings"}
        />

        <Menu
          to="/admin/reports"
          icon={<Flag size={18} />}
          label="Reports"
          active={location.pathname === "/admin/reports"}
        />

        <Menu
          to="/admin/messages"
          icon={<MessageSquare size={18} />}
          label="Messages"
          active={location.pathname === "/admin/messages"}
        />

        <Menu
          to="/admin/settings"
          icon={<Settings size={18} />}
          label="Settings"
          active={location.pathname === "/admin/settings"}
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
            A
          </div>

        </div>


        <div className="overflow-auto p-6">

          <Outlet />

        </div>

      </div>

    </div>
  );
}


function Menu({ to, icon, label, active }) {
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