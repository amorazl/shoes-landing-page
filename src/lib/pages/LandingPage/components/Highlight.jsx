import Image from "next/image";

export default function Detail() {
  return (
    <>
      <div className="my-10 flex flex-col items-center py-5 md:flex-row">
        <div className="sm:w-full md:w-3/5">
          <Image
            src="/highlight.png"
            alt="detail product"
            width={700}
            height={700}
          />
        </div>
        <div className="md:w-2/5">
          <p className="text-lg font-medium uppercase">
            Nike: Redefining Comfort <br /> and Performance
          </p>
          <div className="w-50 mt-4 border-b border-raisin-black lg:w-80"></div>
          <p className="my-7 text-4xl font-bold lg:my-12 lg:text-5xl">
            COMFORTABLE <br /> WEARING
          </p>
          <p>
            Experience unparalleled comfort with Nike shoes. Designed with
            advanced cushioning and ergonomic support, every step feels light
            and effortless, ensuring you stay comfortable all day long.
          </p>
        </div>
      </div>
    </>
  );
}
