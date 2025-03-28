"use client";

import Image from "next/image";

export default function AboutBlissEvent() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image collage */}
          <div className="relative">
            <div className="relative w-full h-[500px] md:h-[550px]">
              {/* Main wedding couple image */}
              <div className="absolute right-0 top-[10%] w-[95%] h-[90%] z-20">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/About1.png"
                    alt="Wedding couple in traditional attire"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              {/* Bride getting ready image
              <div className="absolute left-0 bottom-[10%] w-[60%] h-[50%] z-10">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/About2.png"
                    alt="Bride getting ready"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div> */}

              {/* Decorative element */}
              <div className="absolute left-[15%] top-[15%] w-[20%] h-[20%] z-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/about-decrative.svg"
                    alt="Decorative element"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>

              {/* Experience badge
              <div className="absolute left-[50%] bottom-[20%] transform -translate-x-1/2 z-30 bg-white rounded-lg border-2 border-red-600 p-3 shadow-lg flex items-center gap-3">
                <div className="text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="8" width="18" height="12" rx="2" />
                    <path d="M7 8V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-red-600 text-xl">10+</div>
                  <div className="text-red-600 font-semibold text-sm">EXPERIENCES</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-red-700">ABOUT BLISS EVENT</h2>

            <p className="text-gray-700">
              The Bliss Events embodies the art of transforming dreams into reality. With a dedicated team driven by
              innovation and an eye for detail, we transform visions into reality. Our journey is defined by a
              commitment to excellence, crafting bespoke experiences that capture the essence of every celebration.
            </p>

            <p className="text-gray-700">
              From elegant weddings to mesmerizing events, we infuse creativity and expertise into every facet, ensuring
              each occasion is a masterpiece. At The Bliss Events, we embrace diversity, infuse elegance, and curate
              moments that linger in the hearts of our clients and their guests long after the event concludes.
            </p>

            {/* Stats section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {/* Stat 1 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center gap-3">
                <div className="text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-2xl">150+</div>
                  <div className="text-gray-600 text-sm">Families Happily Served</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center gap-3">
                <div className="text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M20 12h2" />
                    <path d="M2 12h2" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-2xl">10+</div>
                  <div className="text-gray-600 text-sm">Years of Experience</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center gap-3">
                <div className="text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m4.9 4.9 14.2 14.2" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-2xl">12K</div>
                  <div className="text-gray-600 text-sm">Ongoing projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
