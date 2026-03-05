import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  const calendlyLink =
  "https://calendly.com/ironpeakweb/30min?month=2026-02";

const [openPopup, setOpenPopup] = useState(false);

  return (
    <footer className="bg-[#0B1C2D] text-white border-t-4 border-orange-500">
      {/* CTA SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-orange-500 font-semibold tracking-widest text-sm mb-4">
            LET'S TALK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ready to Get More <br /> Roofing Leads?
          </h2>

          <p className="text-gray-400 mb-8 max-w-xl">
            Book a free 30-minute strategy call. We'll review your current
            website (or lack of one), show you exactly what's costing you
            leads, and map out a custom plan — no obligation.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-300 mb-8">
            <li>✅ Free website audit & competitor analysis</li>
            <li>📄 Custom 7-day website plan for your market</li>
            <li>📈 Clear ROI projection for your service area</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => setOpenPopup(true)}
            className="bg-orange-500 hover:white border border-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-500 text-white px-4 py-3 rounded-lg font-semibold cursor-pointer flex items-center justify-center gap-2 w-full">
              <IoCallOutline /> Call Now: (800) 555-1234
            </button>


           <a
  href={calendlyLink}
  target="_blank"
  rel="noopener noreferrer"
  className="border border-gray-500 px-4 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-2 w-full"
>
  <CiCalendar /> Schedule a Call
</a>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Free call · No contracts · No pressure · Texas roofers only
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white text-black rounded-lg p-10 shadow-xl">
          <div className="text-center mb-6">
            <div className="bg-gray-100 w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4">
              📅
            </div>

            <h3 className="text-xl font-bold mb-2">
              Book Your Free Strategy Call
            </h3>

            <p className="text-gray-600 text-sm">
              Pick a time that works for you. 30 minutes, free, and packed with
              value for your roofing business.
            </p>
          </div>

          <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-500 mb-4">
              Connect your Calendly to enable live booking
            </p>

           <a
  href={calendlyLink}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-orange-500 hover:white border border-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-500 text-white px-4 py-3 rounded-lg font-semibold inline-block"
>
  Book on Calendly →
</a>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            🔒 Your info is 100% private. We never spam.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          
           <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#132a42] rounded-md flex items-center justify-center">
            <span className="text-orange-500 font-bold text-sm">⚡</span>
          </div>
          <h1 className="text-[15px] font-semibold text-white">
            RoofLaunch<span className="text-orange-500">TX</span>
          </h1>
        </div>

          <p className="text-center">
            © {new Date().getFullYear()} RoofLaunchTX. All rights reserved. · Built for Texas Roofers.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;