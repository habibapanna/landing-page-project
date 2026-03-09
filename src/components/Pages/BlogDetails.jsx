import { useParams, useNavigate } from "react-router-dom";
import blogsData from "../../data/blogsData";

const BlogDetails = () => {

  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return <h2 className="text-center py-40">Blog not found</h2>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-40">

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-10 border border-gray-300 px-5 py-2 rounded-lg font-semibold text-gray-700 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-500 cursor-pointer"
      >
        ← Go Back
      </button>

      <img
        src={blog.img}
        className="w-full h-[400px] object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-10">
        {blog.title}
      </h1>

      <p className="text-gray-700 mt-6 leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>

    </section>
  );
};

export default BlogDetails;