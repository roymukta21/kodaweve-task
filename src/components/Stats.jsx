import { motion } from "framer-motion";

const Stats = () => {
  const data = [
    { number: "100+", label: "Clients" },
    { number: "250+", label: "Projects" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {data.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="text-center bg-white/10 p-6 rounded-2xl border border-white/20"
        >
          <h2 className="text-3xl font-bold text-white">{item.number}</h2>
          <p className="text-gray-300">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;