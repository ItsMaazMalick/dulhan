"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bridal - Royal Gold",
      price: 1500,
      image: "/bb3.png",
      quantity: 1,
      size: "Small",
    },
    {
      id: 2,
      name: "Groom Collection - Modern",
      price: 520,
      image: "/c11.png",
      quantity: 2,
      size: "Medium",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const handleUpdateQuantity = (id: number, newQuantity: any) => {
    if (newQuantity <= 0) {
      handleRemove(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = () => {
    if (coupon.trim()) {
      setCouponApplied(true);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 500 ? 0 : 50;
  const tax = (subtotal - discount) * 0.1;
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4 animate-fadeInDown">
            <ShoppingBag
              className="w-8 h-8 animate-float"
              style={{ color: "#D4AF37" }}
            />
            <p className="text-xs tracking-widest text-gray-400">
              SHOPPING CART
            </p>
          </div>
          <h1
            className="text-5xl md:text-6xl font-light text-white animate-fadeInUp"
            style={{ color: "#D4AF37" }}
          >
            Your Cart
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow py-12 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 animate-fadeInUp">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-700 mb-6 animate-float" />
              <h2 className="text-2xl font-light text-white mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-400 mb-8">
                Add some stunning pieces to get started on your special day.
              </p>
              <Link
                href="/products"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white tracking-widest py-3 px-8 transition-all duration-300 font-light hover:shadow-lg hover:shadow-amber-600/30 hover:scale-105"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="mb-6 animate-fadeInUp">
                  <p className="text-sm text-gray-400">
                    {cartItems.length} items in your cart
                  </p>
                </div>

                <div className="space-y-6">
                  {cartItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="group border border-gray-800 hover:border-amber-500 transition-all duration-300 p-6 rounded-lg hover:shadow-lg hover:shadow-amber-500/10 hover:bg-gray-900/10 animate-fadeInUp"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {/* Image */}
                        <div className="relative h-40 md:h-auto md:aspect-square rounded overflow-hidden border border-gray-700 group-hover:border-amber-500 transition-colors">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Info */}
                        <div className="md:col-span-2">
                          <h3 className="text-lg font-light text-white mb-2 group-hover:text-amber-100 transition-colors">
                            {item.name}
                          </h3>
                          <div className="space-y-1 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            <p>Size: {item.size}</p>
                            <p className="text-2xl font-light text-white mt-3 group-hover:text-amber-200 transition-colors">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center gap-3 border border-gray-700 hover:border-amber-500 w-fit px-4 py-2 rounded transition-colors duration-300">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:scale-110"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-white font-light w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:scale-110"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove */}
                        <div className="flex items-center justify-end">
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="border border-gray-800 p-8 rounded-lg sticky top-32 space-y-6 hover:border-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 hover:bg-gray-900/10 animate-slideInRight">
                  <h3 className="text-xl font-light text-white">
                    Order Summary
                  </h3>

                  {/* Coupon Section */}
                  <div className="border-b border-gray-800 pb-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Enter coupon code"
                        className="flex-1 bg-transparent border border-gray-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-amber-500 focus:shadow-md focus:shadow-amber-500/20 transition-all placeholder-gray-600"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        className="bg-gray-700 hover:bg-amber-600 text-white px-4 py-2 text-sm transition-all duration-300 font-light hover:shadow-md hover:shadow-amber-600/20"
                      >
                        Apply
                      </button>
                    </div>
                    {couponApplied && (
                      <p className="text-xs text-amber-500 mt-2 animate-slideInLeft">
                        ✓ Coupon applied - 10% off
                      </p>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-400 text-sm hover:text-gray-300 transition-colors">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-amber-500 text-sm animate-slideInLeft">
                        <span>Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-400 text-sm hover:text-gray-300 transition-colors">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-400 text-sm hover:text-gray-300 transition-colors">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-800 pt-3 flex justify-between text-white text-lg font-light">
                    <span>Total</span>
                    <span className="text-amber-200 text-xl">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white tracking-widest py-3 transition-all duration-300 font-light hover:shadow-lg hover:shadow-amber-600/30 hover:scale-105">
                    PROCEED TO CHECKOUT
                  </button>

                  <button className="w-full border border-gray-700 hover:border-amber-500 text-white tracking-widest py-3 transition-all duration-300 font-light text-sm hover:shadow-lg hover:shadow-amber-500/10 hover:scale-105">
                    CONTINUE SHOPPING
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    🔒 Secure checkout with SSL encryption
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
