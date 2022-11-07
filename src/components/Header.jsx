import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { Switch } from "@headlessui/react";

import DropDown from "./DropDown";

const Header = () => {
  const [enabled, setEnabled] = useState(false);
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
            repeat={1}
            deletionSpeed={60}
          />
        </div>
        <div className="flex items-center">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-gray-900" : "bg-gray-400"}
          relative inline-flex h-[26x] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>

          {enabled ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 rounded-full border p-2 m-2 shadow-md cursor-pointer bg-gray-800 text-white transition tranform"
              onClick={() => setEnabled(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 rounded-full border p-2 m-2 shadow-md cursor-pointer transition tranform"
              onClick={setEnabled}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
