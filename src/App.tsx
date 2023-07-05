import { useEffect, useState } from "react";
import Header from "./components/Header";
import Link from "./components/Link";
import Socials from "./components/Socials";
import Codec from "./components/Codec";

function App() {
  

  return (
    <div>
      {/* Background */}
      <div className="fixed right-0 fadeBg -z-10 float-right w-3/4 h-full bg-background"></div>
      <Header />

      <div className="flex flex-row w-full p-4 sm:dynamicPadding">
        <div>
          {/* Left Side */}
          <Codec text="INTRO" className="mb-6" />
          <div className="slide2">
            <h1 className="2xl:mb-12  mb-6 text-2xl sm:text-3xl max-w-2xl 2xl:text-6xl 2xl:max-w-5xl">
              Hi, I'm Xavier, a Full-Stack Developer based out of Waterloo, Canada.
            </h1>
            <Link text="About me" href="https://www.xavierdmello.com/about" />
          </div>

          <div className="mb-10 2xl:mb-24"></div>

          <Socials />

          <div className="mb-10"></div>
          <Codec text="EMAIL" />
          <a className="fade2" href="mailto:hello@xavierdmello.com">
            hello@xavierdmello.com
          </a>

          <div className="mb-10"></div>
          <Codec text="DISCORD " />
          <p className="fade2">tacocat9293</p>
        </div>
      </div>
    </div>
  );
}

export default App;
