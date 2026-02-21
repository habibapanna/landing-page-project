import React from "react";
import { Search, Layout, Code, Rocket, BarChart3 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Search size={26} />,
      step: "Step 01",
      title: "Discovery & Strategy",
      desc: "We analyze your market, competitors, and target audience in your Texas service area.",
    },
    {
      icon: <Layout size={26} />,
      step: "Step 02",
      title: "Custom Design",
      desc: "A unique, conversion-focused layout built specifically for roofing companies.",
    },
    {
      icon: <Code size={26} />,
      step: "Step 03",
      title: "Development",
      desc: "Fast, mobile-first, SEO-optimized website built with modern technology.",
    },
    {
      icon: <Rocket size={26} />,
      step: "Step 04",
      title: "Launch & Optimize",
      desc: "We launch your site and ensure it’s ranking and converting from day one.",
    },
    {
      icon: <BarChart3 size={26} />,
      step: "Step 05",
      title: "Ongoing Support",
      desc: "Continuous monitoring, updates, and performance improvements to keep you ahead.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
          Our Process
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Our 7-Day Roofing Website System
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          From strategy call to live website in just 7 days.
        </p>

        <div className="mt-16 grid md:grid-cols-5 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 text-white">
                {item.icon}
              </div>

              <p className="mt-4 text-xs uppercase text-orange-500 font-semibold">
                {item.step}
              </p>

              <h3 className="mt-2 font-semibold text-gray-900 text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;