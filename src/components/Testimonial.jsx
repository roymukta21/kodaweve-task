import { motion } from "framer-motion";

const Testimonial = ({ name, feedback }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative p-8 rounded-[40px] bg-white/60 backdrop-blur-xl border border-white/80 text-slate-900 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden"
    >
      {/* Subtle Shine Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/30 rounded-full blur-3xl -z-10" />

      {/* Stars - Matching the reddish-purple accent */}
      <div className="flex gap-1 mb-5">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-purple-500 text-xs">★</span>
          ))}
      </div>

      {/* Feedback - High visibility text */}
      <p className="text-slate-600 text-base leading-relaxed italic font-medium">
        “{feedback}”
      </p>

      {/* User Info */}
      <div className="mt-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center font-bold text-white shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-black text-slate-900 tracking-tight">{name}</h4>
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-600 opacity-70">
            Verified Client
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;