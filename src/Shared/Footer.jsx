import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1C2D] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          {/* Logo + Tagline */}
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              <span className="text-white">Iron</span>
              <span className="text-orange-500">Peak</span>
              <span className="text-white"> Web</span>
            </h1>

            <p className="mt-4 text-gray-400 text-sm md:text-base max-w-sm">
              Building high-converting websites for Texas roofers.
            </p>
          </div>

          {/* Navigation Links */}
         <div className="flex flex-wrap gap-8 text-sm md:text-base font-semibold text-gray-400">
  <a href="#why-us" className="hover:text-white transition cursor-pointer">
    Why Us
  </a>
  <a href="#process" className="hover:text-white transition-all duration-500">
    Process
  </a>
  <a href="#portfolio" className="hover:text-white transition-all duration-500">
    Portfolio
  </a>
  <a href="#reviews" className="hover:text-white transition-all duration-500">
    Reviews
  </a>
</div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} IronPeak Web. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;