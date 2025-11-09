"use client";

import { motion } from "framer-motion";
import { Grid2X2, Grid3X3, List, Table2, AlignLeft } from "lucide-react";

export type LayoutType =
  | "grid-2"
  | "grid-3"
  | "grid-4"
  | "list"
  | "table"
  | "compact";

interface LayoutToggleProps {
  activeLayout: LayoutType;
  onLayoutChange: (layout: LayoutType) => void;
  paginated: number;
  filtered: number;
}

export default function LayoutToggle({
  activeLayout,
  onLayoutChange,
  paginated,
  filtered,
}: LayoutToggleProps) {
  const layouts = [
    { id: "grid-2", label: "2x2 Grid", icon: Grid2X2 },
    { id: "grid-3", label: "3x3 Grid", icon: Grid3X3 },
    { id: "list", label: "List View", icon: List },
    { id: "table", label: "Table View", icon: Table2 },
    { id: "compact", label: "Compact View", icon: AlignLeft },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-primary/30 bg-transparent p-5 shadow-lg shadow-primary/10 backdrop-blur-xl"
    >
      <div className="flex items-center gap-10">
        <div className="text-gray-400 animate-fadeInLeft">
          <p className="text-sm">
            Showing <span className="text-primary font-bold">{paginated}</span>{" "}
            of <span className="text-primary font-bold">{filtered}</span>{" "}
            results
          </p>
        </div>
        {/* Layout Buttons */}
        <div className="flex flex-wrap gap-8">
          {layouts.map((layout) => {
            const Icon = layout.icon;
            const isActive = activeLayout === layout.id;

            return (
              <motion.button
                key={layout.id}
                onClick={() => onLayoutChange(layout.id as LayoutType)}
                title={layout.label}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                className={`relative group flex items-center justify-center p-3 rounded-xl transition-all duration-300 border backdrop-blur-sm ${
                  isActive
                    ? "bg-primary text-black border-primary shadow-lg shadow-primary/40"
                    : "bg-slate-800/60 text-primary border-primary/20 hover:bg-primary hover:text-black hover:shadow-lg hover:shadow-primary/30"
                }`}
              >
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                {isActive && (
                  <motion.span
                    layoutId="active-glow"
                    className="absolute inset-0 rounded-xl ring-2 ring-primary/50"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Sort Dropdown */}
      <motion.select
        whileFocus={{ scale: 1.05, boxShadow: "0 0 15px rgba(251,191,36,0.4)" }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="bg-slate-900/70 border border-primary/30 text-primary rounded-xl px-4 py-3 focus:outline-none focus:border-primary shadow-inner shadow-black/40 transition-all duration-300"
      >
        <option>Default Sort</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Newest</option>
        <option>Best Rated</option>
      </motion.select>
    </motion.div>
  );
}
