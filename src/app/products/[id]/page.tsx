"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Play } from "lucide-react";

/* ---------------------------------------------------------------------------
  New cinematic 3D Product Page
  - 3D parallax hero with tilt on hover
  - Smooth crossfade carousel (no fill -> stable layout)
  - Sticky purchase bar with microinteractions
  - Size guide modal + video preview
  - Reviews strip and 3D related carousel
---------------------------------------------------------------------------*/

/* Mock product (replace with real fetch) */
const mockProduct = {
  id: "101",
  name: "Royal Bridal Lehenga — Golden Velvet Edition",
  price: 189000,
  short: "Hand-embroidered zardozi, Swarovski accents, bespoke tailoring.",
  description:
    "An atelier-crafted lehenga marrying Mughal embroidery with modern couture lines. Each piece passes rigorous hand inspection and finishing in our Lahore atelier.",
  images: ["/b1.png", "/b2.png", "/b11.png"],
  video: "/vr-experience.mp4",
  highlights: [
    "Hand-embroidered zardozi",
    "Swarovski-certified crystals",
    "Silk lining & structured drape",
    "Bespoke fitting available",
  ],
  care: [
    "Professional dry-clean only",
    "Store in garment bag",
    "Avoid moisture",
  ],
  reviews: [
    { name: "Ayesha", rating: 5, text: "Beyond expectations — flawless." },
    { name: "Mona", rating: 5, text: "Luxurious, perfect fit." },
    { name: "Sara", rating: 5, text: "The craftsmanship is incredible." },
  ],
  related: [
    {
      id: "301",
      name: "Ivory Embroidered Gown",
      image: "/c1.png",
      price: 98000,
    },
    {
      id: "302",
      name: "Midnight Reception Lehenga",
      image: "/c2.png",
      price: 76000,
    },
    {
      id: "303",
      name: "Sapphire Velvet Sherwani",
      image: "/hc2.jpg",
      price: 85000,
    },
  ],
};

