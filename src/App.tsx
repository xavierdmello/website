import { useEffect, useState } from "react";
import Header from "./components/Header";
import Link from "./components/Link";
import Socials from "./components/Socials";
import Codec from "./components/Codec";
import Giant from "./components/Giant";

// image imports
import experience from "./assets/experience.png";
import hackathons from "./assets/hackathons.png";
import projects from "./assets/projects.png";
import contacts from "./assets/contacts.png";

function App() {
  const [bg, setBg] = useState("bg-background");

  return (
    <div>
      {/* Background */}
      {/* Not using background-image because of bug with tailwind */}
      <div className={`fixed right-0 fadeBg -z-10 float-right transition-all w-3/4 h-full bg-background`}></div>
      <BgImage image={experience} name="experience" active={bg === "bg-experience"} />
      <BgImage image={hackathons} name="hackathons" active={bg === "bg-hackathons"} />
      <BgImage image={projects} name="projects" active={bg === "bg-projects"} />
      <BgImage image={contacts} name="contacts" active={bg === "bg-contacts"} />

      <img
        src={hackathons}
        alt="hackathons"
        className={`fixed right-0 -z-10 float-right transition-all duration-1000 w-3/4 h-full opacity-0 ${bg === "bg-hackathons" && "opacity-100"}`}
      />
      <img
        src={projects}
        alt="projects"
        className={`fixed right-0 -z-10 float-right transition-all duration-1000 w-3/4 h-full opacity-0 ${bg === "bg-projects" && "opacity-100"}`}
      />
      <img
        src={contacts}
        alt="contacts"
        className={`fixed right-0 -z-10 float-right transition-all duration-1000 w-3/4 h-full opacity-0 ${bg === "bg-contacts" && "opacity-100"}`}
      />

      <Header />

      <div className="flex flex-row w-full p-4 justify-between sm:dynamicPadding">
        <div>
          {/* Left Side */}
          <Codec text="INTRO" className="mb-6" />
          <div className="slide2">
            <h1 className="3xl:mb-12  mb-6 text-2xl sm:text-3xl max-w-2xl 3xl:text-6xl 2xl:max-w-5xl">
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
          <Codec text="DISCORD" />
          <p className="fade2">tacocat9293</p>
        </div>

        <div className="z-10">
          {/* Right Side */}
          <Codec text="MY WORK" className="mb-6 text-right" />
          <ul>
            <li>
              <Giant text="Experience" onHover={setBg} />
            </li>
            <li>
              <Giant text="Hackathons" onHover={setBg} />
            </li>
            <li>
              <Giant text="Projects" onHover={setBg} />
            </li>
            <li>
              <Giant text="Contacts" onHover={setBg} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function BgImage(props: {image: string, name: string, active: boolean}) {
  return (
    <img
      src={props.image}
      alt={props.name}
      className={`fixed right-0 -z-10 float-right transition-all duration-[1200ms] w-3/4 h-full opacity-0 ${props.active && "opacity-100"}`}
    />
  );
}
export default App;
