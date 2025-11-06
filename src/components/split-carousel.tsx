// "use client"

// import { useState, useEffect } from "react"
// import CarouselSlide from "./carousel-slide"
// import SocialLinks from "./social-links"
// import NavigationIndicators from "./navigation-indicators"

// const slides = [
//   {
//     id: 1,
//     title: "Enveloping Coats",
//     subtitle: "REFRESHING DESIGN",
//     image: "/elegant-formal-coat.jpg",
//     category: "DISCOVER",
//   },
//   {
//     id: 2,
//     title: "Down Jackets",
//     subtitle: "FINE FABRIC",
//     image: "/professional-down-jacket.jpg",
//     category: "DISCOVER",
//   },
//   {
//     id: 3,
//     title: "Premium Blazers",
//     subtitle: "LUXURY TAILORING",
//     image: "/luxury-blazer-formal.jpg",
//     category: "DISCOVER",
//   },
//   {
//     id: 4,
//     title: "Casual Elegance",
//     subtitle: "MODERN STYLE",
//     image: "/casual-elegant-mens-fashion.jpg",
//     category: "DISCOVER",
//   },
// ]

// export default function SplitCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAnimating, setIsAnimating] = useState(false)
//   const [animationPhase, setAnimationPhase] = useState(null)

//   useEffect(() => {
//     if (animationPhase === "cover") {
//       const timer = setTimeout(() => {
//         setAnimationPhase("reveal")
//       }, 500)
//       return () => clearTimeout(timer)
//     }

//     if (animationPhase === "reveal") {
//       const timer = setTimeout(() => {
//         setAnimationPhase(null)
//         setIsAnimating(false)
//       }, 500)
//       return () => clearTimeout(timer)
//     }
//   }, [animationPhase])

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true)
//       setAnimationPhase("cover")
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % slides.length)
//       }, 500)
//     }
//   }

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true)
//       setAnimationPhase("cover")
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
//       }, 500)
//     }
//   }

//   const getSlideIndex = (offset) => {
//     return (currentIndex + offset + slides.length) % slides.length
//   }

//   return (
//     <div className="relative w-full min-h-screen bg-black pt-20 overflow-hidden">
//       {/* Split Screen Container - Responsive */}
//       <div className="flex flex-col md:flex-row h-full md:min-h-[calc(100vh-80px)]">
//         {/* Left Slide - Hidden on mobile, full width on tablet, half on desktop */}
//         <div className="hidden md:block w-full md:w-1/2 relative overflow-hidden">
//           <CarouselSlide
//             slide={slides[getSlideIndex(0)]}
//             isAnimating={isAnimating}
//             animationPhase={animationPhase}
//             direction="left"
//             position="left"
//           />
//         </div>

//         {/* Right Slide / Main Slide on Mobile */}
//         <div className="w-full md:w-1/2 relative overflow-hidden min-h-screen md:min-h-auto">
//           <CarouselSlide
//             slide={slides[getSlideIndex(0)]}
//             isAnimating={isAnimating}
//             animationPhase={animationPhase}
//             direction="right"
//             position="right"
//           />
//         </div>
//       </div>

//       {/* Center Navigation Controls */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex gap-4 md:gap-8">
//         <button
//           onClick={prevSlide}
//           disabled={isAnimating}
//           className="group p-2 md:p-3 rounded-full border border-white/30 hover:border-white/60 transition-all duration-300 disabled:opacity-50 hover:bg-white/5"
//           aria-label="Previous slide"
//         >
//           <svg
//             className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white transition-colors"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button
//           onClick={nextSlide}
//           disabled={isAnimating}
//           className="group p-2 md:p-3 rounded-full border border-white/30 hover:border-white/60 transition-all duration-300 disabled:opacity-50 hover:bg-white/5"
//           aria-label="Next slide"
//         >
//           <svg
//             className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white transition-colors"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* Social Links */}
//       <SocialLinks />

//       {/* Navigation Indicators */}
//       <NavigationIndicators currentIndex={currentIndex} totalSlides={slides.length} />
//     </div>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import CarouselSlide from "./carousel-slide";
import NavigationIndicators from "./navigation-indicators";

const slides = [
  {
    id: 1,
    title: "Enveloping Coats",
    subtitle: "REFRESHING DESIGN",
    image: "/bg1.png",
    category: "DISCOVER",
  },
  {
    id: 2,
    title: "Down Jackets",
    subtitle: "FINE FABRIC",
    image: "/bg2.png",
    category: "DISCOVER",
  },
  {
    id: 3,
    title: "Premium Blazers",
    subtitle: "LUXURY TAILORING",
    image: "/bg1.png",
    category: "DISCOVER",
  },
  {
    id: 4,
    title: "Casual Elegance",
    subtitle: "MODERN STYLE",
    image: "/bg2.png",
    category: "DISCOVER",
  },
  {
    id: 5,
    title: "Casual Elegance",
    subtitle: "MODERN STYLE",
    image: "/bg1.png",
    category: "DISCOVER",
  },
  {
    id: 6,
    title: "Casual Elegance",
    subtitle: "MODERN STYLE",
    image: "/bg2.png",
    category: "DISCOVER",
  },
];

export default function SplitCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // this represents the LEFT panel index
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(null);

  useEffect(() => {
    // if (animationPhase === "cover") {
    //   // const timer = setTimeout(() => setAnimationPhase("reveal"), 500);
    //   return () => clearTimeout(timer);
    // }
    if (animationPhase === "reveal") {
      const timer = setTimeout(() => {
        setAnimationPhase(null);
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationPhase]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      // setAnimationPhase("cover");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      // setAnimationPhase("cover");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }, 500);
    }
  };

  const getSlideIndex = (offset: any) =>
    (currentIndex + offset + slides.length) % slides.length;

  return (
    <div className="relative w-full min-h-screen bg-black pt-20 overflow-hidden">
      {/* Split Screen Container - Responsive */}
      <div className="flex flex-col md:flex-row h-full md:min-h-[calc(100vh)]">
        {/* Left Slide - Hidden on mobile, full width on tablet, half on desktop */}
        <div className="hidden md:block w-full md:w-1/2 relative overflow-hidden">
          {/* LEFT shows currentIndex (offset 0) */}
          <CarouselSlide
            slide={slides[getSlideIndex(0)]}
            isAnimating={isAnimating}
            animationPhase={animationPhase}
            direction="left"
            position="left"
          />
        </div>

        {/* Right Slide / Main Slide on Mobile */}
        <div className="w-full md:w-1/2 relative overflow-hidden min-h-screen md:min-h-auto">
          {/* RIGHT shows the NEXT slide (offset 1) */}
          <CarouselSlide
            slide={slides[getSlideIndex(1)]}
            isAnimating={isAnimating}
            animationPhase={animationPhase}
            direction="right"
            position="right"
          />
        </div>
      </div>

      {/* Center Navigation Controls */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex gap-4 md:gap-8">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="group p-2 md:p-3 cursor-pointer rounded-full border border-white/30 hover:border-white/60 transition-all duration-300 disabled:opacity-50 hover:bg-white/5"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="group p-2 md:p-3 cursor-pointer rounded-full border border-white/30 hover:border-white/60 transition-all duration-300 disabled:opacity-50 hover:bg-white/5"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Social Links */}
      {/* <SocialLinks /> */}

      {/* Navigation Indicators */}
      <NavigationIndicators
        currentIndex={currentIndex}
        totalSlides={slides.length}
      />
    </div>
  );
}
