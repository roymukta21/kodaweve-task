const Testimonial = ({ name, feedback }) => {
  return (
    <div className="bg-white/10 border border-white/20 p-6 rounded-2xl text-white">
      <p className="text-gray-300">"{feedback}"</p>
      <h4 className="mt-4 font-semibold">{name}</h4>
    </div>
  );
};

export default Testimonial;