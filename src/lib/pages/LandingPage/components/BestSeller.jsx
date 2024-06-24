import { useState } from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

import { bestSellerData } from "@/lib/constants/best-seller";

export default function BestSeller() {
  const [hovered, setHovered] = useState(null);

  function formatCurrency(amount) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  }

  return (
    <>
      <div className="my-12 md:py-12">
        <p className="font-semibold text-gray-700">BEST SELLER</p>
        <div className="mb-10 mt-3 border-b border-gray-500"></div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-y-7 lg:grid-cols-3">
          {bestSellerData.map((item) => (
            <div className="flex flex-col" key={item.id}>
              <div
                className="relative flex h-64 items-center justify-center rounded-xl bg-white transition-all duration-300 ease-in-out"
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <Image
                  src={item.image}
                  alt="product"
                  width={300}
                  height={300}
                />
                {hovered === item.id && (
                  <>
                    <div className="absolute inset-0 rounded-xl bg-gray-600 opacity-25 transition-opacity duration-300"></div>
                    <button className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white p-3 text-black shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
                      View
                    </button>
                  </>
                )}
              </div>
              <div className="mx-3 mt-3 flex items-center justify-between md:mt-5">
                <div className="flex flex-col">
                  <p className="mb-1 text-lg font-semibold">{item.name}</p>
                  <p>{formatCurrency(item.price)}</p>
                </div>
                <div className="flex items-center text-end">
                  <IoStar />
                  <p className="pl-2 pt-1">{item.rate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
