"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Bella Cornelia",
    rating: 5,
    text: "Ultricies sem in cursus turpis. Aliquam enim auctor nibh sed nunc. Non blandit nunc nisi pellentesque.",
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-2.webp",
  },

  {
    id: 2,
    name: "Floriana Inga",
    rating: 5,
    text: "Viverra justo non ultricies sed sapien eget. Hendrerit gravida nibh quis auctor enim sed vulputate.",
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-3.webp",
  },

  {
    id: 3,
    name: "Karl Leonardo",
    rating: 5,
    text: "Dignissim sodales ut eu sem integer vitae. Curabitur gravida sed eros. Sed ut eros tempor eros eu.",
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-4.webp",
  },

  {
    id: 4,
    name: "Sophie Martin",
    rating: 5,
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-3.webp",
  },
];

export default function CustomerReviewsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto flex gap-5">
        {/* Header */}
        <div className="mb-12 w-[40%]">
          <p className="text-xs tracking-widest text-gray-400 mb-2">
            REVIEW & RATINGS
          </p>
          <h2 className="text-4xl md:text-4xl text-white">
            Positive Customers Feedback
          </h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-2xl">
            Phasellus lacus quam sit leo. In tempor nec feugiat nibh pretium
            felis. Libero orci sed faucibus turpis in eu mi bibendum neque. Eget
            duis at tellus at urna condimentum mattis pellentesque.
          </p>
        </div>

        {/* Reviews Carousel */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          grabCursor={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="reviews-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="relative bg-[#23201E] border-transparent p-6 flex flex-col transition-all duration-400 group hover:border-transparent overflow-visible h-full">
                {/* Animated border bars */}
                <span className="absolute top-0 right-0 h-[2px] w-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:w-full z-30" />
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:w-full z-30" />
                <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:h-full z-30" />
                <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#6C5D4C] transition-all duration-400 ease-out group-hover:h-full z-30" />

                {/* Customer Info */}
                <div className="flex items-center gap-4 mb-4 ml-5">
                  <div className="relative w-18 h-18 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-light text-sm">
                      {review.name}
                    </h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-amber-500 text-xs">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {review.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .reviews-swiper .swiper-pagination-bullet { background-color: #6b7280; opacity: 0.5; }
        .reviews-swiper .swiper-pagination-bullet-active { background-color: #d97706; opacity: 1; }
      `}</style>
    </section>
  );
}
