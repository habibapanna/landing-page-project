import React from "react";
import { Star } from "lucide-react";

const TrustedBy = () => {
  const testimonials = [
    {
      quote:
        "RoofLaunchTX redesigned our site and within 3 weeks we had more leads than we'd gotten all last quarter. The phone doesn't stop ringing now. Worth every penny.",
      name: "Jake Morales",
      company: "Morales Roofing — San Antonio, TX",
      platform: "Fiverr",
    },
    {
      quote:
        "They delivered in exactly 7 days like they promised. The site looks incredible on mobile and our Google ranking jumped from page 4 to page 1 within 6 weeks.",
      name: "Brad Calloway",
      company: "Texas Peak Roofing — Plano, TX",
      platform: "Upwork",
    },
    {
      quote:
        "After the last hurricane season we needed a site fast. They set up our emergency landing page in 48 hours and we booked 30+ inspections that month alone.",
      name: "Maria Santos",
      company: "Santos Storm Services — Houston, TX",
      platform: "Fiverr",
    },
  ];

  return (
    <section id="reviews" className="w-full py-24 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-6">

        {/* Rating Badges */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <div className="bg-white px-6 py-4 rounded-full shadow-sm flex items-center gap-3 border">
            <span className="font-semibold text-gray-700">Rated on Fiverr</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-600 text-sm font-medium">
              5.0 (40+ reviews)
            </span>
          </div>

          <div className="bg-white px-6 py-4 rounded-full shadow-sm flex items-center gap-3 border">
            <span className="font-semibold text-gray-700">Rated on Upwork</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-600 text-sm font-medium">
              5.0 (25+ reviews)
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
          Client Reviews
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          Real Roofers. Real Results.
        </h2>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Texas roofing companies trust us to build their online presence.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 text-left"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.quote}”
              </p>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.company}
                </p>
                <span className="text-xs text-gray-400 mt-1 inline-block">
                  {item.platform}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-16 px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
          View Full Reviews
        </button>

      </div>
    </section>
  );
};

export default TrustedBy;