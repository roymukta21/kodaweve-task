import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
        <h1 className="text-xl font-bold">Kodawave</h1>

        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;