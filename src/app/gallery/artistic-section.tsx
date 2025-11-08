"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function ArtisticSection() {
  const features = [
    "Custom Bridal Design",
    "Groom Wear Tailoring",
    "Luxury Fabric Selection",
    "Hand Embroidery & Detailing",
    "Perfect Fitting & Finishing",
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Subtle glowing orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-600/10 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left side - floating layered images */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative w-[80%] h-[400px] rounded-2xl overflow-hidden border border-amber-500/30 shadow-amber-500/30 shadow-xl"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src="/b1.png"
              alt="About us"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            className="absolute top-[80px] right-[-40px] w-60 h-[300px] rounded-2xl overflow-hidden border border-amber-400/30 shadow-lg shadow-amber-500/40"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/b2.png"
              alt="Feature"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Right side - elegant animated content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Key{" "}
            <span className="text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.7)]">
              Features
            </span>
          </h2>

          <p className="text-slate-300 text-lg">
            Discover how our technology and creativity blend to build scalable,
            powerful, and aesthetic digital experiences.
          </p>

          <ul className="space-y-4 mt-6">
            {features.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 bg-slate-900/40 border border-amber-600/30 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 hover:bg-amber-500/20 hover:scale-[1.02]"
                whileHover={{ x: 5 }}
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-amber-500/20 border border-amber-400/40">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L2 8L3.4 6.6L6 9.2L12.6 2.6L14 4L6 12Z"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-medium text-slate-200">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
