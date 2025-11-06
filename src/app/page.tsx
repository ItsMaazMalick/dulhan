import Navbar from "@/components/navbar";
import SplitCarousel from "@/components/split-carousel";
import CollectionsSection from "@/components/collections";
import FeaturesSection from "@/components/features";
import Footer from "@/components/footer";
import FilteredProducts from "@/components/filtered-products";
import BrandFeaturesSection from "@/components/brand-features";
import CustomSuitsSection from "@/components/custom-suits";
import CustomerReviewsSection from "@/components/customer-review";
import ImageGallerySection from "@/components/gallery-images";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col gap-10">
      <Navbar />
      <SplitCarousel />
      <BrandFeaturesSection />
      <FilteredProducts />
      <CustomSuitsSection />
      <CollectionsSection />
      <CustomerReviewsSection />
      <FeaturesSection />
      <ImageGallerySection />
      <Footer />
    </div>
  );
}
