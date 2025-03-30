import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function WeddingCategories() {
  return (
    <div className="bg-pink-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif font-medium">Categories</h2>
        <p className="text-3xl text-red-600 font-semibold">
          See, What We Are Offering
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Destination Wedding */}
        <div className="relative rounded-lg group">
          <div className="relative h-[400px]">
            <Image
              src="/Categories1.png"
              alt="Destination Wedding"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl translate-y-1/2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-xl font-bold text-[#C00000]">
                  Destination Wedding
                </h4>
                <p className="text-gray-600 text-sm">
                  Discover stunning locales and explore the ideas worldwide for your dream wedding.
                </p>
              </div>
              <div className="text-[#C00000]">
                <ChevronRight size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Royal Wedding */}
        <div className="relative rounded-lg group">
          <div className="relative h-[400px]">
            <Image
              src="/Categories2.png"
              alt="Royal Wedding"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl translate-y-1/2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-xl font-bold text-[#C00000]">Royal Wedding</h4>
                <p className="text-gray-600 text-sm">
                  Experience grand elegance in breathtaking locations.
                </p>
              </div>
              <div className="text-[#C00000]">
                <ChevronRight size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Wedding */}
        <div className="relative rounded-lg group">
          <div className="relative h-[400px]">
            <Image
              src="/Categories3.png"
              alt="Traditional Wedding"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl translate-y-1/2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-xl font-bold text-[#C00000]">Traditional Wedding</h4>
                <p className="text-gray-600 text-sm">
                  From intimate ceremonies to extravagant receptions, ensuring a flawless celebration.
                </p>
              </div>
              <div className="text-[#C00000]">
                <ChevronRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}