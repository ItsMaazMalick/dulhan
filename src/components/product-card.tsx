"use client";

import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  inStock: boolean;
  onAddToCart?: (id: number) => void;
  onToggleWishlist?: (id: number) => void;
  isWishlisted?: boolean;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  rating,
  image,
  inStock,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}: ProductCardProps) {
  return (
    <div className="group bg-gradient-to-b from-gray-900 to-black border border-primary/30 rounded-lg overflow-hidden hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-800">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => onToggleWishlist?.(id)}
            className="p-3 bg-primary hover:bg-primary rounded-full transition"
          >
            <Heart size={20} fill={isWishlisted ? "white" : "none"} />
          </button>
          <button className="p-3 bg-primary hover:bg-primary rounded-full transition">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-primary text-sm mb-2">{category}</p>
        <h3 className="text-white font-semibold mb-2 line-clamp-2">{name}</h3>
        <div className="flex text-yellow-400 text-sm mb-3">
          {[...Array(5)].map((_, i) => (
            <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
          ))}
          <span className="text-gray-400 ml-2">({rating})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ₹{price.toLocaleString()}
          </span>
          <button
            disabled={!inStock}
            onClick={() => onAddToCart?.(id)}
            className={`p-2 rounded transition ${
              inStock
                ? "bg-primary hover:bg-primary text-white"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
