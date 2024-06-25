import Image from "next/image";

import { womenProductsData } from "@/lib/constants/women";
import { formatCurrency } from "@/lib/utils";

export default function ListProducts() {
  return (
    <>
      <main className="container py-16">
        <div className="mb-10 mt-5 inline-block">
          <p className="font-semibold">NEWEST COLLECTION</p>
          <div className="mt-2 border-b border-raisin-black"></div>
        </div>
        <div className="grid grid-cols-2 gap-x-9 gap-y-16 md:grid-cols-4">
          {womenProductsData.map((item) => (
            <div key={item.id} className="relative">
              <div className="bg-platinum p-5 py-10">
                {item.tag && (
                  <div className="absolute right-5 top-5 rounded-xl bg-smoke px-3 py-1">
                    <p className="text-gray-700">{item.tag}</p>
                  </div>
                )}
                <div className="flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt="products"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="mb-1 mt-4 text-lg font-semibold">{item.name}</p>
                <p className="font-medium">{formatCurrency(item.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
