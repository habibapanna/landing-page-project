import React from "react";


const Hero = () => {
  return (
    <section className="max-w-full w-full py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Roofing Companies
            <br />
            Without a Strong Website
            <br />
            <span className="text-orange-500">Lose Jobs Every Week.</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            IronPeak Web Builds & Redesigns Roofing Websites That Generate
            More Calls and Booked Inspections in Texas.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium shadow">
              Book Free Strategy Call
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md font-medium">
              See Our Work
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Texas-Based
            </span>

            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              7-Day Delivery
            </span>

            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              100% Custom
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://ironpeak-builder.lovable.app/assets/roofing-mockup-BmEgX2am.png"
            alt="mockup"
            className="w-[520px] max-w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;