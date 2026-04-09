import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold flex items-center gap-2">
          <img
            src="/project.png"   // ✅ FIXED PATH
            alt="logo"
            className="w-6 h-6"
          />
          Task
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Button (desktop) */}
        <button className="hidden md:block bg-purple-500 px-4 py-2 rounded-lg">
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-black">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <button className="btn">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;