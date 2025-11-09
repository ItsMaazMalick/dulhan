"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Truck, CheckCircle, Clock, Phone, FileText } from "lucide-react";

interface Order {
  id: string;
  date: string;
  status: string;
  progress: number;
  eta: string;
  courier: {
    name: string;
    phone: string;
    trackingUrl: string;
  };
  shippingTo: string;
  items: {
    id: string;
    name: string;
    image: string;
    qty: number;
    price: number;
  }[];
  timeline: {
    id: number;
    title: string;
    done: boolean;
    date: string;
  }[];
  subtotal: number;
  shippingCost: number;
  total: number;
}

const mockOrders: Order[] = [
  {
    id: "ORD-987654",
    date: "October 28, 2025",
    status: "Out for Delivery",
    progress: 85,
    eta: "Nov 10, 2025",
    courier: { name: "LuxeCourier", phone: "+92 300 000000", trackingUrl: "#" },
    shippingTo: "Mrs. Aisha Khan, DHA Phase 5, Lahore",
    items: [
      {
        id: "101",
        name: "Celestial Bridal Lehenga — Marigold",
        image: "/b1.png",
        qty: 1,
        price: 148000,
      },
    ],
    timeline: [
      { id: 1, title: "Order Placed", done: true, date: "Oct 28" },
      { id: 2, title: "Order Confirmed", done: true, date: "Oct 29" },
      { id: 3, title: "Tailoring & QA", done: true, date: "Nov 02" },
      { id: 4, title: "Packed & Dispatched", done: true, date: "Nov 06" },
      { id: 5, title: "Out for Delivery", done: false, date: "Nov 09" },
    ],
    subtotal: 148000,
    shippingCost: 1200,
    total: 149200,
  },
  {
    id: "ORD-987321",
    date: "October 20, 2025",
    status: "Delivered",
    progress: 100,
    eta: "Delivered",
    courier: { name: "LuxeCourier", phone: "+92 300 000001", trackingUrl: "#" },
    shippingTo: "Mr. Ali Khan, Karachi",
    items: [
      {
        id: "201",
        name: "Ivory Embroidered Gown",
        image: "/c1.png",
        qty: 1,
        price: 98000,
      },
    ],
    timeline: [
      { id: 1, title: "Order Placed", done: true, date: "Oct 20" },
      { id: 2, title: "Order Confirmed", done: true, date: "Oct 21" },
      { id: 3, title: "Tailoring & QA", done: true, date: "Oct 23" },
      { id: 4, title: "Packed & Dispatched", done: true, date: "Oct 25" },
      { id: 5, title: "Delivered", done: true, date: "Oct 28" },
    ],
    subtotal: 98000,
    shippingCost: 1100,
    total: 99100,
  },
];

