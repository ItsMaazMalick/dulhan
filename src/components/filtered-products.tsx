"use client";

import { useState } from "react";
import Image from "next/image";

const allProducts = [
  {
    id: 1,
    name: "Groom Collection - Classic",
    category: "groom",
    price: "$450.00",
    image: "/c11.png",
    hoverImage: "/c22.png",
  },
  {
    id: 2,
    name: "Bridal - Elegant White",
    category: "bridal",
    price: "$1200.00",
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-6-1.webp",
    hoverImage:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-5-2.webp",
  },
  {
    id: 3,
    name: "Groom Collection - Modern",
    category: "groom",
    price: "$520.00",
    image: "/c11.png",
    hoverImage: "/c22.png",
  },
  {
    id: 4,
    name: "Bridal - Royal Gold",
    category: "bridal",
    price: "$1500.00",
    image: "/c11.png",
    hoverImage: "/c22.png",
  },
  {
    id: 5,
    name: "Groom Collection - Premium",
    category: "groom",
    price: "$680.00",
    image: "/b11.png",
    hoverImage: "/b22.png",
  },
  {
    id: 6,
    name: "Bridal - Luxury Pearl",
    category: "bridal",
    price: "$1800.00",
    image: "/b11.png",
    hoverImage: "/b22.png",
  },
];

export default function FilteredProducts() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredProducts =
    activeFilter === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter);

  return (
    <section
      className="relative py-20 px-4 md:px-8 lg:px-16 bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/black.png')" }}
    >
      {/* keep the soft dark overlay (you liked this) */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Our Collections
          </h2>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 text-sm tracking-widest transition-all duration-400 ${
                activeFilter === "all"
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-gray-600 hover:border-white"
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setActiveFilter("groom")}
              className={`px-6 py-2 text-sm tracking-widest transition-all duration-300 ${
                activeFilter === "groom"
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-gray-600 hover:border-white"
              }`}
            >
              GROOM
            </button>
            <button
              onClick={() => setActiveFilter("bridal")}
              className={`px-6 py-2 text-sm tracking-widest transition-all duration-300 ${
                activeFilter === "bridal"
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-gray-600 hover:border-white"
              }`}
            >
              BRIDAL
            </button>
          </div>
        </div>

        {/* Product Grid with original hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="transition-all duration-400"
            >
              <div className="relative overflow-visible transition-all duration-400 group">
                {/* Animated golden border (unchanged) */}
                <span className="absolute top-0 right-0 h-[2px] w-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:w-full z-30" />
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:w-full z-30" />
                <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:h-full z-30" />
                <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:h-full z-30" />

                {/* Product Image — removed black box here */}
                <div className="relative h-[330px] overflow-hidden bg-transparent rounded-md">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className={`object-contain bg-center transition-opacity duration-400 ${
                      hoveredCard === product.id ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <Image
                    src={product.hoverImage || "/placeholder.svg"}
                    alt={`${product.name} hover`}
                    fill
                    className={`object-contain bg-center transition-all duration-400 ${
                      hoveredCard === product.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-80"
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
    </section>
  );
}
