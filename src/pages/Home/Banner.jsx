import React, { useState, useEffect } from "react";

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
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-xl shadow-xl">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>
      ))}

      {/* Banner Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Fast & Reliable Parcel Delivery
        </h1>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl max-w-xl drop-shadow-md">
          Delivering your parcels across Bangladesh with speed, care, and modern
          coverage.
        </p>
        <button className="mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-shadow shadow-md hover:shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
