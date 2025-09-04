import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Accent Shape */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Image with Floating Badge */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://i.pinimg.com/1200x/d8/d8/f9/d8d8f919767574dfca50f52e7c93eb49.jpg"
            alt="Courier Service"
            className="rounded-3xl shadow-2xl border-4 border-white"
          />

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 left-10 bg-white/80 backdrop-blur-xl border border-emerald-100 shadow-xl rounded-2xl p-6 w-64"
          >
            <p className="text-xs font-medium text-gray-500 mb-1 tracking-wider">
              WE PROVIDE PREMIUM COURIER SERVICES
            </p>
            <h3 className="text-5xl font-extrabold text-emerald-600 drop-shadow-sm">
              24+
            </h3>
            <p className="text-gray-700 font-semibold">Years of Excellence</p>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-emerald-500 font-semibold uppercase tracking-wide mb-3"
          >
            Who We Are
          </motion.p>
          <hr className="w-24 h-1 rounded-full m-4 border-0 bg-gradient-to-r from-emerald-500 to-green-700" />

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            Delivering <span className="text-emerald-600">Speed</span>,{" "}
            <span className="text-emerald-600">Security</span> &{" "}
            <span className="text-emerald-600">Trust</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            With decades of expertise, we’ve set the benchmark for premium
            courier and parcel delivery services across Bangladesh. Our
            solutions combine technology with care to give you a flawless
            shipping experience.
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            From advanced tracking to doorstep service, our goal is to make your
            delivery process seamless, secure, and worry-free. Your trust fuels
            our journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;