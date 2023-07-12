import { useEffect, useState } from "react";

export default function Giant(props: { text: string; className?: string; onHover: (bg: string) => void }) {
  return (
    <h1
      onMouseOver={() => props.onHover("bg-" + props.text.toLowerCase())}
      onMouseLeave={() => props.onHover("bg-background")}
      className={props.className + ` group flex flex-row justify-end relative 3xl:text-8xl 3xl:mb-11 mb-7 text-5xl font-bold text-right transition-all`}
    >
      <div className="w-72 float-right h-7 top-7 flex- bg-primary opacity-0 text-right group-hover:opacity-100 absolute transition-all duration-300 -z-10"></div>
      {props.text}
    </h1>
  );
}
