"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="md:mt-16 mt-12">
      <div className="relative flex justify-evenly flex-wrap gap-y-2 bg-[#9A0016] text-white py-6 md:w-10/12 w-full mx-auto z-50">
        <div className="flex items-start gap-x-2 mx-auto xl:text-sm">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="text-white mt-1 lg:text-lg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            ></path>
          </svg>
          <div>
            <p className="font-['Lexend'] font-medium lg:text-xl text-sm mb-1">
              Give Us A Call
            </p>
            <a
              href="tel:+917021927602"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1.5 font-normal transition-colors"
            >
              <p className="lg:text-[15px] text-xs text-[#ffffff]/90 font-['Open_Sans']">
                +917021927602
              </p>
            </a>
          </div>
        </div>

        <div className="flex items-start gap-x-2 mx-auto xl:text-sm">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-white lg:mt-1 mt-[2px] lg:text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"></path>
          </svg>
          <div>
            <p className="font-['Lexend'] font-medium lg:text-xl text-sm mb-1">
              Send Us A Message
            </p>
            <a
              href="mailto:theblissevents1985@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1.5 font-normal transition-colors lowercase"
            >
              <p className="lg:text-[15px] text-xs text-[#ffffff]/90 font-['Open_Sans']">
                theblissevents1985@gmail.IN
              </p>
            </a>
          </div>
        </div>

        <div className="flex items-start gap-x-2 mx-auto xl:text-sm">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-white mt-1 lg:text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="256" cy="192" r="32"></circle>
            <path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
          </svg>
          <div>
            <p className="font-['Lexend'] font-medium lg:text-xl text-sm mb-1">
              Office Location
            </p>
            <a
              href="https://maps.app.goo.gl/PLT5THsvTzhEDXYj6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="lg:text-[15px] text-xs text-[#ffffff]/90 font-['Open_Sans']">
                Nagpur
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#B40101] text-white lg:pt-12 pt-10 -mt-12">
        <div className="max-w-[1600px] mx-auto w-11/12 md:w-10/12 lg:w-11/12 xl:w-10/12">
          <div className="md:grid md:grid-cols-1 md:justify-between gap-6 lg:grid-cols-6 flex flex-wrap justify-start items-start py-20">
            <div className="col-span-2">
              <div className="flex gap-x-4 mb-[22px] justify-center items-center md:justify-start !-mt-5">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-white">
                  <Image
                    src="/media/The_Bliss_Event_Logo.46b098e2ce3b40c8e9c235bf9916a764.svg"
                    alt="the-bliss-event-logo"
                    width={44}
                    height={44}
                  />
                </div>
                <Image
                  src="/media/The_Bliss_Event_Text_Logo.9002c106286abbf51648df952acab11c.svg"
                  alt="the bliss events logo"
                  className="xl:w-9/12 lg:w-8/12 w-8/12"
                  width={200}
                  height={50}
                />
              </div>

              <div>
                <h4 className="text-sm text-[#ffffff]/90 font-['Open_Sans']">
                  At The Bliss Events our strength lies in our belief in the
                  need to incorporate the creative impulse in your events and
                  give them an ever-lasting effect.
                </h4>
              </div>

              <div>
                <p className="flex items-center gap-x-4 mt-5">
                  <a
                    href="https://www.facebook.com/theblisseventsofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-[12px] rounded-full"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      className="text-[#B40101] transition-all duration-300 ease-linear hover:scale-150"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UC3XPvmZv64S_7BeJAtLZeuA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-[12px] rounded-full"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="text-[#B40101] transition-all duration-300 ease-linear hover:scale-150"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/blisseventsofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-[12px] rounded-full"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[#B40101] transition-all duration-300 ease-linear hover:scale-150"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://www.pinterest.jp/theblissevents1985/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-[12px] rounded-full"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[#B40101] transition-all duration-300 ease-linear hover:scale-150"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://medium.com/@theblissevents1985"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-[12px] rounded-full"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-[#B40101] transition-all duration-300 ease-linear hover:scale-150"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"></path>
                    </svg>
                  </a>
                </p>
              </div>
            </div>

            <div className="col-span-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-start md:justify-between gap-4">
              <ul className="w-full mx-auto">
                <p className="block antialiased text-inherit mb-2 font-medium font-['Lexend'] xl:text-2xl lg:text-lg text-base self-start">
                  Service Links
                  <span className="relative w-8/12">
                    <span className="h-[2px] bg-white opacity-50"></span>
                    <span className="h-[2px] bg-white w-1/2 absolute top-0"></span>
                  </span>
                </p>
                <div className="w-10 h-[2px] bg-white mb-5"></div>
                <li>
                  <Link
                    className="py-1.5 text-[#ffffff]/90 font-['Open_Sans'] font-normal transition-colors md:text-sm text-xs flex gap-x-1 items-center relative"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1.5 text-[#ffffff]/90 font-['Open_Sans'] font-normal transition-colors md:text-sm text-xs flex gap-x-1 items-center relative"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1.5 text-[#ffffff]/90 font-['Open_Sans'] font-normal transition-colors md:text-sm text-xs flex gap-x-1 items-center relative"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1.5 text-[#ffffff]/90 font-['Open_Sans'] font-normal transition-colors md:text-sm text-xs flex gap-x-1 items-center relative"
                    href="/testimonial"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1.5 text-[#ffffff]/90 font-['Open_Sans'] font-normal transition-colors md:text-sm text-xs flex gap-x-1 items-center relative"
                    href="/team"
                  >
                    Our Team
                  </Link>
                </li>
              </ul>

              <ul className="w-full mx-auto">
                <p className="block antialiased text-inherit mb-2 font-medium font-['Lexend'] xl:text-2xl lg:text-lg text-base self-start">
                  Important Links
                  <span className="relative w-8/12">
                    <span className="h-[2px] bg-white opacity-50"></span>
                    <span className="h-[2px] bg-white w-1/2 absolute top-0"></span>
                  </span>
                </p>
                <div className="w-10 h-[2px] bg-white mb-5"></div>
                <li>
                  <Link
                    className="py-1.5 text-[#ffffff]/90 font-['Open_Sans'] font-normal transition-colors md:text-sm text-xs flex gap-x-1 items-center relative"
                    href="/"
                  >
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1.5 text-[#ffffff]/90 font-['Open_Sans'] font-normal transition-colors md:text-sm text-xs flex gap-x-1 items-center relative"
                    href="/contact-us"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1.5 text-[#ffffff]/90 font-['Open_Sans'] font-normal transition-colors md:text-sm text-xs flex gap-x-1 items-center relative"
                    href="/book-appointment"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1.5 text-[#ffffff]/90 font-['Open_Sans'] font-normal transition-colors md:text-sm text-xs flex gap-x-1 items-center relative"
                    href="/term-of-services"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1.5 text-[#ffffff]/90 font-['Open_Sans'] font-normal transition-colors md:text-sm text-xs flex gap-x-1 items-center relative"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>

              <ul className="col-span-2 md:col-span-1 mx-auto w-full">
                <p className="block antialiased text-inherit mb-2 font-medium font-['Lexend'] xl:text-2xl lg:text-lg text-base">
                  Work Hours
                  <span className="relative w-8/12">
                    <span className="h-[2px] bg-white opacity-50"></span>
                    <span className="h-[2px] bg-white w-1/2 absolute top-0"></span>
                  </span>
                </p>
                <div className="w-10 h-[2px] bg-white mb-5"></div>
                <li className="xl:text-base lg:text-sm flex items-start gap-x-2 mx-auto font-bold mt-[14px] font-['Open_Sans']">
                  8 AM - 5.PM, Monday - Saturday
                </li>
                <li className="flex items-start gap-x-2 mx-auto font-medium mt-5">
                  <a
                    href="tel:+917021927602"
                    rel="noopener noreferrer"
                    className="w-36 bg-white py-2 rounded-lg"
                  >
                    <p className="text-center font-extrabold text-lg text-[#B40101] font-['Open_Sans']">
                      Call Us Today
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:h-14 h-12 flex items-center justify-center text-[#ffffff]/90 font-['Open_Sans'] md:text-[15px] text-xs border-t border-white/90">
          <div className="lg:w-10/12 w-11/12 mx-auto flex md:justify-between flex-wrap text-[#ffffff]/90 font-['Open_Sans'] md:text-[15px] text-xs">
            <p>©2024 The Bliss Events. All Right Reserved.</p>
            <p>Designed &amp; Developed by GBJ Buzz Pvt. Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
