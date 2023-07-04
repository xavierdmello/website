import { useState } from "react";
export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`w-12 h-12 justify-center items-center flex flex-col bg-primary`} onClick={() => setShowMenu(!showMenu)}>
      <div className="flex flex-col gap-2">
        <div className={`w-9 h-[3px] transition-all  bg-black ${showMenu && "rotate-45 translate-y-[10.5px]"}`}></div>
        <div className={`w-7 h-[2px] transition-all bg-black ${showMenu && "opacity-0"}`}></div>
        <div className={`w-9 h-[3px] transition-all bg-black ${showMenu && "-rotate-45 -translate-y-[10.5px]"}`}></div>
      </div>
    </div>
  );
}
