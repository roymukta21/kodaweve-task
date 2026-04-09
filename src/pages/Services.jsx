import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <ServiceCard title="Web Development" desc="Full-stack modern websites" />
        <ServiceCard title="SEO Optimization" desc="Improve search rankings" />
        <ServiceCard title="Online Ads" desc="Grow traffic & sales" />
      </div>

      {/* Pricing */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-6">
        {["Starter", "Growth", "Premium"].map((plan, i) => (
          <div key={i} className="p-6 border border-white/20 rounded-2xl text-center">
            <h2 className="text-2xl font-bold">{plan}</h2>
            <p className="mt-2 text-gray-400">$99/month</p>
            <button className="btn">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;