import React from "react";
import { Target, Palette, Zap, Search, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "1",
      icon: <Target size={20} className="text-orange-500" />,
      title: "Strategy & Discovery Call",
      desc: "We learn your market, competitors, and goals. We identify your highest-converting offer and build the sitemap around it.",
      days: "Day 1–2",
    },
    {
      number: "2",
      icon: <Palette size={20} className="text-orange-500" />,
      title: "Custom Design Mockup",
      desc: "We design a conversion-focused layout tailored to roofing in your Texas market — not a template. You approve before we build.",
      days: "Day 2–3",
    },
    {
      number: "3",
      icon: <Zap size={20} className="text-orange-500" />,
      title: "Lightning-Fast Development",
      desc: "We build your site on a blazing-fast platform, mobile-optimized, with click-to-call, lead forms, and local SEO built in.",
      days: "Day 3–4",
    },
    {
      number: "4",
      icon: <Search size={20} className="text-orange-500" />,
      title: "SEO & Speed Optimization",
      desc: "We optimize every page for Google — meta tags, schema markup, Core Web Vitals, and local citation signals for Texas.",
      days: "Day 4–5",
    },
    {
      number: "5",
      icon: <Rocket size={20} className="text-orange-500" />,
      title: "Launch & Lead Capture",
      desc: "Your site goes live in 7 days. We connect your CRM, calendar, and lead forms so every visitor has a path to becoming a customer.",
      days: "Day 5–6",
    },
  ];

  return (
    <section id="process" className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Top Label */}
        <p className="text-orange-500 font-semibold text-sm tracking-[0.2em] uppercase">
          Our Process
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          Our 7-Day Roofing Website System
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          From strategy call to go-live in 7 days. Every step is engineered to maximize lead generation for Texas roofers.
        </p>

        {/* Steps */}
        <div className="mt-16 space-y-6 text-left">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 flex items-start justify-between gap-6 shadow-sm"
            >
              {/* Left Content */}
              <div className="flex items-start gap-5">
                
                {/* Number Circle */}
                <div className="w-10 h-10 hidden md:flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-sm shrink-0">
                  {item.number}
                </div>

                {/* Text */}
                <div>
                   {/* Number Circle */}
                <div className="w-10 h-10 md:hidden mb-5 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-sm shrink-0">
                  {item.number}
                </div>
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                   <span className="md:hidden flex items-center h-6 w-20 mt-5 text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium ">
                  {item.days}
                </span>
                </div>
                
              </div>

              {/* Day Badge */}
              <div className="hidden md:block shrink-0">
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                  {item.days}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-orange-500  hover:bg-white transition-all duration-500 hover:text-orange-500 border border-orange-500 cursor-pointer text-white font-semibold px-8 py-4 rounded-lg shadow-lg">
            Start Your 7-Day Build →
          </button>

          <p className="mt-4 text-sm text-gray-500">
            Limited spots available each month for Texas roofers.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Process;