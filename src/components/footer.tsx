"use client";

import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-200 overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[100px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            fill="#FCD34D"
          ></path>
        </svg>
      </div>

      {/* Animated gold shimmer particles (behind content) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* some subtle glowing circles */}
          <div className="absolute -left-24 -top-10 w-80 h-80 rounded-full bg-amber-400/6 blur-3xl animate-blob1" />
          <div className="absolute right-10 top-6 w-56 h-56 rounded-full bg-yellow-400/5 blur-2xl animate-blob2" />
          <div className="absolute left-1/2 -bottom-16 w-96 h-96 rounded-full bg-amber-300/4 blur-3xl animate-blob3" />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand / About */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Dhanpuri Logo"
                width={96}
                height={96}
                className="w-24 h-auto"
              />
              <div>
                <h3 className="text-white font-semibold text-lg">Dhanpuri</h3>
                <div className="text-xs text-gray-400">Boutique Atelier</div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              At Dhanpuri, we craft elegant digital experiences that align with
              your goals. Let’s turn your vision into a modern, functional
              reality.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {["Home", "About", "Products", "Contact", "Orders"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className="hover:text-white transition-all duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                "Lehenga",
                "Sarhi",
                "Kurta",
                "Shalwar Kameez",
                "Frock",
                "Others",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-all duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold mb-2">Keep Learning</h4>
            <p className="text-gray-300 text-sm">
              Sign up to receive fresh updates on products and collection
              arrivals delivered directly to your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // mock submit - replace with your handler
                const form = e.target as HTMLFormElement;
                const email = (
                  form.elements.namedItem("email") as HTMLInputElement
                ).value;
                alert(`Subscribed: ${email} (mock)`);
                form.reset();
              }}
              className="mt-4 flex items-center gap-3 max-w-lg"
            >
              <div className="relative flex-1">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                  required
                  className="w-full bg-transparent border border-gray-700 rounded-full px-12 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-semibold rounded-full px-4 py-3 shadow-lg hover:scale-105 transition-transform duration-200"
                aria-label="Subscribe"
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-800/60" />

        {/* Contact + details row (mirrors design) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="text-sm text-gray-300"
          >
            <h5 className="text-white font-semibold mb-3">Details</h5>
            <p className="text-sm text-gray-400 max-w-md">
              Digital marketing professionals who collaborate with you to launch
              effective campaigns that attract and engage audiences
            </p>

            <div className="flex gap-3 mt-4">
              <div className="w-8 h-8 rounded-full bg-amber-400/10 grid place-items-center text-amber-300">
                f
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-400/10 grid place-items-center text-amber-300">
                t
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-400/10 grid place-items-center text-amber-300">
                ig
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-400/10 grid place-items-center text-amber-300">
                yt
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="text-sm text-gray-300"
          >
            <h5 className="text-white font-semibold mb-3">Contact Info</h5>
            <ul className="space-y-3 text-gray-300">
              <li>3050, Manhattan, Kansas 66506, USA</li>
              <li>+1 316 712-8886</li>
              <li>info@dhanpuri.com</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
            className="text-sm text-gray-300"
          >
            <h5 className="text-white font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-gray-800/60">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">
            <strong className="text-white">Dhanpuri</strong> - Copyright{" "}
            {new Date().getFullYear()}.
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-white">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Tailwind CSS animation helpers */}
      <style jsx>{`
        /* subtle floating blobs animations */
        @keyframes blob1 {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
        }
        @keyframes blob2 {
          0% {
            transform: translateX(0px) scale(1);
            opacity: 0.45;
          }
          50% {
            transform: translateX(6px) scale(1.02);
            opacity: 0.6;
          }
          100% {
            transform: translateX(0px) scale(1);
            opacity: 0.45;
          }
        }
        @keyframes blob3 {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-6px) scale(1.03);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.35;
          }
        }
        .animate-blob1 {
          animation: blob1 6s ease-in-out infinite;
        }
        .animate-blob2 {
          animation: blob2 8s ease-in-out infinite;
        }
        .animate-blob3 {
          animation: blob3 7s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
