"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState({
    login: false,
    register: false,
    confirmPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [otpOption, setOtpOption] = useState("email");

  const handleLoginChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: any) => {
    const { name, value, type, checked, files } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files?.[0] : value,
    }));
  };

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleRegisterSubmit = (e: any) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="pt-20 pb-20 px-4 md:px-8 lg:px-16 bg-black min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          {/* Tab Navigation */}
          <div className="mb-12 animate-fadeInDown">
            <div className="flex gap-0 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("register")}
                className={`flex-1 pb-4 text-center font-light tracking-widest text-lg transition-all duration-300 relative ${
                  activeTab === "register"
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-400"
                }`}
              >
                Register
                {activeTab === "register" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-slideInLeft"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 pb-4 text-center font-light tracking-widest text-lg transition-all duration-300 relative ${
                  activeTab === "login"
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-400"
                }`}
              >
                Login
                {activeTab === "login" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-slideInRight"></div>
                )}
              </button>
            </div>
          </div>

          {/* Register Form */}
          {activeTab === "register" && (
            <div className="animate-fadeInUp">
              <h2
                className="text-center text-3xl font-light mb-8"
                style={{ color: "#D4AF37" }}
              >
                Registration Form
              </h2>

              <div className="flex gap-3 items-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                <span className="text-gray-400 text-sm">Or</span>
                <div className="flex-1 h-px bg-gradient-to-l from-gray-700 to-transparent"></div>
              </div>

              <form onSubmit={handleRegisterSubmit} className="space-y-6 mb-8">
                {/* Username */}
                <div className="animate-fadeInUp delay-100">
                  <label className="block text-sm text-gray-300 mb-3 font-light">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="username"
                      value={registerData.username}
                      onChange={handleRegisterChange}
                      required
                      className="w-full bg-transparent border border-gray-700 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="animate-fadeInUp delay-150">
                  <label className="block text-sm text-gray-300 mb-3 font-light">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      name="phone"
                      value={registerData.phone}
                      onChange={handleRegisterChange}
                      required
                      className="w-full bg-transparent border border-gray-700 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="animate-fadeInUp delay-200">
                  <label className="block text-sm text-gray-300 mb-3 font-light">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      required
                      className="w-full bg-transparent border border-gray-700 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="animate-fadeInUp delay-250">
                  <label className="block text-sm text-gray-300 mb-3 font-light">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <input
                      type={showPassword.register ? "text" : "password"}
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      required
                      className="w-full bg-transparent border border-gray-700 text-white pl-12 pr-12 py-3 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          register: !prev.register,
                        }))
                      }
                      className="absolute right-4 top-3 text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      {showPassword.register ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="animate-fadeInUp delay-300">
                  <label className="block text-sm text-gray-300 mb-3 font-light">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <input
                      type={showPassword.confirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      required
                      className="w-full bg-transparent border border-gray-700 text-white pl-12 pr-12 py-3 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          confirmPassword: !prev.confirmPassword,
                        }))
                      }
                      className="absolute right-4 top-3 text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      {showPassword.confirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="animate-fadeInUp delay-350">
                  <label className="block text-sm text-gray-300 mb-3 font-light">
                    Profile Image (Optional)
                  </label>
                  <label className="flex items-center justify-center w-full bg-transparent border border-gray-700 text-white px-4 py-3 cursor-pointer hover:border-amber-500 transition-all duration-300">
                    <span className="text-gray-400">
                      {"Choose File - No file chosen"}
                    </span>
                    <input
                      type="file"
                      name="profileImage"
                      onChange={handleRegisterChange}
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>

                {/* Terms */}
                <div className="animate-fadeInUp delay-400 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="agreeTerms"
                    checked={registerData.agreeTerms}
                    onChange={handleRegisterChange}
                    className="w-4 h-4 bg-gray-800 border border-gray-700 cursor-pointer hover:border-amber-500 transition-colors accent-amber-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    I agree to the{" "}
                    <Link
                      href="#"
                      className="text-amber-500 hover:text-amber-300 transition-colors"
                    >
                      terms and conditions
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full animate-fadeInUp delay-500 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white tracking-widest py-3 font-light transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:shadow-amber-600/30 hover:scale-105 disabled:scale-100"
                >
                  {isLoading ? "REGISTERING..." : "REGISTER"}
                </button>
              </form>
            </div>
          )}

          {/* Login Form */}
          {activeTab === "login" && (
            <div className="animate-fadeInUp">
              <h2
                className="text-center text-3xl font-light mb-8"
                style={{ color: "#D4AF37" }}
              >
                Login
              </h2>

              {/* Social Buttons */}
              <div className="space-y-3 mb-8 animate-fadeInUp delay-100">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 transition-all duration-300 font-light text-sm tracking-widest hover:shadow-lg hover:shadow-red-600/30 hover:scale-105">
                  CONTINUE WITH GOOGLE
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-all duration-300 font-light text-sm tracking-widest hover:shadow-lg hover:shadow-blue-600/30 hover:scale-105">
                  CONTINUE WITH FACEBOOK
                </button>
              </div>

              <div className="flex gap-3 items-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                <span className="text-gray-400 text-sm">Or</span>
                <div className="flex-1 h-px bg-gradient-to-l from-gray-700 to-transparent"></div>
              </div>

              {/* OTP Message */}
              <p className="text-center text-gray-300 mb-6 animate-fadeInUp delay-150">
                <span className="italic">
                  An OTP will be sent to your registered Email account.
                </span>
              </p>

              <form onSubmit={handleLoginSubmit} className="space-y-6 mb-8">
                {/* Email */}
                <div className="animate-fadeInUp delay-250">
                  <label className="block text-sm text-gray-300 mb-3 font-light">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      required
                      className="w-full bg-transparent border border-gray-700 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="animate-fadeInUp delay-300">
                  <label className="block text-sm text-gray-300 mb-3 font-light">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <input
                      type={showPassword.login ? "text" : "password"}
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                      className="w-full bg-transparent border border-gray-700 text-white pl-12 pr-12 py-3 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          login: !prev.login,
                        }))
                      }
                      className="absolute right-4 top-3 text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      {showPassword.login ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full animate-fadeInUp delay-350 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white tracking-widest py-3 font-light transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:shadow-amber-600/30 hover:scale-105 disabled:scale-100"
                >
                  {isLoading ? "LOGGING IN..." : "LOGIN"}
                </button>
              </form>

              {/* Footer Links */}
              <div className="flex justify-between items-center text-sm animate-fadeInUp delay-400">
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setActiveTab("register")}
                    className="text-amber-500 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    Create one
                  </button>
                </p>
                <Link
                  href="/forgot-password"
                  className="text-amber-500 hover:text-amber-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
