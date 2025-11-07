"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import TopBanner from "@/components/top-banner";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  featured?: boolean;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Traditional Bridal Wear",
    excerpt:
      "Explore the timeless elegance and intricate craftsmanship behind traditional bridal lehengas.",
    content:
      "Traditional bridal wear has been a cornerstone of wedding fashion for centuries. From the intricate embroidery to the carefully chosen fabrics, every detail tells a story of artistry and heritage.",
    image: "/placeholder.svg?key=art1k",
    author: "Priya Sharma",
    date: "Nov 15, 2024",
    category: "Fashion",
    readTime: 5,
    featured: true,
  },
  {
    id: 2,
    title: "Modern Groom Wear Trends 2024",
    excerpt:
      "Discover contemporary styles that blend traditional elements with modern aesthetics.",
    content:
      "The modern groom is redefining wedding fashion with contemporary designs that respect tradition while embracing innovation. Learn about the latest trends in groom wear.",
    image: "/placeholder.svg?key=trend2",
    author: "Rajesh Kumar",
    date: "Nov 12, 2024",
    category: "Trends",
    readTime: 4,
  },
  {
    id: 3,
    title: "Mehendi Looks That Steal the Show",
    excerpt:
      "Get inspired with vibrant and colorful mehendi outfit ideas for your big celebration.",
    content:
      "Mehendi is one of the most fun pre-wedding celebrations. Discover the perfect outfit that combines comfort with style and will make you stand out.",
    image: "/placeholder.svg?key=mehnd3",
    author: "Neha Patel",
    date: "Nov 10, 2024",
    category: "Styling",
    readTime: 6,
    featured: true,
  },
  {
    id: 4,
    title: "Sustainable Bridal Fashion",
    excerpt:
      "How eco-conscious designers are revolutionizing the wedding wear industry.",
    content:
      "Sustainability in fashion is no longer a trend but a necessity. Discover how luxury bridal wear can be beautiful and environmentally responsible.",
    image: "/placeholder.svg?key=sust4",
    author: "Anya Singh",
    date: "Nov 8, 2024",
    category: "Sustainability",
    readTime: 7,
  },
  {
    id: 5,
    title: "Jewelry Trends for 2024 Weddings",
    excerpt:
      "Explore the latest in wedding jewelry that complements your outfit perfectly.",
    content:
      "The right jewelry can elevate any bridal look. From traditional pieces to contemporary designs, discover what's trending this season.",
    image: "/placeholder.svg?key=jew5l",
    author: "Vikram Desai",
    date: "Nov 5, 2024",
    category: "Accessories",
    readTime: 5,
  },
  {
    id: 6,
    title: "Customization Guide: Making Your Lehenga Unique",
    excerpt:
      "Learn how to customize your bridal lehenga to reflect your personal style.",
    content:
      "Personalization is key to creating the perfect bridal outfit. This guide walks you through the customization process and options available.",
    image: "/placeholder.svg?key=cust6",
    author: "Meera Chopra",
    date: "Nov 1, 2024",
    category: "DIY",
    readTime: 8,
  },
];

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = [
    "All",
    "Fashion",
    "Trends",
    "Styling",
    "Sustainability",
    "Accessories",
    "DIY",
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const categoryMatch =
      selectedCategory === "All" || post.category === selectedCategory;
    const searchMatch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const otherPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Hero Section */}
      <TopBanner
        title="Wedding Insights"
        description="Stay updated with the latest trends, tips, and stories from the
            world of bridal fashion"
      />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative animate-fadeInUp">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-amber-700/30 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 animate-slideInLeft">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-amber-600 text-white shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    : "border border-amber-700/30 text-gray-300 hover:border-amber-500/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-amber-500 to-amber-700 rounded"></div>
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post, idx) => (
                <div
                  key={post.id}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                  className="group bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-amber-700/30 rounded-lg overflow-hidden hover:border-amber-500/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] animate-scaleIn cursor-pointer"
                  onClick={() => setReadingPost(post)}
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-800">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-amber-600/90 backdrop-blur-sm rounded-full text-white text-xs font-bold">
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-amber-600/20 text-amber-400 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-amber-500 text-xs font-semibold">
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-amber-400 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <p className="font-semibold text-white">
                          {post.author}
                        </p>
                        <p>{post.date}</p>
                      </div>
                      <ArrowRight
                        className="text-amber-500 group-hover:translate-x-2 transition-transform"
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        {otherPosts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-amber-500 to-amber-700 rounded"></div>
              Latest Articles
            </h2>
            <div className="space-y-6">
              {otherPosts.map((post, idx) => (
                <div
                  key={post.id}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  className="group bg-gradient-to-r from-gray-900 to-black border border-amber-700/20 rounded-lg p-6 hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] animate-fadeInUp cursor-pointer flex gap-6"
                  onClick={() => setReadingPost(post)}
                >
                  {/* Image - Desktop Only */}
                  <div className="hidden md:block relative w-48 h-40 overflow-hidden rounded-lg bg-gray-800 flex-shrink-0">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="px-3 py-1 bg-amber-600/20 text-amber-400 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">
                          <Calendar size={14} className="inline mr-1" />
                          {post.date}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {post.readTime} min read
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-amber-400 transition">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <ArrowRight
                        className="text-amber-500 group-hover:translate-x-2 transition-transform"
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl mb-4">No articles found</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Reading Modal */}
      {readingPost && (
        <div
          className="fixed inset-0 bg-black/95 z-50 overflow-y-auto animate-fadeInUp"
          onClick={() => setReadingPost(null)}
        >
          <div
            className="max-w-3xl mx-auto px-4 py-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setReadingPost(null)}
              className="mb-8 text-gray-400 hover:text-white transition flex items-center gap-2"
            >
              ← Back
            </button>

            {/* Article Header */}
            <article className="bg-gradient-to-b from-gray-900 to-black border border-amber-700/30 rounded-lg overflow-hidden">
              {/* Hero Image */}
              <div className="w-full h-96 overflow-hidden bg-gray-800">
                <img
                  src={readingPost.image || "/placeholder.svg"}
                  alt={readingPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 flex-wrap text-sm text-gray-400">
                  <span className="px-3 py-1 bg-amber-600/20 text-amber-400 font-semibold rounded-full">
                    {readingPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {readingPost.date}
                  </span>
                  <span>{readingPost.readTime} min read</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {readingPost.title}
                </h1>

                {/* Author */}
                <div className="flex items-center gap-3 pb-6 border-b border-amber-700/20 mb-8">
                  <div className="w-12 h-12 rounded-full bg-amber-600/30 flex items-center justify-center">
                    <User className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {readingPost.author}
                    </p>
                    <p className="text-gray-400 text-sm">Staff Writer</p>
                  </div>
                </div>

                {/* Content */}
                <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                  <p>{readingPost.content}</p>
                  <p>
                    This article explores the depths of contemporary bridal
                    fashion, highlighting how tradition meets modernity. Whether
                    you're a fashion enthusiast or planning your special day,
                    understanding these trends can help you make informed
                    decisions about your wedding attire.
                  </p>
                  <p>
                    The future of bridal fashion lies in personalization and
                    sustainability. Couples today are looking for unique pieces
                    that tell their story while respecting the environment and
                    supporting artisans who create these masterpieces.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-amber-700/20">
                  <div className="flex flex-wrap gap-3">
                    {["Wedding Fashion", "Bridal Wear", "Luxury", "Trends"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-amber-600/20 text-amber-400 text-sm font-semibold rounded-full hover:bg-amber-600/30 transition cursor-pointer"
                        >
                          #{tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
