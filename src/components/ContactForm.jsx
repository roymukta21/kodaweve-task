const ContactForm = () => {
  return (
    <form className="max-w-xl mx-auto space-y-6">
      {/* Name Field */}
      <div className="group">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-2xl bg-white/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all shadow-sm"
        />
      </div>

      {/* Email Field */}
      <div className="group">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-2xl bg-white/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all shadow-sm"
        />
      </div>

      {/* Message Field */}
      <div className="group">
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-4 rounded-2xl bg-white/50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none shadow-sm"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="w-full py-4 rounded-full btn shadow-lg hover:shadow-purple-500/30 transition-shadow">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;