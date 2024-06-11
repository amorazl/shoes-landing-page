import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const popoutRef = useRef(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClickOutside = (event) => {
    if (popoutRef.current && !popoutRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    if (clicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clicked]);

  return (
    <>
      <div className="container mx-auto mt-8 flex flex-col items-center md:flex-row">
        {/* TEXT SECTION */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold uppercase text-raisin-black md:text-5xl xl:text-6xl">
            Just Do It: Find Your Perfect Nike Fit.
          </h1>
          <div className="my-5 w-40 border-2 border-black"></div>
          <p className="text-xl font-semibold text-raisin-black">
            Where Innovation Meets Style
          </p>

          <div className="mt-10 flex h-16 w-full items-center justify-center gap-x-3 rounded-2xl bg-neutral-100 sm:mt-10 sm:h-20 sm:w-3/4 md:w-2/4">
            <div
              className="relative mr-5 h-14 w-14 rounded-xl border-4 border-[#ffffff] sm:mr-5 sm:h-14 sm:w-14"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={handleClick}
              ref={popoutRef}
            >
              <Image
                src="/icon-shoes-3.png"
                alt="icon shoes"
                width={150}
                height={150}
                className="cursor-pointer rounded-xl"
              />
              {(hovered || clicked) && (
                <div className="bg-smoke absolute left-1/2 top-full mt-2 w-32 -translate-x-1/2 transform rounded-lg p-2 text-center text-black shadow-lg sm:mt-3 sm:w-40">
                  <div className="relative">
                    <div className="border-b-smoke absolute left-1/2 top-[-8px] h-0 w-0 -translate-x-1/2 border-b-8 border-l-8 border-r-8 border-transparent"></div>
                    <Link href="/products" className="hover:text-gray-600">
                      See What&apos;s New!
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-smoke h-10 w-10 rounded-full border border-gray-300 duration-100 hover:scale-110 sm:h-12 sm:w-12"></div>
            <div className="h-10 w-10 rounded-full bg-grayish duration-100 hover:scale-110 sm:h-12 sm:w-12"></div>
            <div className="h-10 w-10 rounded-full bg-raisin-black duration-100 hover:scale-110 sm:h-12 sm:w-12"></div>
          </div>

          <div className="mt-10 text-end">
            <p className="font-medium">Where Modern Meets Majestic:</p>
            <p className="font-bold">Discover Nike.</p>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="md:w-1/2">
          <Image
            src="/shoes-home.png"
            alt="logo"
            width={1000}
            height={1000}
            className="transition-transform duration-500 hover:-rotate-12 hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}
