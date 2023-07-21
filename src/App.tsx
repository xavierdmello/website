import Header from "./components/Header";
import Hero from "./components/slides/Hero";
import About from "./components/slides/About";

function App() {
  return (
    <div>
      <Header />

      {/* First Slide */}
      <Hero />

      {/* Second Slide */}
      <About />

      {/* Temp: for dev purposes only */}
      <div className="mb-[1000px]"></div>
    </div>
  );
}

export default App;
