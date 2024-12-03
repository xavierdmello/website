import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Intro() {
  return (
    <div>
      <h1 className="mb-4">Xavier D'Mello</h1>
      <h2 className="leading-tight mb-2 sm:mb-1 ">
        Building AI Agents, Augmented Reality, and Smart Contracts
      </h2>
      <h2 className="mb-6 leading-tight">
        Computer Science @ Wilfrid Laurier University
      </h2>
      <div className="flex gap-2 flex-wrap">
        <Link
          href="https://twitter.com/0xDmello"
          className={buttonVariants({ variant: "outline" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/xavier-d-mello-552276240/"
          className={buttonVariants({ variant: "outline" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
        <Link
          href="https://github.com/xavierdmello"
          className={buttonVariants({ variant: "outline" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
        <Link
          href="mailto:hello@xavierdmello.com"
          className={buttonVariants({ variant: "outline" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
