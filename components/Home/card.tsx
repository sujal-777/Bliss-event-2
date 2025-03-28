import { Camera, FileText, Home, Luggage } from "lucide-react";

export default function WeddingServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-14 mb-8">
      {[
        { icon: Home, title: "MADE WITH LOVE", desc: "A beautiful destination where all your dreams for your special day will come true." },
        { icon: Luggage, title: "JUST TWO OF US", desc: "From engagement to the grand day, our expert planners make every step seamless." },
        { icon: Camera, title: "THE WEDDING BLISS", desc: "Capture every moment beautifully with our skilled professionals." },
        { icon: FileText, title: "DECORATION PLAN", desc: "To add a beautiful touch of your culture and taste of elegance." },
      ].map((service, index) => (
        <div
          key={index}
          className="rounded-lg border border-red-400 bg-red-50 p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-600"
        >
          {/* Icon Container */}
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 transition duration-300 group-hover:bg-white">
            <service.icon className="w-8 h-8 text-red-500 transition duration-300 group-hover:text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-red-600 mb-2 transition duration-300 group-hover:text-white">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 transition duration-300 group-hover:text-white">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
