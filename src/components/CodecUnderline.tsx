export default function CodecUnderline(props: { text: string; className?: string }) {
  return (
    <div className={props.className + " flex flex-row"}>
      <h4 className={`relative left-5 bottom-[27px]  fade1 transition-all duration-[2000ms]`}>{props.text}</h4>
      <div className="h-[0.7px] w-[350px] bg-gray"></div>
    </div>
  );
}
