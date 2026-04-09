const ContactForm = () => {
  return (
    <form className="max-w-xl mx-auto bg-white/10 p-6 rounded-2xl border border-white/20">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full mb-4 p-3 rounded-lg bg-black/40 text-white"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full mb-4 p-3 rounded-lg bg-black/40 text-white"
      />

      <textarea
        placeholder="Your Message"
        className="w-full mb-4 p-3 rounded-lg bg-black/40 text-white"
      ></textarea>

      <button className="w-full py-3 rounded-xl btn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;