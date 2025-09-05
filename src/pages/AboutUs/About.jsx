import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaClock, FaLightbulb, FaSmile } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-300/20 rounded-full -z-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-96 h-96 bg-green-200/20 rounded-full -z-10"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            About ParcelPoint
          </h2>
          <p className="text-emerald-900 text-lg md:text-xl">
            Fast, reliable, and secure parcel delivery services. We handle every
            package with care and deliver with speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src="https://i.pinimg.com/1200x/72/0a/3d/720a3dd6b7a261e1ee189325e575ae44.jpg"
              alt="Team"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Cards */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl font-semibold text-emerald-800 mb-3">
                Our Mission
              </h3>
              <p className="text-emerald-900 text-lg">
                Simplifying delivery with innovative technology and a
                customer-first approach.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl font-semibold text-emerald-800 mb-4">
                Our Values
              </h3>
              <ul className="space-y-3 text-emerald-900 text-lg">
                <li className="flex items-center gap-3">
                  <FaClock className="text-green-500" /> Reliability: Always on
                  time.
                </li>
                <li className="flex items-center gap-3">
                  <FaShieldAlt className="text-green-500" /> Security: Safe
                  delivery guaranteed.
                </li>
                <li className="flex items-center gap-3">
                  <FaLightbulb className="text-green-500" /> Innovation: Smart
                  solutions.
                </li>
                <li className="flex items-center gap-3">
                  <FaSmile className="text-green-500" /> Customer Focus: Your
                  satisfaction first.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
