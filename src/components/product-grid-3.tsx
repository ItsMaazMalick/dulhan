"use client";

import { Heart, Eye } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  rating: number;
}

interface ProductGrid3Props {
  products: Product[];
  wishlist: Record<number, boolean>;
  onToggleWishlist: (id: number) => void;
}

export default function ProductGrid3({
  products,
  wishlist,
  onToggleWishlist,
}: ProductGrid3Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="group bg-slate-900/50 border border-primary/30 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fadeInUp"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          {/* Image */}
          <div className="relative overflow-hidden bg-slate-800 h-72">
            <img
              src={
                product.image ||
                "/placeholder.svg?height=288&width=300&query=luxury%20bridal%20collection"
              }
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
            />
            <button
              onClick={() => onToggleWishlist(product.id)}
              className="absolute top-4 right-4 w-12 h-12 bg-black/80 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Heart
                className={`w-6 h-6 transition-colors ${
                  wishlist[product.id]
                    ? "fill-red-500 text-red-500"
                    : "text-primary"
                }`}
              />
            </button>
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-sm shadow-lg">
              <Eye className="w-4 h-4" />
              View
            </button>
          </div>

          {/* Info */}
          <div className="p-5">
            <p className="text-primary text-xs font-bold tracking-wider uppercase mb-2">
              {product.category}
            </p>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xs ${
                      i < Math.floor(product.rating)
                        ? "text-primary"
                        : "text-gray-600"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-400 text-xs">({product.rating})</span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-primary font-bold text-xl">
                ₹{product.price.toLocaleString()}
              </p>
              <button className="bg-primary hover:bg-primary text-black px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
                Add
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