export default function ProductPage() {
  const product = mockProduct;
  const [index, setIndex] = useState(0);
  const [fav, setFav] = useState(false);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, tz: 0 });
  const heroRef = useRef<HTMLDivElement | null>(null);

  /* Auto rotate thumbnails every 6s */
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % product.images.length),
      6000
    );
    return () => clearInterval(t);
  }, [product.images.length]);

  /* 3D tilt calculation */
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const ry = (px - 0.5) * 18; // rotateY
    const rx = -(py - 0.5) * 12; // rotateX
    const tz = 1 + (py - 0.5) * 6; // translateZ subtle
    setTilt({ rx, ry, tz });
  };
  const resetTilt = () => setTilt({ rx: 0, ry: 0, tz: 0 });

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white">
      {/* Sticky action bar */}
      <div className="z-50 backdrop-blur bg-black/40 border-b border-primary/8">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-primary font-medium">
              {product.name}
            </div>
            <div className="text-xs text-gray-300">{product.short}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-semibold text-primary">
              ₨ {product.price.toLocaleString()}
            </div>
            <Button
              className="bg-[#D4AF37] text-black rounded-full px-4 py-2"
              onClick={() => alert("Added to cart (mock)")}
            >
              <ShoppingBag className="mr-2 h-4 w-4" /> Add to cart
            </Button>
            <button
              aria-label="wishlist"
              onClick={() => setFav((f) => !f)}
              className={`p-2 rounded-full ${
                fav ? "bg-primary/20 text-primary" : "bg-white/5 text-gray-200"
              }`}
            >
              <Heart />
            </button>
          </div>
        </div>
      </div>

      {/* Hero: 3D stage */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: 3D image stage */}
          <div
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            style={{ perspective: 1400 }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden border border-primary/10 bg-black"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.45s ease",
                transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(${tilt.tz}px)`,
                boxShadow: "0 20px 60px rgba(2,6,23,0.8)",
              }}
            >
              {/* Animated image layers for depth */}
              <div className="relative w-full aspect-[4/5] bg-black">
                {/* layered motion images (stable layout) */}
                {product.images.map((src, i) => (
                  <AnimatePresence key={i}>
                    {i === index && (
                      <motion.div
                        key={src}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={src}
                          alt={`${product.name} ${i + 1}`}
                          width={1200}
                          height={1500}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}

                {/* Video preview button */}
                <button
                  onClick={() => setShowVideo(true)}
                  aria-label="Play product video"
                  className="absolute bottom-6 left-6 bg-black/60 border border-primary/20 rounded-full p-3 hover:scale-105 transition"
                >
                  <Play className="h-5 w-5 text-primary" />
                </button>

                {/* micro-thumbnails (left) */}
                <div className="absolute right-6 top-6 flex flex-col gap-3">
                  {product.images.map((t, i) => (
                    <button
                      key={t}
                      onClick={() => setIndex(i)}
                      className={`w-14 h-18 rounded-lg overflow-hidden border ${
                        i === index ? "border-primary" : "border-gray-800"
                      } transform-gpu transition-all`}
                    >
                      <Image
                        src={t}
                        alt={`thumb-${i}`}
                        width={180}
                        height={240}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* bottom badges */}
            <div className="mt-6 flex gap-4">
              <div className="bg-slate-900/40 px-4 py-2 rounded-2xl border border-primary/10 text-sm">
                Handcrafted • 120+ hours
              </div>
              <div className="bg-slate-900/40 px-4 py-2 rounded-2xl border border-primary/10 text-sm">
                Free fittings • Insured delivery
              </div>
            </div>
          </div>

          {/* Right: Info, highlights, size & actions */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-serif text-primary tracking-tight">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-primary">
              ₨ {product.price.toLocaleString()}
            </p>

            <p className="text-gray-300 max-w-lg">{product.description}</p>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {product.highlights.map((h) => (
                <div
                  key={h}
                  className="bg-slate-900/40 p-3 rounded-lg border border-primary/8 text-sm"
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Size & Qty */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-4">
              <div>
                <div className="text-xs text-gray-400 mb-2">Select Size</div>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 py-2 rounded-full border ${
                        size === s ? "bg-primary text-black" : "border-gray-700"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setShowSizeGuide(true)}
                  className="mt-2 text-xs text-primary underline"
                >
                  Size guide
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-xs text-gray-400">Quantity</div>
                <div className="flex items-center gap-2 bg-slate-900/30 border border-primary/8 rounded-full px-3 py-1">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-2"
                  >
                    −
                  </button>
                  <div className="px-3 font-medium">{qty}</div>
                  <button onClick={() => setQty((q) => q + 1)} className="px-2">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 mt-2">
              <Button
                className="bg-[#D4AF37] text-black px-6 py-3 rounded-full"
                onClick={() => alert("checkout (mock)")}
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Buy now
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-gray-700"
                onClick={() => alert("Added to wishlist (mock)")}
              >
                <Heart className="mr-2 h-4 w-4" /> Save
              </Button>
            </div>

            {/* Shipping estimator */}
            <ShippingEstimator price={product.price} />
          </div>
        </div>
      </section>

      {/* Video modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/70"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-black rounded-2xl overflow-hidden max-w-3xl w-full"
            >
              <div className="relative aspect-[16/9]">
                <video
                  src={product.video}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex justify-end">
                <Button onClick={() => setShowVideo(false)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Size Guide modal */}
      <AnimatePresence>
        {showSizeGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              className="bg-slate-900 rounded-2xl p-6 max-w-2xl w-full"
            >
              <h3 className="text-xl font-semibold mb-3">Size Guide</h3>
              <p className="text-sm text-gray-300">
                Use these measures to pick the correct size. For bespoke fits,
                request a tailoring appointment at checkout.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li>
                  <strong>Bust:</strong> XS 30" • S 32" • M 34" • L 36" • XL 38"
                </li>
                <li>
                  <strong>Waist:</strong> XS 24" • S 26" • M 28" • L 30" • XL
                  32"
                </li>
                <li>
                  <strong>Hips:</strong> XS 34" • S 36" • M 38" • L 40" • XL 42"
                </li>
                <li>
                  <strong>Length:</strong> Custom — specify preferred length
                </li>
              </ul>
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setShowSizeGuide(false)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reviews strip */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <h3 className="text-2xl font-semibold mb-4">What clients say</h3>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar py-3">
          {product.reviews.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="min-w-[260px] bg-slate-900/30 border border-primary/8 rounded-2xl p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-sm text-primary">
                    {Array.from({ length: r.rating }).map((_, j) => "★")}
                  </div>
                </div>
                <div className="text-sm text-gray-400">Verified buyer</div>
              </div>
              <p className="mt-3 text-gray-300 text-sm">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related 3D carousel */}
      <section className="max-w-7xl mx-auto px-6 mt-12 pb-24">
        <h3 className="text-2xl font-semibold mb-6">You may also love</h3>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar">
            {product.related.map((r, i) => (
              <motion.div
                key={r.id}
                whileHover={{ scale: 1.04 }}
                className="min-w-[260px] bg-gradient-to-b from-slate-900/30 to-black rounded-2xl p-0 border border-primary/8 transform-gpu"
              >
                <div className="relative h-48 rounded-t-2xl overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.name}
                    width={900}
                    height={700}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-primary font-medium">
                    {r.name}
                  </div>
                  <div className="text-lg font-semibold mt-2">
                    ₨ {r.price.toLocaleString()}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button className="bg-[#D4AF37] text-black px-4 py-2">
                      View
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      Save
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* --------------------------- Helper components --------------------------- */

function ShippingEstimator({ price }: { price: number }) {
  const [country, setCountry] = useState("PK");
  const [zip, setZip] = useState("");
  const [estimate, setEstimate] = useState<{
    cost: number;
    days: string;
  } | null>(null);

  const estimateNow = () => {
    // Mock estimation logic
    if (country === "PK")
      setEstimate({ cost: 1200, days: "2-4 business days" });
    else
      setEstimate({
        cost: Math.round(price * 0.05),
        days: "7-14 business days",
      });
  };

  return (
    <div className="mt-4 p-4 bg-slate-900/30 border border-primary/8 rounded-lg">
      <div className="text-sm text-gray-300">Shipping estimator</div>
      <div className="flex gap-2 mt-3 items-center">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="bg-transparent border border-gray-700 rounded px-3 py-2"
        >
          <option value="PK">Pakistan</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
        </select>
        <input
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="ZIP / Postal"
          className="bg-transparent border border-gray-700 rounded px-3 py-2 flex-1"
        />
        <Button className="bg-[#D4AF37] text-black" onClick={estimateNow}>
          Estimate
        </Button>
      </div>

      {estimate && (
        <div className="mt-3 text-sm text-gray-300">
          <div>
            Cost:{" "}
            <span className="text-primary">
              ₨ {estimate.cost.toLocaleString()}
            </span>
          </div>
          <div>
            ETA: <span className="text-primary">{estimate.days}</span>
          </div>
        </div>
      )}
    </div>
  );
}
