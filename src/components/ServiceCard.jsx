import { motion } from "framer-motion";

const ServiceCard = ({ title, desc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl text-white"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300">{desc}</p>
    </motion.div>
  );
};

export default ServiceCard;