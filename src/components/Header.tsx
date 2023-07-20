import { useEffect, useState } from "react";
import Menu from "./Menu";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className="fixed z-[11] p-4 w-full flex flex-row justify-between">
        {/* Logo */}
        <a
          href="https://www.xavierdmello.com"
          className={`w-12 h-12 ${showMenu ? "opacity-0" : "opacity-100"} sm:w-24 sm:h-24 bg-primary grid place-content-center hover:bg-black hover:text-white duration-500 transition-all`}
        >
          <h1 className="text-2xl font-bold">xd.</h1>
        </a>

        <Menu showMenu={showMenu} handleClick={setShowMenu} />
      </div>
      <div className={`fixed ${showMenu ? "translate-x-0" : "translate-x-full"} w-full h-full bg-white transition-all duration-[600ms] z-10`}></div>
      <div className="h-24 sm:h-40"></div>
    </div>
  );
}
