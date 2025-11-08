"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Truck, MapPin, Package } from "lucide-react";

/**
 * Order Tracking Page — luxury boutique style
 * Drop into: app/order-tracking/page.tsx
 *
 * Replace placeholder images with real assets (hero, product thumbs).
 */

const mockOrderSample = (trackingId: string) => ({
  id: trackingId || "SOF-23945",
  status: "Out for Delivery",
  progress: 75,
  items: [
    {
      id: "101",
      name: "Celestial Bridal Lehenga — Marigold",
      image: "/images/bridal/lehenga-1.jpg",
      qty: 1,
      price: 148000,
    },
  ],
  timeline: [
    { id: 1, label: "Order Placed", when: "Oct 30, 2025", done: true },
    { id: 2, label: "Order Confirmed", when: "Oct 31, 2025", done: true },
    { id: 3, label: "Tailoring in Progress", when: "Nov 02, 2025", done: true },
    { id: 4, label: "Quality & Packaging", when: "Nov 06, 2025", done: false },
    { id: 5, label: "Out for Delivery", when: "Nov 09, 2025", done: false },
  ],
  courier: {
    name: "LuxeCourier",
    trackingUrl: "#",
  },
  shipping: {
    to: "Mrs. Aisha Khan, Lahore, Pakistan",
    addressShort: "DHA Phase 5, Lahore",
    eta: "Nov 10, 2025",
  },
});

