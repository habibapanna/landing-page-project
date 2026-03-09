import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import blogsData from "../data/blogsData";
import { Link } from "react-router-dom";

const BlogPopup = ({ open, setOpen, blogs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  if (!open) return null;

  const next = () => {
    if (currentIndex + visibleCount < blogs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
    onClick={() => setOpen(false)}
    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white max-w-6xl w-full rounded-lg py-15 md:px-4 relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-700  cursor-pointer border border-gray-300 rounded-full p-1 hover:border-none hover:bg-orange-600 hover:text-white transition-all duration-500"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4">

          <button
            onClick={prev}
            className="cursor-pointer"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="flex gap-6 overflow-hidden flex-1">

           
  {blogsData
  .slice(currentIndex, currentIndex + visibleCount)
  .map((blog, index) => (

  <Link
    key={index}
    to={`/blog/${blog.slug}`}
    className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden group hover:-translate-y-1 transition-all duration-500 cursor-pointer"
  >

    <div className="relative overflow-hidden">

      <img
        src={blog.img}
        alt=""
        className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 group-hover:bg-black/70 transition duration-500"></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          Read Blog
        </div>

      </div>

    </div>

    <div className="p-6">

      <h3 className="font-semibold text-lg text-gray-900">
        {blog.title}
      </h3>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        {blog.desc}
      </p>

    </div>

  </Link>

))}

          </div>

          <button
            onClick={next}
            className="cursor-pointer"
          >
            <ChevronRight size={30} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default BlogPopup;