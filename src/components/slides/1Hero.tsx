import { useState } from "react";

// image imports
import experience from "../../assets/experience.jpg";
import hackathons from "../../assets/hackathons.jpg";
import projects from "../../assets/projects.jpg";
import contact from "../../assets/contact.jpg";

import Codec from "../Codec";
import Giant from "../Giant";
import Link from "../Link";
import Socials from "../Socials";

export default function Hero() {
  const [bg, setBg] = useState("bg-background");

  return (
    <div className="flex flex-row justify-between h-screen relative p-4 pt-0 sm:dynamicPadding">
      {/* Background */}
      {/* Not using background-image because of bug with tailwind */}
      <div className={`absolute right-0 fade0 -z-10  transition-all w-3/4 h-full bg-background`}></div>
      <BgImage image={experience} name="experience" active={bg === "bg-experience"} />
      <BgImage image={hackathons} name="hackathons" active={bg === "bg-hackathons"} />
      <BgImage image={projects} name="projects" active={bg === "bg-projects"} />
      <BgImage image={contact} name="contacts" active={bg === "bg-contact"} />

      {/* Left Side */}
      <div>
        <div className="h-24 sm:h-40"></div>
        <Codec text="INTRO" className="mb-6" />
        <div className="slide">
          <h1 className="3xl:mb-12 mb-6 relative text-2xl sm:text-3xl max-w-none md:max-w-sm lg:max-w-3xl 3xl:text-6xl 3xl:max-w-5xl ">
            Hi, I'm Xavier, a Full-Stack Developer based out of Waterloo, Canada.
          </h1>
          <Link text="About me" href="https://www.xavierdmello.com/about" />
        </div>

        <div className="mb-16 sm:mb-32 3xl:mb-80"></div>

        <Socials />
      </div>

      {/* Right Side */}
      <div className="hidden md:block">
        <div className="h-24 sm:h-40"></div>
        <Codec text="MY WORK" className="mb-6 text-right" />
        <ul>
          <li>
            <Giant text="Experience" onHover={setBg} className="gs1" />
          </li>
          <li>
            <Giant text="Hackathons" onHover={setBg} className="gs2" />
          </li>
          <li>
            <Giant text="Projects" onHover={setBg} className="gs3" />
          </li>
          <li>
            <Giant text="Contact" onHover={setBg} className="gs4" />
          </li>
        </ul>
      </div>
    </div>
  );
}

function BgImage(props: { image: string; name: string; active: boolean }) {
  return (
    <img
      src={props.image}
      alt={props.name}
      className={`absolute object-cover right-0 float-right transition-all duration-1000 w-3/4 h-full opacity-0 ${props.active && "opacity-70"}`}
    />
  );
}
