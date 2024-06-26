import Image from "next/image";
import Link from "next/link";

import { womenProductsData } from "@/lib/constants/women";
import { formatCurrency } from "@/lib/utils";

export default function ListProducts() {
  return (
    <>
      <main id="list-products" className="container py-16">
        <div className="mb-10 mt-5 inline-block">
          <p className="font-semibold">NEWEST COLLECTION</p>
          <div className="mt-2 border-b border-raisin-black"></div>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-16 md:grid-cols-4 xl:gap-x-9">
          {womenProductsData.map((item) => (
            <div key={item.id} className="relative">
              <div className="bg-platinum p-5 py-10">
                {item.tag && (
                  <div className="absolute right-3 top-3 rounded-lg bg-smoke px-3 py-1 lg:right-4 lg:top-4">
                    <p className="text-sm text-gray-700 md:text-base">
                      {item.tag}
                    </p>
                  </div>
                )}
                <div className="flex items-center justify-center">
                  <Link href={`/products/women/${item.id}`}>
                    <Image
                      src={item.img}
                      alt="products"
                      width={200}
                      height={200}
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <Link href={`/products/women/${item.id}`}>
                  <p className="mb-1 mt-4 text-base font-semibold transition visited:text-[#4f4dd4] hover:text-gray-500 lg:text-lg">
                    {item.name}
                  </p>
                </Link>
                <p className="text-sm font-medium lg:text-base">
                  {formatCurrency(item.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
