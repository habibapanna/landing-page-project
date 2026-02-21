import React from "react";
import { ShieldAlert, PhoneOff, Smartphone, CalendarX } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <ShieldAlert className="text-orange-500" size={28} />,
      title: "Lost Credibility",
      desc: "An outdated website makes homeowners question your professionalism before they even call.",
    },
    {
      icon: <PhoneOff className="text-orange-500" size={28} />,
      title: "Lost Calls",
      desc: "If your site is slow or confusing, visitors leave and call your competitors instead.",
    },
    {
      icon: <Smartphone className="text-orange-500" size={28} />,
      title: "Poor Mobile Experience",
      desc: "Over 70% of homeowners search for roofers on their phone. A non-responsive site loses them instantly.",
    },
    {
      icon: <CalendarX className="text-orange-500" size={28} />,
      title: "Missed Inspections",
      desc: "Without clear CTAs and booking forms, your website fails to convert visitors into booked inspections.",
    },
  ];

  return (
    <section id="why-us" className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
          The Problem
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Most Roofing Companies Rely Only on Referrals
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          And when potential customers do find your website, here’s what happens...
        </p>

        <div className="mt-14 grid md:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;