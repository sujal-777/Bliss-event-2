import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "DAMINI KALEKAR",
      testimonial:
        "The Bliss Events made our day perfect! Their creativity, attention to detail, and professionalism exceeded expectations. Stress-free and enjoyable, highly recommend for a magical wedding experience.",
      image: "/testimonial-1.svg",
      rating: 5,
    },
    {
      name: "ARYA YADAV",
      testimonial:
        "Our heartfelt thanks to Is Bliss Events for an incredible wedding experience. Professionalism, creativity, and seamless execution. They made our day magical. Highly recommended for a perfect celebration.",
      image: "/testimonial-2.svg",
      rating: 5,
    },
    {
      name: "AHANA MALIK",
      testimonial:
        "Unforgettable! Bliss Events have surpassed all expectations, turning our vision into a magical reality. Professional, creative, and stress-free. Highly recommend for a perfect wedding day.",
      image: "testimonial-3.svg",
      rating: 5,
    },
    {
      name: "HARSH MUNDLE",
      testimonial:
        "Gratitude to Bliss Events for an exceptional wedding. Professionalism, creativity, and genuine care exceeded expectations. Our day was perfect, stress-free, and filled with beautiful memories. Highly recommended!",
      image: "/testimonial-4.svg",
      rating: 5,
    },
    {
      name: "AYUSH RAMTEKE",
      testimonial:
        "The Bliss Events orchestrated our dream wedding flawlessly. Their attention to detail and genuine care made our day stress-free and memorable. A top-notch team we highly recommend.",
      image: "/testimonial-5.svg",
      rating: 5,
    },
    {
      name: "SAIF SHAIKH",
      testimonial:
        "Heartfelt thanks to Is Bliss Events for a perfect wedding. Their attention to detail, creativity, and genuine care made our day unforgettable. Highly recommend for a seamless and joyous celebration.",
      image: "/testimonial-6.svg",
      rating: 4,
    },
  ];

  return (
    <>
      <div className="w-full bg-pink-50 py-16 relative overflow-hidden">
        <div className="container mx-auto relative z-10 flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-center text-[#8B0000] font-serif">
            Testimonials
          </h1>
        </div>
        <br />
        <div className="flex justify-center font-bold text-center text-xl">
          <h2>
            Read what our valued clients have to say about their journey with
            us.
          </h2>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-700">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
