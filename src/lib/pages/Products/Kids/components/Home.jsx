import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* MAIN COVER SECTION */}
      <div id="main-cover-kids" className="mb-3 bg-platinum pb-16 pt-36">
        <div className="container flex flex-col items-center justify-center md:flex-row">
          <div className="md:w-1/2">
            <p className="text-4xl font-light tracking-wider">
              DYNAMIC <span className="font-bold">KIDS</span>
            </p>
            <p className="mb-12 mt-3 text-gray-500">
              Our kids shoes offer the best in quality and fashion to keep them
              moving confidently.
            </p>
            <a
              href="#list-products"
              className="border-b-2 border-raisin-black text-sm font-medium"
            >
              VIEW NOW
            </a>
          </div>
          <div className="mt-12 flex justify-center md:mt-0 md:w-1/2">
            <Image
              src="/red-cover.png"
              alt="men-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* AIR JORDAN SECTION  */}
        <div id="air-jordan-kids" className="bg-platinum">
          <div className="container">
            <div className="flex flex-col items-center pb-5 lg:flex-row xl:pb-2">
              <Image
                src="/kids/kids-jordan.png"
                alt="Air Jordan"
                width={280}
                height={280}
                className="mr-0 lg:mr-5"
              />
              <div>
                <p className="text-2xl font-light">
                  AIR <span className="font-semibold">JORDAN</span>
                </p>
                <p className="mb-6 mt-2 text-sm italic text-gray-500 md:text-base">
                  Kids Air Jordan bring a burst of fun and energy, combining
                  cool style for the most unbeatable active youngsters!
                </p>
                <a
                  href="#list-products"
                  className="border-b-2 border-raisin-black text-xs font-medium md:text-sm"
                >
                  VIEW NOW
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AIR FLIGHT SECTION  */}
        <div id="air-flight" className="bg-platinum">
          <div className="container">
            <div className="flex flex-col items-center pb-5 lg:flex-row lg:pb-0 xl:pb-2">
              <Image
                src="/kids/kids-flight.png"
                alt="Air Flight"
                width={280}
                height={280}
                className="mr-0 lg:mr-5"
              />
              <div>
                <p className="text-2xl font-light">
                  AIR <span className="font-semibold">FLIGHT</span>
                </p>
                <p className="mb-6 mt-2 text-sm italic text-gray-500 md:text-base">
                  Nike Air Flight shoes for kids offer a perfect blend of
                  lightweight comfort, durable support, and stylish design.
                </p>
                <a
                  href="#list-products"
                  className="border-b-2 border-raisin-black text-xs font-medium md:text-sm"
                >
                  VIEW NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
