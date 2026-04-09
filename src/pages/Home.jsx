import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Testimonial from "../components/Testimonial";
import TestimonialSlider from "../components/TestimonialSlider";
import Services from "./Services";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";


const Home = () => {
  return (
    <>
     
      <Hero />
      <Services />
      <TestimonialSlider />
      <About />
      <Blog />
      <Contact />
      
    </>
  );
};

export default Home;
