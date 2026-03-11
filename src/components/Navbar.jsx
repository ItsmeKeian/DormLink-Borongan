import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[1000] bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-7xl">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-900">
          DormLink
        </Link>

        {/* Center Navigation */}
        <div className="hidden gap-8 font-medium text-gray-700 md:flex">
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
            className="px-4 py-2 text-white bg-blue-900 rounded-xl transition hover:bg-blue-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}