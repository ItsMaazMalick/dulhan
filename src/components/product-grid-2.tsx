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

interface ProductGrid2Props {
  products: Product[];
  wishlist: Record<number, boolean>;
  onToggleWishlist: (id: number) => void;
}

export default function ProductGrid2({
  products,
  wishlist,
  onToggleWishlist,
}: ProductGrid2Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((product, index) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="group bg-gradient-to-br from-slate-900/50 to-black border border-primary/30 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fadeInUp"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex gap-6">
            {/* Image */}
            <div className="relative overflow-hidden bg-slate-800 h-64 w-64 flex-shrink-0">
              <img
                src={
                  product.image ||
                  "/placeholder.svg?height=256&width=256&query=luxury%20bridal%20outfit"
                }
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <button
                onClick={() => onToggleWishlist(product.id)}
                className="absolute top-4 right-4 w-12 h-12 bg-black/80 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Heart
                  className={`w-6 h-6 transition-colors ${
                    wishlist[product.id]
                      ? "fill-red-500 text-red-500"
                      : "text-primary"
                  }`}
                />
              </button>
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                <Eye className="w-5 h-5" />
                Quick View
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <p className="text-primary text-xs font-bold tracking-widest mb-3 uppercase">
                  {product.category}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {product.subcategory}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(product.rating)
                            ? "text-primary"
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

              <div className="flex justify-between items-center pt-4 border-t border-primary/20">
                <p className="text-primary font-bold text-2xl">
                  Rs {product.price.toLocaleString()}
                </p>
                <button className="bg-primary hover:bg-primary text-black px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
