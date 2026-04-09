import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const FloatingHome = () => {
  return (
    <Link
      to="/"
      className="fixed bottom-5 right-5 btn z-50"
    >
      <FaHome size={20} />
    </Link>
  );
};

export default FloatingHome;