import { CalendarClock, FileText, Lock, SearchCheck, TrendingUp, Zap } from "lucide-react";
import React, { useState } from "react";
import { BiSolidZap } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { IoCalendarClearOutline, IoCallOutline } from "react-icons/io5";
import Logo from './../../public/WhatsApp_Image_2026-03-08_at_12.24.59_AM-removebg-preview.png';

const Footer = () => {
  const calendlyLink =
  "https://calendly.com/ironpeakweb/30min?month=2026-02";

const [openPopup, setOpenPopup] = useState(false);

  return (
    <footer id="footer" className="bg-[#0B1C2D] text-white border-t-4 border-orange-600">
      {/* CTA SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-orange-600 font-semibold tracking-widest text-sm mb-4">
            LET'S TALK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ready to Get More <br /> Roofing Leads?
          </h2>

          <p className="text-gray-400 mb-8 max-w-xl text-sm md:text-base">
            Book a free 30-minute strategy call. We'll review your current
            website (or lack of one), show you exactly what's costing you
            leads, and map out a custom plan — no obligation.
          </p>

        {/* Bullet Points */}
<ul className="space-y-3 text-gray-300 mb-8">

<li className="flex items-center gap-3">
  <SearchCheck size={18} className="text-orange-600" />
  Free website audit & competitor analysis
</li>

<li className="flex items-center gap-3">
  <FileText size={18} className="text-orange-600" />
  Custom 7-day website plan for your market
</li>

<li className="flex items-center gap-3">
  <TrendingUp size={18} className="text-orange-600" />
  Clear ROI projection for your service area
</li>

</ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">


           <a
  href={calendlyLink}
  target="_blank"
  rel="noopener noreferrer"
  className="border border-orange-600 px-4 py-3 rounded-lg bg-orange-600 hover:bg-white hover:text-orange-600 transition-all duration-500 flex items-center justify-center gap-2 w-full md:w-sm font-semibold"
>
  <IoCalendarClearOutline className="text-xl" /> Schedule a Call
</a>
          </div>

          <div className="flex flex-wrap gap-3 mt-4 text-sm">
  <span className="border border-gray-400 px-3 py-1 rounded text-gray-400">
    Free call
  </span>

  <span className="border border-gray-400 px-3 py-1 rounded text-gray-400">
    No contracts
  </span>

  <span className="border border-gray-400 px-3 py-1 rounded text-gray-400">
    No pressure
  </span>

  <span className="border border-gray-400 px-3 py-1 rounded text-gray-400">
    USA roofers only
  </span>
</div>
        </div>

        {/* Right Card */}
        <div className="bg-white text-black rounded-lg p-10 shadow-xl">
          <div className="text-center mb-6">
          <div className="bg-gray-100 w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4">
  <CalendarClock size={26} className="text-orange-600" />
</div>

            <h3 className="text-xl font-bold mb-2">
              Book Your Free Strategy Call
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
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
  className="bg-orange-600 hover:white border border-orange-600 hover:bg-white hover:text-orange-600 transition-all duration-500 text-white px-4 py-3 rounded-lg font-semibold inline-block"
>
  Book on Calendly →
</a>
          </div>

          <p className="text-sm text-orange-600 text-center mt-4 flex items-center justify-center gap-2">
  <Lock size={16} />
  Your info is 100% private. We never spam.
</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          
 {/* Logo */}
        <div className="flex items-center cursor-pointer gap-2" onClick={() => window.location.reload()}>
          <a href="/">
            <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center ">
              <span className=" bg-gray-700 rounded-full"><img src={Logo} alt="" className="bg-white h-full w-full rounded-full" /></span>
            </div>
          </a>
          <a href="/">
            <h1 className="text-[15px] md:text-lg font-semibold text-white">
              IronPeak<span className="text-orange-600">Web</span>
            </h1>
          </a>
        </div>

          <p className="text-center">
            © {new Date().getFullYear()} IronPeakWeb. All rights reserved. · Built for USA Roofers.
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