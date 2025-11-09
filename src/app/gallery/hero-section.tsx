"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative w-full h-[650px] overflow-hidden bg-slate-950 text-white">
      {/* === Background Layer === */}
      <div className="absolute inset-0">
        <Image
          src="/hc3.jpg"
          alt="Classical painting of a sailing ship with golden sails"
          fill
          priority
          className="object-cover brightness-[0.4] scale-105 transition-transform duration-[4000ms] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-900/40 to-slate-950/90" />
      </div>

      {/* === Floating Ambient Glow Orbs === */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-pulse" />

      {/* === Content === */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Transform Your{" "}
          <span className="text-primary drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]">
            Dream
          </span>{" "}
          into Beautiful Reality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 text-slate-200 text-base md:text-lg leading-relaxed"
        >
          At <span className="text-primary font-semibold">Dhanpuri</span>
          ,we turn your wedding dreams into beautifully crafted outfits. Our
          skilled designers, artisans, and stylists work together to create
          attire that reflects elegance, culture, and perfection — tailored just
          for you.
        </motion.p>

        {/* === Call-to-Action Buttons === */}
        <motion.div
          className="mt-10 flex gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <Link
            href="#projects"
            className="px-8 py-3 bg-primary text-black font-semibold rounded-full shadow-lg shadow-primary/30 hover:bg-primary transition-all duration-300 hover:shadow-primary/40 hover:scale-105"
          >
            Explore Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-primary/50 text-primary rounded-full hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-primary/40 hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* === Pagination Dots === */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              i === 0
                ? "bg-primary shadow-lg shadow-primary/40 scale-110"
                : "bg-white/40 hover:bg-primary/70"
            }`}
          ></span>
        ))}
      </motion.div>

      {/* === Decorative Gradient Line === */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent animate-pulse" />
    </section>
  );
}
