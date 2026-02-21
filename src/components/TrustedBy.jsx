import React from "react";
import { Star } from "lucide-react";

const TrustedBy = () => {
  const testimonials = [
    {
      quote:
        "IronPeak Web completely transformed our online presence. We went from barely any leads to getting 15+ calls a week.",
      name: "Mike R.",
      company: "Owner, Texas Shield Roofing",
    },
    {
      quote:
        "The team delivered our website in just 5 days. It looks incredible and our booking form alone has brought inspections.",
      name: "Sarah T.",
      company: "Marketing Director, Summit Roof Co.",
    },
    {
      quote:
        "Professional, fast, and they truly understand the roofing industry. Our site finally matches our quality of work.",
      name: "James L.",
      company: "Founder, Lone Star Roofing",
    },
  ];

  return (
    <section className="w-full py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
          Trusted by Roofers
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          5-Star Rated on Fiverr & Upwork
        </h2>

        <div className="flex justify-center mt-4 gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" size={20} />
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border shadow-sm text-left"
            >
              <p className="text-gray-600 text-sm">“{item.quote}”</p>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.company}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium shadow">
          Book Free Strategy Call
        </button>
      </div>
    </section>
  );
};

export default TrustedBy;