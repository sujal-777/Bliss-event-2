import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  const packages = [
    {
      name: "Silver Package",
      price: "₹1,50,000",
      description: "Perfect for couples who have most of their planning done and need help with final coordination.",
      features: [
        "Day-of coordination",
        "Venue decoration",
        "Photography (8 hours)",
        "DJ services",
        "Bridal makeup",
        "Wedding day timeline",
        "Vendor coordination on wedding day",
        "Ceremony rehearsal coordination",
      ],
      highlighted: false,
    },
    {
      name: "Gold Package",
      price: "₹3,00,000",
      description: "Our most popular package, offering a balance of planning assistance and coordination.",
      features: [
        "All Silver Package services",
        "Partial planning (3 months before wedding)",
        "Videography",
        "Catering (100 guests)",
        "Wedding invitations",
        "Transportation for couple",
        "Vendor recommendations and booking assistance",
        "Budget management",
      ],
      highlighted: true,
    },
    {
      name: "Platinum Package",
      price: "₹5,00,000",
      description: "Comprehensive wedding planning from engagement to wedding day for a stress-free experience.",
      features: [
        "All Gold Package services",
        "Full wedding planning",
        "Catering (200 guests)",
        "Live music band",
        "Honeymoon planning assistance",
        "Guest accommodation coordination",
        "Custom wedding website",
        "Wedding favors and welcome bags",
      ],
      highlighted: false,
    },
  ]

  const additionalServices = [
    {
      name: "Pre-Wedding Events",
      description: "Planning and coordination for engagement party, sangeet, mehndi, or haldi ceremony.",
      price: "₹50,000 per event",
    },
    {
      name: "Destination Wedding Planning",
      description:
        "Comprehensive planning for weddings outside of Nagpur, including venue scouting and travel arrangements.",
      price: "Starting at ₹4,00,000",
    },
    {
      name: "Custom Decor Design",
      description: "Personalized decor design and execution beyond our standard packages.",
      price: "Based on requirements",
    },
    {
      name: "Guest Experience Management",
      description: "Welcome gifts, transportation, accommodation, and activities for out-of-town guests.",
      price: "₹1,000 per guest",
    },
    {
      name: "Wedding Website Development",
      description: "Custom wedding website with RSVP functionality, gift registry, and event details.",
      price: "₹25,000",
    },
    {
      name: "Bridal Styling Consultation",
      description: "Personal styling consultation for the bride, including outfit selection and accessories.",
      price: "₹20,000",
    },
  ]

  return (
    <>
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Our Pricing</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Transparent pricing packages designed to fit different budgets and wedding planning needs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-700 mb-2">Wedding Planning Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated wedding packages or let us create a custom package tailored to your
              specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  pkg.highlighted ? "border-2 border-red-700 transform scale-105 bg-white" : "bg-white"
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-red-700 text-white py-2 text-center font-semibold">Most Popular</div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-700 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="mb-6 space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.highlighted
                        ? "bg-red-700 hover:bg-red-800 text-white"
                        : "bg-pink-100 hover:bg-pink-200 text-red-700"
                    }`}
                  >
                    Select Package
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see a package that fits your needs? Contact us for a custom quote.
            </p>
            <Button variant="outline" className="border-red-700 text-red-700 hover:bg-red-50">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-700 mb-2">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your wedding experience with our additional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-700 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="font-semibold text-gray-800">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-pink-50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-red-700 mb-4">Payment Terms</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>50% booking deposit to secure your date</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>25% due three months before the wedding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Remaining 25% due two weeks before the wedding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>We accept bank transfers, credit cards, and UPI payments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Customized payment plans available upon request</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-red-700 mb-4">Cancellation Policy</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Booking deposit is non-refundable</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Cancellation more than 6 months before: 50% refund of payments made beyond deposit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Cancellation 3-6 months before: 25% refund of payments made beyond deposit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Cancellation less than 3 months before: No refund</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Date changes subject to availability and may incur additional fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Wedding Package?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and discuss the perfect package for your special day.
          </p>
          <Button className="bg-white text-red-700 hover:bg-pink-100">Book a Consultation</Button>
        </div>
      </section>
    </>
  )
}

