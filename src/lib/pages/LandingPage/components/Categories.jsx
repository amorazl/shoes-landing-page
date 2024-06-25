import Link from "next/link";

import { HiArrowLongRight } from "react-icons/hi2";
import { categoriesData } from "@/lib/constants/categories";

export default function Categories() {
  return (
    <>
      <div className="my-10 py-10">
        <p className="font-semibold text-gray-700">SEARCH BY CATEGORIES</p>
        <div className="mb-7 mt-3 border-b border-gray-500"></div>
        <div className="mx-0 flex flex-col justify-evenly gap-6 md:flex-row md:gap-12 lg:gap-24 xl:mx-28">
          {categoriesData.map((item) => (
            <div key={item}>
              <p className="mb-2 mt-5 text-2xl font-bold tracking-wider">
                {item.title}
              </p>
              <p className="mb-9">
                Discover our men&apos;s shoes collection, cool design meets
                comfort style.
              </p>
              <Link
                href={item.path}
                className="flex text-sm font-medium text-[#4f4dd4] hover:text-[#35339c]"
              >
                VIEW MORE <HiArrowLongRight className="ml-2" size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
