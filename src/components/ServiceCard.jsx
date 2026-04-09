import { motion } from "framer-motion";

const ServiceCard = ({ title, desc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="text-left"
    >
      {/* Title - Deep Slate for high contrast */}
      <h3 className="text-xl md:text-2xl font-black text-slate-900 italic tracking-tighter">
        {title}
      </h3>
      
      {/* Description - Soft Slate for readability */}
      <p className="mt-3 text-slate-600 leading-relaxed font-medium">
        {desc}
      </p>

      {/* Decorative Accent Link-style text */}
      <div className="mt-4 flex items-center gap-2 text-purple-600 font-bold text-sm uppercase tracking-widest cursor-pointer group">
        Learn More 
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;