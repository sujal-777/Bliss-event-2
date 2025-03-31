import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function WeddingCategories() {
  const categories = [
    {
      img: "/Categories1.png",
      title: "Destination Wedding",
      desc: "Discover stunning locales and explore the ideas worldwide for your dream wedding.",
      link: "/destination-image", // Page route
    },
    {
      img: "/Categories2.png",
      title: "Royal Wedding",
      desc: "Experience grand elegance in breathtaking locations.",
      link: "/royal-wedding", // Page route
    },
    {
      img: "/Categories3.png",
      title: "Traditional Wedding",
      desc: "From intimate ceremonies to extravagant receptions, ensuring a flawless celebration.",
      link: "/traditional-wedding", // Page route
    },
  ];

  return (
    <div className="bg-pink-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif font-medium">Categories</h2>
        <p className="text-3xl text-red-600 font-semibold">
          See, What We Are Offering
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {categories.map((category, index) => (
          <div key={index} className="relative rounded-lg group">
            <div className="relative h-[400px]">
              <Image
                src={category.img}
                alt={category.title}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute bottom-0 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl translate-y-1/2">
              <div className="flex flex-col space-y-3">
                <h4 className="text-xl font-bold text-[#C00000]">{category.title}</h4>
                <p className="text-gray-600 text-sm">{category.desc}</p>
                <div className="flex justify-between items-center">
                  <Link href={category.link}>
                    <button className="bg-red-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-800 transition-all">
                      Read More
                    </button>
                  </Link>
                  <div className="text-[#C00000]">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
