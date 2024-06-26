import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* MAIN COVER SECTION */}
      <div id="main-cover-men" className="mb-3 bg-platinum pb-16 pt-36">
        <div className="container flex flex-col items-center justify-center md:flex-row">
          <div className="md:w-1/2">
            <p className="text-4xl font-light tracking-wider">
              MOVE IT <span className="font-bold">MEN</span>
            </p>
            <p className="mb-12 mt-3 text-gray-500">
              Hitting the gym, running the track, or stepping outside, find your
              perfect pair.
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
              src="/blue-cover.png"
              alt="men-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* AIR JORDAN SECTION  */}
        <div id="air-jordan-men" className="bg-platinum">
          <div className="container">
            <div className="flex flex-col items-center pb-5 lg:flex-row xl:pb-2">
              <Image
                src="/men/men-jordan.png"
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
                  Originally designed for basketball, Air Jordans are engineered
                  to provide excellent support and traction on the court.
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

        {/* AIR MONARCH SECTION  */}
        <div id="air-monarch" className="bg-platinum">
          <div className="container">
            <div className="flex flex-col items-center pb-5 lg:flex-row xl:pb-2">
              <Image
                src="/men/men-monarch.png"
                alt="Air Monarch"
                width={280}
                height={280}
                className="mr-0 lg:mr-5"
              />
              <div>
                <p className="text-2xl font-light">
                  AIR <span className="font-semibold">MONARCH</span>
                </p>
                <p className="mb-6 mt-2 text-sm italic text-gray-500 md:text-base">
                  The Air Monarch boasts a timeless and straightforward design,
                  appealing to those who prefer an authentic athletic shoe look.
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
