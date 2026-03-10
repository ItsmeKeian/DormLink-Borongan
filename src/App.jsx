import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import ListingDetail from "./pages/ListingDetail";
import Messages from "./pages/Messages";
import LandlordDashboard from "./pages/LandlordDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname.startsWith("/landlord") ||
    location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/messages" element={<Messages />} />

        <Route path="/landlord" element={<LandlordDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}