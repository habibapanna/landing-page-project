import React from "react";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#0E1A2B] text-white pt-28 pb-32 overflow-hidden">

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E1A2B] via-[#12243C] to-[#0B1624]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          {/* Orange Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-[12px] uppercase tracking-widest font-semibold">
            Texas Roofing Websites
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-[40px] md:text-[48px] font-bold leading-[1.1]">
            Roofing Companies
            <br />
            Without a Strong
            <br />
            Website <span className="text-orange-500">Lose Jobs Every Week.</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-gray-300 text-[16px] max-w-lg leading-relaxed">
            We Build & Redesign Roofing Websites That Generate More Calls
            and Booked Inspections in Texas.
          </p>

          {/* Bullet Points */}
          <div className="mt-6 flex flex-wrap gap-6 text-[14px] text-gray-300">
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
          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-[15px] font-semibold shadow-lg transition">
              Book Free Strategy Call
            </button>

            <button className="border border-white/30 hover:border-white text-white px-6 py-3 rounded-md text-[15px] font-semibold transition">
              Get a Free Website Plan →
            </button>
          </div>

          {/* Small Rating Text */}
          <p className="mt-6 text-gray-400 text-[13px]">
            ⭐ 5.0 rated on Fiverr & Upwork · 40+ roofing sites launched
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center md:justify-end">

          {/* Glow Behind Image */}
          <div className="absolute w-[520px] h-[380px] bg-orange-500/20 blur-3xl rounded-full" />

          {/* Laptop Container */}
          <div className="relative bg-[#111827] p-6 rounded-xl shadow-[0_25px_80px_rgba(0,0,0,0.6)] border border-white/10">
            <img
              src="https://texan-roof-boost.lovable.app/assets/hero-mockup-hjTrRWsT.jpg"
              alt="mockup"
              className="w-[480px] rounded-lg"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-0 left-0 translate-y-10 bg-white text-gray-900 px-5 py-3 rounded-xl shadow-xl text-sm font-medium">
            <div className="text-gray-500 text-xs">Avg. result</div>
            <div className="font-semibold">+3x More Leads</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;