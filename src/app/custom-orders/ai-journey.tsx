import { Pencil, Brush, BrainCircuit, Play } from "lucide-react";
import Image from "next/image";

export function AIJourney() {
  return (
    <section className="min-h-screen bg-black bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:50px_50px] py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Why </span>
                <span className="text-purple-500">Choose Us? </span>
                {/* <span className="text-white">Of</span>
                <br />
                <span className="text-white">Personalized AI</span> */}
              </h2>
              <p className="text-gray-400 max-w-xl">
                At Softex Solutions, we combine creativity with strategy to
                deliver high-quality, impactful designs that bring your vision
                to life.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Creative & Unique Designs",
                  description:
                    "We craft original, eye-catching visuals that perfectly align with your brand’s identity.",
                  icon: <Pencil className="w-8 h-8" />,
                },
                {
                  title: "High-Quality & Professional Work",
                  description:
                    "Our designs are polished, high-resolution, and meet industry standards for excellence.",
                  icon: <Brush className="w-8 h-8" />,
                },
                {
                  title: "Fast Turnaround Time",
                  description:
                    "We deliver top-quality graphics quickly without compromising creativity.",
                  icon: <Brush className="w-8 h-8" />,
                },
                {
                  title: "Client-Centric Approach",
                  description:
                    "Your vision matters—we work closely with you to ensure perfect results.",
                  icon: <BrainCircuit className="w-8 h-8" />,
                },
              ].map((feature, index) => (
                <div key={index} className="group text-center">
                  <div className="inline-flex p-4 rounded-full bg-gray-800/50 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-500/20">
                    <div className="text-purple-500">{feature.icon}</div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            {/* Top Image */}
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/b1.png"
                alt="AI Technology"
                width={1000}
                height={1000}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Bottom Image */}
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/b2.png"
                alt="Creative Design"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
