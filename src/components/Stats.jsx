import { motion } from "framer-motion";

const Stats = () => {
  const data = [
    { number: "100+", label: "Happy Clients" },
    { number: "250+", label: "Projects Delivered" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="relative text-center p-8 rounded-[30px] bg-transparent transition-all"
        >
          {/* Subtle divider for desktop */}
          {i !== 2 && (
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200" />
          )}
          
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-slate-900 mb-2 italic tracking-tighter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {item.number}
          </motion.h2>
          <p className="text-sm font-bold uppercase tracking-widest text-purple-600 opacity-80">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;