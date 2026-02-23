import React from "react";
import { ShieldAlert, PhoneOff, Smartphone, CalendarX, XCircle } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <ShieldAlert size={32} className="text-gray-700" />,
      title: "Lost Credibility Instantly",
      desc: "Homeowners Google you before calling. An outdated or missing website signals you're not trustworthy — they move on to a competitor.",
    },
    {
      icon: <PhoneOff size={32} className="text-gray-700" />,
      title: "Missed Calls & Lost Revenue",
      desc: "Without a clear call-to-action and phone number above the fold, potential customers bounce. Each bounce is a job you'll never know you lost.",
    },
    {
      icon: <Smartphone size={32} className="text-gray-700" />,
      title: "Poor Mobile Experience",
      desc: "Over 70% of searches happen on phones. If your site isn’t optimized for mobile, you're invisible to the majority of your market.",
    },
    {
      icon: <CalendarX size={32} className="text-gray-700" />,
      title: "Missed Inspection Bookings",
      desc: "Homeowners want to book instantly. Without online scheduling or a strong CTA, you lose them to roofers who make it easy.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f4f6] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Small Top Label */}
        <p className="text-orange-500 font-semibold text-sm tracking-[0.2em] uppercase">
          The Real Problem
        </p>

        {/* Main Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Most Roofing Companies Rely Only on Referrals
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          Referrals are great — but they're not scalable. Every week without a
          high-performance website is revenue left on the table.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-left">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow-md border border-gray-200"
            >
              <div className="mb-5">{item.icon}</div>

              <div className="flex items-center gap-2">
                <XCircle size={18} className="text-red-500" />
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[#0f172a] to-[#111827] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white text-lg font-medium text-left max-w-2xl">
            💡 The fix isn't more ads or more door-knocking. It's a website
            built specifically for roofing lead generation.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-8 py-4 rounded-xl shadow-lg">
            Fix My Website →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Problem;