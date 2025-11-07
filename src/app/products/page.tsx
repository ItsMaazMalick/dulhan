"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LayoutToggle, { type LayoutType } from "@/components/layout-toggle";
import ProductGrid2 from "@/components/product-grid-2";
import ProductGrid3 from "@/components/product-grid-3";
import ProductListView from "@/components/product-list-view";
import ProductTableView from "@/components/product-table-view";
import TopBanner from "@/components/top-banner";

const PRODUCTS_PER_PAGE = 8;

export default function TopCategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});
  const [layout, setLayout] = useState<LayoutType>("grid-3");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryScrollPos, setCategoryScrollPos] = useState(0);
  const [selectedGender, setSelectedGender] = useState<"bride" | "groom">(
    "bride"
  );

  const categories =
    selectedGender === "bride"
      ? [
          { id: 1, name: "Lehenga", image: "/b1.png" },
          { id: 2, name: "Saree", image: "/b2.png" },
        ]
      : [
          { id: 3, name: "Anarkali", image: "/b11.png" },
          { id: 4, name: "Sharara", image: "/b22.png" },
          { id: 5, name: "Gown", image: "/bb1.png" },
        ];

  const subcategoriesMap: Record<number, string[]> = {
    1: [
      "Bridal Lehenga",
      "Party Lehenga",
      "Wedding Lehenga",
      "Designer Lehenga",
    ],
    2: ["Bridal Saree", "Silk Saree", "Banarasi Saree", "Designer Saree"],
    3: [
      "Bridal Anarkali",
      "Party Anarkali",
      "Embroidered Anarkali",
      "Designer Anarkali",
    ],
    4: [
      "Bridal Sharara",
      "Party Sharara",
      "Embroidered Sharara",
      "Designer Sharara",
    ],
    5: ["Bridal Gown", "Party Gown", "Designer Gown", "Western Gown"],
  };

  const products = [
    {
      id: 1,
      name: "Royal Bridal Lehenga",
      category: "Lehenga",
      subcategory: "Bridal Lehenga",
      price: 45000,
      image: "/b1.png",
      rating: 4.5,
      gender: "bride",
    },
    {
      id: 2,
      name: "Golden Silk Saree",
      category: "Saree",
      subcategory: "Silk Saree",
      price: 35000,
      image: "/b2.png",
      rating: 4.8,
      gender: "bride",
    },
    {
      id: 3,
      name: "Embroidered Anarkali",
      category: "Anarkali",
      subcategory: "Embroidered Anarkali",
      price: 28000,
      image: "/b11.png",
      rating: 4.3,
      gender: "bride",
    },
    {
      id: 4,
      name: "Maroon Sharara Set",
      category: "Sharara",
      subcategory: "Bridal Sharara",
      price: 32000,
      image: "/b22.png",
      rating: 4.6,
      gender: "bride",
    },
    {
      id: 5,
      name: "White Bridal Gown",
      category: "Gown",
      subcategory: "Bridal Gown",
      price: 55000,
      image: "/bb1.png",
      rating: 4.9,
      gender: "bride",
    },
    {
      id: 6,
      name: "Pink Lehenga Choli",
      category: "Lehenga",
      subcategory: "Party Lehenga",
      price: 42000,
      image: "/bb2.png",
      rating: 4.4,
      gender: "bride",
    },
    {
      id: 7,
      name: "Cream Banarasi Saree",
      category: "Saree",
      subcategory: "Banarasi Saree",
      price: 38000,
      image: "/bb3.png",
      rating: 4.7,
      gender: "bride",
    },
    {
      id: 8,
      name: "Purple Anarkali Suit",
      category: "Anarkali",
      subcategory: "Designer Anarkali",
      price: 30000,
      image: "/bb4.png",
      rating: 4.5,
      gender: "bride",
    },
    {
      id: 9,
      name: "Blue Lehenga Set",
      category: "Lehenga",
      subcategory: "Wedding Lehenga",
      price: 48000,
      image: "/b1.png",
      rating: 4.7,
      gender: "grome",
    },
    {
      id: 10,
      name: "Red Saree",
      category: "Saree",
      subcategory: "Bridal Saree",
      price: 40000,
      image: "/b2.png",
      rating: 4.8,
      gender: "grome",
    },
    {
      id: 11,
      name: "Green Sharara",
      category: "Sharara",
      subcategory: "Party Sharara",
      price: 35000,
      image: "/b11.png",
      rating: 4.6,
      gender: "grome",
    },
    {
      id: 12,
      name: "Gold Gown",
      category: "Gown",
      subcategory: "Designer Gown",
      price: 60000,
      image: "/b22.png",
      rating: 4.9,
      gender: "grome",
    },
  ];

  // 🧠 Filter update
  const filteredProducts = products.filter((product) => {
    const genderMatch = product.gender === selectedGender;
    const categoryMatch =
      product.category ===
      categories.find((c) => c.id === selectedCategory)?.name;
    const subcategoryMatch =
      !selectedSubcategory || product.subcategory === selectedSubcategory;
    return genderMatch && categoryMatch && subcategoryMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const currentSubcategories = subcategoriesMap[selectedCategory] || [];

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    setCurrentPage(1);
  };

  const handleSubcategoryChange = (subcat: string | null) => {
    setSelectedSubcategory(subcat);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderLayout = () => {
    if (paginatedProducts.length === 0) {
      return (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">
            No products found in this category.
          </p>
        </div>
      );
    }

    switch (layout) {
      case "grid-2":
        return (
          <ProductGrid2
            products={paginatedProducts}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
          />
        );
      case "grid-3":
        return (
          <ProductGrid3
            products={paginatedProducts}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
          />
        );
      case "list":
      case "compact":
        return (
          <ProductListView
            products={paginatedProducts}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
          />
        );
      case "table":
        return (
          <ProductTableView
            products={paginatedProducts}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
          />
        );
      default:
        return (
          <ProductGrid3
            products={paginatedProducts}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <main>
        <TopBanner
          title="Products"
          description="Discover our exquisite bridal collection"
        />
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <h2 className="text-2xl font-serif text-white animate-fadeInDown">
              Search by Category
            </h2>

            {/* 👰🤵 Bride / Groom Toggle */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-slate-900/70 to-slate-800/70 border border-amber-600/30 rounded-2xl p-2 backdrop-blur-md shadow-lg shadow-amber-500/10 animate-fadeInUp">
              {[
                {
                  id: "bride",
                  label: "Bride",
                  icon: "👰",
                },
                {
                  id: "groom",
                  label: "Groom",
                  icon: "🤵",
                },
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGender(g.id as "bride" | "groom")}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    selectedGender === g.id
                      ? "bg-amber-500 text-black shadow-lg shadow-amber-500/50 scale-105"
                      : "bg-slate-900 text-amber-400 border border-amber-600/30 hover:bg-amber-500 hover:text-black hover:shadow-amber-500/30 hover:scale-105"
                  }`}
                >
                  <span className="text-2xl">{g.icon}</span>
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Categories carousel */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto p-4 scrollbar-hide">
              {categories.map((cat, index) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className="flex-shrink-0 cursor-pointer group animate-slideInLeft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-30 h-30 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                      selectedCategory === cat.id
                        ? "border-amber-500 shadow-2xl shadow-amber-500/50 scale-105"
                        : "border-amber-600/30 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/30"
                    }`}
                  >
                    <img
                      src={cat.image || "/placeholder.svg"}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-center text-white mt-4 text-sm font-semibold group-hover:text-amber-400 transition-colors">
                    {cat.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto px-4 pb-8">
          <div className="flex gap-8 p-10">
            {/* Subcategories Sidebar */}
            {currentSubcategories.length > 0 && (
              <div className="w-64  animate-slideInLeft">
                <div className="sticky top-24 bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-amber-600/30 rounded-2xl p-6 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300">
                  <h3 className="text-white font-serif text-xl mb-6 text-amber-400 flex items-center gap-2">
                    <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                    Subcategories
                  </h3>

                  <div className="space-y-2">
                    <button
                      onClick={() => handleSubcategoryChange(null)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 group ${
                        selectedSubcategory === null
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500 shadow-lg shadow-amber-500/20"
                          : "text-gray-300 border border-transparent hover:text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/30"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full transition-all ${
                          selectedSubcategory === null
                            ? "bg-amber-500"
                            : "bg-gray-600 group-hover:bg-amber-400"
                        }`}
                      ></span>
                      All Subcategories
                    </button>

                    {currentSubcategories.map((subcat, index) => (
                      <button
                        key={subcat}
                        onClick={() => handleSubcategoryChange(subcat)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 group animate-fadeInLeft ${
                          selectedSubcategory === subcat
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500 shadow-lg shadow-amber-500/20"
                            : "text-gray-300 border border-transparent hover:text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/30"
                        }`}
                        style={{ animationDelay: `${index * 80}ms` }}
                      >
                        <span
                          className={`w-2 h-2 rounded-full transition-all ${
                            selectedSubcategory === subcat
                              ? "bg-amber-500"
                              : "bg-gray-600 group-hover:bg-amber-400"
                          }`}
                        ></span>
                        {subcat}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-amber-600/20">
                    <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wide">
                      Product Count
                    </p>
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-amber-600/10">
                      <p className="text-3xl font-bold text-amber-400">
                        {filteredProducts.length}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        items available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Section */}
            <div className="flex-1 animate-fadeInRight">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div className="w-full  animate-fadeInRight">
                  <LayoutToggle
                    activeLayout={layout}
                    onLayoutChange={setLayout}
                    paginated={paginatedProducts.length}
                    filtered={filteredProducts.length}
                  />
                </div>
              </div>

              <div className="animate-fadeInUp">{renderLayout()}</div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-12 animate-fadeInUp">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`w-12 h-12 rounded-lg transition-all duration-300 flex items-center justify-center font-bold text-lg ${
                      currentPage === 1
                        ? "bg-slate-900 border border-amber-600/20 text-gray-600 cursor-not-allowed opacity-50"
                        : "bg-slate-900 border border-amber-600/30 text-white hover:bg-amber-500 hover:text-black hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110"
                    }`}
                  >
                    ←
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={`w-12 h-12 rounded-lg font-bold transition-all duration-300 ${
                            currentPage === page
                              ? "bg-amber-500 text-black shadow-lg shadow-amber-500/50 hover:scale-110"
                              : "bg-slate-900 border border-amber-600/30 text-white hover:bg-amber-500 hover:text-black hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`w-12 h-12 rounded-lg transition-all duration-300 flex items-center justify-center font-bold text-lg ${
                      currentPage === totalPages
                        ? "bg-slate-900 border border-amber-600/20 text-gray-600 cursor-not-allowed opacity-50"
                        : "bg-slate-900 border border-amber-600/30 text-white hover:bg-amber-500 hover:text-black hover:shadow-lg hover:shadow-amber-500/50 hover:scale-110"
                    }`}
                  >
                    →
                  </button>
                </div>
              )}
            </div>
            {/* <div className="w-64"></div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
