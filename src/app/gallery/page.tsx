"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Royal Bridal Collection",
    category: "Bridal",
    image: "/b1.png",
    description: "Exquisite bridal lehenga with intricate gold embroidery",
  },
  {
    id: 2,
    title: "Groom's Grand Entrance",
    category: "Groom",
    image: "/b2.png",
    description: "Traditional sherwani with elegant embellishments",
  },
  {
    id: 3,
    title: "Wedding Saree Moments",
    category: "Bridal",
    image: "/bb1.png",
    description: "Luxurious silk saree perfect for weddings",
  },
  {
    id: 4,
    title: "Engagement Wear",
    category: "Bridal",
    image: "/b11.png",
    description: "Stunning engagement outfit with modern touch",
  },
  {
    id: 5,
    title: "Reception Groom Look",
    category: "Groom",
    image: "/bb2.png",
    description: "Contemporary groom wear for reception",
  },
  {
    id: 6,
    title: "Mehendi Special",
    category: "Bridal",
    image: "/bb3.png",
    description: "Vibrant mehendi celebration outfit",
  },
  {
    id: 7,
    title: "Heritage Collection",
    category: "Traditional",
    image: "/bb4.png",
    description: "Classic heritage-inspired wedding wear",
  },
  {
    id: 8,
    title: "Modern Fusion",
    category: "Contemporary",
    image: "/w1.png",
    description: "Modern fusion of traditional and contemporary",
  },
  {
    id: 9,
    title: "Bridal Close-up",
    category: "Bridal",
    image: "/w2.png",
    description: "Beautiful details of bridal jewelry",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const categories = ["All", "Bridal", "Groom", "Traditional", "Contemporary"];

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const prevIndex =
      currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-20 px-4 border-b border-amber-700/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeInUp">
            Gallery
          </h1>
          <p className="text-gray-400 text-lg animate-fadeInUp delay-100">
            Explore our stunning collection of wedding moments
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl w-full mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-12 animate-slideInLeft">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  : "border border-amber-700/30 text-gray-300 hover:border-amber-500/60 hover:text-amber-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              style={{ animationDelay: `${idx * 0.1}s` }}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-scaleIn"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                setSelectedImage(item);
                setLightboxOpen(true);
              }}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-gray-900 border border-amber-700/20 rounded-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-300 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                } rounded-lg flex flex-col justify-end p-6`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-amber-400 text-sm font-semibold mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <button className="p-2 bg-amber-600 rounded-full hover:bg-amber-700 transition transform hover:scale-110 flex-shrink-0">
                    <Expand size={18} />
                  </button>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-amber-600/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                View
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              No images found in this category
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeInUp"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Navigation - Left */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            className="absolute left-6 p-3 bg-white/10 hover:bg-amber-600 rounded-full transition transform hover:scale-110"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          {/* Image Container */}
          <div className="max-w-4xl w-full animate-scaleIn">
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-amber-400 text-sm font-semibold mb-2">
                {selectedImage.category}
              </p>
              <h3 className="text-white text-2xl font-bold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>

          {/* Navigation - Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            className="absolute right-6 p-3 bg-white/10 hover:bg-amber-600 rounded-full transition transform hover:scale-110"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full">
            {filteredItems.findIndex((item) => item.id === selectedImage.id) +
              1}{" "}
            / {filteredItems.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
