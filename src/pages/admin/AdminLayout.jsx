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
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div
        className={`
        fixed md:static z-50
        w-64 h-full bg-white border-r
        transform transition-transform
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        `}
      >
        <div className="p-5 text-xl font-bold text-blue-900">
          DormLink Admin
        </div>

        <MenuItem
          to="/admin/dashboard"
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active={location.pathname === "/admin/dashboard"}
        />

        <MenuItem
          to="/admin/users"
          icon={<Users size={18} />}
          label="Users"
          active={location.pathname === "/admin/users"}
        />

        <MenuItem
          to="/admin/listings"
          icon={<Building2 size={18} />}
          label="Listings"
          active={location.pathname === "/admin/listings"}
        />

        <MenuItem
          to="/admin/reports"
          icon={<Flag size={18} />}
          label="Reports"
          active={location.pathname === "/admin/reports"}
        />

        <MenuItem
          to="/admin/messages"
          icon={<MessageSquare size={18} />}
          label="Messages"
          active={location.pathname === "/admin/messages"}
        />

        <MenuItem
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

        {/* TOPBAR */}
        <div className="flex justify-between items-center px-4 h-14 bg-white border-b md:px-6">

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            <Menu />
          </button>

          <div className="flex gap-4 items-center">
            <Bell />

            <div className="flex justify-center items-center w-8 h-8 text-white bg-blue-900 rounded-full">
              A
            </div>
          </div>

        </div>


        {/* CONTENT */}
        <div className="overflow-auto flex-1 p-4 md:p-6">
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
      className={`flex gap-3 px-5 py-3
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