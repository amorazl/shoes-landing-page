import Image from "next/image";

import AboutGlance from "./components/AboutGlance";
import HowWeDo from "./components/HowWeDo";

export default function AboutUs() {
  return (
    <>
      <main className="min-h-screen items-center justify-center bg-platinum">
        <div className="container px-5 py-24 md:px-10 lg:p-24">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:w-1/2">
              <p>Know</p>
              <p>Who We Are</p>
              <Image
                src="/aboutus-01.jpg"
                alt="about-us"
                width={200}
                height={200}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
        <AboutGlance />
        <HowWeDo />
        <div className="py-24 text-center">
          <p className="text-center text-xl font-medium lg:text-2xl">
            Style is a way to say who <b>you</b> are <br /> without having to
            speak.
          </p>
          <p className="mt-4">
            <i>── Anonymous</i>
          </p>
        </div>
      </main>
    </>
  );
}
