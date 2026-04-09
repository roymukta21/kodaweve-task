import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogData";

const Blog = () => {
  return (
    <div className="bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Blog</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;