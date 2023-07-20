export default function CodecUnderline(props: { text: string; className?: string }) {
  return (
    <div className={props.className + " flex flex-row"}>
      <h4 className={`relative left-3 bottom-2 fade1 transition-all duration-[2000ms]`}>{props.text}</h4>
      <div className="relative bottom-[7px] left-[3px] rotate-45 h-[0.7px] w-1/12 bg-gray"></div>
      <div className="h-[0.7px] w-11/12 bg-gray"></div>
    </div>
  );
}
