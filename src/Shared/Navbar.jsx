import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BiSolidZap } from "react-icons/bi";
import Logo from './../../public/WhatsApp_Image_2026-03-08_at_12.24.59_AM-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const calendlyLink =
    "https://calendly.com/ironpeakweb/30min?month=2026-02";

  const navItems = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Reviews", href: "#reviews" },
  ];

  // Scrollspy effect
useEffect(() => {
  const sections = navItems.map((item) =>
    document.querySelector(item.href)
  );

  const hero = document.querySelector("#hero");
  const footer = document.querySelector("#footer");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });

      // If hero visible → remove active link
      if (hero && hero.getBoundingClientRect().top >= -100) {
        setActiveSection("");
      }

      // If footer visible → remove active link
      if (
        footer &&
        footer.getBoundingClientRect().top <
          window.innerHeight - 200
      ) {
        setActiveSection("");
      }
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((sec) => sec && observer.observe(sec));

  return () => sections.forEach((sec) => sec && observer.unobserve(sec));
}, []);

  return (
    <header className="w-full bg-white fixed top-10 z-50 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
          <a href="/">
            <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
              <span className=" bg-white"><img src={Logo} alt="" className="bg-white h-full w-full" /></span>
            </div>
          </a>
          <a href="/">
            <h1 className="text-[15px] md:text-lg font-semibold text-gray-900">
              IronPeak<span className="text-orange-600">Web</span>
            </h1>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[14px] text-gray-500 font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors duration-500 ${
                activeSection === item.href
                  ? "text-orange-600 font-semibold"
                  : "hover:text-gray-900"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-white transition-all duration-500 hover:text-orange-600 border border-orange-600 cursor-pointer text-white px-5 py-2 rounded-lg text-[14px] font-semibold inline-block"
          >
            Book Free Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-4 py-6 gap-6 text-[15px] font-medium text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`transition ${
                  activeSection === item.href
                    ? "text-orange-600 font-semibold"
                    : "hover:text-gray-900"
                }`}
              >
                {item.name}
              </a>
            ))}

            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-orange-600 hover:bg-white transition-all duration-500 hover:text-orange-600 border border-orange-600 cursor-pointer text-white py-3 rounded-lg font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Free Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;