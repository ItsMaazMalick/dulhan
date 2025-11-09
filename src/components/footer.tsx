"use client";

import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-pink-900/10 blur-3xl"></div>

      <div className="relative container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Softex Logo"
              width={100}
              height={100}
              className="w-24"
            />
            {/* <span className="text-white font-bold text-xl">
              Softex Solution
            </span> */}
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            At Dhanpuri, we craft elegant digital experiences that align with
            your goals. Let’s turn your vision into a modern, functional
            reality.
          </p>
        </motion.div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Careers", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            {[
              "App Development",
              "Web Development",
              "AI Solutions",
              "Data Security",
              "Graphic Designing",
            ].map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get our latest news and updates.
          </p>
          <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <Mail className="text-gray-400 mx-3" size={18} />
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow bg-transparent text-sm text-gray-300 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 mt-8 py-4 text-sm flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Softex Solution. All rights reserved.
        </p>
        <div className="flex gap-6 text-gray-400">
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
            (item) => (
              <Link
                key={item}
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
