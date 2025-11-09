"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingBag, Package, Truck, CheckCircle } from "lucide-react";
import Image from "next/image";

const orders = [
  {
    id: "ORD-987654",
    date: "October 28, 2025",
    total: "$1,250",
    status: "Shipped",
    progress: 70,
    thumbnail: "/b1.png",
  },
  {
    id: "ORD-987321",
    date: "October 20, 2025",
    total: "$980",
    status: "Delivered",
    progress: 100,
    thumbnail: "/b2.png",
  },
  {
    id: "ORD-987111",
    date: "October 5, 2025",
    total: "$750",
    status: "Processing",
    progress: 40,
    thumbnail: "/b11.png",
  },
];

export default function OrdersPage() {
  const [filter, setFilter] = useState("All");

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 relative"
      >
        <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-wide">
          Your <span className="text-primary font-medium">Orders</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Track your luxury couture pieces, from custom stitching to doorstep
          delivery — beautifully managed in one elegant space.
        </p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute top-8 right-8 opacity-10"
        >
          <ShoppingBag size={120} />
        </motion.div>
      </motion.div>

      {/* Filter Bar */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {["All", "Processing", "Shipped", "Delivered"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-6 py-2 border border-gray-700 rounded-full text-sm transition-all duration-300 ${
              filter === status
                ? "bg-primary text-black font-semibold"
                : "hover:bg-primary/10"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Orders Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 md:px-16 pb-24"
      >
        {filteredOrders.map((order, i) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
            className="relative group bg-white/5 backdrop-blur-lg border border-gray-800 hover:border-primary rounded-2xl p-6 shadow-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5">
              <Image
                src={order.thumbnail}
                alt={order.id}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Order Info */}
            <h3 className="text-lg font-medium mb-2 text-primary">
              {order.id}
            </h3>
            <p className="text-sm text-gray-400 mb-2">{order.date}</p>
            <p className="text-lg font-light mb-4">{order.total}</p>

            {/* Progress */}
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
              <motion.div
                className="absolute h-full bg-primary"
                style={{ width: `${order.progress}%` }}
                layout
              />
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Status:{" "}
              <span className="text-white font-medium">{order.status}</span>
            </p>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2 rounded-full border border-primary text-sm hover:bg-primary hover:text-black transition-all duration-300"
              >
                Track Order
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={`/orders/${order.id}`}
                className="px-5 py-2 rounded-full border border-gray-700 text-sm hover:border-primary hover:text-primary transition-all duration-300"
              >
                View Details
              </motion.a>
            </div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
