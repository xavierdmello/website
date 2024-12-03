import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto pt-36 sm:pt-48 w-[93%]">
      <Intro />
    </div>
  );
}
