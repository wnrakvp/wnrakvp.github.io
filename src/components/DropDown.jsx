import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

const DropDown = () => {
  const links = [
    {
      href: "/",
      label: "About Me",
    },
    {
      href: "/resume",
      label: "Resume",
    },
    {
      href: "/project",
      label: "Project",
    },
    {
      href: "/contact",
      label: "Contact Me",
    },
  ];
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Menu.Button>
          <Transition
            show={open}
            enter="transition ease-out duration-150"
            enterFrom="transform opacity-0 scale-50"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-50"
          >
            <Menu.Items className="absolute left-0 top-2 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {links.map((link) => (
                /* Use the `active` state to conditionally style the active item. */
                <div className="px-1 py-1 text-left">
                  <Menu.Item key={link.href} as={Fragment}>
                    {({ active }) => (
                      <Link
                        to={link.href}
                      >
                        {link.label}
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default DropDown;
