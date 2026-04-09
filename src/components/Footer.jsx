import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
         <div className="col-span-1 md:col-span-2 space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-gray-900 shadow-lg">
              G
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              Gradia
            </span>
          </Link>
          <p className="max-w-xs text-base text-gray-500 leading-relaxed">
            Discover, manage and join amazing events easily. Providing world-class 
            creative craftsmanship for modern teams.
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
