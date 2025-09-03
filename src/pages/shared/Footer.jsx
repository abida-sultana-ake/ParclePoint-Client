import React from "react";
import { NavLink } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    { name: "Services", to: "/services" },
    { name: "Coverage", to: "/coverage" },
    { name: "About Us", to: "/about" },
    { name: "Pricing", to: "/pricing" },
    { name: "Be a Rider", to: "/rider" },
  ];

  return (
    <footer className="relative mt-10 bg-gradient-to-b from-emerald-700/30 via-green-600/20 to-emerald-900/30 backdrop-blur-2xl border-t border-emerald-400/30 shadow-[0_-4px_30px_rgba(16,185,129,0.2)] rounded-t-3xl overflow-hidden">
      {/* Floating Glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-screen-xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4 text-center md:text-left">
            <NavLink
              to="/"
              className="flex items-center gap-4 justify-center md:justify-start space-x-2 text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent drop-shadow-sm"
            >
              <img
                src="/assets/logo.png"
                alt="ParcelPoint Logo"
                className="h-10 drop-shadow-lg"
              />
              ParcelPoint
            </NavLink>
            <p className="text-sm text-green-600 leading-relaxed max-w-xs mx-auto md:mx-0">
              Premium parcel delivery across Bangladesh with speed, care, and
              modern coverage.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-lg font-semibold text-green-600 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-start gap-3 md:gap-6 text-green-600 font-medium">
              {footerLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `transition-all duration-300 hover:text-green-800 ${
                        isActive
                          ? "text-green-200 font-semibold after:w-full"
                          : "text-green-600"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                  {/* Underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-end space-y-3 w-full">
            <h4 className="text-lg font-semibold text-green-600">
              Stay Updated
            </h4>
            <p className="text-sm text-green-600 text-center md:text-right">
              Subscribe to get the latest updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row w-full max-w-xs gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-lg sm:rounded-l-xl bg-white/20 border border-emerald-400/30 text-green-50 placeholder-green-200/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 backdrop-blur-md"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium rounded-lg sm:rounded-r-xl hover:from-emerald-600 hover:to-green-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t text-green-500 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-green-600 space-y-4 sm:space-y-0 flex-wrap gap-4">
          <p>© {new Date().getFullYear()} ParcelPoint. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-emerald-300/30 hover:bg-emerald-400/30 transition text-green-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-emerald-300/30 hover:bg-emerald-400/30 transition text-green-600"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-emerald-300/30 hover:bg-emerald-400/30 transition text-green-600"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-emerald-300/30 hover:bg-emerald-400/30 transition text-green-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
