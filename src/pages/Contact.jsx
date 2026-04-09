import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

      <ContactForm />

      <div className="text-center mt-10 text-gray-400">
        <p>Email: contact@kodawave.com</p>
        <p>Phone: +123456789</p>
      </div>
    </div>
  );
};

export default Contact;