import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import WeddingServiceCards from "@/components/Home/card"
import AboutBlissEvent from "./about-us/about-bliss-event"
import OurService from "@/components/Home/OurService"
import WeddingContactSection from "@/components/services/WeddingContactSection"
import WeddingPlanner from "@/components/Home/Dream-Wedding"; 
import WeddingForm from "@/app/Book-Appointment/page"
import TeamMembers  from "@/components/Home/Organizer"
import WeddingCategories from "@/components/Home/Categories"
export default function Home() {
  return (
    <>
      <section className="bg-pink-100 py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              WELCOME TO
              <br />
              <span className="text-red-800">THE BLISS EVENTS</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
              Creating lovely
              <br />
              <span className="text-indigo-800 font-semibold">Wedding stories</span>
            </h2>
            <p className="text-gray-700 mb-6 max-w-lg">
              Step into the mesmerizing realm of weddings where dreams come to life! Experience the ethereal beauty and
              magic that awaits in our enchanting world of celebrations. Join us on a journey through the magic we
              create.
            </p>
            <Button className="bg-red-700 hover:bg-red-800 text-white">Register Now</Button>
          </div>
          <div className="md:w-1/2 relative z-10">
            <div className="relative">
              <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-pink-200 -right-20 -top-20"></div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-[250px] h-[350px] overflow-hidden rounded-tl-full rounded-tr-full border-2 border-red-700">
                    <Image
                      src="/media/Herosection1.fdec4e269b98ac19e5586c1ba14ad9a5.svg"
                      alt="Wedding Couple"
                      width={250}
                      height={350}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="relative -ml-10 mt-16">
                  <div className="w-[250px] h-[350px] overflow-hidden rounded-tl-full rounded-tr-full border-2 border-red-700">
                    <Image
                      src="/media/Herosection2.c0bcda431ab148f1b41d32e3b06de82e.svg"
                      alt="Wedding Couple"
                      width={250}
                      height={350}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute -bottom-16 -right-16 w-64 h-64 bg-contain bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('/media/white-flower.ab2619234b351fccecd270b52fb503c7.svg')" }}
        ></div>
        <div
          className="absolute -top-16 -left-16 w-64 h-64 bg-contain bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('/floral-decoration.png')" }}
        ></div>
      </section>


      <WeddingServiceCards />

      <AboutBlissEvent/>

      <OurService />
      <br />
      <br />
      <WeddingContactSection />
      <WeddingPlanner />
  
      <TeamMembers/>

      < WeddingForm/>

      <WeddingCategories/>

      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-700 mb-2">Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What our happy couples say about us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya & Rahul",
                testimonial:
                  "The Bliss Events team made our wedding day absolutely perfect. They took care of every detail and we could just enjoy our special day.",
                image: "/media/client-1.a3adcc99552bca10cca69dc2a45080ef.svg",
              },
              {
                name: "Anita & Vikram",
                testimonial:
                  "We are so grateful for the amazing work done by The Bliss Events. Our wedding was exactly how we dreamed it would be.",
                image: "/media/client-2.41a6169055390a66cf1dde7f3de1d6ee.svg",
              },
              {
                name: "Meera & Aditya",
                testimonial:
                  "Professional, creative, and attentive to every detail. The Bliss Events exceeded our expectations in every way.",
                image: "/media/card-img-3.e97c968afa2ed04fd9ecba305ae0cc97.svg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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
                  <h3 className="text-lg font-bold text-red-700">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Dream Wedding?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and let us help you create the wedding of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-red-700 hover:bg-pink-100">Book Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-red-800">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

