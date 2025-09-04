import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", to: "/features" },
      { name: "Integrations", to: "/integrations" },
      { name: "Pricing", to: "/pricing" },
      { name: "FAQ", to: "/faq" },
    ],
    Company: [
      { name: "Privacy Policy", to: "/privacy" },
      { name: "Terms of Service", to: "/terms" },
    ],
    Developers: [
      { name: "Public API", to: "/api" },
      { name: "Documentation", to: "/docs" },
      { name: "Guides", to: "/guides" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-green-500/20 via-emerald-400/20 to-green-600/20 backdrop-blur-xl border-t border-green-300/30 shadow-inner rounded-t-3xl mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-4">
            <Link
              to="/"
              className="flex justify-center lg:justify-start items-center gap-3 text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent"
            >
              <img
                src="/assets/logo.png"
                alt="ParcelPoint Logo"
                className="h-10 drop-shadow-md"
              />
              ParcelPoint
            </Link>
            <p className="text-sm text-green-900/80 leading-relaxed max-w-sm mx-auto lg:mx-0">
              Fast, secure, and reliable parcel delivery across Bangladesh.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm lg:w-2/3">
            {Object.entries(footerLinks).map(([title, links], idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="uppercase font-semibold text-green-900 tracking-wide">
                  {title}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.to}
                        className="hover:text-emerald-700 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="uppercase font-semibold text-green-900 tracking-wide">
                Social
              </h3>
              <div className="flex gap-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                  (Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/40 border border-green-300/40 text-green-700 hover:bg-emerald-200/50 transition"
                    >
                      <Icon size={16} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-300/30 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-green-800">
          © {new Date().getFullYear()} ParcelPoint. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
