import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectPopup = ({ open, setOpen, projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!open) return null;

  // Determine number of visible images based on screen width
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3; // large screens
    if (window.innerWidth >= 768) return 2;  // medium screens
    return 1;                               // mobile
  };

  const visibleCount = getVisibleCount();

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= projects.length ? 0 : prev + 1
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg max-w-6xl w-full py-15 md:px-2  relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-700  cursor-pointer border border-gray-300 rounded-full p-1 hover:border-none hover:bg-orange-600 hover:text-white transition-all duration-600"
            >
              <X size={20} />
            </button>

            {/* Carousel */}
            <div className="flex items-center md:gap-4">
              <button
                onClick={handlePrev}
                className=""
              >
                <ChevronLeft className="cursor-pointer" size={30} />
              </button>

              <div className="flex overflow-hidden flex-1 gap-4">
                {projects
                  .slice(currentIndex, currentIndex + visibleCount)
                  .map((proj, i) => (
                    <div
                      key={i}
                      className="flex-shrink-1 w-full md:w-1/2 lg:w-1/3 rounded-lg overflow-hidden shadow-lg border border-gray-200"
                    >
                      <img
                        src={proj.img}
                        alt={proj.company}
                        className="w-full h-60 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{proj.company}</h3>
                        <p className="text-sm text-gray-500">{proj.location}</p>
                        <p className="mt-2 text-gray-600 text-sm">{proj.desc}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <button
                onClick={handleNext}
                className=" "
              >
                <ChevronRight className="cursor-pointer" size={30} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPopup;