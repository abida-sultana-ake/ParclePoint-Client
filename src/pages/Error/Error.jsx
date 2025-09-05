import React from "react";
import { Link } from "react-router";
import { Truck, PackageSearch } from "lucide-react";

const Error = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-green-400/10 rounded-full blur-3xl bottom-10 right-10 animate-bounce"></div>

      {/* Error content */}
      <div className="z-10 flex flex-col items-center text-center px-6">
        {/* Icon animation */}
        <div className="bg-white rounded-full p-6 shadow-xl mb-6 animate-float">
          <PackageSearch className="w-16 h-16 text-green-500" />
        </div>

        {/* Error number */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-green-500 drop-shadow-lg">
          404
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl max-w-lg">
          Oops! The parcel point you’re looking for doesn’t exist. Maybe it’s on
          another route.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-8 flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg"
        >
          <Truck className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
