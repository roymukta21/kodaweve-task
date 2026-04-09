import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Task</h2>
          <p className="mt-3 text-sm text-gray-400">
            Discover, manage and join amazing events easily. Built with ❤️ using
            React.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
          <Link to="/">Home</Link><br />
          <Link to="/services">Services</Link><br />
          <Link to="/contact">Contact</Link>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <img src="./github.png" alt="" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <img src="./linkedin.png" alt="" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <img src="/facebook.png" alt="facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <img src="./send.png" alt="" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kodawave-Task. All rights reserved.
      </div>
    </footer>
  );
}
