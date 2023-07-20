import Giant from "./Giant";
import Codec from "./Codec";
export default function Sidebar(props: {showSidebar: boolean}) {

    const menuOptions = ["About", "Experience", "Hackathons", "Projects", "Contact"]
    return (
      <div
        className={`fixed w-full sm:w-[500px] 3xl:w-[800px] bg-white  ${
          props.showSidebar ? "translate-x-0 visible" : "translate-x-full invisible"
        } flex flex-col justify-center items-center h-full transition-all duration-[600ms] z-10`}
      >
        <ul className="w-full dynamicPadding sm:w-auto">
          {menuOptions.map((option, index) => {
            return (
              <li className="mb-6 3xl:mb-8">
                <div className="flex flex-row justify-between items-end mb-2 3xl:mb-3">
                  <Codec text={`0${index + 1}`} />
                  <Giant text={option} />
                </div>

                <div className="bg-gray w-full sm:w-[350px] 3xl:w-[675px] h-[0.7px]"></div>
              </li>
            );
          })}
        </ul>
      </div>
    );
}