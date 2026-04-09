import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden text-white">
      <img src={blog.image} alt="" className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{blog.title}</h3>
        <p className="text-gray-300 mt-2">{blog.excerpt}</p>

        <Link to={`/blog/${blog.id}`} className="text-purple-400 mt-3 inline-block">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;