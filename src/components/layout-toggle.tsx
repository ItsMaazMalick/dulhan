"use client";

import { Grid2X2, Grid3X3, Rows, List, Table2, AlignLeft } from "lucide-react";

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
}

export default function LayoutToggle({
  activeLayout,
  onLayoutChange,
}: LayoutToggleProps) {
  const layouts = [
    { id: "grid-2", label: "2x2 Grid", icon: Grid2X2 },
    { id: "grid-3", label: "3x3 Grid", icon: Grid3X3 },
    { id: "grid-4", label: "4x4 Grid", icon: Rows },
    { id: "list", label: "List View", icon: List },
    { id: "table", label: "Table View", icon: Table2 },
    { id: "compact", label: "Compact", icon: AlignLeft },
  ];

  return (
    <div className="flex gap-2 flex-wrap bg-slate-900/50 border border-amber-600/30 rounded-lg p-4 backdrop-blur">
      {layouts.map((layout) => {
        const Icon = layout.icon;
        return (
          <button
            key={layout.id}
            onClick={() => onLayoutChange(layout.id as LayoutType)}
            title={layout.label}
            className={`p-3 rounded-lg transition-all duration-300 group ${
              activeLayout === layout.id
                ? "bg-amber-500 text-black shadow-lg shadow-amber-500/50"
                : "bg-slate-800 text-amber-400 border border-amber-600/30 hover:bg-amber-500 hover:text-black hover:shadow-lg hover:shadow-amber-500/30"
            }`}
          >
            <Icon className="w-5 h-5" />
          </button>
        );
      })}
    </div>
  );
}
