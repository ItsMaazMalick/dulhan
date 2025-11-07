import { ArtisticSection } from "./artistic-section";
import { HeroSection } from "./hero-section";
import { WhatMakesUsSpecialSection } from "./special-section";
import { StreamingSection } from "./streaming-section";

export default function GalleryPage() {
  return (
    <div>
      <HeroSection />
      <ArtisticSection />
      <StreamingSection />
      <WhatMakesUsSpecialSection />
    </div>
  );
}
