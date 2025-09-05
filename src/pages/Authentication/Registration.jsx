import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../shared/Navbar";

const Registration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // Password Strength Checker
  const getPasswordStrength = (pwd) => {
    if (pwd.length < 6) return "Weak";
    if (/[A-Z]/.test(pwd) && /\d/.test(pwd) && /[@$!%*?&]/.test(pwd))
      return "Strong";
    return "Medium";
  };

  // Handle Registration
  const handleRegister = (e) => {
    e.preventDefault();

    if (!password || password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }

    Swal.fire({
      title: "Account Created 🎉",
      text: "Welcome to ParcelPoint!",
      icon: "success",
      confirmButtonColor: "#22c55e",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Navbar />
      <Toaster />
      {/* Left Form Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2 mt-12 flex items-center justify-center bg-white p-8"
      >
        <div className="w-full max-w-md">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-green-600">
            Create Account
          </h1>
          <p className="mt-2 text-center text-gray-500">
            Join <span className="font-semibold">ParcelPoint</span> and start
            sending smarter
          </p>

          {/* Form */}
          <form onSubmit={handleRegister} className="mt-6 space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {password && (
                <p
                  className={`mt-1 text-sm ${
                    getPasswordStrength(password) === "Strong"
                      ? "text-green-600"
                      : getPasswordStrength(password) === "Medium"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  Strength: {getPasswordStrength(password)}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition shadow-md"
            >
              Register
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-500 text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Login Button */}
            <button
              type="button"
              onClick={() => toast.success("Google Login Clicked")} // Replace with your Google login handler
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
          </form>

          {/* Extra Links */}
          <div className="mt-6 text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login here
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Right Full Image Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="hidden mt-12 lg:flex lg:w-1/2 h-screen"
      >
        <img
          src="https://i.pinimg.com/1200x/4a/22/9c/4a229c062cba89c7381a3f50f29f0be5.jpg"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Registration;
