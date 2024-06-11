import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav id="navbar" className="bg-smoke fixed z-10 h-20 w-full shadow-sm">
      <div className="mx-auto flex h-full w-full items-center justify-between px-6 md:px-20 2xl:px-16">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer"
            priority
          />
        </Link>

        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-12 text-base font-medium text-gray-950 hover:border-b-2 hover:text-gray-600">
                HOME
              </li>
            </Link>
            <Link href="/products">
              <li className="ml-12 text-base font-medium text-gray-950 hover:border-b-2 hover:text-gray-600">
                PRODUCTS
              </li>
            </Link>
            <Link href="/about-us">
              <li className="ml-12 text-base font-medium text-gray-950 hover:border-b-2 hover:text-gray-600">
                ABOUT US
              </li>
            </Link>
          </ul>
        </div>

        <div onClick={handleNav} className="cursor-pointer pl-24 md:hidden">
          <IoMenuOutline size={25} />
        </div>

        <div
          ref={navRef}
          className={
            isOpen
              ? "fixed left-0 top-0 h-screen w-[65%] bg-platinum p-10 duration-500 ease-in sm:hidden"
              : "fixed left-[-100%] top-0 p-10 duration-500 ease-in"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <IoCloseOutline size={25} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setIsOpen(false)}
                  className="mb-4 cursor-pointer pt-4 hover:border-b-2 hover:font-medium"
                >
                  HOME
                </li>
              </Link>
              <Link href="/products">
                <li
                  onClick={() => setIsOpen(false)}
                  className="mb-4 cursor-pointer pt-4 hover:border-b-2 hover:font-medium"
                >
                  PRODUCTS
                </li>
              </Link>
              <Link href="/about-us">
                <li
                  onClick={() => setIsOpen(false)}
                  className="mb-4 cursor-pointer pt-4 hover:border-b-2 hover:font-medium"
                >
                  ABOUT US
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
