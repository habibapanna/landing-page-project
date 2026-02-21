import React from "react";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-tight">
          <span className="text-gray-900">Iron</span>
          <span className="text-orange-500">Peak</span>
          <span className="text-gray-900"> Web</span>
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Why Us</a>
          <a href="#" className="hover:text-black">Process</a>
          <a href="#" className="hover:text-black">Portfolio</a>
          <a href="#" className="hover:text-black">Reviews</a>

          {/* CTA */}
          <button className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium shadow-sm">
            Book Free Strategy Call
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;