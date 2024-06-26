import Image from "next/image";
import HEAD from "@/lib/components/Head";

import { formatCurrency } from "@/lib/utils";
import { shoesSizeData } from "@/lib/constants/shoes-size";
import Categories from "../LandingPage/components/Categories";

export default function ProductDetail() {
  return (
    <>
      <HEAD
        pageTitle="Nike. Athletic Choices."
        pageDescription="Explore Our Collection."
      />
      <main className="container min-h-screen bg-smoke pt-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex items-center justify-center bg-platinum">
            <Image src="/men/men-jordan.png" alt="" width={400} height={400} />
          </div>
          <div className="mx-10">
            <p className="text-2xl font-bold">Air Jordan 11</p>
            <p className="mt-2 text-lg font-normal text-gray-500">
              Rp12.000.000
            </p>

            <section id="size" className="my-7 inline-block">
              <div className="mb-3 flex justify-between">
                <p className="font-medium">Size Available</p>
                <a href="https://www.nike.com/size-fit/mens-footwear">
                  <p className="font-medium text-gray-400 duration-200 hover:text-gray-600">
                    Size Guide
                  </p>
                </a>
              </div>
              <div className="flex gap-2">
                {shoesSizeData.map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-sm border border-gray-300 px-3 py-2 ${item.status === "disabled" ? "bg-gray-100 text-gray-400" : "bg-white"}`}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
            </section>

            <section id="description">
              <p>
                Always in, always cool. Nike sets you up with a heritage that
                comfortable all day. Choose your colors, then step out in the
                iconic profile that built with a high-end mix of materials and
                encapsulated Air in the heel.
              </p>
              <div className="my-6 w-full border-b border-gray-300"></div>
              <p className="text mb-1 font-semibold">
                Categories:
                <span className="text-base font-normal text-gray-600">
                  {" "}
                  Men, Shoes, Clothing
                </span>
              </p>
              <p className="text font-semibold">
                Tag:
                <span className="text-base font-normal text-gray-600">
                  {" "}
                  Air Jordan
                </span>
              </p>
            </section>
          </div>
        </div>

        <div className="mx-32 mb-16 mt-12 text-center">
          <div className="mb-8 mt-5 inline-block items-center">
            <p className="font-semibold">DESCRIPTION</p>
            <div className="mt-2 border-b border-raisin-black"></div>
          </div>
          <p className="mb-5">
            Nike shoes are renowned for their innovative design, superior
            comfort, and unmatched performance. With a diverse range of styles
            for men, women, and kids, Nike combines cutting-edge technology with
            contemporary from athletic training to casual wear, Nike shoes offer
            durability, support, and a perfect fit, making them a top choice for
            athletes and style enthusiasts alike.
          </p>
          <p>
            Nike&apos;s iconic designs, including the Air Max, Air Force 1, and
            Air Jordan, not only provide functional benefits but also make a
            bold fashion statement. The brand commitment to sustainability is
            evident in their use of recycled materials and eco-friendly
            manufacturing processes, making Nike shoes a responsible choice for
            the environmentally conscious consumer.
          </p>
        </div>

        <Categories />
      </main>
    </>
  );
}
