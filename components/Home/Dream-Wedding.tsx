"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Utensils, Clock, MapPin, FileText } from "lucide-react";

const images = [
  "/dream-wed-1.jpg",
  "/dream-wed-2.jpg",
  "/dream-wed-3.jpg",
];

export default function WeddingPlanner() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <p className="text-gray-700 text-xl">Call us today to make your</p>
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mt-2">
              Dream wedding comes true
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Discover the beauty of a dream realized, only with The Bliss Events
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="flex items-center gap-4">
              <FileText size={36} className="text-red-600" />
              <h3 className="text-gray-700 font-medium text-lg">
                Vendor & Contact Management
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <Utensils size={36} className="text-red-600" />
              <h3 className="text-gray-700 font-medium text-lg">
                Venue and Food Plans
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={36} className="text-red-600" />
              <h3 className="text-gray-700 font-medium text-lg">
                On-site management
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <Clock size={36} className="text-red-600" />
              <h3 className="text-gray-700 font-medium text-lg">
                Time Management
              </h3>
            </div>
          </div>
        </div>

        {/* Right Image with Animation */}
        <div className="rounded-3xl overflow-hidden shadow-xl relative">
          <Image
            src={images[currentImage]}
            alt="Wedding moment"
            width={700}
            height={700}
            className="w-full h-auto object-cover transition-opacity duration-1000"
            priority
          />
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b border-gray-200 mt-12"></div>
    </div>
  );
}
