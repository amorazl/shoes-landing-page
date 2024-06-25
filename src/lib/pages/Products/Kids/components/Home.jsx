import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* MAIN COVER SECTION */}
      <div id="main-cover" className="mb-3 bg-platinum">
        <div className="container pb-16 pt-36">
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
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* AIR JORDAN SECTION  */}
        <div id="air-jordan" className="bg-platinum">
          <div className="container">
            <div className="flex items-center">
              <Image
                src="/kids/kids-jordan.png"
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
                  Kids Air Jordan bring a burst of fun and energy, combining
                  cool style for the most unbeatable active youngsters!
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

        {/* AIR FLIGHT SECTION  */}
        <div id="air-monarch" className="bg-platinum">
          <div className="container">
            <div className="flex items-center">
              <Image
                src="/kids/kids-flight.png"
                alt="Air Flight"
                width={300}
                height={300}
                className="mr-5"
              />
              <div>
                <p className="text-2xl font-light">
                  AIR <span className="font-semibold">FLIGHT</span>
                </p>
                <p className="mb-6 mt-2 italic text-gray-500">
                  Nike Air Flight shoes for kids offer a perfect blend of
                  lightweight comfort, durable support, and stylish design.
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
