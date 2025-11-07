"use client";

import Image from "next/image";

export default function CarouselSlide({
  slide,
  isAnimating,
  animationPhase,
  direction,
  position,
}: any) {
  const animationClass = animationPhase
    ? position === "left"
      ? animationPhase === "cover"
        ? "animate-overlay-left-cover"
        : "animate-overlay-left-reveal"
      : animationPhase === "cover"
      ? "animate-overlay-right-cover"
      : "animate-overlay-right-reveal"
    : "";

  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slide.image || "/placeholder.svg"}
          alt={slide.title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Animated Black Overlay */}
      {animationPhase && (
        <div
          className={`absolute inset-0 bg-black z-10 ${animationClass}`}
          style={{
            transformOrigin: position === "left" ? "bottom" : "top",
          }}
        />
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 z-5">
        <div className="space-y-2 md:space-y-4">
          <p className="text-white/60 text-xs md:text-sm tracking-widest font-light">
            {slide.subtitle}
          </p>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-balance">
            {slide.title}
          </h2>
          <button className="text-white/80 hover:text-white text-xs tracking-widest font-light transition-colors mt-4 md:mt-6 flex items-center gap-2 group w-fit">
            {slide.category}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
