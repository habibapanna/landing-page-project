
import { Star, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import Test1 from '../assets/1.png';
import Test2 from '../assets/2.png';
import Test3 from '../assets/3.png';
import Test4 from '../assets/4.png';
import Test5 from '../assets/5.png';
import Test6 from '../assets/6.png';
import Test7 from '../assets/7.png';


const TrustedBy = () => {
  const [index, setIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const images = [
    Test1, Test2, Test3, Test4,
    Test5, Test6, Test7, 
  ];

  return (
    <section id="reviews" className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Rating Badges */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          
          <div className="bg-white px-8 py-4 rounded-lg flex items-center gap-4 shadow-md border border-gray-200">
          <img src="https://i.postimg.cc/pXW0PyPD/Whats-App-Image-2026-02-24-at-2-13-34-AM.jpg" alt="" />
          </div>

         <div className="bg-white px-8 py-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center text-center min-w-[220px]">
  
  <p className="text-gray-500 text-sm mb-1">Rated on</p>

  <h3 className="text-xl font-bold text-black mb-2">
    Upwork
  </h3>

  <div className="flex text-orange-600 mb-2">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={18} fill="currentColor" />
    ))}
  </div>

  <p className="text-sm font-semibold text-gray-500 font-medium">
    4.9 reviews (100% job success)
  </p>

</div>

        </div>

        {/* Section Heading */}
        <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase">
          Client Reviews
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0f172a]">
          Real Roofers. Real Results.
        </h2>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
          Texas roofing companies trust us to build their online presence.
        </p>

{/* Image */}
<div className="mt-10 md:mt-20 relative max-w-7xl mx-auto">

{/* Images */}
<div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

  <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
    <img src={images[0]} className="w-full h-full object-cover " />
  </div>

  <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
    <img src={images[1]} className="w-full h-full object-cover" />
  </div>

</div>


</div>

        {/* Button */}
        <button 
        onClick={() => setOpenModal(true)}
        className="mt-10 md:mt-20 px-8 py-3 border-2 border-[#0f172a] hover:text-[#0f172a] rounded-lg font-semibold hover:bg-white bg-[#0f172a] text-white transition-all duration-500 cursor-pointer">
          View Full Reviews
        </button>

      </div>
      {openModal && (
  <div
  onClick={() => setOpenModal(false)}
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

    <div
      onClick={(e) => e.stopPropagation()}
    className="relative bg-white rounded-lg max-w-3xl w-full p-15 lg:p-20">

      {/* Close Button */}
      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-4 right-4 cursor-pointer rounded-full border border-gray-500 p-[2px] hover:bg-orange-600 hover:border-none hover:text-white transition-all duration-500"
      >
        <X size={20} />
      </button>

      {/* Image */}
      <div className="relative">

        <img
          src={images[index]}
          className="w-full rounded-lg shadow-lg"
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute -left-10 top-1/2 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute -right-10 top-1/2 cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>

      </div>

    </div>

  </div>
)}
    </section>
  );
};

export default TrustedBy;