import React from "react";
import Image from "next/image";
import HEAD from "../components/Head";

export default function LandingPage() {
  return (
    <>
      <HEAD
        pageTitle="Nike. Stride and Hike."
        pageDescription="Welcome to Our Website"
      />
      <main className="flex min-h-screen items-center justify-center bg-platinum p-24">
        <div className="container mx-auto mb-20 flex flex-col items-center py-10 md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-raisin-black text-4xl font-extrabold uppercase md:text-5xl xl:text-6xl">
              Just Do It: Find Your Perfect Nike Fit.
            </h1>
            <div className="my-8 w-40 border-2 border-black"></div>
            <p className="text-raisin-black text-xl font-semibold">
              Where Innovation Meets Style
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/logo.png" alt="logo" width={70} height={70} />
          </div>
        </div>
      </main>
    </>
  );
}
