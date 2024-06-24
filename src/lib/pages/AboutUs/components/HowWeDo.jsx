import Link from "next/link";

import { howWeDoData } from "@/lib/constants/about-us";

export default function HowWeDo() {
  return (
    <>
      <p className="mb-3 text-center text-2xl font-bold text-midnight">
        HOW WE DO
      </p>
      <div className="mx-auto mb-10 w-20 border-b-2 border-midnight"></div>
      <div className="bg-[#d2d4d8] py-5">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {howWeDoData.map((item, i) => (
              <div key={i} className="my-4 border-r-2 border-gray-400">
                <p className="mb-4 text-lg font-medium text-[#2f2fb6]">
                  /{item.number}
                </p>
                <p className="mb-2 text-2xl font-semibold text-midnight">
                  {item.title}
                </p>
                <p className="mr-10">{item.desc}</p>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center px-12 py-9">
              <p className="bg-gradient-to-t from-midnight from-55% via-[#2f2fb6] bg-clip-text text-center text-2xl font-semibold tracking-wider text-transparent">
                Empower Your Journey with Nike
              </p>
              <div className="mt-6 flex justify-center">
                <Link href="/products">
                  <div className="rounded-3xl bg-[#2f2e72] px-8 py-3 text-center font-medium text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-midnight">
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
