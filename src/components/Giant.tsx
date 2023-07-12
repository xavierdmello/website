import { useEffect, useState } from "react";

export default function Giant(props: { text: string; className?: string; onHover: (bg: string) => void }) {
  return (
    <h1
      onMouseOver={() => props.onHover("bg-" + props.text.toLowerCase())}
      onMouseLeave={() => props.onHover("bg-background")}
      className={props.className + ` giant group flex flex-row justify-end relative 3xl:text-8xl 3xl:mb-11 mb-8 text-5xl font-bold text-right transition-all`}
    >
      <div className="w-72 h-7 top-7 3xl:w-[600px] 3xl:h-10 3xl:top-14 float-right bg-primary text-right opacity-0 group-hover:opacity-100 absolute transition-all duration-300 -z-10"></div>
      {props.text}
    </h1>
  );
}
