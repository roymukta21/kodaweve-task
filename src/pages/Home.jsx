import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        <ServiceCard title="Web Development" desc="Modern websites" />
        <ServiceCard title="SEO" desc="Rank higher on Google" />
        <ServiceCard title="Ads" desc="Scale your business" />
      </div>

      <Footer />
    </>
  );
};

export default Home;