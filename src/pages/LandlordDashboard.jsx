// pages/LandlordDashboard.jsx

import { useState } from "react";
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

export default function LandlordDashboard() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r">

        <div className="p-5 text-xl font-bold text-rose-500">
          DormLink
        </div>

        <MenuItem
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active={tab === "dashboard"}
          onClick={() => setTab("dashboard")}
        />

        <MenuItem
          icon={<BedDouble size={18} />}
          label="My Dorms"
          active={tab === "dorms"}
          onClick={() => setTab("dorms")}
        />

        <MenuItem
          icon={<Plus size={18} />}
          label="Add Dorm"
          active={tab === "add"}
          onClick={() => setTab("add")}
        />

        <MenuItem
          icon={<Calendar size={18} />}
          label="Bookings"
          active={tab === "bookings"}
          onClick={() => setTab("bookings")}
        />

        <MenuItem
          icon={<MessageSquare size={18} />}
          label="Messages"
          active={tab === "messages"}
          onClick={() => setTab("messages")}
        />

        <MenuItem
          icon={<User size={18} />}
          label="Profile"
          active={tab === "profile"}
          onClick={() => setTab("profile")}
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
        />

      </div>

      {/* MAIN */}
      <div className="flex flex-col flex-1">

        {/* TOPBAR */}
        <div className="flex gap-4 justify-end items-center px-6 h-14 bg-white border-b">

          <Bell />

          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>

        </div>

        {/* CONTENT */}
        <div className="overflow-auto p-6">

          {tab === "dashboard" && (
            <h1 className="text-2xl font-semibold">
              Dashboard
            </h1>
          )}

          {tab === "dorms" && (
            <h1 className="text-2xl font-semibold">
              My Dorms
            </h1>
          )}

          {tab === "add" && (
            <h1 className="text-2xl font-semibold">
              Add Dorm
            </h1>
          )}

          {tab === "bookings" && (
            <h1 className="text-2xl font-semibold">
              Bookings
            </h1>
          )}

          {tab === "messages" && (
            <h1 className="text-2xl font-semibold">
              Messages
            </h1>
          )}

          {tab === "profile" && (
            <h1 className="text-2xl font-semibold">
              Profile
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
          ? "text-rose-500 bg-rose-50"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}