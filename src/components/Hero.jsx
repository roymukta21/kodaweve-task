import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background 3D-ish Glow */}
      <div className="absolute top-1/4 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
        >
          Build the Future <br /> of Digital Presence
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Kodawave delivers high-end web solutions with cutting-edge 3D animations and seamless user experiences.
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-colors"
        >
          Start Your Project
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;