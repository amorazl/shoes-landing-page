import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container pb-12 pt-36">
        <p className="mb-4 bg-gradient-to-r from-[#1b204b] from-20% via-[#7c7bf8] bg-clip-text text-center text-3xl font-bold text-transparent">
          KNOW WHO WE ARE
        </p>
        <div className="mx-auto mb-10 w-24 border-b-4 border-[#4f4dd4]"></div>
        <div className="mx-auto mb-5 flex flex-col gap-6 md:flex-row lg:mx-32">
          <Image
            src="/aboutus-01.jpg"
            alt="about-us"
            width={200}
            height={200}
            className="rounded-3xl"
          />
          <div className="rounded-3xl bg-[#1b204b] p-12 text-white">
            <p className="mb-3 text-xl font-semibold">NIKE, Inc.</p>
            <p>
              is a team comprised of the Nike, Jordan and Converse brands driven
              by a shared purpose to leave an enduring impact.
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-6 md:flex-row lg:mx-32">
          <Image
            src="/aboutus-02.jpg"
            alt="about-us"
            width={200}
            height={200}
            className="rounded-3xl md:hidden"
          />
          <div className="rounded-3xl bg-[#2f2e72] p-12 text-white">
            <p className="mb-3 text-xl font-semibold">
              International Standards
            </p>
            With a global footprint, culture of innovation and team-first
            mentality, we take action to create a future of continual progress
            for athletes, sport and our world.
          </div>
          <Image
            src="/aboutus-02.jpg"
            alt="about-us"
            width={200}
            height={200}
            className="hidden rounded-3xl md:block"
          />
        </div>
      </div>
    </>
  );
}
