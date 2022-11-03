import { TypeAnimation } from "react-type-animation";
import DropDown from "./DropDown";
const Header = () => {
  return (
    <section className="sticky top-0 z-50 bg-white border-b rounded-lg">
      <div className="font-quicksand flex mx-2 justify-between ">
        <div className="flex">
          <DropDown />
          <TypeAnimation
            sequence={[
              "Hello, Nice to meet you ! . . .",
              1000,
              "I'm Freelance Developer . . .",
              2000,
            ]}
            className="my-auto ml-2 text-sm md:text-md lg:text-2xl tracking-widest"
            repeat={Infinity}
            deletionSpeed={60}
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 rounded-full border p-2 m-2 cursor-pointer shadow-md transition hover:bg-gray-800 hover:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Header;