export default function OrderTrackingPage() {
  const [trackingId, setTrackingId] = useState("");
  const [order, setOrder] = useState<any | null>(null);
  const [mocked, setMocked] = useState(false);

  const handleTrack = () => {
    // Replace this with your real API call. For now we mock rich data.
    const data = mockOrderSample(trackingId || "SOF-23945");
    setOrder(data);
    setMocked(true);
    window.scrollTo({ top: 420, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black text-white pb-28">
      {/* Hero */}
      <header className="relative bg-gradient-to-b from-[#0b0b0b] via-slate-900 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight tracking-wide text-[#D4AF37]">
                Track Your Order
              </h1>
              <p className="mt-4 text-gray-300 max-w-xl">
                Your order is handled with atelier care — every stitch,
                inspection, and mile tracked for perfection. Enter your tracking
                ID and the boutique concierge will surface a live progress view.
              </p>

              <div className="mt-8 flex gap-3">
                <Input
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter Tracking ID (e.g. SOF-23945)"
                  className="max-w-md bg-white/6 text-white placeholder:text-gray-400"
                />
                <Button
                  onClick={handleTrack}
                  className="bg-[#D4AF37] text-black hover:bg-[#c09a2f] rounded-full px-6"
                >
                  Track
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Tip: You can find your tracking ID in the order confirmation
                email or in your account orders list.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative rounded-3xl overflow-hidden border border-amber-600/10 shadow-xl"
            >
              <div className="aspect-[16/10] relative w-full bg-gradient-to-br from-slate-900/40 via-black to-black/20">
                <Image
                  src="/images/bridal/atelier-hero.jpg"
                  alt="Atelier"
                  fill
                  className="object-cover opacity-95"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute left-6 bottom-6 bg-black/50 border border-amber-600/20 rounded-2xl p-4">
                  <p className="text-xs text-amber-300">Order Concierge</p>
                  <p className="mt-1 text-sm text-white font-medium">
                    24/7 personal support
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Timeline & progress (left) */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-b from-slate-900/60 to-black/60 border border-amber-600/10 overflow-visible">
              <CardHeaderInner
                title="Order Timeline"
                subtitle={order ? `Order ${order.id}` : "Awaiting tracking ID"}
              />
              <CardContent>
                {!order ? (
                  <div className="py-12 text-center text-gray-400">
                    Enter a tracking ID to reveal the live timeline and delivery
                    details.
                  </div>
                ) : (
                  <div className="space-y-8">
                    <ProgressBar
                      progress={order.progress}
                      status={order.status}
                    />

                    <div className="space-y-6">
                      {order.timeline.map((step: any, idx: number) => (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex gap-6 items-start"
                        >
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-10 h-10 rounded-full grid place-items-center ${
                                step.done
                                  ? "bg-[#D4AF37] text-black"
                                  : "bg-slate-800 text-gray-400"
                              }`}
                            >
                              {step.done ? (
                                <CheckCircle size={18} />
                              ) : (
                                <Clock size={16} />
                              )}
                            </div>
                            {idx < order.timeline.length - 1 && (
                              <div
                                className="h-full w-[1px] bg-gray-800 mt-2"
                                style={{ minHeight: 40 }}
                              />
                            )}
                          </div>

                          <div>
                            <p className="text-sm text-amber-200 font-medium">
                              {step.label}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {step.when}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Order story + help */}
            {order && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <Card className="bg-slate-900/60 border border-amber-600/10">
                  <CardHeaderInner
                    title="Order Story"
                    subtitle="A tailor-made journey"
                  />
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      This piece was handcrafted in our Lahore atelier. After a
                      rigorous inspection and careful packaging, a trusted
                      courier collects the parcel and dispatches it with insured
                      delivery. Your style consultant will be available for a
                      private fitting appointment on delivery.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <Button className="bg-[#D4AF37] text-black">
                        Contact Concierge
                      </Button>
                      <Button variant="outline">View Invoice</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/60 border border-amber-600/10">
                  <CardHeaderInner
                    title="Need Help?"
                    subtitle="We're here for you"
                  />
                  <CardContent>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        <strong className="text-amber-400">Phone: </strong> +92
                        300 000000
                      </p>
                      <p>
                        <strong className="text-amber-400">Email: </strong>{" "}
                        concierge@softexboutique.com
                      </p>
                      <p className="text-sm text-gray-400">
                        Live chat available 9am–9pm (PKT). Click contact
                        concierge to request an urgent assistance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Order summary (right column) */}
          <aside>
            <Card className="sticky top-28 bg-gradient-to-b from-slate-900/40 to-black/60 border border-amber-600/10">
              <CardHeaderInner
                title="Order Summary"
                subtitle={order ? `#${order.id}` : "—"}
              />
              <CardContent>
                {!order ? (
                  <div className="py-6 text-center text-gray-400">
                    No summary available
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* items */}
                    {order.items.map((it: any) => (
                      <div key={it.id} className="flex items-center gap-3">
                        <div className="w-20 h-20 rounded-xl overflow-hidden border border-gray-800">
                          <Image
                            src={it.image}
                            alt={it.name}
                            width={200}
                            height={200}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{it.name}</p>
                          <p className="text-xs text-gray-400">Qty {it.qty}</p>
                        </div>
                        <div className="text-sm text-amber-300 font-semibold">
                          ₨ {it.price.toLocaleString()}
                        </div>
                      </div>
                    ))}

                    <div className="pt-3 border-t border-amber-600/10">
                      <div className="flex justify-between text-gray-400">
                        <span>Subtotal</span>
                        <span>
                          ₨{" "}
                          {order.items
                            .reduce(
                              (s: number, a: any) => s + a.price * a.qty,
                              0
                            )
                            .toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Shipping</span>
                        <span>₨ 1,200</span>
                      </div>
                      <div className="flex justify-between text-white font-semibold mt-2">
                        <span>Total</span>
                        <span>
                          ₨{" "}
                          {(
                            order.items.reduce(
                              (s: number, a: any) => s + a.price * a.qty,
                              0
                            ) + 1200
                          ).toLocaleString()}
                        </span>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs text-gray-400">Courier</p>
                        <p className="text-sm text-amber-300 font-medium">
                          {order.courier.name}
                        </p>
                        <a
                          href={order.courier.trackingUrl}
                          className="text-xs text-amber-400 underline"
                        >
                          View courier status
                        </a>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs text-gray-400">Delivery</p>
                        <p className="text-sm">{order.shipping.eta}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {order.shipping.to}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </aside>
        </motion.div>
      </section>
    </main>
  );
}

/* --- small local components used above --- */

function CardHeaderInner({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="px-6 py-4 border-b border-amber-600/5 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {subtitle && <p className="text-xs text-amber-300 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

function ProgressBar({
  progress,
  status,
}: {
  progress: number;
  status: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-gray-300">Status</div>
        <div className="text-sm text-amber-300 font-semibold">{status}</div>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-amber-600/8">
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg,#D4AF37,#facc15)",
          }}
        />
      </div>
    </div>
  );
}
