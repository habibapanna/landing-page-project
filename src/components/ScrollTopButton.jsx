import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const footer = document.getElementById("footer");

      if (!footer) return;

      const footerPosition = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerPosition <= windowHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-500 cursor-pointer"
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollTopButton;