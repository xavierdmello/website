import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto pt-36 sm:pt-48 w-[93%] gap-16">
      <div className="animate-fade-in [--animation-delay:0ms]">
        <Intro />
      </div>

      <div className="animate-fade-in [--animation-delay:200ms]">
        <Work />
      </div>

      <div className="animate-fade-in [--animation-delay:400ms]">
        <Projects />
      </div>

      <div className="animate-fade-in [--animation-delay:600ms]">
        <News />
      </div>
    </div>
  );
}
