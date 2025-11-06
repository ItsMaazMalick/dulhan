"use client";

import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  featured?: boolean;
  onClick?: () => void;
  compact?: boolean;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  author,
  date,
  category,
  readTime,
  featured = false,
  onClick,
  compact = false,
}: BlogCardProps) {
  if (compact) {
    return (
      <div
        onClick={onClick}
        className="group bg-gradient-to-r from-gray-900 to-black border border-amber-700/20 rounded-lg p-6 hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] cursor-pointer flex gap-6"
      >
        <div className="hidden md:block relative w-48 h-40 overflow-hidden rounded-lg bg-gray-800 flex-shrink-0">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="px-3 py-1 bg-amber-600/20 text-amber-400 text-xs font-semibold rounded-full">
              {category}
            </span>
            <span className="text-gray-500 text-xs">{readTime} min read</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-amber-400 transition">
            {title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-4">{excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{author}</span>
            <ArrowRight className="text-amber-500" size={20} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="group bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-amber-700/30 rounded-lg overflow-hidden hover:border-amber-500/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] cursor-pointer"
    >
      <div className="relative h-80 overflow-hidden bg-gray-800">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-amber-600/90 rounded-full text-white text-xs font-bold">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-amber-600/20 text-amber-400 text-xs font-semibold rounded-full">
            {category}
          </span>
          <span className="text-amber-500 text-xs font-semibold">
            {readTime} min
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-amber-400 transition">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            <p className="font-semibold text-white">{author}</p>
            <p>{date}</p>
          </div>
          <ArrowRight className="text-amber-500 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </div>
  );
}
