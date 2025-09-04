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
        <MdWorkspacePremium className="text-8xl text-emerald-500 drop-shadow-2xl" />
      ),
      waveOffset: 0,
    },
    {
      id: 2,
      value: 5000,
      label: "Happy Clients",
      icon: (
        <FaRegSmile className="text-8xl text-emerald-400 drop-shadow-2xl" />
      ),
      waveOffset: 50,
    },
    {
      id: 3,
      value: 12000,
      label: "Parcels Delivered",
      icon: <FaBox className="text-8xl text-emerald-500 drop-shadow-2xl" />,
      waveOffset: 100,
    },
    {
      id: 4,
      value: 50,
      label: "Service Districts",
      icon: (
        <FaMapMarkedAlt className="text-8xl text-emerald-400 drop-shadow-2xl" />
      ),
      waveOffset: 150,
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
    <section className="relative h-[600px] overflow-hidden">
      {/* Premium wavy background */}
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
        <svg
          className="absolute w-full h-full animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#10B981"
            fillOpacity="0.1"
            d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,202.7C672,192,768,192,864,192C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <path
            fill="#10B981"
            fillOpacity="0.2"
            d="M0,192L48,165.3C96,139,192,85,288,74.7C384,64,480,96,576,101.3C672,107,768,85,864,101.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/* Floating stats along wave */}
      <div className="relative w-full h-full flex justify-center items-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.3 }}
            className="absolute text-center"
            style={{ left: `${25 + i * 20}%`, bottom: `${20 + (i % 2) * 10}%` }}
            whileHover={{
              scale: 1.2,
              textShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
            }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {stat.icon}
            </motion.div>
            <h3 className="text-5xl font-extrabold text-green-700 mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-700">
                <AnimatedCounter value={stat.value} />
              </span>
              +
            </h3>
            <p className="text-gray-700 font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
