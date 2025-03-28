import Image from "next/image";
import WeddingContactSection from "@/components/services/WeddingContactSection";

export default function ServicePage() {
  const services = [
    {
      title: "Reception",
      description:
        "Explore breathtaking global venues, ideal for your dream wedding. Discover stunning locales worldwide, ensuring the perfect backdrop for your celebration.",
      imgSrc: "/service-1.svg",
      link: "/service/reception",
    },
    {
      title: "Photography",
      description:
        "Explore our featured weddings, each a unique and love-filled journey. Dive into unforgettable moments captured in these special celebrations.",
      imgSrc: "/service-2.webp",
      link: "/service/photography",
    },
    {
      title: "Haldi",
      description:
        "Celebrate love in our Anniversary Program, showcasing unique stories filled with joy, beauty, and special moments. Join the celebration!",
      imgSrc: "/service-3.svg",
      link: "/service/haldi",
    },
    {
      title: "Decoration",
      description:
        "Discover our featured wedding decorations—each unique, filled with love. Immerse yourself in the beauty and special moments of these celebrations.",
      imgSrc: "/service-4.svg",
      link: "/service/decoration",
    },
    {
      title: "Makeup",
      description:
        "Explore our featured weddings, each a unique love story. Immerse yourself in the joy, beauty, and special moments of each celebration.",
      imgSrc: "/service-5.svg",
      link: "/service/bridal-makeup",
    },
    {
      title: "Caterers",
      description:
        "Discover our featured pre-wedding receptions, uniquely crafted love stories filled with joy, beauty, and memorable moments. Dive in and enjoy!",
      imgSrc: "/service-6.svg",
      link: "/service/caterers",
    },
  ];

  return (
    <div>
      <div className="w-full bg-pink-50 py-16 relative overflow-hidden">
        <div className="container mx-auto relative z-10 flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-center text-[#8B0000] font-serif">
            Services
          </h1>
        </div>
        <br />
        <div className="flex justify-center font-bold text-center text-xl">
          <h2>"Crafting stunning websites that drive results."</h2>
        </div>

        {/* Left leaf decoration */}
        <div className="absolute left-4 md:left-40 top-1/2 -translate-y-1/2 opacity-70">
          <Image
            src="/leaf1.svg"
            width={80}
            height={120}
            alt="Decorative leaf"
            className="transform -rotate-12"
          />
        </div>

        {/* Right leaf decoration */}
        <div className="absolute right-4 md:right-40 top-1/2 -translate-y-1/2 opacity-70">
          <Image
            src="/leaf1.svg"
            width={80}
            height={120}
            alt="Decorative leaf"
            className="transform rotate-12"
          />
        </div>

        {/* Additional subtle decorative elements */}
        <div className="absolute left-1/4 bottom-8 opacity-30">
          <Image
            src="/shape-7.png.png"
            width={40}
            height={60}
            alt=""
            className="transform rotate-45"
          />
        </div>
        <div className="absolute right-1/4 bottom-8 opacity-30">
          <Image
            src="/shape-7.png.png"
            width={40}
            height={60}
            alt=""
            className="transform -rotate-45"
          />
        </div>
      </div>
      <section className="py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-6 pr-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#B40101] flex-col flex justify-between rounded-xl py-3 gap-y-4 group w-10/12 md:w-auto max-w-[18rem] transition-all duration-1000 ease-linear items-start px-5 relative h-52 mx-auto"
            >
              <p className="font-serif relative text-white transition-all duration-300 ease-linear self-center group-hover:self-start -translate-x-1 group-hover:translate-x-1">
                {service.title}
              </p>
              <p className="text-left line-clamp-6 text-xs w-8/12 opacity-0 group-hover:opacity-100 text-white">
                {service.description}
              </p>
              <div className="absolute top-1/2 -translate-y-[40%] left-1/2 -translate-x-1/2 group-hover:translate-x-10 sm:group-hover:translate-x-16 md:group-hover:translate-x-10 xl:group-hover:translate-x-16 transition-all duration-500 ease-linear group-hover:-translate-y-20">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  width={128}
                  height={128}
                  className="transition-all duration-1000 ease-linear w-32"
                />
              </div>
              <div className="opacity-0 group-hover:opacity-100">
                <a
                  className="bg-white text-[#B40101] text-xs rounded-md self-end justify-self-end px-2 py-1"
                  href={service.link}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WeddingContactSection />
    </div>
  );
}
