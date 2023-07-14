import { useState } from "react";
export default function Menu(props:{showMenu: boolean, handleClick: (arg0: boolean) => void}) {
  return (
    <div
      className={`w-12 h-12 z-9 select-none justify-center items-center flex flex-col bg-primary hover:cursor-pointer`}
      onClick={() => props.handleClick(!props.showMenu)}
    >
      {/* Button */}
      <div className="flex flex-col gap-2">
        <div className={`w-9 h-[3px] transition-all  bg-black ${props.showMenu && "rotate-45 translate-y-[10.5px]"}`}></div>
        <div className={`w-7 h-[2px] transition-all bg-black ${props.showMenu && "opacity-0"}`}></div>
        <div className={`w-9 h-[3px] transition-all bg-black ${props.showMenu && "-rotate-45 -translate-y-[10.5px]"}`}></div>
      </div>
    </div>
  );
}
