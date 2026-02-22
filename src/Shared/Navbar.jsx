import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 w-full border-b border-gray-200">

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-tight">
          <span className="text-gray-900">Iron</span>
          <span className="text-orange-500">Peak</span>
          <span className="text-gray-900"> Web</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-gray-500">
          <a href="#why-us" className="hover:text-gray-700 transition-all duration-500">Why Us</a>
          <a href="#process" className="hover:text-gray-700 transition-all duration-500">Process</a>
          <a href="#portfolio" className="hover:text-gray-700 transition-all duration-500">Portfolio</a>
          <a href="#reviews" className="hover:text-gray-700 transition-all duration-500">Reviews</a>

          <button className="ml-4 bg-orange-500 text-white px-5 py-2 rounded-md shadow-sm hover:bg-white hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition-all duration-500 cursor-pointer">
            Book Free Strategy Call 
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[400px] " : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 space-y-4 text-gray-500 text-sm font-semibold bg-white">

          <a href="#why-us" onClick={()=>setOpen(false)} className="block">
            Why Us
          </a>

          <a href="#process" onClick={()=>setOpen(false)} className="block">
            Process
          </a>

          <a href="#portfolio" onClick={()=>setOpen(false)} className="block">
            Portfolio
          </a>

          <a href="#reviews" onClick={()=>setOpen(false)} className="block">
            Reviews
          </a>

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold  hover:bg-white hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition-all duration-500 cursor-pointer">
            Book Free Strategy Call
          </button>

        </div>
      </div>

    </header>
  );
};

export default Navbar;