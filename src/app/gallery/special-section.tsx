"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import VideoPopup from "./video-popup";

export function WhatMakesUsSpecialSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const thumbnails = [
    { src: "/b2.png", alt: "Child using VR headset with blue lighting" },
    { src: "/b11.png", alt: "Person wearing VR headset" },
    { src: "/b22.png", alt: "Person using VR controllers" },
    { src: "/bb1.png", alt: "Game controller with blue lighting" },
  ];

  return (
    <section className="relative w-full bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left — Main VR Image with Play Button */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src="/b1.png"
            alt="Person using virtual reality headset"
            fill
            className="object-cover"
            priority
          />
          <button
            onClick={() => setIsVideoOpen(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors"
            aria-label="Play video"
          >
            <div className="w-16 h-16 bg-purple-500/80 hover:bg-purple-500 rounded-full flex items-center justify-center transition-transform transform hover:scale-110">
              <Play className="h-8 w-8 text-white ml-1" />
            </div>
          </button>
        </div>

        {/* Right — Text and Thumbnails */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Innovation at Our Core
          </h2>
          <p className="text-purple-100 mb-8 leading-relaxed">
            We don&apos;t just follow trends — we anticipate them. Our team
            stays at the forefront of technology, constantly exploring new tools
            and methodologies to deliver solutions that are not only current but
            future-proof. We push boundaries and challenge conventions to create
            software that stands out in today&apos;s competitive landscape.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {thumbnails.map((thumb, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-white shadow-md"
              >
                <Image
                  src={thumb.src}
                  alt={thumb.alt}
                  width={300}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Popup */}
      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/vr-experience.mp4"
      />
    </section>
  );
}
