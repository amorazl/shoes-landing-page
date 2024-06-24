import Link from "next/link";

import { howWeDoData } from "@/lib/constants/about-us";

export default function HowWeDo() {
  return (
    <>
      <div className="bg-[#d2d4d8] py-5">
        <div className="container py-12">
          <p className="mb-8 text-3xl font-bold lg:text-5xl">How We Do</p>
          <div className="mb-12 mt-3 border-b border-gray-400"></div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {howWeDoData.map((item, i) => (
              <div key={i} className="my-4 border-r-2 border-gray-400">
                <p className="mb-4 text-lg font-medium text-gray-500">
                  /{item.number}
                </p>
                <p className="mb-2 text-2xl font-semibold text-raisin-black">
                  {item.title}
                </p>
                <p className="mr-10">{item.desc}</p>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center bg-raisin-black px-12 py-9">
              <p className="text-center text-2xl font-medium tracking-wider text-white">
                Empower Your Journey with Nike
              </p>
              <div className="mt-6 flex justify-center">
                <Link href="/products">
                  <div className="rounded-3xl bg-smoke px-8 py-3 text-center font-semibold transition-transform duration-300 ease-in-out hover:scale-110">
                    Discover
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
