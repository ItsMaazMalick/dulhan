"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Groom Collection - Classic",
    category: "groom",
    price: "$450.00",
    image: "/bb1.png",
    hoverImage: "/bb2.png",
  },
  {
    id: 3,
    name: "Groom Collection - Modern",
    category: "groom",
    price: "$520.00",
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-6-1.webp",
    hoverImage:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-5-2.webp",
  },
  {
    id: 4,
    name: "Bridal - Royal Gold",
    category: "bridal",
    price: "$1500.00",
    image: "/bb3.png",
    hoverImage: "/bb4.png",
  },
];

export default function CollectionsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-black">
      {/* Background image with soft black overlay */}
      <div className="absolute inset-0">
        <Image
          src="/black.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Product Cards */}
          <div>
            <div className="mb-12">
              <p className="text-xs tracking-widest text-gray-400 mb-2">
                COMPREHENSIVE DESIGN
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                New Collections of Stylish Suits
              </h2>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Bisi vitae suscipit tellus mauris a diam maecenas sed enim. Et
                ultricies integer quis auctor elit sed vulputate.
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="transition-all duration-400"
                >
                  <div className="relative overflow-visible transition-all duration-400 group">
                    {/* Border Animation */}
                    <span className="absolute top-0 right-0 h-[2px] w-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:w-full z-30" />
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:w-full z-30" />
                    <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:h-full z-30" />
                    <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:h-full z-30" />

                    {/* Image Container */}
                    <div className="relative h-[330px] overflow-hidden">
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

          {/* Right Side - Promo Section */}
          <div className="relative h-full min-h-[450px]">
            <Image
              src="/ii3.jpeg"
              alt="Professional woman in suit"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                Get 50% OFF on first class suits
              </h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email to subscribe*"
                  className="flex-1 bg-transparent border border-gray-600 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white text-xs tracking-widest px-6 py-3 transition-colors duration-400 font-medium">
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-4">
                *Use code CLASSIC at checkout through 4/10. Exclusions apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
