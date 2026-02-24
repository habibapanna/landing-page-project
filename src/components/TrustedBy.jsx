import React from "react";
import { Star } from "lucide-react";

const TrustedBy = () => {
  const testimonials = [
    {
      quote:
        "RoofLaunchTX redesigned our site and within 3 weeks we had more leads than we'd gotten all last quarter. The phone doesn't stop ringing now. Worth every penny.",
      name: "Jake Morales",
      company: "Morales Roofing — San Antonio, TX",
      initials: "JM",
      platform: "Fiverr",
    },
    {
      quote:
        "They delivered in exactly 7 days like they promised. The site looks incredible on mobile and our Google ranking jumped from page 4 to page 1 within 6 weeks.",
      name: "Brad Calloway",
      company: "Texas Peak Roofing — Plano, TX",
      initials: "BC",
      platform: "Upwork",
    },
    {
      quote:
        "After the last hurricane season we needed a site fast. They set up our emergency landing page in 48 hours and we booked 30+ inspections that month alone.",
      name: "Maria Santos",
      company: "Santos Storm Services — Houston, TX",
      initials: "MS",
      platform: "Fiverr",
    },
  ];

  return (
    <section id="reviews" className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Rating Badges */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          
          <div className="bg-white px-8 py-4 rounded-lg flex items-center gap-4 shadow-sm">
          <img src="https://i.postimg.cc/pXW0PyPD/Whats-App-Image-2026-02-24-at-2-13-34-AM.jpg" alt="" />
          </div>

         <div className="bg-white px-8 py-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center min-w-[220px]">
  
  <p className="text-gray-500 text-sm mb-1">Rated on</p>

  <h3 className="text-xl font-bold text-black mb-2">
    Upwork
  </h3>

  <div className="flex text-orange-500 mb-2">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={18} fill="currentColor" />
    ))}
  </div>

  <p className="text-sm font-semibold text-gray-500 font-medium">
    4.9 reviews (100% job success)
  </p>

</div>

        </div>

        {/* Section Heading */}
        <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
          Client Reviews
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0f172a]">
          Real Roofers. Real Results.
        </h2>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
          Texas roofing companies trust us to build their online presence.
        </p>

{/* Testimonials */}
<div className="mt-20 grid md:grid-cols-3 gap-8 text-left items-stretch">
  {testimonials.map((item, index) => (
    <div
      key={index}
      className="bg-linear-to-b from-white via-slate-50 to-slate-100 p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col h-full"
    >
      {/* Stars */}
      <div className="flex text-orange-500 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-600 leading-relaxed text-[15px]">
        "{item.quote}"
      </p>

      {/* This pushes bottom content to same position */}
      <div className="mt-auto">
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-10 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-sm font-semibold">
              {item.initials}
            </div>
            <div>
              <h4 className="font-semibold text-[#0f172a]">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500">
                {item.company}
              </p>
            </div>
          </div>

          <span className="text-sm font-medium text-gray-700">
            {item.platform}
          </span>

        </div>
      </div>
    </div>
  ))}
</div>

        {/* Button */}
        <button className="mt-20 px-8 py-3 border-2 border-[#0f172a] text-[#0f172a] rounded-xl font-semibold hover:bg-[#0f172a] hover:text-white transition-all duration-500 cursor-pointer">
          View Full Reviews
        </button>

      </div>
    </section>
  );
};

export default TrustedBy;