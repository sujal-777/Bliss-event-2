'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const services = [
  {
    title: "Reception",
    description:
      "From intimate ceremonies to extravagant receptions, our experienced planners tailor every detail to your preferences",
    imgSrc: "/service-1.svg",
    link: "/service/reception",
  },
  {
    title: "Photography",
    description:
      "View our gallery showcasing breathtaking moments from our past weddings",
    imgSrc: "/service-2.webp",
    link: "/service/photography",
  },
  {
    title: "Haldi",
    description:
      "Dive into our featured weddings, each unique and filled with love",
    imgSrc: "/service-3.svg",
    link: "/service/haldi",
  },
];

export default function Ourservice() {
  const router = useRouter();

  return (
    <section className="py-12 px-4 text-center">
      <h1 className="text-3xl font-bold">Our Service</h1>
      <p className="text-red-700 text-4xl font-extrabold mt-2">We're Providing Best Services</p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#B40101] flex flex-row justify-between rounded-xl py-6 w-11/12 md:w-auto max-w-[22rem] transition-all duration-1000 ease-linear items-center px-6 relative h-64 mx-auto"
          >
            <div className="flex flex-col items-start w-7/12">
              <p className="font-serif text-white text-lg ">
                {service.title}
              </p>
              <p className="text-left text-sm text-white">
                {service.description}
              </p>
              <button
                className="bg-white text-[#B40101] text-sm rounded-md px-3 py-2 mt-4"
                onClick={() => router.push('/service')}
              >
                Read More
              </button>
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-5/12 flex justify-center"
            >
              <Image
                src={service.imgSrc}
                alt={service.title}
                width={140}
                height={140}
                className="w-36"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
