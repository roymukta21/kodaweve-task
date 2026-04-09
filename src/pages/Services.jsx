import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    { title: "Web Development", desc: "Full-stack modern websites", icon: "🌐" },
    { title: "SEO Optimization", desc: "Improve search rankings", icon: "📈" },
    { title: "Online Ads", desc: "Grow traffic & sales", icon: "🚀" },
  ];

  const pricing = [
    { name: "Starter", price: "$49", features: ["Basic SEO", "1 Landing Page"] },
    { name: "Growth", price: "$99", features: ["Advanced SEO", "5 Pages", "Ads"] },
    { name: "Premium", price: "$149", features: ["Full Support", "Unlimited Pages"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
    hover: { 
      y: -10, 
      transition: { duration: 0.3, ease: "easeInOut" } 
    },
  };

  return (
    <div className="relative px-6 py-24 overflow-hidden">
      {/* Services Section */}
      <div className="max-w-6xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 italic leading-tight">
            High-end solutions
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white/40 backdrop-blur-xl border border-white p-8 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <ServiceCard title={service.title} desc={service.desc} />
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-purple-500 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pricing Section */}
      <div id="pricing-section" className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-black text-center mb-16 text-slate-900 italic"
        >
          Flexible Pricing
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pricing.map((plan, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-10 rounded-[40px] border transition-all duration-500 flex flex-col ${
                i === 1 
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white/60 text-slate-900 border-white shadow-sm'
              }`}
            >
              {i === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-sm opacity-60">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8 text-sm flex-grow">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-purple-500 font-bold">✔</span> {feat}
                  </li>
                ))}
              </ul>

              {/* Using the global .btn class from your index.css */}
              <button className="btn w-full !mt-auto">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;