import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const DropDown = () => {
  return (
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
  );
};

export default DropDown;
