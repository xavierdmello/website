import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import Sidebar from "./Sidebar";

export default function Header() {
  const [showSidebar, setShowMenu] = useState(false);

  return (
    <div>
      <div className="fixed z-[11] p-4 w-full flex flex-row justify-between">
        {/* Logo */}
        <a
          href="https://www.xavierdmello.com"
          className={`w-12 h-12 sm:w-24 sm:h-24 bg-highlight grid place-content-center hover:bg-black hover:text-white duration-500 transition-all`}
        >
          <h1 className="text-2xl font-bold">xd.</h1>
        </a>

        <MenuButton showSidebar={showSidebar} handleClick={setShowMenu} />
      </div>

      <div className="flex justify-end align-middle">
        {/* Sidebar background blur */}
        <div
          className={`${
            showSidebar ? "visible opacity-100" : "invisible opacity-0"
          } fixed w-full h-full backdrop-blur-xl transform-gpu transition-all duration-300 z-[2]`}
        onClick={()=>setShowMenu(false)}></div>

        <Sidebar showSidebar={showSidebar} />
      </div>
    </div>
  );
}
