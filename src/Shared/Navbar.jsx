import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const calendlyLink =
    "https://calendly.com/ironpeakweb/30min?month=2026-02";

  return (
    <header className="w-full bg-white fixed top-0 z-50 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-[68px] flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#111827] rounded-md flex items-center justify-center">
            <span className="text-orange-500 font-bold text-sm">⚡</span>
          </div>
          <h1 className="text-[15px] font-semibold text-gray-900">
            RoofLaunch<span className="text-orange-500">TX</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[14px] text-gray-500 font-medium">
          <a href="#services" className="hover:text-gray-900 transition">Services</a>
          <a href="#portfolio" className="hover:text-gray-900 transition">Portfolio</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
          <a href="#reviews" className="hover:text-gray-900 transition">Reviews</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500  hover:bg-white transition-all duration-500 hover:text-orange-500 border border-orange-500 cursor-pointer text-white px-5 py-2 rounded-md text-[14px] font-semibold inline-block"
          >
            Book Free Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-4 py-6 gap-6 text-[15px] font-medium text-gray-700">
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-gray-900 transition">
              Services
            </a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="hover:text-gray-900 transition">
              Portfolio
            </a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-gray-900 transition">
              Pricing
            </a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="hover:text-gray-900 transition">
              Reviews
            </a>

            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-orange-500  hover:bg-white transition-all duration-500 hover:text-orange-500 border border-orange-500 cursor-pointer text-white py-3 rounded-md font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Free Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;