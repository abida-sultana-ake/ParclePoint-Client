import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "E-commerce Owner",
      feedback:
        "ParcelPoint made my deliveries super smooth! Their tracking and speed are unmatched.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Lee",
      role: "Small Business",
      feedback:
        "I love how reliable and transparent ParcelPoint is. My customers get their packages on time, every time.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Ayesha Khan",
      role: "Freelancer",
      feedback:
        "Affordable and fast delivery. ParcelPoint has helped me grow my business with hassle-free logistics.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-emerald-50 via-white to-emerald-100 overflow-hidden">
      {/* Decorative Wavy Background */}
      <svg
        className="absolute top-0 left-0 w-full h-40 text-emerald-300 opacity-30"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,256L60,224C120,192,240,128,360,117.3C480,107,600,149,720,181.3C840,213,960,235,1080,208C1200,181,1320,107,1380,69.3L1440,32L1440,0L0,0Z"
        ></path>
      </svg>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
          What Our Clients Say
        </h2>
        <p className="mb-16 text-gray-600 max-w-2xl mx-auto">
          Thousands of businesses and individuals trust us with their
          deliveries.
        </p>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-20 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-lg text-gray-800 rounded-3xl shadow-2xl p-10 max-w-2xl relative z-10 border border-emerald-100"
            >
              <FaQuoteLeft className="text-emerald-500 text-4xl mb-6 mx-auto" />
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-emerald-500 object-cover mb-6 shadow-lg"
              />
              <p className="italic text-lg mb-8 leading-relaxed text-gray-700">
                “{testimonials[index].feedback}”
              </p>
              <h4 className="text-2xl font-bold">{testimonials[index].name}</h4>
              <p className="text-sm text-gray-500 mt-1">
                {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full transition-all ${
                i === index
                  ? "bg-emerald-500 scale-110"
                  : "bg-gray-300 hover:bg-emerald-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
