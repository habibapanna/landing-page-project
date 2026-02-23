import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#111827] rounded-md flex items-center justify-center">
            <span className="text-orange-500 font-bold text-sm">⚡</span>
          </div>
          <h1 className="text-[15px] font-semibold text-gray-900">
            RoofLaunch<span className="text-orange-500">TX</span>
          </h1>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[14px] text-gray-500 font-medium">
          <a href="#" className="hover:text-gray-900 transition">Services</a>
          <a href="#" className="hover:text-gray-900 transition">Portfolio</a>
          <a href="#" className="hover:text-gray-900 transition">Pricing</a>
          <a href="#" className="hover:text-gray-900 transition">Reviews</a>
        </nav>

        {/* CTA */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-[14px] font-semibold transition">
          Book Free Call
        </button>
      </div>
    </header>
  );
};

export default Navbar;