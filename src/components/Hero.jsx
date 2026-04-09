import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* Gradient Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-30 blur-[120px] top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-600 opacity-30 blur-[120px] bottom-[-100px] right-[-100px]"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Build. Scale. Grow Your{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Digital Presence
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg"
        >
          We craft high-performing websites, drive traffic through SEO, and scale your business with powerful online advertising strategies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition duration-300 shadow-lg">
            Get Started
          </button>

          <button className="px-6 py-3 rounded-2xl border border-gray-600 hover:bg-white hover:text-black transition duration-300">
            View Services
          </button>
        </motion.div>

        {/* Floating Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl max-w-md mx-auto"
        >
          <p className="text-sm text-gray-300">
             Trusted by 100+ businesses worldwide
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;