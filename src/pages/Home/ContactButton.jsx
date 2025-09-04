import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Floating Heading */}
      <motion.h1
        className="relative text-4xl md:text-5xl mt-7 font-extrabold text-green-700 text-center mb-6 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        Are You Looking for Professional Courier Services?
      </motion.h1>

      {/* Floating Subtitle */}
      <motion.p
        className="relative text-gray-700 text-lg md:text-xl text-center mb-10 z-10"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Please contact us and experience fast, reliable, and secure parcel
        delivery.
      </motion.p>

      {/* Premium Contact Button */}
      <motion.a
        href="/contact"
        className="relative mb-7 z-10 px-10 py-5 rounded-3xl bg-gradient-to-r from-emerald-500 to-green-700 text-white font-bold border border-emerald-300 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 inline-block text-center"
        whileHover={{
          scale: 1.15,
          boxShadow: "0 0 40px rgba(16, 185, 129, 0.7)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us
      </motion.a>

      {/* Subtle floating gradient blobs */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-emerald-200/20 top-20 left-10 filter blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-36 h-36 rounded-full bg-green-300/25 bottom-20 right-16 filter blur-2xl"
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ContactSection;