import Header from "./components/Header"
import Link from "./components/Link"

function App() {
  return (
    <div className="m-4">
      <Header />
      <h4>INTRO</h4>
      <h1 className="text-3xl max-w-2xl 2xl:text-6xl 2xl:max-w-5xl">Hi, I'm Xavier, a Full-Stack Developer based out of Waterloo, Canada.</h1>
      <Link text="About me" href="https://www.xavierdmello.com/about"/>
    </div>
  );
}

export default App
