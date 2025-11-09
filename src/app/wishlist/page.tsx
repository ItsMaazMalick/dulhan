"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { useState } from "react";
import { Heart, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Bridal - Royal Gold",
      price: "PKR 1500.00",
      image: "/bb3.png",
      category: "Bridal",
      rating: 5,
    },
    {
      id: 2,
      name: "Groom Collection - Modern",
      price: "PKR 520.00",
      image: "/c11.png",
      category: "Groom",
      rating: 5,
    },
    {
      id: 3,
      name: "Bridal - Luxury Pearl",
      price: "PKR 1800.00",
      image: "/b11.png",
      category: "Bridal",
      rating: 5,
    },
  ]);

  const handleRemove = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const handleAddToCart = (id: number) => {
    // Add to cart logic
  };

  const total = wishlistItems.reduce((sum, item) => {
    const price = Number.parseFloat(
      item.price.replace("$", "").replace(",", "")
    );
    return sum + price;
  }, 0);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4 animate-fadeInDown">
            <Heart
              className="w-8 h-8 animate-float"
              style={{ color: "#D4AF37" }}
              fill="#D4AF37"
            />
            <p className="text-xs tracking-widest text-gray-400">
              YOUR COLLECTION
            </p>
          </div>
          <h1
            className="text-5xl md:text-6xl font-light text-white mb-2 animate-fadeInUp"
            style={{ color: "#D4AF37" }}
          >
            My Wishlist
          </h1>
          <p className="text-gray-400 animate-fadeInUp delay-100">
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1 ? "item" : "items"} saved
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow py-12 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-20 animate-fadeInUp">
              <Heart className="w-16 h-16 mx-auto text-gray-700 mb-6 animate-float" />
              <h2 className="text-2xl font-light text-white mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-gray-400 mb-8">
                Start adding your favorite pieces to create your perfect
                collection.
              </p>
              <Link
                href="/products"
                className="inline-block bg-primary hover:bg-primary text-white tracking-widest py-3 px-8 transition-all duration-300 font-light hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              >
                EXPLORE COLLECTIONS
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Items Grid */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {wishlistItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="group border border-gray-800 hover:border-primary transition-all duration-300 p-6 rounded-lg hover:shadow-lg hover:shadow-primary/10 hover:bg-gray-900/10 animate-fadeInUp"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Image */}
                        <div className="relative h-40 md:h-auto md:aspect-square rounded overflow-hidden border border-gray-700 group-hover:border-primary transition-colors">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Info */}
                        <div className="md:col-span-2 flex flex-col justify-between">
                          <div>
                            <p className="text-xs text-primary tracking-widest mb-1 group-hover:text-primary transition-colors">
                              {item.category}
                            </p>
                            <h3 className="text-lg font-light text-white mb-2 group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex gap-1">
                              {[...Array(item.rating)].map((_, i) => (
                                <span key={i} className="text-primary text-sm">
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-2xl font-light text-white group-hover:text-primary transition-colors">
                            {item.price}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2 justify-center">
                          <button
                            onClick={() => handleAddToCart(item.id)}
                            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary text-white py-2 transition-all duration-300 text-sm font-light tracking-widest hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            ADD
                          </button>
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="flex items-center justify-center gap-2 border border-gray-700 hover:border-red-500 text-gray-300 hover:text-red-500 py-2 transition-all duration-300 text-sm font-light hover:scale-105"
                          >
                            <Trash2 className="w-4 h-4" />
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="border border-gray-800 p-8 rounded-lg sticky top-32 space-y-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:bg-gray-900/10 animate-slideInRight">
                  <h3 className="text-xl font-light text-white">
                    Order Summary
                  </h3>

                  <div className="space-y-3 border-t border-b border-gray-800 py-6">
                    <div className="flex justify-between text-gray-400 text-sm hover:text-gray-300 transition-colors">
                      <span>Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-primary text-sm">
                      <span>Shipping</span>
                      <span>FREE</span>
                    </div>
                    <div className="flex justify-between text-gray-400 text-sm hover:text-gray-300 transition-colors">
                      <span>Tax</span>
                      <span>${(total * 0.1).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-white text-lg font-light">
                    <span>Total</span>
                    <span className="text-primary">
                      ${(total * 1.1).toFixed(2)}
                    </span>
                  </div>

                  <button className="w-full bg-primary hover:bg-primary text-white tracking-widest py-3 transition-all duration-300 font-light hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
                    PROCEED TO CHECKOUT
                  </button>

                  <button className="w-full border border-gray-700 hover:border-primary text-white tracking-widest py-3 transition-all duration-300 font-light text-sm hover:shadow-lg hover:shadow-primary/10 hover:scale-105">
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
