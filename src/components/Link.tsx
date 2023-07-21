import chev from "../assets/chev.svg" 

export default function Link(props: {text: string; href: string}) {
    return (
      <a className="hover:bg-highlight fade2 transition-all duration-300 inline-flex text-center justify-center" href={props.href}>
        <img className="bg-highlight  border-[1px] border-black overflow-hidden p-[5px] w-5 h-5 mr-4" src={chev} />
        <b className="inline-flex mr-4">{props.text}</b>
      </a>
    );
}