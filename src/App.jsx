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

// tenant / admin
import TenantDashboard from "./pages/TenantDashboard";
import AdminDashboard from "./pages/AdminDashboard";

// landlord layout + pages
import LandlordLayout from "./pages/landlord/LandlordLayout";
import Dashboard from "./pages/landlord/dashboard";
import MyDorms from "./pages/landlord/MyDorms";
import AddDorm from "./pages/landlord/AddDorm";
import Bookings from "./pages/landlord/Bookings";
import LandlordMessages from "./pages/landlord/Messages";
import Profile from "./pages/landlord/Profile";
import Settings from "./pages/landlord/Settings";

export default function App() {
  const location = useLocation();

  // hide navbar on dashboards
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

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* TENANT */}
        <Route
          path="/tenant"
          element={
            <ProtectedRoute role="student">
              <TenantDashboard />
            </ProtectedRoute>
          }
        />


        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />


        {/* LANDLORD LAYOUT */}
        <Route
          path="/landlord"
          element={
            <ProtectedRoute role="landlord">
              <LandlordLayout />
            </ProtectedRoute>
          }
        >

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dorms" element={<MyDorms />} />
          <Route path="add" element={<AddDorm />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="messages" element={<LandlordMessages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>
    </>
  );
}