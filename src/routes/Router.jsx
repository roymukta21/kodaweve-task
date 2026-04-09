import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Page */}
        <Route path="*" element={<h1 className="text-white text-center mt-20">404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;