import Image from "next/image";
import { Button } from "@/components/ui/button";
import WeddingContactSection from "@/components/services/WeddingContactSection";
import Footer from "@/components/footer";

export default function ServicePage() {
  const services = [
    {
      title: "Reception",
      description:
        "Explore breathtaking global venues, ideal for your dream wedding. Discover stunning locales worldwide, ensuring the perfect backdrop for your celebration.",
      imgSrc: "/static/media/weeding-entry.svg",
      link: "/service/reception",
    },
    {
      title: "Photography",
      description:
        "Explore our featured weddings, each a unique and love-filled journey. Dive into unforgettable moments captured in these special celebrations.",
      imgSrc: "/media/weeding.png",
      link: "/service/photography",
    },
    {
      title: "Haldi",
      description:
        "Celebrate love in our Anniversary Program, showcasing unique stories filled with joy, beauty, and special moments. Join the celebration!",
      imgSrc: "/static/media/haldi.svg",
      link: "/service/haldi",
    },
    {
      title: "Decoration",
      description:
        "Discover our featured wedding decorations—each unique, filled with love. Immerse yourself in the beauty and special moments of these celebrations.",
      imgSrc: "/static/media/decorated-stage.svg",
      link: "/service/decoration",
    },
    {
      title: "Makeup",
      description:
        "Explore our featured weddings, each a unique love story. Immerse yourself in the joy, beauty, and special moments of each celebration.",
      imgSrc: "/static/media/makeup-bride.svg",
      link: "/service/bridal-makeup",
    },
    {
      title: "Caterers",
      description:
        "Discover our featured pre-wedding receptions, uniquely crafted love stories filled with joy, beauty, and memorable moments. Dive in and enjoy!",
      imgSrc: "/static/media/food-table.svg",
      link: "/service/caterers",
    },
  ];

  return (
    <div>
      <section className="bg-pink-50 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-red-700 mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl italic max-w-2xl mx-auto">
          "Crafting stunning wedding experiences tailored to your dreams."
        </p>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group block bg-red-700 text-white rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative w-32 h-32 mb-4 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={service.imgSrc}
                    alt={service.title}
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <span className="mt-4 inline-block bg-white text-red-700 text-sm rounded-md px-3 py-1 transition-all duration-300 transform group-hover:translate-y-1">
                  Read More
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <WeddingContactSection />
      
    </div>
  );
}
