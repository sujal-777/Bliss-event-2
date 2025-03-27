import { AboutBlissEvent } from "@/components/about-bliss/about-section";
import { AboutBlissEventAlt } from "@/components/about-bliss/about-section-alt";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <div className="w-full bg-pink-50 py-16 relative overflow-hidden">
        <div className="container mx-auto relative z-10 flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-center text-[#8B0000] font-serif">
            About Us
          </h1>
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
            src="/leaf2.svg"
            width={40}
            height={60}
            alt=""
            className="transform rotate-45"
          />
        </div>
        <div className="absolute right-1/4 bottom-8 opacity-30">
          <Image
            src="/leaf2.svg"
            width={40}
            height={60}
            alt=""
            className="transform -rotate-45"
          />
        </div>
      </div>
      <main className="min-h-screen">
        {/* Your other homepage sections */}

        {/* First About Bliss Event Section */}
        <AboutBlissEvent />

        {/* Second About Bliss Event Section (Alternative) */}
        <AboutBlissEventAlt />

        {/* Completed Projects Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-2">
              Our Completed Projects
            </h2>
            <h3 className="text-4xl font-bold text-[#C00000]">
              Our Innovative Wedding Service Project Solutions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
            {/* Project Card 1 */}
            <div className="relative rounded-lg group">
              <div className="relative h-[400px]">
                <Image
                  src="/about-completed-sec-1.webp"
                  alt="Decoration plan"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Card that extends beyond image */}
              <div className="absolute bottom-0 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl translate-y-1/2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold text-[#C00000]">
                      Decoration Plan
                    </h4>
                    <p className="text-gray-600 text-sm">Elit at donec</p>
                  </div>
                  <div className="text-[#C00000]">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="relative rounded-lg group">
              <div className="relative h-[400px]">
                <Image
                  src="/about-completed-sec-2.webp"
                  alt="Wedding Bliss"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl translate-y-1/2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold text-[#C00000]">
                      Wedding Bliss
                    </h4>
                    <p className="text-gray-600 text-sm">Elit at donec</p>
                  </div>
                  <div className="text-[#C00000]">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="relative rounded-lg group">
              <div className="relative h-[400px]">
                <Image
                  src="/about-completed-sec-3.webp"
                  alt="Just Two Of US"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl translate-y-1/2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold text-[#C00000]">
                      Just Two Of Us
                    </h4>
                    <p className="text-gray-600 text-sm">Elit at donec</p>
                  </div>
                  <div className="text-[#C00000]">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.495749723007!2d79.06738857497851!3d21.132660484202294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c12b84ed7323%3A0xdf3341a583a98cba!2sThe%20Bliss%20Events%20-%20Wedding%20Planner%20%26%20Event%20Management%20Nagpur!5e0!3m2!1sen!2sin!4v1743107226194!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

        {/* Your other homepage sections */}
      </main>
    </div>
  );
}
