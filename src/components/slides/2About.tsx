import Portrait from "../../assets/portrait.jpg";
export default function About() {
  return (
    <div className="relative mt-24 mb-24 flex flex-col m-4 sm:dynamicPadding  items-center justify-center">
      <img className="w-72 sm:w-80   border-secondary border-4" src={Portrait} alt="Portrait of Xavier" />
      <div className="absolute -z-10 top bg-secondary h-60 sm:w-3/4 w-full "></div>
    </div>
  );
}
