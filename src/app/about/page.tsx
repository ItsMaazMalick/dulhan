"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sophia Laurent",
      role: "Creative Director",
      image:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-2.webp",
    },
    {
      id: 2,
      name: "Marcus Dev",
      role: "Head of Tailoring",
      image:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-3.webp",
    },
    {
      id: 3,
      name: "Elena Rose",
      role: "Brand Curator",
      image:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-4.webp",
    },
    {
      id: 4,
      name: "James Chen",
      role: "Heritage Craftsman",
      image:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-3.webp",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description: "Our journey began with a vision to redefine bridal luxury.",
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Extended our collections to include modern groom designs.",
    },
    {
      year: "2021",
      title: "Recognition",
      description:
        "Awarded as Best Bridal Brand by International Fashion Guild.",
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Launched sustainable luxury line with ethical sourcing.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-widest text-gray-400 mb-4 animate-fadeInDown">
            OUR HERITAGE
          </p>
          <h1
            className="text-5xl md:text-7xl font-light text-white mb-6 animate-fadeInUp"
            style={{ color: "#D4AF37" }}
          >
            Crafting Dreams
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            Since 2015, we've been dedicated to creating the most exquisite
            bridal and groom attire, blending timeless tradition with
            contemporary elegance.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slideInLeft">
            <p className="text-xs tracking-widest text-gray-400 mb-4">
              OUR STORY
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Where Tradition Meets Innovation
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Founded by a collective of master artisans and visionary
              designers, our brand represents the pinnacle of wedding fashion.
              Each piece is crafted with meticulous attention to detail,
              ensuring your special day is adorned with unparalleled elegance.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              We believe that every bride and groom deserves a dress or suit
              that tells their unique story. Our collections celebrate
              diversity, culture, and personal expression through the art of
              exceptional tailoring.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden group animate-slideInRight">
            <Image
              src="/ii1.jpeg"
              alt="Craftsmanship"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <p className="text-xs tracking-widest text-gray-400 mb-4">
              MILESTONES
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Our Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="absolute -top-8 left-0 text-6xl font-light opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ color: "#D4AF37" }}
                >
                  {milestone.year}
                </div>
                <div className="relative p-6 border-l-4 border-gray-700 hover:border-primary pl-8 transition-all duration-300 group-hover:pl-10 hover:bg-gray-900/30">
                  <p className="text-sm tracking-widest text-primary mb-2 group-hover:text-primary transition-colors">
                    {milestone.year}
                  </p>
                  <h3 className="text-xl font-light text-white mb-2 group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <p className="text-xs tracking-widest text-gray-400 mb-4">
              THE VISIONARIES
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Our Exceptional Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                // onMouseEnter={() => setHoveredMember()}
                onMouseLeave={() => setHoveredMember(null)}
                className="group relative animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden rounded-lg border border-gray-800 group-hover:border-primary transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-light mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <p className="text-xs tracking-widest text-gray-400 mb-4">
              OUR COMMITMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "Uncompromising quality in every stitch, every fabric, every detail.",
              },
              {
                title: "Sustainability",
                description:
                  "Ethical sourcing and responsible production for a better future.",
              },
              {
                title: "Individuality",
                description:
                  "Celebrating uniqueness through custom designs that reflect your story.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-8 border border-gray-800 hover:border-primary transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-primary/10 hover:bg-gray-900/20 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-light text-white mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
