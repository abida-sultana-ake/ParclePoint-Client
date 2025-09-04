import React from "react";
import { FaBox, FaTruckMoving, FaRegSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const Works = () => {
  const steps = [
    {
      id: 1,
      title: "Book Your Parcel",
      description:
        "Easily book a parcel online with pickup and delivery details. We’ll handle the rest.",
      icon: <FaBox className="text-5xl text-emerald-400 drop-shadow-lg" />,
    },
    {
      id: 2,
      title: "Track in Real-Time",
      description:
        "Stay updated with live tracking so you know exactly where your parcel is.",
      icon: (
        <FaTruckMoving className="text-5xl text-emerald-400 drop-shadow-lg" />
      ),
    },
    {
      id: 3,
      title: "Fast & Secure Delivery",
      description:
        "Get your parcel delivered safely and on time across Bangladesh.",
      icon: <FaRegSmile className="text-5xl text-emerald-400 drop-shadow-lg" />,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" id="works">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl absolute top-10 left-10"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-72 h-72 bg-green-400/20 rounded-full blur-3xl absolute bottom-10 right-10"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 md:mb-20 text-base md:text-lg"
        >
          From booking to delivery, ParcelPoint makes sending parcels{" "}
          <span className="text-emerald-500 font-semibold">
            simple, reliable, and stress-free.
          </span>
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="relative group bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-emerald-100"
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-green-500 text-white font-bold text-lg shadow-lg">
                  {step.id}
                </div>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="p-5 sm:p-6 bg-emerald-50 rounded-full shadow-inner"
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-emerald-600 transition">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 sm:text-base text-sm group-hover:text-gray-800 transition leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
