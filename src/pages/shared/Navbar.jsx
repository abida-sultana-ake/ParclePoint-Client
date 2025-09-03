import React, { useState } from "react";
import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout, MdDashboard, MdSettings } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

const Navbar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic nav links
  const navLinks = [
    { name: "Services", to: "/services" },
    { name: "Coverage", to: "/coverage" },
    { name: "About Us", to: "/about" },
    { name: "Pricing", to: "/pricing" },
    { name: "Be a Rider", to: "/rider" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-green-500/20 via-emerald-400/20 to-green-600/20 backdrop-blur-xl border-b border-green-300/30 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assets/logo.png"
            className="h-10 drop-shadow-md"
            alt="ParcelPoint Logo"
          />
          <span className="self-center lg:text-2xl md:text-xl font-bold whitespace-nowrap bg-gradient-to-r from-green-700 to-emerald-500 text-transparent bg-clip-text">
            ParcelPoint
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse relative">
          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex text-sm rounded-full focus:ring-2 focus:ring-emerald-400 hover:scale-105 transition"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-9 h-9 rounded-full border border-emerald-300/50 shadow-md"
                src="https://i.pinimg.com/736x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg"
                alt="user photo"
              />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-green-200/40 rounded-xl shadow-xl ring-1 ring-emerald-300/30 divide-y divide-green-100 z-50">
                <div className="px-4 py-3">
                  <p className="text-sm font-medium text-green-900">
                    Abida Sultana
                  </p>
                  <p className="text-sm text-green-700 truncate">
                    abida@gmail.com
                  </p>
                </div>
                <ul className="py-2 text-sm text-green-800">
                  <li>
                    <Link
                      to="/dashboard"
                      className="flex items-center px-4 py-2 hover:bg-emerald-100/40 rounded-lg transition"
                    >
                      <MdDashboard className="mr-2" /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 hover:bg-emerald-100/40 rounded-lg transition"
                    >
                      <MdSettings className="mr-2" /> Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/earnings"
                      className="flex items-center px-4 py-2 hover:bg-emerald-100/40 rounded-lg transition"
                    >
                      <FaMoneyBillWave className="mr-2" /> Earnings
                    </Link>
                  </li>
                </ul>
                <div className="py-2">
                  <button className="flex items-center w-full px-4 py-2 text-left text-red-600 hover:bg-red-100/40 rounded-lg transition">
                    <MdLogout className="mr-2" /> Sign out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-700 rounded-lg lg:hidden hover:bg-green-200/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col lg:flex-row font-medium p-4 lg:p-0 mt-4 border lg:border-0 lg:mt-0 lg:bg-transparent shadow-md lg:shadow-none rounded-lg lg:rounded-none">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  to={link.href}
                  className="block py-2 px-3 text-green-900 rounded-lg lg:rounded-none transition-colors duration-300 hover:text-emerald-600"
                >
                  {link.name}
                </Link>
                {/* Animated underline for large screens */}
                <span className="hidden lg:block absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/40 backdrop-blur-lg border-t border-green-200/40 shadow-xl lg:hidden z-40">
            <ul className="flex flex-col p-4 space-y-2 text-green-900">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="block py-2 px-3 rounded-lg hover:bg-emerald-100/40 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
