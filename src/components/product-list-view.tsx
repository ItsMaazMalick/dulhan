"use client";

import { Heart, Eye, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  rating: number;
}

interface ProductListViewProps {
  products: Product[];
  wishlist: Record<number, boolean>;
  onToggleWishlist: (id: number) => void;
}

export default function ProductListView({
  products,
  wishlist,
  onToggleWishlist,
}: ProductListViewProps) {
  return (
    <div className="space-y-4">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="group flex gap-6 bg-gradient-to-r from-slate-900/50 to-black border border-amber-600/30 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 animate-slideInLeft"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          {/* Thumbnail */}
          <div className="relative overflow-hidden bg-slate-800 h-40 w-40 rounded-lg flex-shrink-0">
            <img
              src={
                product.image ||
                "/placeholder.svg?height=160&width=160&query=bridal%20outfit"
              }
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <button
              onClick={() => onToggleWishlist(product.id)}
              className="absolute top-3 right-3 w-10 h-10 bg-black/80 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  wishlist[product.id]
                    ? "fill-red-500 text-red-500"
                    : "text-amber-400"
                }`}
              />
            </button>
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-amber-400 text-xs font-bold tracking-widest uppercase">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-semibold text-white mt-2 group-hover:text-amber-400 transition-colors">
                    {product.name}
                  </h3>
                </div>
                <button className="bg-amber-500/20 text-amber-400 p-2 rounded-lg hover:bg-amber-500 hover:text-black transition-all duration-300 hover:scale-110">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                {product.subcategory}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(product.rating)
                          ? "text-amber-400"
                          : "text-gray-600"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-400 text-xs">
                  ({product.rating})
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-amber-600/20">
              <p className="text-amber-400 font-bold text-2xl">
                ₹{product.price.toLocaleString()}
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
