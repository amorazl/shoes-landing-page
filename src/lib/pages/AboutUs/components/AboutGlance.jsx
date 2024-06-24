import Image from "next/image";

export default function AboutGlance() {
  return (
    <>
      <div className="container mb-32 mt-10">
        <p className="mb-3 text-center text-2xl font-bold text-[#1b204b]">
          AT A GLANCE
        </p>
        <div className="mx-auto mb-10 w-20 border-b-2 border-[#204383]"></div>
        <div className="mx-0 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mx-24 xl:gap-16">
          <div className="rounded-xl bg-white p-10">
            <Image
              src="/glance-icon-01.png"
              alt="icon-01"
              width={76}
              height={76}
            />
            <p className="my-4 text-3xl font-bold">43%</p>
            <p>
              of NIKE&apos;s leadership positions are held by women, driving
              innovation and bravery.
            </p>
            <p className="mt-16 text-end font-medium text-[#5593cf]">
              ─── &ensp; Empowerment
            </p>
          </div>
          <div className="rounded-xl bg-grayish p-10 shadow-xl">
            <Image
              src="/glance-icon-02.png"
              alt="icon-01"
              width={76}
              height={76}
            />
            <p className="my-4 text-3xl font-bold">$97.7M</p>
            <p>
              invested in NIKE, Inc.&apos;s fiscal to drive positive impact in
              communities around the world.
            </p>
            <p className="mt-16 text-end font-medium text-[#204383]">
              ─── &ensp; Inspirational
            </p>
          </div>
          <div className="rounded-xl bg-white p-10">
            <Image
              src="/glance-icon-03.png"
              alt="icon-01"
              width={76}
              height={76}
            />
            <p className="my-4 text-3xl font-bold">78%</p>
            <p>
              renewable energy in owned or operated facilities, up from 48% in
              FY20.
            </p>
            <p className="mt-16 text-end font-medium text-[#5593cf]">
              ─── &ensp; Transformative
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
