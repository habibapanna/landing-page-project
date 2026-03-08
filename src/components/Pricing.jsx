import React from "react";
import { Check, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-slate-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Top Label */}
        <p className="text-orange-600 font-semibold text-sm tracking-[0.25em] uppercase">
          Transparent Pricing
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          One-Time Investment. Lifetime Results.
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          A single booked roof job in USA covers your entire investment.
          Most clients break even in the first week.
        </p>

        {/* Pricing Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 items-center">

          {/* Starter */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-left">
            <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
            <p className="text-sm text-gray-500 mt-1">
              Great for new roofing companies
            </p>

            <div className="mt-6">
              <span className="text-3xl font-bold text-gray-900">$900</span>
              <span className="text-gray-500 text-sm ml-1">one-time</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {[
                "5-page custom website",
                "Mobile-responsive design",
                "Click-to-call & contact form",
                "Google Maps integration",
                "Basic on-page SEO",
                "1 round of revisions",
                "7-day delivery",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-gray-900 text-white py-3 rounded-lg font-semibold  hover:bg-white hover:text-gray-800 cursor-pointer border border-gray-800 transition-all duration-500">
              Get Started
            </button>
          </div>

          {/* Growth (Most Popular) */}
          <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-lg shadow-2xl p-10 text-left text-white scale-105">

            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
              <Zap size={14} />
              Most Popular
            </div>

            <h3 className="text-xl font-semibold">Growth</h3>
            <p className="text-sm text-gray-300 mt-1">
              Best for established USA roofers
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold">$1,400</span>
              <span className="text-gray-300 text-sm ml-1">one-time</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Everything in Starter",
                "10-page custom website",
                "Lead capture funnels",
                "Online appointment booking",
                "Local SEO + Google Business setup",
                "Speed & Core Web Vitals optimization",
                "CRM integration",
                "3 rounds of revisions",
                "7-day delivery",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check size={16} className="text-orange-400" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-orange-600 hover:white border border-orange-600 hover:bg-white hover:text-orange-600 transition-all duration-500 text-white cursor-pointer py-3 rounded-lg font-semibold shadow-lg">
              Book Free Strategy Call
            </button>
          </div>

          {/* Authority */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-left">
            <h3 className="text-xl font-semibold text-gray-900">Authority</h3>
            <p className="text-sm text-gray-500 mt-1">
              Dominate your USA market
            </p>

            <div className="mt-6">
              <span className="text-3xl font-bold text-gray-900">$2,200</span>
              <span className="text-gray-500 text-sm ml-1">one-time</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {[
                "Everything in Growth",
                "15+ pages including service areas",
                "Storm damage emergency landing page",
                "Advanced schema markup",
                "Reputation management setup",
                "Custom animations & interactions",
                "Priority support (30 days)",
                "Unlimited revisions",
                "48-hour launch option",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 cursor-pointer border border-gray-800 transition-all duration-500">
              Book Free Strategy Call
            </button>
          </div>

        </div>

        {/* ROI Box */}
        <div className="mt-20 max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-sm text-gray-700">
          💰 <span className="font-semibold">ROI Reality Check:</span> The average
          residential roof replacement in USA is $8,000–$15,000.
          One booked job from your new website pays for itself 5–15x.
          Most clients recoup their investment within 30 days.
        </div>

      </div>
    </section>
  );
};

export default Pricing;