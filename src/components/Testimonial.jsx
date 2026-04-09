import { motion } from "framer-motion";

const Testimonial = ({ name, feedback }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-lg overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition duration-300 rounded-2xl" />

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">★</span>
          ))}
      </div>

      {/* Feedback */}
      <p className="text-gray-300 text-sm leading-relaxed">
        “{feedback}”
      </p>

      {/* User Info */}
      <div className="mt-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-xs text-gray-400">Happy Client</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;