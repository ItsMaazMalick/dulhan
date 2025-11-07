"use client";

import { useRef, useEffect } from "react";
import { X } from "lucide-react";

export default function VideoPopup({ isOpen, onClose, videoSrc }: any) {
  const videoRef = useRef<any>(null);
  const modalRef = useRef<any>(null);

  // Play the video when the popup opens
  //   useEffect(() => {
  //     if (isOpen && videoRef.current) {
  //       videoRef.current.play().catch((error) => {
  //         console.error("Video playback failed:", error);
  //       });
  //     }
  //   }, [isOpen]);

  // Close popup when clicking outside the video
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Close popup when Escape key is pressed
    const handleEscKey = (event: any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden animate-scaleIn"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>

        <video
          ref={videoRef}
          className="w-full aspect-video"
          controls
          autoPlay
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
