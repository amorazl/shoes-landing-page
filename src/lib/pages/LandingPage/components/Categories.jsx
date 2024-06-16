import Image from "next/image";

import { categoriesData } from "@/lib/constants/categories";

export default function Categories() {
  return (
    <>
      <div className="my-10 py-10 text-white">
        <p className="font-semibold text-gray-700">CATEGORIES</p>
        <div className="mb-10 mt-3 border-b border-gray-500"></div>
        <div className="grid grid-cols-3 gap-24">
          {categoriesData.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center rounded-xl border bg-raisin-black shadow-md transition duration-300 hover:border-2 hover:border-raisin-black hover:bg-white hover:text-black"
            >
              <div className="flex flex-col">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={250}
                  height={250}
                />
                <p className="mb-5 text-center text-2xl tracking-widest">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
