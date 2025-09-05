import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../shared/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  // Password Strength Checker
  const getPasswordStrength = (pwd) => {
    if (pwd.length < 6) return "Weak";
    if (/[A-Z]/.test(pwd) && /\d/.test(pwd) && /[@$!%*?&]/.test(pwd))
      return "Strong";
    return "Medium";
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    if (!password || password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    Swal.fire({
      title: "Login Successful 🎉",
      text: "Welcome back to ParcelPoint",
      icon: "success",
      confirmButtonColor: "#22c55e",
    }).then(() => {
      navigate("/");
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
        className="w-full mt-12 lg:w-1/2 flex items-center justify-center bg-white p-8 z-10"
      >
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-green-600">
            Welcome Back
          </h1>
          <p className="mt-2 text-center text-gray-500">
            Sign in to continue to{" "}
            <span className="font-semibold">ParcelPoint</span>
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-5">
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
                  placeholder="Enter your password"
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition shadow-md"
            >
              Login
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
          <div className="mt-6 flex justify-between text-sm text-gray-500">
            <Link to="/register" className="hover:text-green-600">
              Create an account
            </Link>
            <Link to="/forgot-password" className="hover:text-green-600">
              Forgot password?
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

export default Login;