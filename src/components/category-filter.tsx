"use client";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === category
              ? "bg-gradient-to-r from-primary to-primary text-white shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              : "border border-primary/30 text-gray-300 hover:border-primary/60 hover:text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
