import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">Logo</h1>

        {/* Menu */}
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Button */}
        <button className="bg-purple-500 px-4 py-2 rounded-lg">
          Get Started
        </button>

      </div>
    </nav>
  );
};

export default Navbar;