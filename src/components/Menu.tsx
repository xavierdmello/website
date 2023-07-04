import { useState } from "react";
export default function Menu() {
  const [menu, setMenu] = useState(false);

  return (
    <div className={`w-12 h-12 justify-center items-center flex flex-col bg-primary`} onClick={() => setMenu(!menu)}>
      <div className="flex flex-col gap-2">
        <Bar menu={menu} />
        <SmallBar menu={menu} />
        <Bar menu={menu} />
      </div>
    </div>
  );
}

function Bar(props: {menu: boolean}) {
    return <div className={`h-[3px] transition-all duration-300 bg-black box-border ${props.menu && "scale-150"}`}></div>;
}

function SmallBar(props: {menu: boolean}) {
    return <div className="w-7 h-[2px] bg-black box-border transition-all"></div>;
}