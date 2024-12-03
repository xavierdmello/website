import Image from "next/image";
import Link from "next/link";

import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto pt-36 sm:pt-48 w-[93%] gap-16">
      <Intro />
      <Work />
      <Projects />
    </div>
  );
}
