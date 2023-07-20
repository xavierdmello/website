import Giant from "./Giant";
import CodecUnderline from "./CodecUnderline";
export default function Sidebar(props: {showSidebar: boolean}) {
    return (
      <div
        className={`fixed w-full sm:w-96 3xl:w-[800px] bg-white  ${
          props.showSidebar ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-center items-center h-full transition-all duration-[600ms] z-10`}
      >
        <ul>
          <li>
            <Giant text="About" className="mb-1" />
            <CodecUnderline text="01" className="mb-3" />
          </li>
          <li>
            <Giant text="Meow" className="mb-1" />
            <CodecUnderline text="02" className="mb-3" />
          </li>
          <li>
            <Giant text="Hackathons" className="mb-1" />
            <CodecUnderline text="03" className="mb-3" />
          </li>
          <li>
            <Giant text="Projects" className="mb-1" />
            <CodecUnderline text="04" className="mb-3" />
          </li>
          <li>
            <Giant text="Contact" className="mb-1" />
            <CodecUnderline text="05" className="mb-3" />
          </li>
        </ul>
      </div>
    );
}