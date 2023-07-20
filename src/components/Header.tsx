import { useEffect, useState } from "react";
import Menu from "./Menu";
import Giant from "./Giant";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className="fixed z-[11] p-4 w-full flex flex-row justify-between">
        {/* Logo */}
        <a
          href="https://www.xavierdmello.com"
          className={`w-12 h-12 sm:w-24 sm:h-24 bg-primary grid place-content-center hover:bg-black hover:text-white duration-500 transition-all`}
        >
          <h1 className="text-2xl font-bold">xd.</h1>
        </a>

        <Menu showMenu={showMenu} handleClick={setShowMenu} />
      </div>

      <div className="flex justify-end align-middle">
        <div className={`${showMenu ? "visible opacity-100" : "invisible opacity-0"} fixed w-full h-full backdrop-blur-xl transform-gpu transition-all duration-300 z-[2]`}></div>
        <div
          className={`fixed w-full sm:w-96 bg-white items-center ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } flex align-bottom justify-center h-full transition-all duration-[600ms] z-10`}
        >
          <ul>
            <li>
              <Giant text="Experience" />
            </li>
            <li>
              <Giant text="Hackathons" />
            </li>
            <li>
              <Giant text="Projects" />
            </li>
            <li>
              <Giant text="Contacts" />
            </li>
          </ul>
        </div>
        <div className="h-24 sm:h-40"></div>
      </div>
    </div>
  );
}
