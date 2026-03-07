
import {
  BadgeCheck,
  CalendarCheck,
  CalendarDays,
  PhoneMissed,
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
      icon: BadgeCheck,
      title: "Lost Credibility Instantly",
      desc: "Homeowners Google you before calling. An outdated or missing website signals you're not trustworthy they move on to a competitor.",
    },
    {
      icon: PhoneMissed,
      title: "Missed Calls & Lost Revenue",
      desc: "Without a clear call-to-action and phone number above the fold, potential customers bounce. Each bounce is a job you'll never know you lost.",
    },
    {
      icon: Smartphone,
      title: "Poor Mobile Experience",
      desc: "Over 70% of searches happen on phones. If your site isn't optimized for mobile, you're invisible to the majority of your market.",
    },
    {
        icon: CalendarCheck,
      title: "Missed Inspection Bookings",
      desc: "Homeowners want to book instantly. Without online scheduling or a strong CTA, you lose them to roofers who make it easy.",
    },
  ];
 const [openPopup, setOpenPopup] = useState(false);

  return (
    <section id="services" className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Top Label */}
        <p className="text-orange-600 font-semibold text-sm tracking-[0.25em] uppercase">
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
        <Icon size={50} className="text-gray-400" />
      </div>

      <div className="flex items-start gap-2">
        <h3 className="font-semibold text-gray-900 md:text-xl text-lg leading-snug">
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
  className="cursor-pointer w-full"
>
  <div
    className="mt-15 rounded-lg px-10 py-16 flex items-center bg-cover bg-center relative"
    style={{
      backgroundImage:
        "url('https://i.postimg.cc/523phXfJ/teenager-suffering-from-hangover.jpg')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

    {/* Content */}
    <div className="relative max-w-xl text-left flex flex-col items-center justify-center mx-auto gap-6">
      <p className="text-white text-xl md:text-3xl font-medium text-center">
        The fix isn't more ads or more door-knocking. It's a website built
        specifically for roofing lead generation.
      </p>

      <button className="hover:bg-white transition-all duration-500 hover:text-orange-600 border border-orange-600 cursor-pointer font-semibold px-8 py-4 rounded-lg shadow-lg bg-orange-600 text-white">
        Fix Your Website →
      </button>
    </div>
  </div>
</button>
 {/* Reusable Popup Form */}
 <PopupForm open={openPopup} setOpen={setOpenPopup} />
      </div>
    </section>
  );
};

export default Problem;