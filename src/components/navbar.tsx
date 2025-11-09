"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, User2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = {
    HOME: "/",
    PRODUCTS: "/products",
    GALLERY: "/gallery",
    NEWS: "/news",
    CONTACT: "/contact",
    ABOUT: "/about",
    "CUSTOM ORDERS": "/custom-orders",
    TRACK: "/order-tracking",
  } as const; // <--- important

  type NavKey = keyof typeof navLinks; // "HOME" | "Products" | ...

  const navItems = Object.keys(navLinks) as NavKey[];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: "80px", height: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={navLinks[item]}
                className="text-white/70 hover:text-white text-xs tracking-widest transition-colors duration-300 font-light"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            {/* Search Icon */}
            <button
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="text-white/70 hover:text-white transition-colors relative"
              aria-label="Shopping bag"
            >
              <Heart />
            </Link>

            {/* Shopping Bag Icon */}
            <Link
              href="/cart"
              className="text-white/70 hover:text-white transition-colors relative"
              aria-label="Shopping bag"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* User Icon */}
            <Link
              href="/auth"
              className="text-white/70 hover:text-white transition-colors relative"
              aria-label="Shopping bag"
            >
              <User2 />
            </Link>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item}
                href={navLinks[item]}
                className="block text-white/70 hover:text-white text-sm tracking-widest py-2 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
