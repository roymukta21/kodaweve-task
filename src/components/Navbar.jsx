import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  
  const handleNavClick = (path) => {
    setOpen(false); 

    if (path.startsWith("#")) {
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path); // Normal page routing
    }
  };

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Pricing", path: "#pricing-section" }, 
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 pt-0 md:pt-4">
      <motion.div
        layout
        initial={{ borderRadius: 0, width: "100%" }}
        animate={{
          width: scrolled ? "92%" : "100%",
          maxWidth: scrolled ? "1100px" : "100%",
          borderRadius: scrolled ? "100px" : "0px",
          y: scrolled ? 10 : 0,
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className={`flex justify-between items-center px-10 backdrop-blur-md shadow-sm transition-all duration-300 ${
          scrolled ? "py-3 shadow-lg" : "py-6"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center font-bold text-white shadow-md">
            G
          </div>
          <span className={`text-xl font-bold tracking-tighter transition-colors duration-300 ${
            scrolled ? "text-black" : "text-black"
          }`}>
            Gradia
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className={`text-sm font-medium transition-all relative group ${
                scrolled ? "text-gray-700 hover:text-black" : "text-black hover:text-black"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                scrolled ? "bg-black" : "bg-white"
              }`}></span>
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 ${
            scrolled 
              ? "bg-black text-white hover:bg-gray-800" 
              : "bg-white text-black hover:bg-gray-100"
          }`}>
            Remix template
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className={`md:hidden transition-colors ${scrolled ? "text-black" : "text-black"}`}>
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-white shadow-2xl border border-gray-100 rounded-3xl p-8 md:hidden z-40"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="text-lg font-semibold text-gray-800 hover:text-black block w-full"
                >
                  {link.name}
                </button>
              ))}
              <button className="w-full bg-black text-white py-4 rounded-full font-bold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;