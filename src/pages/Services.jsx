import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    { title: "Web Development", desc: "Full-stack modern websites" },
    { title: "SEO Optimization", desc: "Improve search rankings" },
    { title: "Online Ads", desc: "Grow traffic & sales" },
  ];

  const pricing = [
    { name: "Starter", price: "$49/month" },
    { name: "Growth", price: "$99/month" },
    { name: "Premium", price: "$149/month" },
  ];

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: 10 },
    show: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.7, ease: "easeOut" } },
    hover: { scale: 1.05, rotateY: 5, rotateX: 5, boxShadow: "0 20px 50px rgba(0,0,0,0.3)" },
  };

  return (
    <div className="bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-14">Our Services</h1>

      {/* Services Cards */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 perspective-1000"
        initial="hidden"
        animate="show"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <ServiceCard title={service.title} desc={service.desc} />
          </motion.div>
        ))}
      </motion.div>

      {/* Pricing Section */}
     <div id="pricing-section">
       <h2 className="text-3xl font-bold text-center mt-20 mb-10">Pricing Plans</h2>

      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 perspective-1000"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {pricing.map((plan, i) => (
          <motion.div
            key={i}
            className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="mt-2 text-gray-300">{plan.price}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
     </div>
    </div>
  );
};

export default Services;