import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* MAIN COVER SECTION */}
      <div id="main-cover" className="mb-3 bg-platinum">
        <div className="container pb-16 pt-36">
          <p className="text-4xl font-light tracking-wider">
            POWER STEPS <span className="font-bold">WOMEN</span>
          </p>
          <p className="mb-12 mt-3 text-gray-500">
            Your bestie from workouts to everyday adventures, guide you to
            enjoying a casual day out.
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
                src="/women/women-jordan.png"
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
                  Special designs with advanced comfort and durability, perfect
                  for both athletic performance and casual wear.
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

        {/* AIR FORCE SECTION  */}
        <div id="air-monarch" className="bg-platinum">
          <div className="container">
            <div className="flex items-center">
              <Image
                src="/women/women-force.png"
                alt="Air FORCE 1"
                width={300}
                height={300}
                className="mr-5"
              />
              <div>
                <p className="text-2xl font-light">
                  AIR <span className="font-semibold">FORCE 1</span>
                </p>
                <p className="mb-6 mt-2 italic text-gray-500">
                  Iconic design tailored with a sleek and contemporary aesthetic
                  that appeals to modern tastes in footwear.
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
