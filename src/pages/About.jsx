import { motion } from "framer-motion";
import Stats from "../components/Stats";

const About = () => {
  return (
    <div className="relative px-6 py-24 min-h-screen">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 italic">
            About Us
          </h1>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            We help businesses grow with modern digital solutions and cutting-edge technology. 
            Our expertise transforms ideas into scalable digital realities.
          </p>
        </motion.div>

        {/* Stats Component Wrapper */}
        <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[40px] p-10 shadow-sm">
          <Stats />
        </div>

        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic">Our Vision</h2>
          <div className="max-w-3xl mx-auto p-8 rounded-[30px] bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-inner">
            <p className="text-xl text-slate-700 font-medium">
              "To become a global leader in digital innovation, empowering brands to 
              define the future of the web."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;