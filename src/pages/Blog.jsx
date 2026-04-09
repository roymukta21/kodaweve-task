import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogData";

const Blog = () => {
  return (
    <div className="relative px-6 py-24 min-h-screen overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-bold tracking-widest uppercase text-[10px] md:text-xs">
            Insights & Updates
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 italic">
            Our Blog
          </h1>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            Explore the latest trends in web development, SEO, and digital growth.
          </p>
        </motion.div>

        {/* Blog Grid with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;