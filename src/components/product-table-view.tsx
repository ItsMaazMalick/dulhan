"use client";

import { Heart, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  rating: number;
}

interface ProductTableViewProps {
  products: Product[];
  wishlist: Record<number, boolean>;
  onToggleWishlist: (id: number) => void;
}

export default function ProductTableView({
  products,
  wishlist,
  onToggleWishlist,
}: ProductTableViewProps) {
  return (
    <div className="border border-amber-600/30 rounded-xl overflow-hidden backdrop-blur">
      <table className="w-full">
        <thead>
          <tr className="border-b border-amber-600/30 bg-slate-900/50">
            <th className="text-left p-4 text-amber-400 font-bold text-sm uppercase tracking-wider">
              Product
            </th>
            <th className="text-left p-4 text-amber-400 font-bold text-sm uppercase tracking-wider">
              Category
            </th>
            <th className="text-center p-4 text-amber-400 font-bold text-sm uppercase tracking-wider">
              Rating
            </th>
            <th className="text-right p-4 text-amber-400 font-bold text-sm uppercase tracking-wider">
              Price
            </th>
            <th className="text-center p-4 text-amber-400 font-bold text-sm uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              className="border-b border-amber-600/20 hover:bg-amber-500/10 transition-all duration-300 group animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <td className="p-4">
                <div className="flex gap-3 items-center">
                  <img
                    src={
                      product.image ||
                      "/placeholder.svg?height=50&width=50&query=product"
                    }
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                      {product.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {product.subcategory}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-amber-400 font-medium text-sm">
                {product.category}
              </td>
              <td className="p-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs ${
                        i < Math.floor(product.rating)
                          ? "text-amber-400"
                          : "text-gray-600"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-4 text-right">
                <p className="text-amber-400 font-bold text-lg">
                  ₹{product.price.toLocaleString()}
                </p>
              </td>
              <td className="p-4 text-center">
                <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    className="w-8 h-8 bg-amber-500/20 text-amber-400 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    <Heart className="w-4 h-4 mx-auto" />
                  </button>
                  <button className="w-8 h-8 bg-amber-500/20 text-amber-400 rounded-lg hover:bg-amber-500 hover:text-black transition-all duration-300">
                    <Eye className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
