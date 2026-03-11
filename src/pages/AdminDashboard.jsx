import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

export default function AdminDashboard() {
  const [tab, setTab] = useState("dashboard");

  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetch(
      "http://localhost/dormlink-borongan-api/logout.php",
      {
        credentials: "include",
      }
    );

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

        <MenuItem
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active={tab === "dashboard"}
          onClick={() => setTab("dashboard")}
        />

        <MenuItem
          icon={<Users size={18} />}
          label="Users"
          active={tab === "users"}
          onClick={() => setTab("users")}
        />

        <MenuItem
          icon={<Building2 size={18} />}
          label="Listings"
          active={tab === "listings"}
          onClick={() => setTab("listings")}
        />

        <MenuItem
          icon={<Flag size={18} />}
          label="Reports"
          active={tab === "reports"}
          onClick={() => setTab("reports")}
        />

        <MenuItem
          icon={<MessageSquare size={18} />}
          label="Messages"
          active={tab === "messages"}
          onClick={() => setTab("messages")}
        />

        <MenuItem
          icon={<Settings size={18} />}
          label="Settings"
          active={tab === "settings"}
          onClick={() => setTab("settings")}
        />

        <MenuItem
          icon={<LogOut size={18} />}
          label="Logout"
          onClick={handleLogout}
        />

      </div>

      {/* MAIN */}
      <div className="flex flex-col flex-1">

        {/* TOPBAR */}
        <div className="flex gap-4 justify-end items-center px-6 h-14 bg-white border-b">

          <Bell />

          <div className="flex justify-center items-center w-8 h-8 text-white bg-blue-900 rounded-full">
            A
          </div>

        </div>

        {/* CONTENT */}
        <div className="overflow-auto p-6">

          {tab === "dashboard" && (
            <h1 className="text-2xl font-semibold">
              Admin Dashboard
            </h1>
          )}

          {tab === "users" && (
            <h1 className="text-2xl font-semibold">
              Manage Users
            </h1>
          )}

          {tab === "listings" && (
            <h1 className="text-2xl font-semibold">
              Listings Moderation
            </h1>
          )}

          {tab === "reports" && (
            <h1 className="text-2xl font-semibold">
              Reports / Complaints
            </h1>
          )}

          {tab === "messages" && (
            <h1 className="text-2xl font-semibold">
              Messages
            </h1>
          )}

          {tab === "settings" && (
            <h1 className="text-2xl font-semibold">
              Settings
            </h1>
          )}

        </div>

      </div>

    </div>
  );
}

function MenuItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-5 py-3 text-left
      ${
        active
          ? "text-blue-900 bg-blue-50"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}