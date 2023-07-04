import Menu from "./Menu"
export default function Header() {
    return (
      <div className="box-border">
        <div className="fixed pr-8 box-border w-full flex flex-row justify-between">
          <div className="w-24 h-24 bg-primary grid place-content-center">
            <h1 className="text-2xl font-bold">xd.</h1>
          </div>
          <Menu/>
        </div>
        <div className="h-48"></div>
      </div>
    );
}