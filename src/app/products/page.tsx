"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Heart, Eye, ShoppingCart, Filter, X } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Royal Bridal Lehenga",
    category: "Bridal",
    price: 12500,
    rating: 4.8,
    image: "/b1.png",
    color: "Gold",
    size: "S",
    inStock: true,
  },
  {
    id: 2,
    name: "Groom Sherwani Elite",
    category: "Groom",
    price: 8500,
    rating: 4.9,
    image: "/b2.png",
    color: "Black",
    size: "M",
    inStock: true,
  },
  {
    id: 3,
    name: "Wedding Saree Elegance",
    category: "Bridal",
    price: 9800,
    rating: 4.7,
    image: "/bb1.png",
    color: "Red",
    size: "L",
    inStock: true,
  },
  {
    id: 4,
    name: "Banarasi Lehenga Royal",
    category: "Bridal",
    price: 15000,
    rating: 5,
    image: "/w1.png",
    color: "Maroon",
    size: "M",
    inStock: false,
  },
  {
    id: 5,
    name: "Designer Kurta Shawl",
    category: "Groom",
    price: 7200,
    rating: 4.6,
    image: "/w2.png",
    color: "Cream",
    size: "L",
    inStock: true,
  },
  {
    id: 6,
    name: "Anarkali Wedding Dress",
    category: "Bridal",
    price: 11000,
    rating: 4.8,
    image: "/w3.png",
    color: "Pink",
    size: "S",
    inStock: true,
  },
  {
    id: 7,
    name: "Silk Dhoti Sherwani",
    category: "Groom",
    price: 9500,
    rating: 4.7,
    image: "/bb1.png",
    color: "Gold",
    size: "M",
    inStock: true,
  },
  {
    id: 8,
    name: "Sharara Silk Collection",
    category: "Bridal",
    price: 13500,
    rating: 4.9,
    image: "/b1.png",
    color: "Purple",
    size: "M",
    inStock: true,
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState("grid");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const categories = ["All", "Bridal", "Groom"];

  const filteredProducts = PRODUCTS.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-20 px-4 border-b border-amber-700/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeInUp">
            Luxury Collection
          </h1>
          <p className="text-gray-400 text-lg animate-fadeInUp delay-100">
            Discover our exquisite range of premium bridal and groom wear
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 py-12">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } md:block w-full md:w-64 space-y-6`}
          >
            <div className="bg-gradient-to-b from-gray-900 to-black border border-amber-700/30 rounded-lg p-6 animate-fadeInUp">
              <div className="flex justify-between items-center mb-4 md:hidden">
                <h3 className="text-white font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="text-amber-500" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Filter size={18} className="text-amber-500" />
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded transition-all duration-300 ${
                        selectedCategory === cat
                          ? "bg-amber-600 text-white"
                          : "bg-gray-800/50 text-gray-300 hover:bg-amber-600/30"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-white font-semibold mb-4">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="500"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      Number.parseInt(e.target.value),
                    ])
                  }
                  className="w-full accent-amber-600"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>₹{priceRange[0].toLocaleString()}</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Layout Toggle */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
              >
                <Filter size={18} />
                Filters
              </button>

              <div className="flex gap-2">
                {["grid", "list"].map((layout) => (
                  <button
                    key={layout}
                    onClick={() => setSelectedLayout(layout)}
                    className={`px-4 py-2 rounded transition ${
                      selectedLayout === layout
                        ? "bg-amber-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {layout.charAt(0).toUpperCase() + layout.slice(1)}
                  </button>
                ))}
              </div>

              <div className="text-gray-400">
                {filteredProducts.length} products
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length > 0 ? (
              <div
                className={`${
                  selectedLayout === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-4"
                }`}
              >
                {filteredProducts.map((product, idx) => (
                  <div
                    key={product.id}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    className={`group bg-gradient-to-b from-gray-900 to-black border border-amber-700/30 rounded-lg overflow-hidden hover:border-amber-500/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-fadeInUp ${
                      selectedLayout === "list" ? "flex gap-4 p-4" : ""
                    }`}
                  >
                    {/* Product Image */}
                    <div
                      className={`relative overflow-hidden bg-gray-800 ${
                        selectedLayout === "list"
                          ? "w-40 h-40 flex-shrink-0"
                          : "h-64 w-full"
                      }`}
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Stock Badge */}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-white font-semibold">
                            Out of Stock
                          </span>
                        </div>
                      )}

                      {/* Quick Actions */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="p-3 bg-amber-600 hover:bg-amber-700 rounded-full transition transform hover:scale-110"
                        >
                          <Heart
                            size={20}
                            className={
                              wishlist.includes(product.id) ? "fill-white" : ""
                            }
                          />
                        </button>
                        <button className="p-3 bg-amber-600 hover:bg-amber-700 rounded-full transition transform hover:scale-110">
                          <Eye size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div
                      className={`p-4 flex flex-col justify-between flex-1 ${
                        selectedLayout === "list" ? "flex-1" : ""
                      }`}
                    >
                      <div>
                        <p className="text-amber-500 text-sm mb-2">
                          {product.category}
                        </p>
                        <h3 className="text-white font-semibold mb-2 line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={
                                  i < Math.floor(product.rating) ? "★" : "☆"
                                }
                              ></span>
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">
                            ({product.rating})
                          </span>
                        </div>

                        {/* Attributes */}
                        <div className="flex gap-4 text-sm text-gray-400 mb-4">
                          <span>Color: {product.color}</span>
                          <span>Size: {product.size}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-amber-500">
                          ₹{product.price.toLocaleString()}
                        </div>
                        <button
                          disabled={!product.inStock}
                          className={`p-2 rounded transition ${
                            product.inStock
                              ? "bg-amber-600 hover:bg-amber-700 text-white"
                              : "bg-gray-700 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          <ShoppingCart size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-xl">
                  No products found in this range
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
