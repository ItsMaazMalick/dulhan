"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { QuoteIcon } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "Softex Solution’s graphic design services exceeded my expectations. Their creativity and attention to detail brought my vision to life perfectly.",
    name: "Laiba",
    role: "Softex Solution",
    image: "/team/1.png",
  },
  {
    text: "The team at Softex Solution is professional and highly skilled. Their designs are modern, engaging, and exactly what we needed for our brand.",
    name: "Maaz",
    role: "Softex Solution",
    image: "/team/6.png",
  },
  {
    text: "Exceptional quality and fast delivery. The designs were unique, visually stunning, and perfectly aligned with our requirements",
    name: "Tayyab",
    role: "Film Maker",
    image: "/team/7.png",
  },
  // {
  //   text: "Gravida cum sociis natoque penatibus et magnis dis parturient montes. Justo nec ultrices dui sapien eget. Vivamus arcu felis bibendum ut tristique",
  //   name: "Floriana Ayda",
  //   role: "Film Maker",
  //   image: "/team/6.png",
  // },
];

const Card3D = ({ children, isLastVisible }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`${
        isLastVisible ? "bg-purple-600" : "bg-gray-800/50"
      } backdrop-blur-sm p-8 rounded-lg h-full shadow-xl transition-all duration-300 hover:shadow-2xl`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col justify-between h-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

export function Testimonials() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState<any>(0);
  const [lastVisibleIndex, setLastVisibleIndex] = React.useState(-1);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLastVisibleIndex(
              Number(entry.target.getAttribute("data-index"))
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll(".carousel-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [api]);

  return (
    <section className="min-h-screen bg-black bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:50px_50px] py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600 text-white px-4 py-1 rounded-md mb-6">
            Reviews
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">What </span>
            <span className="text-purple-500">Our Customers Say</span>
            {/* <span className="text-white">Have To Say</span> */}
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            className="relative"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 perspective-1000 carousel-item"
                  data-index={index}
                >
                  <Card3D isLastVisible={index === lastVisibleIndex}>
                    <div className="mb-8">
                      <QuoteIcon className="w-8 h-8 text-purple-500 mb-4" />
                      <p className="text-gray-300 text-lg">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-rose-400 font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Card3D>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-purple-500" : "w-2 bg-gray-600"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
