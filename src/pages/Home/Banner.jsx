import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const images = [
    "https://i.pinimg.com/736x/dd/32/42/dd3242f752532dc893c3ad89ae57498a.jpg",
    "https://i.pinimg.com/1200x/96/c6/c5/96c6c5e25f9319e4635cf32fdc6cdb14.jpg",
    "https://i.pinimg.com/1200x/0a/cc/f5/0accf5d7b962e756592cc2307f9f65bb.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  h-[400px] md:h-[600px] lg:h-[700px]  overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Banner Text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Fast & Reliable Parcel Delivery
        </motion.h1>
        <motion.p
          className="text-xs sm:text-sm md:text-lg lg:text-xl max-w-xl drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Delivering your parcels across Bangladesh with speed, care, and modern
          coverage.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-shadow shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Wave Shape at Bottom */}
      <div className="absolute bottom-0 left-0 w-full  overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-24 md:h-32 lg:h-40 text-white"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,160L60,160C120,160,240,160,360,181.3C480,203,600,245,720,234.7C840,224,960,160,1080,154.7C1200,149,1320,203,1380,229.3L1440,256V320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
