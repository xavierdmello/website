import Header from "./components/Header";
import Link from "./components/Link";
import Socials from "./components/Socials";

function App() {
  return (
    <div>
      {/* Background */}
      <div className="fixed right-0 -z-1 float-right w-3/4 h-full bg-background"></div>
      <Header />

      <div className="fixed flex flex-row w-full p-4 sm:dynamicPadding">
        <div>
          {/* Left Side */}
          <h4 className="mb-6">INTRO</h4>
          <h1 className="2xl:mb-12 mb-6 text-2xl sm:text-3xl max-w-2xl 2xl:text-6xl 2xl:max-w-5xl">
            Hi, I'm Xavier, a Full-Stack Developer based out of Waterloo, Canada.
          </h1>
          <Link text="About me" href="https://www.xavierdmello.com/about" />
          <div className="mb-10 2xl:mb-24"></div>

          <Socials />

          <div className="mb-12"></div>
          <h4>EMAIL</h4>
          <a href="mailto:hello@xavierdmello.com">hello@xavierdmello.com</a>

          <div className="mb-12"></div>
          <h4>DISCORD</h4>
          <p>tacocat9293</p>
        </div>
      </div>
    </div>
  );
}

export default App;
