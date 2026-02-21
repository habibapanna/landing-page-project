import React from "react";

const Work = () => {
  const projects = [
    {
      img: "https://ironpeak-builder.lovable.app/assets/portfolio-residential-BBNkoJYq.png",
      title: "Residential Roofing",
      desc: "Modern website for a residential roofing company featuring lead capture forms.",
    },
    {
      img: "https://ironpeak-builder.lovable.app/assets/portfolio-storm-DHXgg2TQ.png",
      title: "Storm Damage Roofing",
      desc: "Emergency-focused design with strong CTAs for storm damage repair.",
    },
    {
      img: "https://ironpeak-builder.lovable.app/assets/portfolio-commercial-P8ZHfIea.png",
      title: "Commercial Roofing",
      desc: "Professional website showcasing large-scale commercial projects.",
    },
  ];

  return (
    <section id="portfolio" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
          Our Work
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Roofing Websites That Convert
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          See how we’ve helped roofing companies generate more leads online.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
            >
              <img src={item.img} alt={item.title} className="w-full" />

              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{item.desc}</p>

                <button className="mt-4 border border-orange-500 text-orange-500 px-4 py-2 rounded-md text-sm hover:bg-orange-50">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;