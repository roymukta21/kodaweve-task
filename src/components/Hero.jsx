import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Aesthetic Glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-200/40 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/30 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 text-center z-10">
        {/* Main Headline with high-contrast text */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-black text-slate-900 italic leading-tight tracking-tighter"
        >
          Build the Future <br /> 
          <span className="text-purple-600">of Digital Presence</span>
        </motion.h1>
        
        {/* Description - Slate gray for better readability on white */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium"
        >
          Kodawave delivers high-end web solutions with cutting-edge 3D animations and seamless user experiences.
        </motion.p>

        {/* Using the premium .btn class from your index.css */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="btn mt-10">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;