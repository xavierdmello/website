import Menu from "./Menu";
export default function Header() {
  return (
    <div>
      <div className="fixed pr-8 w-full flex flex-row justify-between">
        {/* Logo */}
        <a href="https://www.xavierdmello.com" className="w-12 h-12 sm:w-24 sm:h-24  bg-primary grid place-content-center hover:bg-black hover:text-white duration-300 transition-all">
          <h1 className="text-2xl font-bold">xd.</h1>
        </a>

        <Menu />
      </div>
      <div className="h-24 sm:h-48"></div>
    </div>
  );
}
