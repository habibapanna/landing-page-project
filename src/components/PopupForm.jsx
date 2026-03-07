// components/PopupForm.jsx
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const PopupForm = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setOpen(false)}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#0E1A2B] border border-white/10 rounded-lg p-8 w-full max-w-lg relative shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all duration-500 cursor-pointer"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-2 text-white text-left">
          Get Your Free Website Plan
        </h2>

        <p className="text-gray-400 text-sm mb-6 text-left">
          Tell us about your roofing business and we'll send a website plan.
        </p>

        <form method="POST" className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Website Plan Request!" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-[#12243C] border border-white/10 focus:outline-none focus:border-orange-600 text-gray-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-[#12243C] border border-white/10 focus:outline-none focus:border-orange-600 text-gray-300"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your roofing company..."
            className="w-full px-4 py-3 rounded-lg bg-[#12243C] border border-white/10 focus:outline-none focus:border-orange-600 text-gray-300"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-white hover:text-orange-600 transition-all duration-500 border border-orange-600 text-white py-3 rounded-lg font-semibold cursor-pointer"
          >
            Send Request
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PopupForm;