import React from "react";
import { motion } from "framer-motion";

const Brands = () => {
  const brands = [
    {
      name: "FedEx",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/FedEx_Express.svg/2560px-FedEx_Express.svg.png",
    },
    { name: "DHL", logo: "https://cdn.worldvectorlogo.com/logos/dhl-1.svg" },
    {
      name: "UPS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UPS_Logo_Shield_2017.svg/1718px-UPS_Logo_Shield_2017.svg.png",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Shopify",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslcO84eWfXP_4Ucd4Yfz6B8uqJmHaTo0iTw&s",
    },
    {
      name: "eBay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
    },
    {
      name: "Target",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",
    },
    {
      name: "Walmart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Walmart_logo_%282008%29.svg/2560px-Walmart_logo_%282008%29.svg.png",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-600 mb-12 text-center"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        Trusted by Leading Brands
      </motion.h2>

      {/* Logos - slider effect */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-10 md:gap-16">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center p-4 hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.15 }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 md:h-16 lg:h-20 object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Gradient Blobs */}
      <motion.div
        className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full bg-emerald-300/30 top-8 left-8 filter blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full bg-green-400/25 bottom-8 right-8 filter blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Brands;
