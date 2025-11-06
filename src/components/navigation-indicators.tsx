"use client";

interface NavigationIndicatorsProps {
  currentIndex: number;
  totalSlides: number;
}

export default function NavigationIndicators({
  currentIndex,
  totalSlides,
}: NavigationIndicatorsProps) {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
      {[...Array(totalSlides)].map((_, index) => (
        <button
          key={index}
          className={`transition-all duration-500 ${
            index === currentIndex
              ? "w-8 h-2 bg-white"
              : "w-2 h-2 bg-white/40 hover:bg-white/60"
          }`}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentIndex}
        />
      ))}
    </div>
  );
}
