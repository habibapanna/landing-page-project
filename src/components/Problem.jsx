
import {
  CalendarDays,
  PhoneOff,
  ShieldAlert,
  Smartphone,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import PopupForm from "./PopupForm";
import { GoLightBulb } from "react-icons/go";

const Problem = () => {
  const problems = [
    {
      icon: ShieldAlert,
      title: "Lost Credibility Instantly",
      desc: "Homeowners Google you before calling. An outdated or missing website signals you're not trustworthy they move on to a competitor.",
    },
    {
      icon: PhoneOff,
      title: "Missed Calls & Lost Revenue",
      desc: "Without a clear call-to-action and phone number above the fold, potential customers bounce. Each bounce is a job you'll never know you lost.",
    },
    {
      icon: Smartphone,
      title: "Poor Mobile Experience",
      desc: "Over 70% of searches happen on phones. If your site isn't optimized for mobile, you're invisible to the majority of your market.",
    },
    {
      icon: CalendarDays,
      title: "Missed Inspection Bookings",
      desc: "Homeowners want to book instantly. Without online scheduling or a strong CTA, you lose them to roofers who make it easy.",
    },
  ];
 const [openPopup, setOpenPopup] = useState(false);

  return (
    <section id="services" className="w-full bg-white py-20 md:py-28">
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
          Referrals are great but they're not scalable. Every week without a
          high-performance website is revenue left on the table.
        </p>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
        {problems.map((item, index) => {
  const Icon = item.icon;

  return (
    <div
      key={index}
      className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition duration-300"
    >
      <div className="mb-6">
        <Icon size={32} className="text-orange-500" />
      </div>

      <div className="flex items-start gap-2">
        <XCircle size={18} className="text-red-500 mt-1" />
        <h3 className="font-semibold text-gray-900 text-lg leading-snug">
          {item.title}
        </h3>
      </div>

      <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
})}
        </div>

        {/* Bottom CTA */}
<button 
onClick={() => setOpenPopup(true)}
className="cursor-pointer">
<div className="mt-15 bg-orange-500 rounded-lg px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-8">
<GoLightBulb className="text-2xl text-white" />
          <p className="text-white text-lg md:text-xl font-medium text-left max-w-2xl flex items-center">
           The fix isn't more ads or more door-knocking. It's a website built
            specifically for roofing lead generation.
          </p>

          <button className="bg-white transition-all duration-500 text-orange-500 border border-orange-500 cursor-pointer  font-semibold px-8 py-4 rounded-lg shadow-lg">
            Fix My Website →
          </button>

        </div>
</button>
 {/* Reusable Popup Form */}
 <PopupForm open={openPopup} setOpen={setOpenPopup} />
      </div>
    </section>
  );
};

export default Problem;