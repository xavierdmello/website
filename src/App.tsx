import Header from "./components/Header";
import Hero from "./components/slides/1Hero";
import About from "./components/slides/2About";

function App() {
  return (
    <div>
      <div className="w-full bg-orange-500 text-center">
        <b>This website is a work in progress! I just like testing in prod :)</b>
      </div>
      <Header />

      {/* First Slide */}
      <Hero />

      {/* Second Slide */}
      <About />
    </div>
  );
}

export default App;
