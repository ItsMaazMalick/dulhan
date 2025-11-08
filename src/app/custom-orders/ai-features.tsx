"use client";

export function AIFeatures() {
  return (
    <section className="min-h-screen bg-black bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxNDQwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDE0NDB2NTAwSDB6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTAgMGgxNDQwdjUwMEgweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMiIvPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg0NSkgc2NhbGUoMjAzNi41NCAxMjcyLjcxKSI+PHN0b3Agc3RvcC1jb2xvcj0iIzQ3MzhGRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQ3MzhGRiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PC9zdmc+')]">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block  text-white px-4 py-1 rounded-md mb-6">
            Our Fashion Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-purple-500">Transforming Dream&nbsp;</span>
            <span className="text-white">into Wedding Reality</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-center">
            Our custom bridal wear services are crafted to enhance your wedding style with elegance and detail. From stunning dulhan dresses to graceful groom attire, we ensure designs that captivate and inspire. Let us bring your dream outfit to life with expert tailoring and timeless craftsmanship.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Bridal & Groom Couture",
              description:
                "We craft elegant dulhan and dulha outfits that reflect your personal style and tradition. From mehndi to walima, our couture ensures you shine at every event.",
              icon: (
                <svg
                  className="w-12 h-12 text-pink-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="4" r="2" />
                  <circle cx="20" cy="12" r="2" />
                  <circle cx="12" cy="20" r="2" />
                  <circle cx="4" cy="12" r="2" />
                </svg>
              ),
            },
            {
              title: "Custom Design & Stitching",
              description:
                "Our team designs and tailors each outfit with care, blending premium fabrics, perfect fitting, and beautiful detailing to create your dream wedding look.",
              icon: (
                <svg
                  className="w-12 h-12 text-pink-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 2v4m0 16v-4m10-8h-4M6 12H2" />
                  <path d="M17.7 6.3l-2.8 2.8m-5.8 5.8l-2.8 2.8m0-11.4l2.8 2.8m5.8 5.8l2.8 2.8" />
                </svg>
              ),
            },
            {
              title: "Luxury Accessories & Embroidery",
              description:
                "We offer handcrafted dupattas, jewelry accents, and detailed embroidery that add charm and sophistication to your bridal and groom ensembles.",
              icon: (
                <svg
                  className="w-12 h-12 text-pink-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" />
                </svg>
              ),
            },
            {
              title: "Made-to-Order Experience",
              description:
                "Share your ideas, colors, and inspirations — we’ll bring them to life with our personalized consultation, expert craftsmanship, and on-time delivery.",
              icon: (
                <svg
                  className="w-12 h-12 text-pink-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                </svg>
              ),
            },
          ].map((feature, index) => (
            <div key={index} className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>

              {/* Card content */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg transition-all duration-500 group-hover:scale-[1.02] group-hover:bg-gray-800/70">
                <div className="flex flex-col items-end">
                  <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 w-full transition-colors duration-300 group-hover:text-purple-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
