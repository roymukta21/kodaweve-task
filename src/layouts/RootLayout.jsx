import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHome from "../components/FloatingHome";

const RootLayout = () => {
  return (
    <div className=" text-white min-h-[80vh] selection:bg-purple-500">
      <Navbar />
      <main className="pt-5">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
        <Footer />
      </main>
      <FloatingHome />
    </div>
  );
};

export default RootLayout;
