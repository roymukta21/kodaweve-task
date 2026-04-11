import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* --- 1. Background Texture (Exact Line Pattern) --- */}
      <div 
        className="absolute inset-0 pointer-events-none -z-20 opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #000 0px,
            #000 1px,
            transparent 1px,
            transparent 10px
          )`,
          // Eita background texture ke center-e besi clear r side-e halka kore dibe (optional)
          maskImage: 'radial-gradient(circle, black 40%, transparent 90%)'
        }}
      />

      {/* --- 2. Background Glows --- */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-200/30 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-[100px] -z-10" />

      {/* --- 3. Floating Animated Shapes & Emojis --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="relative w-full h-full max-w-[1440px] mx-auto">
          {/* Top-Left */}
          <motion.div
            className="absolute top-[15%] left-[10%] w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="https://framerusercontent.com/images/i5grOIYyMVOOXLc1bblf9pICi28.png" className="absolute w-full h-full object-contain" alt="shape" />
            <img src="https://framerusercontent.com/images/cIjlehphhulQ6wwh6hoQ2nYgWU.png" className="relative z-10 w-[55%] h-[55%] object-contain" alt="emoji" />
          </motion.div>

          {/* Top-Right */}
          <motion.div
            className="absolute top-[12%] right-[10%] w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <img src="https://framerusercontent.com/images/hY7Mo2cVlCIoVidcIsSpSbggLY.png" className="absolute w-full h-full object-contain" alt="shape" />
            <img src="https://framerusercontent.com/images/Xzqnh0a3dlmTzw17TXxAMMjYiY.png" className="relative z-10 w-[55%] h-[55%] object-contain" alt="emoji" />
          </motion.div>

          {/* Bottom-Left */}
          <motion.div
            className="absolute bottom-[15%] left-[8%] w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
            animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <img src="https://framerusercontent.com/images/iCpTumkbzUz4WfrMjszhQov9rMw.png" className="absolute w-full h-full object-contain" alt="shape" />
            <img src="https://framerusercontent.com/images/mAB53Jr8vVgOxtJflwiq5QYgA.png" className="relative z-10 w-[50%] h-[50%] object-contain" alt="emoji" />
          </motion.div>

          {/* Bottom-Right */}
          <motion.div
            className="absolute bottom-[12%] right-[12%] w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
            animate={{ y: [0, 20, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <img src="https://framerusercontent.com/images/znvypDn3oFDC922Tmf9qapzyqE.png" className="absolute w-full h-full object-contain" alt="shape" />
            <img src="https://framerusercontent.com/images/7K4JNUkUSOzVZE1stoqxEL3ksQ.png" className="relative z-10 w-[55%] h-[55%] object-contain" alt="emoji" />
          </motion.div>
        </div>
      </div>

      {/* --- 4. Main Hero Content --- */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
        
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[44px] md:text-[86px] font-bold tracking-[-0.03em] text-[#1a1a1a] leading-[1.05] mb-8"
        >
          Design better, faster, <br />
          <span className="text-[#0066FF]">smarter websites</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#808080] text-lg md:text-[20px] mx-auto mb-12 max-w-2xl leading-[1.6]"
        >
          We design calm, conversion-ready websites for teams who value clarity,
          detail, and longevity.
        </motion.p>

        <div className="flex flex-row justify-center items-center gap-8">
          <button className="bg-white border border-gray-200 px-9 py-3.5 rounded-full text-[15px] font-bold text-[#1a1a1a] shadow-sm hover:shadow-md transition-all">
            Our work
          </button>
          <button className="text-[#1a1a1a] font-bold text-[15px] hover:opacity-60 transition-opacity">
            Schedule a call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;