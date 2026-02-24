import React from "react";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  const calendlyLink =
    "https://calendly.com/ironpeakweb/30min?month=2026-02";

  return (
    <section className="relative w-full bg-[#0E1A2B] text-white pt-30 md:pt-50 pb-32 overflow-hidden">

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E1A2B] via-[#12243C] to-[#0B1624]" />

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT */}
        <div>

          {/* Orange Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-[12px] uppercase tracking-widest font-semibold">
            Texas Roofing Websites
          </div>

          {/* Heading */}
          <h1 className="mt-6 hidden md:hidden lg:block text-[40px] md:text-[50px] font-bold leading-[1.1]">
            Roofing Companies
            <br />
            Without a Strong
            <br />
            Website <span className="text-orange-500">Lose Jobs Every Week.</span>
          </h1>

          <h1 className="mt-6 lg:hidden md:block text-[35px] md:text-[48px] font-bold leading-tight">
            Roofing Companies
            Without a Strong
            Website <span className="text-orange-500">Lose Jobs Every Week.</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-gray-300 text-[18px] md:text-[20px] max-w-lg leading-tight">
            We Build & Redesign Roofing Websites That Generate More Calls
            and Booked Inspections in Texas.
          </p>

          {/* Bullet Points */}
          <div className="mt-6 flex flex-col md:flex-row gap-2 md:gap-6 text-[14px] text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-orange-500" />
              Delivered in 7 Days
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-orange-500" />
              Conversion-Optimized
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-orange-500" />
              Texas Roofers Only
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            
            {/* ✅ Calendly CTA */}
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500  hover:bg-white transition-all duration-500 hover:text-orange-500 border border-orange-500 cursor-pointer text-white px-4 py-3 rounded-md text-[15px] font-semibold text-center shadow-orange-500 shadow-2xl"
            >
              Book Free Strategy Call
            </a>

            <button className="border border-white text-white px-4 py-3 rounded-md text-[15px] font-semibold transition-all duration-500 hover:bg-white hover:text-gray-800 cursor-pointer">
              Get a Free Website Plan →
            </button>
          </div>

          {/* Small Rating Text */}
          <p className="mt-6 text-gray-400 text-[13px]">
            ⭐ 5.0 rated on Fiverr & Upwork · 40+ roofing sites launched
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">

          <div className="relative md:p-6 rounded-xl">
            <img
              src="https://texan-roof-boost.lovable.app/assets/hero-mockup-hjTrRWsT.jpg"
              alt="mockup"
              className="md:w-125 rounded-lg"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-0 md:bottom-10 left-0 md:left-5 translate-y-10 bg-white text-gray-900 px-5 py-3 rounded-xl shadow-xl text-sm font-medium">
            <div className="flex items-center gap-5">
              <span className="text-xl">📈</span>
              <div>
                <div className="text-gray-500 text-xs">Avg. result</div>
                <div className="font-semibold">+3x More Leads</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;