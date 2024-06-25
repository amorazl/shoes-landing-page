import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="relative my-20 bg-platinum py-20">
        <div className="container relative z-20">
          <div className="relative z-10 ml-48">
            <div>
              <p className="text-3xl font-bold">NIKE.</p>
              <p className="text-lg font-medium text-gray-600">
                WHERE INNOVATION MEETS STYLE
              </p>
            </div>
            <Image
              src="/banner.png"
              alt="Banner Image"
              width={400}
              height={400}
              className="absolute right-0 top-0 z-20 -mt-40 mr-56"
            />
          </div>
        </div>
      </div>
    </>
  );
}
