import { useEffect, useState } from "react";
import Menu from "./Menu";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className="fixed z-9 p-4 w-full flex flex-row justify-between">
        {/* Logo */}
        <a
          href="https://www.xavierdmello.com"
          className="z-9 w-12 h-12 sm:w-24 sm:h-24 bg-primary grid place-content-center hover:bg-black hover:text-white duration-500 transition-all"
        >
          <h1 className="text-2xl font-bold">xd.</h1>
        </a>

        <Menu showMenu={showMenu} handleClick={setShowMenu} />
      </div>
      <div className={`fixed ${showMenu ? "translate-x-0" : "translate-x-full"} w-full h-full bg-emerald-500 transition-all duration-1000 z-9`}></div>
      <div className="h-24 sm:h-40"></div>
    </div>
  );
}
