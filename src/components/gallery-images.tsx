"use client";

import { useState } from "react";
import Image from "next/image";

const InstaIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8.6a3.4 3.4 0 100 6.8 3.4 3.4 0 000-6.8z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 6.5h.01"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ImageGallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/i1.jpeg",
      alt: "Fashion detail with watch",
      caption:
        "Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.",
      date: "August 04, 2022",
      link: "https://www.instagram.com/p/DLCfrx5Mf92/?igsh=MWtwN20xOHB1Y3pw",
    },
    {
      src: "/i2.jpeg",
      alt: "Red shirt detail",
      caption:
        "Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.",
      date: "August 04, 2022",
    },
    {
      src: "/i3.jpeg",
      alt: "Black shirt with instagram",
      caption:
        "Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Scelerisque ultrices.",
      date: "August 04, 2022",
    },
    {
      src: "/i4.jpeg",
      alt: "Woman in professional suit",
      caption:
        "Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.",
      date: "August 04, 2022",
    },
  ];

  const isAnyHovered = hoveredIndex !== null;

  return (
    <section className="relative py-12 px-4 md:px-8 overflow-hidden">
      {/* background image with soft black shading */}
      <div className="absolute inset-0">
        <Image
          src="/black.png"
          alt="Background texture"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {images.map((image, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative overflow-hidden transition-all duration-500 cursor-pointer
                  ${isHovered ? "z-20 scale-105 ring-2 ring-amber-600" : ""}
                  ${
                    isAnyHovered && !isHovered
                      ? "opacity-40 scale-95"
                      : "opacity-100"
                  }
                `}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transform transition-transform duration-700 will-change-transform"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>

                {/* dark gradient overlay */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
                    transition-opacity duration-500 ease-out
                    ${isHovered ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* hover overlay content */}
                <div
                  className={`
                    absolute inset-0 flex flex-col justify-between items-center text-center px-4 py-6
                    transition-all duration-500 ease-out
                    ${
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }
                  `}
                >
                  <div className="text-sm leading-tight text-white/90 max-w-[80%]">
                    {image.caption}
                  </div>

                  {/* Instagram icon center */}
                  <div className="flex flex-col items-center gap-3">
                    {image.link ? (
                      <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform transition-transform duration-500 hover:bg-white/20"
                        style={{ color: "white" }}
                      >
                        <InstaIcon />
                      </a>
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform transition-transform duration-500
                        ${isHovered ? "scale-100" : "scale-90"}`}
                        style={{ color: "white" }}
                      >
                        <InstaIcon />
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-white/80">{image.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
