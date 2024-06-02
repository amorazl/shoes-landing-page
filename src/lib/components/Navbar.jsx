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
    <nav id="navbar" className="fixed h-20 w-full bg-white shadow-xl xl:h-24">
      <div className="flex h-full w-full items-center justify-between px-4 2xl:px-16">
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
              <li className="text-normal ml-12 font-medium text-gray-800 hover:border-b hover:font-semibold xl:text-lg">
                Home
              </li>
            </Link>
            <Link href="/products">
              <li className="text-normal ml-12 font-medium text-gray-800 hover:border-b hover:font-semibold xl:text-lg">
                Products
              </li>
            </Link>
            <Link href="/about-us">
              <li className="text-normal ml-12 font-medium text-gray-800 hover:border-b hover:font-semibold xl:text-lg">
                About Us
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
              ? "fixed left-0 top-0 h-screen w-[65%] bg-gray-100 p-10 duration-500 ease-in sm:hidden"
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
                  Home
                </li>
              </Link>
              <Link href="/products">
                <li
                  onClick={() => setIsOpen(false)}
                  className="mb-4 cursor-pointer pt-4 hover:border-b-2 hover:font-medium"
                >
                  Products
                </li>
              </Link>
              <Link href="/about-us">
                <li
                  onClick={() => setIsOpen(false)}
                  className="mb-4 cursor-pointer pt-4 hover:border-b-2 hover:font-medium"
                >
                  About Us
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
