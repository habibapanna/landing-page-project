import React from "react";
import {
  ShieldAlert,
  PhoneOff,
  Smartphone,
  CalendarDays,
  XCircle,
} from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: '📉',
      title: "Lost Credibility Instantly",
      desc: "Homeowners Google you before calling. An outdated or missing website signals you're not trustworthy — they move on to a competitor.",
    },
    {
      icon: '📵',
      title: "Missed Calls & Lost Revenue",
      desc: "Without a clear call-to-action and phone number above the fold, potential customers bounce. Each bounce is a job you'll never know you lost.",
    },
    {
      icon: '📱',
      title: "Poor Mobile Experience",
      desc: "Over 70% of searches happen on phones. If your site isn't optimized for mobile, you're invisible to the majority of your market.",
    },
    {
      icon: '🗓️',
      title: "Missed Inspection Bookings",
      desc: "Homeowners want to book instantly. Without online scheduling or a strong CTA, you lose them to roofers who make it easy.",
    },
  ];

  return (
    <section id="services" className="w-full bg-[#f1f5f9] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Top Label */}
        <p className="text-orange-500 font-semibold text-sm tracking-[0.25em] uppercase">
          The Real Problem
        </p>

        {/* Main Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900 leading-[1.15] max-w-4xl mx-auto">
          Most Roofing Companies Rely Only on Referrals
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Referrals are great — but they're not scalable. Every week without a
          high-performance website is revenue left on the table.
        </p>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-left">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-300"
            >
              <div className="mb-6 text-3xl">{item.icon}</div>

              <div className="flex items-start gap-2">
                <XCircle size={18} className="text-red-500 mt-1" />
                <h3 className="font-semibold text-gray-900 text-lg leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-15 bg-gradient-to-r from-[#0b1220] to-[#111827] rounded-2xl px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <p className="text-white text-lg font-medium text-left max-w-2xl">
            💡 The fix isn't more ads or more door-knocking. It's a website built
            specifically for roofing lead generation.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-300">
            Fix My Website →
          </button>

        </div>
      </div>
    </section>
  );
};

export default Problem;