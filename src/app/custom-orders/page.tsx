import { Button } from "@/components/ui/button";
import { MarqueeComponent } from "./marquee";
import { AboutUs } from "./about-us";
import { UniqueWorkflow } from "./unique-workflow";
import { AIFeatures } from "./ai-features";
import { AIJourney } from "./ai-journey";
import { Testimonials } from "./testimonials";
import Link from "next/link";

export default function GraphicDesigningPage() {
  return (
    <div className="overflow-x-hidden">
      <div
        className="h-[104dvh] w-full flex items-center overflow-hidden mt-[-15px]"
        style={{
          background: "url('/banner.gif')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="brightness-50 bg-black h-[104dvh] w-screen absolute top-0 opacity-50"></div>
        <div className="hidden lg:block lg:w-[65%]">
          <MarqueeComponent />
        </div>
        <div className="w-full lg:w-[35%] text-end p-4 z-[100] flex flex-col gap-6">
          {/* <Button className="bg-gradient-to-t from-purple-600 to-blue-500 w-fit ml-auto mt-10">
            Presision
          </Button> */}
          <p className="text-6xl font-bold text-white">Traditional</p>
          <p className="text-6xl font-bold text-white">
            Dulhan & Dulha Perfect Wear
          </p>
          <p className="text-6xl font-bold text-purple-600">for Special Days</p>
          {/* <p className="text-white">
            Molestie a iaculis at erat pellentesque adipiscing commodo elit at.
            Ultricies tristique nulla aliquet enim tortor. Eu consequat ac felis
            donec et.Nunc cursus fermentum nisi nec sollicitudin.
          </p> */}
          <Button
            asChild
            className="bg-gradient-to-t from-purple-600 to-blue-500 w-fit ml-auto rounded-full"
          >
            <Link href="/#contact-us">Contact Us</Link>
          </Button>
        </div>
      </div>
      {/* <AboutUs /> */}

      <UniqueWorkflow />
      <AIFeatures />
      <AIJourney />
      {/* <FAQ
        data={faqData}
        image="/contact-us-1.png"
        className="bg-black bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxNDQwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDE0NDB2NTAwSDB6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTAgMGgxNDQwdjUwMEgweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMiIvPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg0NSkgc2NhbGUoMjAzNi41NCAxMjcyLjcxKSI+PHN0b3Agc3RvcC1jb2xvcj0iIzQ3MzhGRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQ3MzhGRiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PC9zdmc+')]"
      /> */}
      {/* <Testimonials /> */}
    </div>
  );
}
