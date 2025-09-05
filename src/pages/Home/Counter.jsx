import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegSmile, FaBox, FaMapMarkedAlt } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

const Counter = () => {
  const stats = [
    {
      id: 1,
      value: 24,
      label: "Years of Excellence",
      icon: (
        <MdWorkspacePremium className="text-6xl md:text-7xl lg:text-8xl text-emerald-500 drop-shadow-2xl" />
      ),
    },
    {
      id: 2,
      value: 5000,
      label: "Happy Clients",
      icon: (
        <FaRegSmile className="text-6xl md:text-7xl lg:text-8xl text-emerald-400 drop-shadow-2xl" />
      ),
    },
    {
      id: 3,
      value: 12000,
      label: "Parcels Delivered",
      icon: (
        <FaBox className="text-6xl md:text-7xl lg:text-8xl text-emerald-500 drop-shadow-2xl" />
      ),
    },
    {
      id: 4,
      value: 50,
      label: "Service Districts",
      icon: (
        <FaMapMarkedAlt className="text-6xl md:text-7xl lg:text-8xl text-emerald-400 drop-shadow-2xl" />
      ),
    },
  ];

  const AnimatedCounter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / value));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === value) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }, [value]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-emerald-50 via-white to-emerald-100 overflow-hidden">
      {/* Wavy Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#10B981"
            fillOpacity="0.1"
            d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,202.7C672,192,768,192,864,192C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L0,0Z"
          ></path>
          <path
            fill="#10B981"
            fillOpacity="0.2"
            d="M0,192L48,165.3C96,139,192,85,288,74.7C384,64,480,96,576,101.3C672,107,768,85,864,101.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Stats Grid */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
            }}
          >
            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {stat.icon}
            </motion.div>

            {/* Counter Value */}
            <h3 className="text-4xl md:text-5xl font-extrabold text-green-700 mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-700">
                <AnimatedCounter value={stat.value} />
              </span>
              +
            </h3>

            {/* Label */}
            <p className="text-gray-700 font-semibold mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
