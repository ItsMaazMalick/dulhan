"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: "01",
    title: "Concept & Planning",
    description:
      "Discuss your wedding style, color preferences, and dress ideas to create a personalized design plan. ",
    image: "/b1.png",
  },
  {
    id: "02",
    title: "Design & Creation",
    description:
      "We share progress for your feedback, refine every detail, and ensure the perfect bridal fit.",
    image: "/b2.png",
  },
  {
    id: "03",
    title: "Review & Refinement",
    description:
      "Gather feedback, make necessary adjustments, and enhance details for perfection.",
    image: "/b11.png",
  },
  {
    id: "04",
    title: "Finalization & Delivery",
    description:
      "Your final outfit is pressed, packed, and delivered — ready to make your wedding day special.",
    image: "/b22.png",
  },
];

export function UniqueWorkflow() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="min-h-screen bg-black bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:50px_50px] py-16">
      <div className="container text-end">
        <p className="ml-auto text-white mb-2">Our Making Process</p>
        <p className="text-4xl font-bold text-white mb-10">
          The Dhanpuri Team&nbsp;
          <span className="text-purple-500">Crafts Your Dream Outfit</span>
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Feature List */}
          <div className="space-y-12">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 PKR{
                  activeFeature.id === feature.id ? "scale-105" : ""
                }`}
                onMouseEnter={() => setActiveFeature(feature)}
              >
                <div className="flex gap-4">
                  <span className="text-purple-500 text-4xl font-bold">
                    {feature.id}
                  </span>
                  <div className="space-y-2">
                    <h3
                      className={`text-2xl font-bold transition-colors duration-300 PKR{
                        activeFeature.id === feature.id
                          ? "text-purple-500"
                          : "text-white"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 max-w-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`h-0.5 bg-purple-500 scale-x-0 transition-transform duration-300 mt-4 PKR{
                    activeFeature.id === feature.id ? "scale-x-100" : ""
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Feature Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`absolute inset-0 transition-opacity duration-500 rounded-lg PKR{
                  activeFeature.id === feature.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-lg"
                  priority={activeFeature.id === feature.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
