import { useEffect, useState } from "react";

export default function Giant(props: { text: string; className?: string, onHover: (bg: string) => void }) {
  return (
    <h1 onMouseOver={() => props.onHover("bg-" + props.text.toLowerCase())} onMouseLeave={() => props.onHover("bg-background")} className={props.className + ` 3xl:text-8xl 3xl:mb-11 mb-7 text-5xl font-bold text-right transition-all`}>
      {props.text}
    </h1>
  );
}
