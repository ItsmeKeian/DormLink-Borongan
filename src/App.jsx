import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// public pages
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import ListingDetail from "./pages/ListingDetail";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandlordDormView from "./pages/LandlordDormView";

// ---------- ADMIN ----------
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDash from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminListings from "./pages/admin/Listings";
import AdminReports from "./pages/admin/Reports";
import AdminMessages from "./pages/admin/Messages";
import AdminSettings from "./pages/admin/Settings";
import AdminListingView from "./pages/admin/AdminListingView";

// ---------- LANDLORD ----------
import LandlordLayout from "./pages/landlord/LandlordLayout";
import Dashboard from "./pages/landlord/Dashboard";
import MyDorms from "./pages/landlord/MyDorms";
import AddDorm from "./pages/landlord/AddDorm";
import Bookings from "./pages/landlord/Bookings";
import LandlordMessages from "./pages/landlord/Messages";
import Profile from "./pages/landlord/Profile";
import Settings from "./pages/landlord/Settings";

// ---------- TENANT ----------
import TenantLayout from "./pages/tenant/TenantLayout";
import TenantDash from "./pages/tenant/Dashboard";
import TenantBrowse from "./pages/tenant/Browse";
import TenantBookings from "./pages/tenant/Bookings";
import TenantMessages from "./pages/tenant/Messages";
import TenantProfile from "./pages/tenant/Profile";
import TenantSettings from "./pages/tenant/Settings";

export default function App() {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/tenant",
    "/landlord",
    "/admin",
    "/login",
    "/register",
  ];

  const hideNavbar = hideNavbarRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* ================= PUBLIC ================= */}

        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* ================= ADMIN ================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDash />} />
          <Route path="dashboard" element={<AdminDash />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="listings" element={<AdminListings />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="listing/view/:id" element={<AdminListingView />} />
        </Route>


        {/* ================= LANDLORD ================= */}

        <Route
          path="/landlord"
          element={
            <ProtectedRoute role="landlord">
              <LandlordLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="mydorm/view/:id"
            element={<LandlordDormView />}
          />

          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dorms" element={<MyDorms />} />
          <Route path="add" element={<AddDorm />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="messages" element={<LandlordMessages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />

        </Route>


        {/* ================= TENANT ================= */}

        <Route
          path="/tenant"
          element={
            <ProtectedRoute role="student">
              <TenantLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<TenantDash />} />
          <Route path="dashboard" element={<TenantDash />} />
          <Route path="browse" element={<TenantBrowse />} />
          <Route path="bookings" element={<TenantBookings />} />
          <Route path="messages" element={<TenantMessages />} />
          <Route path="profile" element={<TenantProfile />} />
          <Route path="settings" element={<TenantSettings />} />
        </Route>


      </Routes>
    </>
  );
}