import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto mb-20 flex flex-col items-center md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold uppercase text-raisin-black md:text-5xl xl:text-6xl">
            Just Do It: Find Your Perfect Nike Fit.
          </h1>
          <div className="my-5 w-40 border-2 border-black"></div>
          <p className="text-xl font-semibold text-raisin-black">
            Where Innovation Meets Style
          </p>
          <div className="mt-10 flex h-20 w-2/4 items-center justify-center gap-x-3 rounded-2xl bg-neutral-100">
            <div className="mr-5 h-14 w-14 rounded-xl border-2 border-[#ffffff]">
              <Image
                src="/icon-shoes-3.png"
                alt="icon shoes"
                width={150}
                height={150}
                className="rounded-xl"
              />
            </div>
            <div className="h-12 w-12 rounded-full border border-gray-300 bg-white"></div>
            <div className="h-12 w-12 rounded-full bg-grayish"></div>
            <div className="h-12 w-12 rounded-full bg-raisin-black"></div>
          </div>
          <div className="mt-5 text-end">
            <p className="font-medium">Where Modern Meets Majestic:</p>
            <Link href="/products">
              <p className="font-bold">Discover Nike.</p>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src="/shoes-home.png" alt="logo" width={1000} height={1000} />
        </div>
      </div>
    </>
  );
}
