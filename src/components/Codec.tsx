export default function Codec(props: { text: string; className?: string }) {
  return <h4 className={props.className + ` fade1 transition-all duration-[2000ms]`}>{props.text}</h4>;
}
