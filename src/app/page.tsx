import BrandFeaturesSection from "@/components/brand-features";
import CollectionsSection from "@/components/collections";
import CustomSuitsSection from "@/components/custom-suits";
import CustomerReviewsSection from "@/components/customer-review";
import FeaturesSection from "@/components/features";
import FilteredProducts from "@/components/filtered-products";
import ImageGallerySection from "@/components/gallery-images";
import Navbar from "@/components/navbar";
import SplitCarousel from "@/components/split-carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col gap-10">
      <SplitCarousel />
      <BrandFeaturesSection />
      <FilteredProducts />
      <CustomSuitsSection />
      <CollectionsSection />
      <CustomerReviewsSection />
      <FeaturesSection />
      <ImageGallerySection />
    </div>
  );
}
