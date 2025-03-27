import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Priya & Rahul",
      date: "June 2023",
      testimonial:
        "The Bliss Events team made our wedding day absolutely perfect. They took care of every detail and we could just enjoy our special day. The decorations were stunning and exactly what we had envisioned. We are so grateful for their hard work and dedication.",
      image: "/media/client-1.a3adcc99552bca10cca69dc2a45080ef.svg",
      rating: 5,
    },
    {
      name: "Anita & Vikram",
      date: "May 2023",
      testimonial:
        "We are so grateful for the amazing work done by The Bliss Events. Our wedding was exactly how we dreamed it would be. The team was professional, responsive, and went above and beyond to make our day special. We highly recommend their services to anyone planning a wedding.",
      image: "/media/client-2.41a6169055390a66cf1dde7f3de1d6ee.svg",
      rating: 5,
    },
    {
      name: "Meera & Aditya",
      date: "April 2023",
      testimonial:
        "Professional, creative, and attentive to every detail. The Bliss Events exceeded our expectations in every way. From the initial consultation to the wedding day, they were with us every step of the way. The decorations were breathtaking and our guests are still talking about how beautiful everything was.",
      image: "/media/client-3.0abaf51d73fd0634c6214c93dc2cb0af.svg",
      rating: 5,
    },
    {
      name: "Neha & Sanjay",
      date: "March 2023",
      testimonial:
        "Choosing The Bliss Events for our wedding was the best decision we made. They transformed our venue into a magical space and handled all the logistics flawlessly. We were able to relax and enjoy our wedding day knowing everything was in capable hands.",
      image: "/media/client-4.abfbd58ef18d65316c70ef2df1bd6698.svg",
      rating: 5,
    },
    {
      name: "Kavita & Rajesh",
      date: "February 2023",
      testimonial:
        "The Bliss Events team is simply amazing! They understood our vision perfectly and executed it beyond our expectations. Their attention to detail and creativity made our wedding truly unique. We received so many compliments from our guests about the beautiful decorations.",
      image: "/media/client-5.d91f44ec5e673e9398de7d47778207a5.svg",
      rating: 5,
    },
    {
      name: "Divya & Arjun",
      date: "January 2023",
      testimonial:
        "We had a wonderful experience working with The Bliss Events. They were professional, responsive, and truly cared about making our day special. The decorations were stunning and the coordination on the day was flawless. We highly recommend their services!",
      image: "/media/client-6.055d1b252db2fcd27eb88644adb03edb.svg",
      rating: 4,
    },
  ]

  return (
    <>
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Testimonials</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Read what our happy couples have to say about their experience with The Bliss Events.
          </p>
        </div>
      </section>

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
                    <h3 className="text-lg font-bold text-red-700">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.date}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-6">Share Your Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We value your feedback! If you've worked with us, we'd love to hear about your experience.
          </p>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                  Rating *
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="cursor-pointer">
                      <input type="radio" name="rating" value={rating} className="sr-only" />
                      <Star className="w-8 h-8 text-gray-300 hover:text-yellow-400 peer-checked:text-yellow-400" />
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Testimonial *
                </label>
                <textarea
                  id="testimonial"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                  required
                ></textarea>
              </div>

              <Button className="bg-red-700 hover:bg-red-800 text-white">Submit Testimonial</Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Wedding Story?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and let us help you create the wedding of your dreams.
          </p>
          <Button className="bg-white text-red-700 hover:bg-pink-100">Book a Consultation</Button>
        </div>
      </section>
    </>
  )
}

