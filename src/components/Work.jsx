import React from "react";
import { TrendingUp } from "lucide-react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const Work = () => {
  const projects = [
    {
      img: "https://texan-roof-boost.lovable.app/assets/portfolio-residential-DcKfmx6o.jpg",
      category: "Residential Roofing",
      company: "Lone Star Roofing Co.",
      location: "Austin, TX",
      stat: "+180% more calls in 30 days",
      desc: "Full redesign with mobile-first layout, click-to-call, and Google Reviews integration.",
    },
    {
      img: "https://texan-roof-boost.lovable.app/assets/portfolio-storm-Bi1gzLQO.jpg",
      category: "Storm Damage",
      company: "Texas Storm Response",
      location: "Houston, TX",
      stat: "47 inspection requests in week 1",
      desc: "Emergency-focused landing page with urgency CTAs, insurance claim guide, and instant quote form.",
    },
    {
      img: "https://texan-roof-boost.lovable.app/assets/portfolio-commercial-9X3a5sn9.jpg",
      category: "Commercial Roofing",
      company: "Apex Commercial Roofing",
      location: "Dallas, TX",
      stat: "Ranked #1 for local keywords",
      desc: "Authority-positioning site with project gallery, certifications, and lead capture optimized for B2B.",
    },
  ];

  return (
    <section id="portfolio" className="w-full bg-[#f3f4f6] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <p className="text-orange-500 font-semibold text-sm tracking-[0.2em] uppercase">
          Our Work
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          Roofing Websites That Convert
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          Every site we build is designed to rank, load fast, and turn visitors into booked inspections.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden cursor-pointer group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image Wrapper (IMPORTANT for overlay + scale) */}
              <div className="relative overflow-hidden">
                
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.company}
                  className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 group-hover:bg-black/70 transition-all duration-500"></div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {item.category}
                </span>

                {/* Hover Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <div className="flex items-center gap-2 text-white font-semibold text-lg">
                    <LuSquareArrowOutUpRight size={20} />
                    View Case Study
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.company}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.location}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 bg-gray-100 text-gray-800 text-sm font-medium px-3 py-2 rounded-lg">
                  <TrendingUp size={16} className="text-orange-500" />
                  {item.stat}
                </div>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-10 py-4 rounded-xl shadow-lg">
            Get My Free Website Plan →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Work;