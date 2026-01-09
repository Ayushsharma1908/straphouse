import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide text-violet-700"
        >
          StrapHouse
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-violet-600 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-violet-600 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-violet-600 transition">
            Contact Us
          </Link>

          <Link
            to="/signin"
            className="px-4 py-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition shadow"
          >
            Sign In
          </Link>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">

            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>

            <Link
              to="/signin"
              onClick={() => setOpen(false)}
              className="px-6 py-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition shadow"
            >
              Sign In
            </Link>

          </ul>
        </div>
      )}
    </nav>
  );
}
