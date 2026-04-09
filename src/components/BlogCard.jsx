import { motion } from "framer-motion";
import { Link } from "react-router";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white/60 backdrop-blur-xl border border-white/80 rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
    >
      {/* Blog Image with Hover Zoom */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-purple-600">
          Latest News
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-black text-slate-900 italic leading-tight group-hover:text-purple-600 transition-colors">
          {blog.title}
        </h3>
        
        <p className="text-slate-500 mt-4 text-sm leading-relaxed line-clamp-2">
          {blog.excerpt}
        </p>

        <Link 
          to={`/blog/${blog.id}`} 
          className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-900 group-hover:text-purple-600 transition-all"
        >
          Read More 
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;