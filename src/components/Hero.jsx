import React, { useState } from "react";
import { CheckCircle, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion"; // ✅ Import Framer Motion

const Hero = () => {
  const calendlyLink =
    "https://calendly.com/ironpeakweb/30min?month=2026-02";

    const [openPopup, setOpenPopup] = useState(false);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full bg-[#0E1A2B] text-white pt-30 md:pt-50 pb-32 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E1A2B] via-[#12243C] to-[#0B1624]" />

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {/* Orange Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-[12px] uppercase tracking-widest font-semibold">
            USA Roofing Websites
          </div>

          {/* Heading */}
          <h1 className="mt-6 hidden md:hidden lg:block text-[40px] md:text-[48px] font-bold leading-[1.1]">
            Roofing Companies
            <br />
            Without a Strong Website
            <br />
           <span className="text-orange-500">Lose Jobs Every Week.</span>
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
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-white transition-all duration-500 hover:text-orange-500 border border-orange-500 cursor-pointer text-white px-4 py-3 rounded-lg text-[15px] font-semibold text-center shadow-orange-500 shadow-2xl"
            >
              Book Free Strategy Call
            </a>

            <button
               onClick={() => setOpenPopup(true)}
            className="border border-white text-white px-4 py-3 rounded-lg text-[15px] font-semibold transition-all duration-500 hover:bg-white hover:text-gray-800 cursor-pointer">
              Get a Free Website Plan →
            </button>
          </div>

          {/* Small Rating Text */}
          <p className="mt-6 text-gray-400 text-[13px] md:text-sm flex items-center gap-1">
  <Star size={14} className="text-yellow-400" />
4.8 rated on Fiverr & Upwork · 500+ sites launched
</p>
        </motion.div>
        {/* POPUP FORM */}
      <AnimatePresence>
        {openPopup && (
        <motion.div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={() => setOpenPopup(false)}   // 👈 close when clicking outside
>

          <motion.div
  onClick={(e) => e.stopPropagation()}   // 👈 prevent closing when clicking inside
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.9, opacity: 0 }}
  className="bg-[#0E1A2B] border border-white/10 rounded-lg p-8 w-full max-w-lg relative shadow-2xl"
>

              {/* Close Button */}
              <button
                onClick={() => setOpenPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all duration-500 cursor-pointer"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold mb-2">
                Get Your Free Website Plan
              </h2>

              <p className="text-gray-400 text-sm mb-6">
                Tell us about your roofing business and we'll send a website plan.
              </p>

<form
  method="POST"
  className="space-y-4"
>

  {/* Disable captcha */}
  <input type="hidden" name="_captcha" value="false" />

  {/* Email subject */}
  <input type="hidden" name="_subject" value="New Website Plan Request!" />

  {/* Prevent redirect page */}
  <input type="hidden" name="_template" value="table" />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full px-4 py-3 rounded-lg bg-[#12243C] border border-white/10 focus:outline-none focus:border-orange-500"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full px-4 py-3 rounded-lg bg-[#12243C] border border-white/10 focus:outline-none focus:border-orange-500"
  />

  <textarea
    name="message"
    rows="4"
    placeholder="Tell us about your roofing company..."
    className="w-full px-4 py-3 rounded-lg bg-[#12243C] border border-white/10 focus:outline-none focus:border-orange-500"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-500 border border-orange-500 text-white py-3 rounded-lg font-semibold cursor-pointer"
  >
    Send Request
  </button>

</form>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }} // Delay right side slightly
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative md:p-6 rounded-xl">
            <img
              src="https://texan-roof-boost.lovable.app/assets/hero-mockup-hjTrRWsT.jpg"
              alt="mockup"
              className="md:w-125 rounded-lg"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-0 md:bottom-10 left-0 md:left-5 translate-y-10 bg-white text-gray-900 px-5 py-3 rounded-lg shadow-xl text-sm font-medium">
            <div className="flex items-center gap-5">
              <span className="text-xl">📈</span>
              <div>
                <div className="text-gray-500 text-xs">Avg. result</div>
                <div className="font-semibold">+3x More Leads</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;