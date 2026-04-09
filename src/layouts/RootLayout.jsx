import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const RootLayout = () => {
  return (
    <div className="bg-[#030303] text-white min-h-screen selection:bg-purple-500">
      
      <main>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
     
    </div>
  );
};

export default RootLayout;