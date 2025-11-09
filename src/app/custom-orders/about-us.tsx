import Image from "next/image";

export function AboutUs() {
  return (
    <section className="min-h-screen bg-black bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:50px_50px] py-16">
      <div className="container mx-auto px-4">
        {/* About Us Label */}
        <div className="flex justify-center mb-8">
          <div className="bg-primary text-white px-4 py-1 rounded-md">
            About Us
          </div>
        </div>

        {/* Main Heading */}
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Using Trending Technologies</span>
            <Image
              src={`/team/6.png`}
              alt="Tech icon"
              width={40}
              height={40}
              className="inline-block mx-2 rounded-full"
            />
            <span className="text-purple-500">We Develop The Best</span>
          </h1>

          <div className="flex items-center justify-center gap-2">
            <span className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
              AI Based Application
            </span>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"
                >
                  <Image
                    src={"/team/6.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
            <span className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
              With Our Best
            </span>
          </div>

          <div className="flex  justify-center gap-2">
            <span className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
              Experts Will Help You And
            </span>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"
                >
                  <Image
                    src={"/team/6.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
            <span className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
              Experts Will Help You And
            </span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Image
              src={`/team/6.png`}
              alt="Business icon"
              width={40}
              height={40}
              className="inline-block rounded-full"
            />
            <span className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
              Easier
            </span>
          </div>
        </div>

        {/* Generate Section */}
        {/* <div className="max-w-3xl mx-auto mt-12">
          <div className="flex gap-2">
            <div className="relative">
              <select className="appearance-none bg-white rounded-md px-4 py-2 pr-8">
                <option>images1</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 flex gap-2 bg-white rounded-md">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md">
                Generate
              </button>
              <input
                type="text"
                placeholder="Describe what you want to see"
                className="flex-1 px-4 outline-none"
              />
            </div>
          </div>
        </div> */}

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <div className="text-white">:Popular Tags</div>
          {[
            "Digital Agency",
            "Fantasy",
            "Hyper Reality",
            "Creative Thinking",
            "Animation",
          ].map((tag) => (
            <div
              key={tag}
              className="px-4 py-1 rounded-full border border-gray-700 text-white text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
