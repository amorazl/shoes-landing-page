import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-white py-5">
        <div className="mx-auto flex h-full w-full items-center justify-between p-5 md:px-20 2xl:px-16">
          <div className="grid grid-cols-10 gap-x-5 gap-y-8">
            {/* Company Section */}
            <div className="col-span-10 md:col-span-10 lg:col-span-5 xl:col-span-4">
              <div className="flex items-center">
                <Image src="/logo.png" alt="logo" width={70} height={70} />
                <p className="ms-2 text-2xl font-extrabold">NIKE.</p>
              </div>
              <p className="mt-3 text-lg font-semibold text-raisin-black">
                Explore our exclusive collection and elevate your performance
                with shoes designed for champions.
              </p>
              <div className="mt-5 flex gap-5">
                <div className="flex h-9 w-9 cursor-pointer place-content-center items-center rounded-full border-2 border-gray-900 hover:border-gray-500 hover:duration-300">
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="ease-in hover:text-gray-500"
                  >
                    <FaFacebookF className="text-xl" />
                  </Link>
                </div>
                <div className="flex h-9 w-9 cursor-pointer place-content-center items-center rounded-full border-2 border-gray-900 hover:border-gray-500 hover:duration-300">
                  <Link
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="ease-in hover:text-gray-500"
                  >
                    <FaTwitter className="text-xl" />
                  </Link>
                </div>
                <div className="flex h-9 w-9 cursor-pointer place-content-center items-center rounded-full border-2 border-gray-900 hover:border-gray-500 hover:duration-300">
                  <Link
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="ease-in hover:text-gray-500"
                  >
                    <FaYoutube className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Menu Section */}
            <div className="col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-1">
              <div className="flex flex-col">
                <p className="text-xl font-bold">Explore</p>
                <Link href="/products" className="menu-link mt-5">
                  Products
                </Link>
                <Link href="/about-us" className="menu-link mt-3">
                  About Us
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-span-6 md:col-span-7 lg:col-span-3 xl:col-span-2">
              <div className="flex flex-col">
                <p className="text-xl font-bold">Contact Us</p>
                <p className="menu-link mt-5 text-base">
                  Email:
                  <Link href="mailto:contact@nike.com"> contact@nike.com</Link>
                </p>
                <p className="menu-link mt-3 text-base">
                  Phone:
                  <Link href="tel:021-3358-1616"> +1 (800) 123-4567</Link>
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="col-span-10 xl:col-span-3">
              <p className="text-xl font-bold">Address</p>
              <p className="menu-link mt-5">
                District 8, SCBD Lot 28, Jl. Jend. Sudirman kav 52-53, Daerah
                Khusus Ibukota Jakarta 12190
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mx-auto mt-3 px-5 text-center md:px-16">
          <div className="border-t border-gray-300"></div>
          <p className="mb-2 mt-5 text-sm text-gray-600">
            Copyright &copy; 2024 Fakultas Teknik Informatika Untirta
          </p>
        </div>
      </footer>
    </>
  );
}
