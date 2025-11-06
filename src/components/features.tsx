"use client";

import { Truck, Clock, Package, ShoppingCart } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      subtitle: "World wide",
      label: "SHIPPING",
    },
    {
      icon: Clock,
      title: "24*7 Customer",
      subtitle: "Support",
      label: "HASSLE FREE",
    },
    {
      icon: Package,
      title: "Free & Easy",
      subtitle: "Returns",
      label: "30 DAYS",
    },
    {
      icon: ShoppingCart,
      title: "Quick Check Out",
      subtitle: "Process",
      label: "SECURED",
    },
  ];

  return (
    <section className="bg-black py-0 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Top divider line */}
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-6" />

                {/* Icon */}
                <Icon
                  className="w-12 h-12 text-amber-600 mb-4"
                  strokeWidth={1.5}
                />

                {/* Label */}
                <p className="text-xs tracking-widest text-gray-400 mb-2">
                  {feature.label}
                </p>

                {/* Title */}
                <h3 className="text-lg font-light text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">{feature.subtitle}</p>

                {/* Bottom divider line */}
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
