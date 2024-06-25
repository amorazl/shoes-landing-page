import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* MAIN COVER SECTION */}
      <div id="main-cover" className="mb-3 bg-platinum">
        <div className="container pb-12 pt-36">
          <p className="text-4xl font-light tracking-wider">
            MOVE IT <span className="font-bold">MEN</span>
          </p>
          <p className="mb-16 mt-3 text-gray-500">
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
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* AIR JORDAN SECTION  */}
        <div id="air-jordan" className="bg-platinum">
          <div className="container">
            <div className="flex items-center">
              <Image
                src="/men/men-jordan.png"
                alt="Air Jordan"
                width={280}
                height={280}
                className="mr-5"
              />
              <div>
                <p className="text-2xl font-light">
                  AIR <span className="font-semibold">JORDAN</span>
                </p>
                <p className="mb-6 mt-2 italic text-gray-500">
                  Originally designed for basketball, Air Jordans are engineered
                  to provide excellent support and traction on the court.
                </p>
                <a
                  href="#list-products"
                  className="border-b-2 border-raisin-black text-sm font-medium"
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
            <div className="flex items-center">
              <Image
                src="/men/men-monarch.png"
                alt="Air Monarch"
                width={300}
                height={300}
                className="mr-5"
              />
              <div>
                <p className="text-2xl font-light">
                  AIR <span className="font-semibold">MONARCH</span>
                </p>
                <p className="mb-6 mt-2 italic text-gray-500">
                  The Air Monarch boasts a timeless and straightforward design,
                  appealing to those who prefer an authentic athletic shoe look.
                </p>
                <a
                  href="#list-products"
                  className="border-b-2 border-raisin-black text-sm font-medium"
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
