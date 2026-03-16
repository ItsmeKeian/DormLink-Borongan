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
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function TenantLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await fetch(
      "http://localhost/dormlinkborongan/php/logout.php",
      { credentials: "include" }
    );

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
          active={
            location.pathname.startsWith("/tenant/browse") ||
            location.pathname.startsWith("/tenant/listing")
          }
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
        <div className="flex justify-between items-center px-4 h-14 bg-white border-b md:px-6">

            {/* LEFT */}
            <div className="flex gap-2 items-center">

              <button
                onClick={() => setOpen(!open)}
                className="md:hidden"
              >
                <Menu />
              </button>

            </div>


            {/* RIGHT */}
            <div className="flex gap-4 items-center">

              <Bell />

              <div className="flex justify-center items-center w-8 h-8 text-white bg-blue-900 rounded-full">
                L
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