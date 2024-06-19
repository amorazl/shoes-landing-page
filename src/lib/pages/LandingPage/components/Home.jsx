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
      <div className="mt-8 flex flex-col items-center md:flex-row">
        {/* TEXT SECTION */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold uppercase text-raisin-black xl:text-6xl">
            Just Do It: Find Your Perfect Nike Fit.
          </h1>
          <div className="my-5 w-40 border border-black lg:border-2"></div>
          <p className="text-lg font-semibold text-raisin-black lg:text-xl">
            Where Innovation Meets Style
          </p>
          <div className="mt-10 flex h-20 w-4/5 items-center justify-center gap-x-3 rounded-2xl bg-[#edeaec] md:w-10/12 lg:w-3/4 xl:w-2/4">
            <div
              className="relative mr-5 h-14 w-14 rounded-xl border-4 border-white sm:mr-5 sm:h-14 sm:w-14"
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
                <div className="absolute left-1/2 top-full mt-3 w-40 -translate-x-1/2 transform rounded-lg bg-smoke p-2 text-center text-black shadow-lg">
                  <div className="relative">
                    <div className="absolute left-1/2 top-[-8px] h-0 w-0 -translate-x-1/2 border-transparent border-b-smoke"></div>
                    <Link href="/products" className="hover:text-gray-600">
                      See What&apos;s New!
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="h-10 w-10 rounded-full border border-gray-300 bg-smoke duration-100 hover:scale-110 lg:h-12 lg:w-12"></div>
            <div className="h-10 w-10 rounded-full bg-grayish duration-100 hover:scale-110 lg:h-12 lg:w-12"></div>
            <div className="h-10 w-10 rounded-full bg-raisin-black duration-100 hover:scale-110 lg:h-12 lg:w-12"></div>
          </div>
          <div className="mt-10 text-end">
            <p className="font-medium">Where Modern Meets Majestic:</p>
            <p className="font-bold">Discover Nike.</p>
          </div>
        </div>

        {/* IMAGE SHOES SECTION */}
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
