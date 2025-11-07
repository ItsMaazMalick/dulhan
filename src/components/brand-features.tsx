"use client";

import { useState } from "react";
import Image from "next/image";
import { BsScissors } from "react-icons/bs";
import { GiCagedBall } from "react-icons/gi";
import { GiDrill } from "react-icons/gi";
import { GiSewingMachine } from "react-icons/gi";

const features = [
  {
    id: 1,
    icon: <BsScissors size={55} className="mb-5" />,
    title: "Handcrafted Perfection",
    description:
      "Each bridal and groom outfit is tailored with precision by our expert artisans, ensuring a perfect fit and timeless elegance.",
    image: "/hc.jpg",
  },
  {
    id: 2,
    icon: <GiCagedBall size={55} className="mb-5" />,
    title: "Premium Fabrics & Embellishments",
    description:
      "We source luxurious silks, chiffons, velvets, and crystal work from around the world to bring your dream attire to life.",
    image: "/hc2.jpeg",
  },
  {
    id: 3,
    icon: <GiSewingMachine size={55} className="mb-5" />,
    title: "Custom Design Experience",
    description:
      "From sketch to final stitch — every design is made to reflect your personal story, taste, and culture.",
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-1-icon-box-image-3-768x768.webp",
  },
  {
    id: 4,
    icon: <GiDrill size={55} className="mb-5" />,
    title: "Modern Meets Tradition",
    description:
      "Our collections blend contemporary fashion with traditional craftsmanship to create truly unforgettable wedding ensembles.",
    image: "/hc3.jpg",
  },
];

export default function BrandFeaturesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <BsScissors size={30} />
        </div>
        <p className="text-xs tracking-widest text-gray-400 mb-4">
          GLOBAL BRIDAL DRESS BRAND
        </p>
        <h2
          className="text-4xl md:text-5xl font-light mb-8"
          style={{ color: "#D4AF37" }}
        >
          Your Dream Wedding Begins with a Perfect Outfit
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-7xl mx-auto">
        {features.map((feature) => {
          const Icon = feature?.icon;
          return (
            <div
              key={feature.id}
              className="relative group"
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image - Fades in on hover */}
              <div
                className={`absolute inset-0 overflow-hidden transition-all duration-500 ${
                  hoveredId === feature.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
              >
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />

                {/* Dark overlay */}
                {/* <div className="absolute inset-0 bg-black/10" /> */}
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 border-l border-r border-gray-900 hover:border-amber-500 transition-colors duration-300 bg-black/80 hover:bg-black/60 min-h-[350px] flex flex-col justify-between">
                {/* Icon */}
                {/* <div className="text-4xl mb-6">{feature.icon}</div> */}
                {Icon}

                {/* Title and Description */}
                <div className="flex-1">
                  <h3 className="text-xl font-light text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-end mt-6">
                  <span className="text-amber-500 text-xl">↗</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
