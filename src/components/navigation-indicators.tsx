"use client";

export default function NavigationIndicators({
  currentIndex,
  totalSlides,
}: any) {
  return (
    <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-3 md:gap-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-white/60 text-xs tracking-widest font-light"
        >
          <span
            className={`transition-all duration-300 ${
              index === currentIndex % totalSlides
                ? "text-white opacity-100"
                : "opacity-50"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          {index === currentIndex % totalSlides && (
            <div className="w-6 md:w-8 h-px bg-white/60" />
          )}
        </div>
      ))}
    </div>
  );
}
