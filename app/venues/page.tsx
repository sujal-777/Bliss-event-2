import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Users, Calendar } from "lucide-react"

export default function VenuesPage() {
  const venueCategories = [
    { id: "all", name: "All Venues" },
    { id: "hotels", name: "Hotels" },
    { id: "banquets", name: "Banquet Halls" },
    { id: "resorts", name: "Resorts" },
    { id: "gardens", name: "Gardens" },
  ]

  const venues = [
    {
      id: 1,
      name: "The Grand Palace Hotel",
      category: "hotels",
      location: "Civil Lines, Nagpur",
      capacity: "Up to 1000 guests",
      rating: 5,
      description:
        "A luxurious 5-star hotel offering elegant ballrooms and outdoor spaces for weddings. Known for its impeccable service and world-class amenities.",
      image: "/venue-1.jpg",
      features: [
        "Multiple event spaces",
        "In-house catering",
        "Accommodation for guests",
        "Valet parking",
        "Bridal suite",
      ],
    },
    {
      id: 2,
      name: "Royal Banquet Hall",
      category: "banquets",
      location: "Dharampeth, Nagpur",
      capacity: "Up to 800 guests",
      rating: 4,
      description:
        "A spacious banquet hall with modern amenities and customizable decor options. Perfect for grand wedding celebrations.",
      image: "/venue-2.jpg",
      features: ["Customizable decor", "Sound system", "Ample parking", "Catering options", "Air-conditioned"],
    },
    {
      id: 3,
      name: "Emerald Resort & Spa",
      category: "resorts",
      location: "Amravati Road, Nagpur",
      capacity: "Up to 500 guests",
      rating: 5,
      description:
        "A beautiful resort with lush gardens and poolside venues. Ideal for destination weddings within the city.",
      image: "/venue-3.jpg",
      features: ["Multiple outdoor spaces", "Swimming pool", "Spa services", "Accommodation", "In-house catering"],
    },
    {
      id: 4,
      name: "Botanical Garden Venue",
      category: "gardens",
      location: "Seminary Hills, Nagpur",
      capacity: "Up to 300 guests",
      rating: 4,
      description:
        "A picturesque garden venue surrounded by nature. Perfect for daytime weddings and outdoor ceremonies.",
      image: "/venue-4.jpg",
      features: ["Natural setting", "Open-air venue", "Flexible layout", "Photo opportunities", "Tent options"],
    },
    {
      id: 5,
      name: "Heritage Palace Hotel",
      category: "hotels",
      location: "Ramdaspeth, Nagpur",
      capacity: "Up to 600 guests",
      rating: 5,
      description:
        "A heritage property with classic architecture and modern amenities. Offers a royal wedding experience.",
      image: "/venue-5.jpg",
      features: ["Heritage architecture", "Multiple halls", "Courtyard", "In-house catering", "Accommodation"],
    },
    {
      id: 6,
      name: "Celebration Banquet",
      category: "banquets",
      location: "Wardha Road, Nagpur",
      capacity: "Up to 1200 guests",
      rating: 4,
      description: "One of the largest banquet spaces in the city, suitable for very large wedding gatherings.",
      image: "/venue-6.jpg",
      features: ["Massive space", "Multiple halls", "Valet parking", "Catering options", "Modern amenities"],
    },
    {
      id: 7,
      name: "Riverside Resort",
      category: "resorts",
      location: "Kamptee Road, Nagpur",
      capacity: "Up to 400 guests",
      rating: 4,
      description: "A serene resort located by the riverside, offering a peaceful setting for intimate weddings.",
      image: "/venue-7.jpg",
      features: ["Riverside views", "Outdoor spaces", "Accommodation", "In-house catering", "Recreational activities"],
    },
    {
      id: 8,
      name: "Rose Garden Venue",
      category: "gardens",
      location: "Hingna Road, Nagpur",
      capacity: "Up to 250 guests",
      rating: 4,
      description: "A beautiful rose garden with dedicated event spaces. Ideal for romantic wedding ceremonies.",
      image: "/venue-8.jpg",
      features: ["Rose garden setting", "Gazebo", "Open-air venue", "Flexible layout", "Beautiful backdrop"],
    },
  ]

  return (
    <>
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Wedding Venues</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover the perfect venue for your dream wedding in and around Nagpur.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-pink-50">
                {venueCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2 data-[state=active]:bg-red-700 data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {venues.map((venue) => (
                  <div
                    key={venue.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="h-56 overflow-hidden">
                      <Image
                        src={venue.image || "/placeholder.svg"}
                        alt={venue.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-red-700">{venue.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < venue.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{venue.location}</span>
                      </div>
                      <div className="flex items-center text-gray-500 mb-3">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{venue.capacity}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-3">{venue.description}</p>
                      <Button className="w-full bg-red-700 hover:bg-red-800 text-white">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {venueCategories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {venues
                    .filter((venue) => venue.category === category.id)
                    .map((venue) => (
                      <div
                        key={venue.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="h-56 overflow-hidden">
                          <Image
                            src={venue.image || "/placeholder.svg"}
                            alt={venue.name}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-red-700">{venue.name}</h3>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < venue.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center text-gray-500 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{venue.location}</span>
                          </div>
                          <div className="flex items-center text-gray-500 mb-3">
                            <Users className="w-4 h-4 mr-1" />
                            <span className="text-sm">{venue.capacity}</span>
                          </div>
                          <p className="text-gray-600 mb-4 line-clamp-3">{venue.description}</p>
                          <Button className="w-full bg-red-700 hover:bg-red-800 text-white">View Details</Button>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-700 mb-2">Venue Selection Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let us help you find the perfect venue for your wedding. Our venue selection services include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Venue Scouting",
                description: "We'll research and shortlist venues based on your preferences, budget, and guest count.",
              },
              {
                title: "Site Visits",
                description: "We'll accompany you on venue visits to help you evaluate each option professionally.",
              },
              {
                title: "Negotiation",
                description: "We'll negotiate with venues to get you the best possible rates and inclusions.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-700 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="outline" className="border-red-700 text-red-700 hover:bg-red-50">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-pink-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-red-700 mb-4">Venue Booking Calendar</h2>
                <p className="text-gray-600 mb-6">
                  Planning your wedding date? Check our venue availability calendar to see which dates are available at
                  your preferred venues.
                </p>
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-red-700 mr-2" />
                  <span className="text-gray-700 font-medium">Popular wedding dates fill up quickly</span>
                </div>
                <p className="text-gray-600 mb-6">
                  We recommend booking your venue at least 9-12 months in advance, especially for peak wedding season
                  (October to February).
                </p>
                <Button className="bg-red-700 hover:bg-red-800 text-white">Check Availability</Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-700 mb-4">Request Venue Information</h3>
                <form className="space-y-4">
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
                  <div>
                    <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Venue *
                    </label>
                    <select
                      id="venue"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                      required
                    >
                      <option value="">Select a venue</option>
                      {venues.map((venue) => (
                        <option key={venue.id} value={venue.id}>
                          {venue.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Tentative Wedding Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                      required
                    />
                  </div>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Request Information</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Finding the Perfect Venue?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our venue selection experts can help you find and book the ideal location for your wedding.
          </p>
          <Button className="bg-white text-red-700 hover:bg-pink-100">Schedule a Consultation</Button>
        </div>
      </section>
    </>
  )
}

