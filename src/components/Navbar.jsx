import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-900">
          DormLink
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/how-it-works" className="hover:text-blue-600">How It Works</Link>
          <Link to="/browse" className="hover:text-blue-600">Browse</Link>
        </div>

        {/* Right Side */}
        <div className="flex gap-4 items-center">
          <Link to="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-900 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}