import Giant from "./Giant";
export default function Sidebar(props: {showSidebar: boolean}) {
    return (
      <div
        className={`fixed w-full sm:w-96 3xl:w-[800px] bg-white  ${
          props.showSidebar ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-center items-center h-full transition-all duration-[600ms] z-10`}
      >
        <ul>

          <li>
            <Giant text="About" />
          </li>
          <li>
            <Giant text="Experience" />
          </li>
          <li>
            <Giant text="Hackathons" />
          </li>
          <li>
            <Giant text="Projects" />
          </li>
          <li>
            <Giant text="Contact" />
          </li>
        </ul>
      </div>
    );
}