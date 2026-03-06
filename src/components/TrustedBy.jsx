
import { Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Test1 from '../assets/test_1.png';
import Test2 from '../assets/test_2.png';
import Test3 from '../assets/test_3.png';
import Test4 from '../assets/test_4.png';
import Test5 from '../assets/test_5.png';
import Test6 from '../assets/test_6.png';
import Test7 from '../assets/test_7.png';
import Test8 from '../assets/test_8.png';
import Test9 from '../assets/test_9.png';
import Test10 from '../assets/test_10.png';
import Test11 from '../assets/test_11.png';
import Test12 from '../assets/test_12.png';
import Test13 from '../assets/test_13.png';
import Test14 from '../assets/test_14.png';
import Test15 from '../assets/test_15.png';
import Test16 from '../assets/test_16.png';
import Test17 from '../assets/test_17.jpeg';

const TrustedBy = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 2) % images.length);
  };
  
  const prevSlide = () => {
    setIndex((prev) => (prev - 2 + images.length) % images.length);
  };

  const images = [
    Test1, Test2, Test3, Test4,
    Test5, Test6, Test7, Test8,
    Test9, Test10, Test11, Test12,
    Test13, Test14, Test15, Test16, Test17,
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

  <div className="flex text-orange-500 mb-2">
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
        <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
          Client Reviews
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0f172a]">
          Real Roofers. Real Results.
        </h2>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
          Texas roofing companies trust us to build their online presence.
        </p>

{/* Image Testimonials Carousel */}
<div className="mt-24 relative max-w-5xl mx-auto">

{/* Images */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <div className="w-full overflow-hidden rounded-xl shadow-lg">
    <img
      src={images[index]}
      alt="testimonial"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="w-full overflow-hidden rounded-xl shadow-lg">
    <img
      src={images[(index + 1) % images.length]}
      alt="testimonial"
      className="w-full h-full object-cover"
    />
  </div>

</div>

  {/* Left Arrow */}
  <button
    onClick={prevSlide}
    className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
  >
    <ChevronLeft size={22} />
  </button>

  {/* Right Arrow */}
  <button
    onClick={nextSlide}
    className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
  >
    <ChevronRight size={22} />
  </button>

</div>

        {/* Button */}
        <button className="mt-20 px-8 py-3 border-2 border-[#0f172a] text-[#0f172a] rounded-lg font-semibold hover:bg-[#0f172a] hover:text-white transition-all duration-500 cursor-pointer">
          View Full Reviews
        </button>

      </div>
    </section>
  );
};

export default TrustedBy;