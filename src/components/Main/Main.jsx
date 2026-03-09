import React from "react";
import Navbar from "../../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import { FaWhatsapp } from "react-icons/fa";
import TopBar from "../TopBar";

import ScrollToTop from "../../components/ScrollToTop";
import ScrollTopButton from "../../components/ScrollTopButton";

const Main = () => {

  const phoneNumber = "8801790430333";

  return (
    <div className="min-h-screen flex flex-col bg-white">

      <ScrollToTop />

      <TopBar />

      <Navbar />

      <main className="flex-grow w-full">
        <Outlet />
      </main>

      <Footer />

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Scroll To Top */}
      <ScrollTopButton />

    </div>
  );
};

export default Main;