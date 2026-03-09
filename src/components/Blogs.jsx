import React, { useState, useEffect } from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import BlogPopup from "./BlogPopup";
import blogsData from "../data/blogsData";
import { Link } from "react-router-dom";

const Blogs = () => {

  const [openPopup, setOpenPopup] = useState(false);
  const [visibleBlogs, setVisibleBlogs] = useState(3);


  useEffect(() => {

    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisibleBlogs(3);
      else if (window.innerWidth >= 768) setVisibleBlogs(2);
      else setVisibleBlogs(1);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);

  }, []);

  return (
    <section id="blogs" className="w-full bg-[#f1f5f9] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 text-center">

        <p className="text-orange-600 font-semibold text-sm tracking-[0.2em] uppercase">
          Blog & Insights
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          Roofing Marketing Insights
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          Tips, strategies, and insights to help roofing companies grow faster online.
        </p>

        {/* Blog Cards */}

        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 text-left">

        {blogsData.slice(0, visibleBlogs).map((blog, index) => (

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
          <LuSquareArrowOutUpRight size={20} />
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

        {/* View More Button */}

        <div className="mt-16">

          <button
            onClick={() => setOpenPopup(true)}
            className="bg-orange-600 hover:bg-white transition-all duration-500 hover:text-orange-600 border border-orange-600 cursor-pointer text-white font-semibold px-10 py-4 rounded-lg shadow-lg"
          >
            View More Blogs →
          </button>

        </div>

      </div>

      <BlogPopup
        open={openPopup}
        setOpen={setOpenPopup}
      />

    </section>
  );
};

export default Blogs;