export default function OrderDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (!id) return;
    const found = mockOrders.find((o) => o.id === id) || null;
    setTimeout(() => setOrder(found), 320);
  }, [id]);

  const statusColor = useMemo(() => {
    if (!order) return "text-gray-400";
    if (order.progress >= 100) return "text-green-400";
    if (order.progress >= 70) return "text-primary";
    return "text-gray-400";
  }, [order]);

  if (!order) {
    return (
      <div className="min-h-screen bg-black text-white grid place-items-center p-6">
        <div className="text-center">
          <div className="mb-4 animate-pulse text-primary font-semibold">
            Loading order...
          </div>
          <div className="text-sm text-gray-400">
            Fetching your order details
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white pb-24">
      {/* Back + Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/orders" className="text-primary hover:underline">
              ← Back to Orders
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif mt-4">{order.id}</h1>
            <p className="text-sm text-gray-400 mt-1">Placed on {order.date}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className={`text-sm font-semibold Rs {statusColor}`}>
              {order.status}
            </div>
            <Button
              className="bg-[#D4AF37] text-black"
              onClick={() => alert("Contacting concierge (mock)")}
            >
              Contact Concierge
            </Button>
          </div>
        </div>
      </div>

      {/* Top summary + timeline */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {/* Left: Visual / Map */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-slate-900/40 border border-primary/10 rounded-2xl p-6"
        >
          <div className="flex gap-6 items-start">
            <div className="w-36 h-36 rounded-xl overflow-hidden border border-gray-800">
              <Image
                src={order.items[0].image}
                alt={order.items[0].name}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold">{order.items[0].name}</h2>
              <p className="text-sm text-gray-300 mt-1">
                Qty: {order.items[0].qty}
              </p>
              <p className="text-sm text-gray-400 mt-3">Delivering to</p>
              <p className="text-sm font-medium text-primary">
                {order.shippingTo}
              </p>

              <div className="mt-6 flex gap-3">
                <Button
                  variant="outline"
                  className="rounded-full border-gray-700"
                  onClick={() => router.push(order.courier.trackingUrl)}
                >
                  <Truck className="mr-2 h-4 w-4" /> Track Courier
                </Button>
                <Button
                  className="bg-[#D4AF37] text-black rounded-full"
                  onClick={() => alert("Request return / support (mock)")}
                >
                  Request Support
                </Button>
              </div>
            </div>

            <div className="w-48 text-right">
              <div className="text-sm text-gray-300">ETA</div>
              <div className="text-lg font-semibold text-primary">
                {order.eta}
              </div>
              <div className="mt-4 text-sm text-gray-400">Courier</div>
              <div className="text-sm font-medium">{order.courier.name}</div>
              <a
                href={`tel:Rs {order.courier.phone}`}
                className="text-sm text-primary hover:underline mt-2 block"
              >
                <Phone className="inline-block mr-2 -mt-0.5" />{" "}
                {order.courier.phone}
              </a>
            </div>
          </div>

          {/* Map mock + animated dot */}
          <div className="mt-8 rounded-xl overflow-hidden border border-gray-800 bg-black/20 p-6">
            <h3 className="text-sm text-gray-300 mb-4">
              Live Delivery Map (mock)
            </h3>
            <div className="relative w-full h-48 bg-gradient-to-b from-slate-900 to-black rounded-lg overflow-hidden border border-primary/6">
              {/* simple SVG route illustration with animated dot */}
              <svg
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* route */}
                <path
                  d="M5 40 C 20 20, 40 10, 60 20 C 75 28, 90 15, 95 8"
                  stroke="#333"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M5 40 C 20 20, 40 10, 60 20 C 75 28, 90 15, 95 8"
                  stroke="url(#g)"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                />

                {/* animated dot — simulate along path using simple cx shifting */}
                <motion.circle
                  cx={`Rs {10 + (order.progress / 100) * 80}`}
                  cy={`Rs {38 - (order.progress / 100) * 30}`}
                  r="1.6"
                  fill="#D4AF37"
                  initial={{ scale: 0.6 }}
                  animate={{ scale: [0.9, 1.1, 0.9] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                />
              </svg>
            </div>

            <div className="mt-3 text-sm text-gray-400 flex items-center gap-3">
              <Clock className="h-4 w-4 text-primary" />
              <span>
                Estimated delivery window:{" "}
                <strong className="text-primary ml-1">{order.eta}</strong>
              </span>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Order Timeline</h3>
            <div className="space-y-4">
              {order.timeline.map((step: any, idx: number) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full grid place-items-center Rs {
                        step.done
                          ? "bg-[#D4AF37] text-black"
                          : "bg-slate-800 text-gray-400"
                      }`}
                    >
                      <CheckCircle size={18} />
                    </div>
                    {idx < order.timeline.length - 1 && (
                      <div
                        className="w-px h-full bg-gray-800 mt-2"
                        style={{ minHeight: 30 }}
                      />
                    )}
                  </div>

                  <div>
                    <div className="text-sm font-medium">{step.title}</div>
                    <div className="text-xs text-gray-400">{step.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Invoice & summary */}
        <aside className="bg-slate-900/40 border border-primary/10 rounded-2xl p-6 h-fit">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs text-gray-400">Order Summary</div>
              <div className="text-lg font-semibold mt-1">#{order.id}</div>
            </div>
            <div className="text-sm text-gray-300">{order.date}</div>
          </div>

          <div className="space-y-4">
            {order.items.map((it: any) => (
              <div key={it.id} className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg overflow-hidden border border-gray-800">
                  <Image
                    src={it.image}
                    alt={it.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{it.name}</div>
                  <div className="text-xs text-gray-400">Qty {it.qty}</div>
                </div>
                <div className="text-sm text-primary">
                  ₨ {it.price.toLocaleString()}
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-primary/6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>₨ {order.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400 mt-2">
                <span>Shipping</span>
                <span>₨ {order.shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white font-semibold mt-3">
                <span>Total</span>
                <span>₨ {order.total.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <Button
                className="bg-[#D4AF37] text-black"
                onClick={() => alert("Download invoice (mock)")}
              >
                <FileText className="mr-2 h-4 w-4" /> Download Invoice
              </Button>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => alert("Open returns modal (mock)")}
              >
                Request Return
              </Button>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <div className="mb-2">Shipping address</div>
              <div className="text-primary font-medium">{order.shippingTo}</div>
              <div className="mt-3 text-xs">
                Need help?{" "}
                <a
                  href={`tel:Rs {order.courier.phone}`}
                  className="text-primary underline"
                >
                  Call courier
                </a>{" "}
                or{" "}
                <a href="#" className="text-primary underline">
                  Contact concierge
                </a>
                .
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-gradient-to-r from-slate-900/40 to-black/40 border border-primary/8 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-lg font-semibold">
              Need urgent help with this order?
            </div>
            <div className="text-sm text-gray-400">
              Our boutique concierge is available 9am–9pm PKT for fittings &
              delivery coordination.
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              className="bg-[#D4AF37] text-black"
              onClick={() => alert("Starting chat (mock)")}
            >
              Chat with Concierge
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => alert("Call support (mock)")}
            >
              Call Support
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
