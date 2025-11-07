"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Podcast data (sample)
const podcastItems = [
  {
    id: "1",
    title: "Myths vs Reality, Being a Developer",
    artist: "Yayoi Kusama",
    image: "/b1.png",
  },
  {
    id: "2",
    title: "MERN vs FLUTTER, The Ultimate Developer Showdown",
    artist: "Andy Warhol",
    image: "/b2.png",
  },
];

export function StreamingSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const scroll = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Soft glowing orbs for ambiance */}
      <div className="absolute -top-10 left-10 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-600/10 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-10"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Softex <span className="text-amber-500">Podcast</span>
            </h2>
            <p className="text-slate-300 mt-2">
              Tune into the latest tech talks, insights, and developer stories.
            </p>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Scroll Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => scroll(-300)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-slate-900/80 border border-amber-600/40 text-amber-400 rounded-full p-3 shadow-md shadow-amber-500/20 hover:bg-amber-500 hover:text-black transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          {/* Items */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar scroll-smooth"
          >
            {podcastItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative min-w-[300px] max-w-[300px] shrink-0 bg-slate-900/40 border border-amber-600/30 rounded-2xl overflow-hidden backdrop-blur-md shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-500"
              >
                {/* Favorite Icon */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-amber-500/20 transition-all"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      favorites[item.id]
                        ? "text-amber-500 fill-amber-500"
                        : "text-white/70"
                    }`}
                  />
                </button>

                {/* Image */}
                <div className="relative w-full h-[220px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Hosted by {item.artist}
                  </p>

                  <Link
                    href="#"
                    className="inline-block text-sm font-semibold text-black bg-amber-500 px-5 py-2 rounded-full text-center hover:bg-amber-400 transition-all duration-300"
                  >
                    Listen Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => scroll(300)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-slate-900/80 border border-amber-600/40 text-amber-400 rounded-full p-3 shadow-md shadow-amber-500/20 hover:bg-amber-500 hover:text-black transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
