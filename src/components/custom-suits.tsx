"use client";

import { useState } from "react";
import Image from "next/image";

const hotspots = [
  {
    id: 1,
    x: 50,
    y: 75,
    label: "MULTI-COLORS SUITS",
    description: "Multi-color suit options for every occasion",
  },
  {
    id: 2,
    x: 15,
    y: 50,
    label: "PREMIUM FABRICS",
    description: "Crafted from the finest materials",
  },
];

const products = [
  {
    id: 1,
    name: "Groom Collection - Classic",
    category: "groom",
    price: "$450.00",
    image: "/bb3.png",
    hoverImage: "/bb4.png",
  },
  {
    id: 3,
    name: "Groom Collection - Modern",
    category: "groom",
    price: "$520.00",
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-10-4.webp",
    hoverImage:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-5-2.webp",
  },
  {
    id: 4,
    name: "Bridal - Royal Gold",
    category: "bridal",
    price: "$1500.00",
    image: "/bb2.png",
    hoverImage: "/bb1.png",
  },
];

export default function CustomSuitsSection() {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-widest text-gray-400 mb-2">
            SUPREME QUALITY
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Custom Made Bridal's Suits
          </h2>
          <p className="text-gray-400 max-w-md">
            Nid nunc nil ipsum faucibus vitae aliquot nec allamcorper. Nulla
            facilisi cras fermentum odio eu. Nunc sed augue.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Interactive Image with Hotspots */}
          <div className="relative">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-900">
              <Image
                src="/ii1.jpeg"
                alt="Custom suits collection"
                fill
                loading="lazy"
                className="object-cover"
              />

              {/* Hotspots */}
              {hotspots.map((hotspot) => (
                <div
                  key={hotspot.id}
                  className="absolute"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  // onMouseEnter={() => setActiveHotspot(hotspot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  {/* Dot */}
                  <div className="relative w-8 h-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                    <div className="absolute inset-0 bg-white rounded-full animate-pulse" />
                    <div className="absolute inset-1 bg-blue-400 rounded-full" />
                  </div>

                  {/* Tooltip Box */}
                  {activeHotspot === hotspot.id && (
                    <div className="absolute left-3 top-0 bg-black/90 border border-gray-600 rounded px-4 py-3 whitespace-nowrap text-sm z-10 animate-in fade-in duration-400">
                      <p className="text-gray-300 text-xs tracking-widest mb-1">
                        {hotspot.label}
                      </p>
                      <p className="text-white text-xs">
                        {hotspot.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Cards */}
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {/* Header */}
            <div className="text-left">
              <h4 className="text-md text-white mb-3">Supreme Quality</h4>
              <h2 className="text-2xl md:text-4xl text-white mb-3">
                Custom Made Bridal's Suits
              </h2>
              <p className="text-white">
                Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nulla
                facilisi cras fermentum odio eu. Nunc sed augue.
              </p>
            </div>

            {/* Product Grid with Center Card Hover Effect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  // onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="transition-all duration-300"
                >
                  {/* Card Container - group for border animation */}
                  <div className="relative overflow-visible transition-all duration-400 group">
                    {/* Animated border bars */}
                    <span className="absolute top-0 right-0 h-[2px] w-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:w-full z-30" />
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:w-full z-30" />
                    <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:h-full z-30" />
                    <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:h-full z-30" />

                    {/* Image Container */}
                    <div className="relative h-[330px] bg-[#1F1F1F] overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className={`bg-center bg-cover object-contain transition-opacity duration-400 ${
                          hoveredCard === product.id
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                      />
                      <Image
                        src={product.hoverImage || "/placeholder.svg"}
                        alt={`${product.name} hover`}
                        fill
                        className={`transition-all duration-400 bg-center bg-cover object-contain ${
                          hoveredCard === product.id
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-90"
                        }`}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6 text-center">
                      <h3 className="text-white text-base font-light mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
