import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="relative px-6 py-24 min-h-screen overflow-hidden">
      
      {/* Background Glows for Aesthetic */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-bold tracking-widest uppercase text-xs">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 italic">
            Contact Us
          </h1>
          <p className="text-slate-500 mt-4 max-w-md mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-12 rounded-[40px] shadow-xl shadow-purple-500/5"
        >
          <ContactForm />
        </motion.div>

        {/* Contact Details */}
        <div className="text-center mt-16 space-y-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-purple-600 font-bold">Email Us</p>
              <p className="text-xl font-bold text-slate-800 hover:text-purple-600 transition-colors cursor-pointer">
                contact@kodawave.com
              </p>
            </div>
            <div className="hidden md:block w-px h-10 bg-slate-200" />
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-purple-600 font-bold">Call Us</p>
              <p className="text-xl font-bold text-slate-800 hover:text-purple-600 transition-colors cursor-pointer">
                +1 234 567 890
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;