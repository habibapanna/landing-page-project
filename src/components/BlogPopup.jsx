import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
          <X />
        </button>

        <div className="flex items-center gap-4">

          <button
            onClick={prev}
            className="cursor-pointer"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="flex gap-6 overflow-hidden flex-1">

            {blogs
              .slice(currentIndex, currentIndex + visibleCount)
              .map((blog, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden w-full"
                >
                  <img
                    src={blog.img}
                    alt=""
                    className="w-full h-[200px] object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-lg">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-2">
                      {blog.desc}
                    </p>
                  </div>
                </div>
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