import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const FloatingHome = () => {
  return (
    <Link
      to="/"
      className="fixed bottom-10 right-10 btn z-50 !p-0 !w-14 !h-14 rounded-full shadow-2xl flex items-center justify-center hover:rotate-12 transition-transform duration-300"
    >
      <FaHome size={24} />
    </Link>
  );
};

export default FloatingHome;