"use client";

import Image from "next/image";

interface CarouselSlideProps {
  slide: {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    category: string;
  };
  isAnimating: boolean;
  animationPhase: "cover" | "reveal" | null;
  direction: "left" | "right";
  position: "left" | "right";
}

export default function CarouselSlide({
  slide,
  isAnimating,
  animationPhase,
  direction,
  position,
}: CarouselSlideProps) {
  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Background Image */}
      <Image
        src={slide.image || "/placeholder.svg"}
        alt={slide.title}
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
        {/* Category Badge */}
        <p className="text-xs tracking-widest text-gray-300 mb-4">
          {slide.category}
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-light mb-2">{slide.title}</h1>

        {/* Subtitle */}
        <p className="text-lg tracking-widest text-gray-300">
          {slide.subtitle}
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest">
            DISCOVER
          </button>
        </div>
      </div>

      {/* Animation overlay */}
      {isAnimating && animationPhase === "cover" && (
        <div
          className={`absolute inset-0 bg-black transition-transform duration-500 ${
            direction === "left"
              ? "origin-left -translate-x-full"
              : "origin-right translate-x-full"
          }`}
        />
      )}
    </div>
  );
}
