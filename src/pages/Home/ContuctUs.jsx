import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const bubbles = [
    { id: 1, icon: <FaEnvelope />, top: "10%", left: "10%", size: 16 },
    { id: 2, icon: <FaPhone />, top: "40%", left: "80%", size: 20 },
    { id: 3, icon: <FaMapMarkerAlt />, top: "70%", left: "25%", size: 24 },
    { id: 4, icon: <FaEnvelope />, top: "30%", left: "50%", size: 12 },
    { id: 5, icon: <FaPhone />, top: "60%", left: "60%", size: 18 },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Floating bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full flex items-center justify-center text-white shadow-xl"
          style={{
            top: bubble.top,
            left: bubble.left,
            width: `${bubble.size}vmin`,
            height: `${bubble.size}vmin`,
            background: "rgba(16, 185, 129, 0.2)",
          }}
          animate={{ y: [0, -25, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
          transition={{
            duration: 5 + bubble.id,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2, background: "rgba(16, 185, 129, 0.35)" }}
        >
          <div className="text-xl md:text-2xl">{bubble.icon}</div>
        </motion.div>
      ))}

      {/* Contact Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/70 backdrop-blur-3xl rounded-3xl shadow-2xl p-10 border border-emerald-100">
        {/* Info Column */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-extrabold text-green-700">
            Get in Touch
          </h2>
          <p className="text-gray-700">
            Fill in the form to start a conversation
          </p>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-emerald-500" />
              Mohammadpur, 9999 City
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-emerald-500" />
              123-456-789
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-emerald-500" />
              contact@parclepoint.com
            </p>
          </div>
        </div>

        {/* Form Column */}
        <form className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-xl border border-gray-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 outline-none transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-xl border border-gray-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 outline-none transition"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-4 rounded-xl border border-gray-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 outline-none transition"
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
