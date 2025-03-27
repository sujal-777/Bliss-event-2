import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  const faqs = [
    {
      question: "How far in advance should I book your wedding planning services?",
      answer:
        "We recommend booking our services at least 6-12 months before your wedding date. For peak wedding season (October to February), we suggest booking even earlier, as our calendar fills up quickly. However, we also offer last-minute planning services if you're in a time crunch.",
    },
    {
      question: "What wedding planning packages do you offer?",
      answer:
        "We offer a range of packages to suit different needs and budgets. Our packages include Full Wedding Planning, Partial Planning, Month-of Coordination, and Destination Wedding Planning. We also offer customized packages tailored to your specific requirements. Please contact us for detailed information about each package.",
    },
    {
      question: "Do you handle destination weddings?",
      answer:
        "Yes, we specialize in destination weddings both within India and internationally. Our team has experience planning weddings in various locations and can help with all aspects of destination wedding planning, including venue selection, travel arrangements, and local vendor coordination.",
    },
    {
      question: "How much do your wedding planning services cost?",
      answer:
        "Our pricing varies depending on the package you choose, the complexity of your wedding, and the level of involvement required. Our packages start from ₹1,50,000 for basic coordination services. We provide detailed quotes after an initial consultation where we understand your specific needs and vision.",
    },
    {
      question: "Can you work within my budget?",
      answer:
        "We work with a wide range of budgets and can help you allocate your funds effectively to get the most value. During our initial consultation, we'll discuss your budget constraints and create a plan that aligns with your financial goals while still creating a beautiful wedding experience.",
    },
    {
      question: "Do you handle both Hindu and Western wedding ceremonies?",
      answer:
        "Yes, we have extensive experience planning various types of wedding ceremonies, including Hindu, Muslim, Christian, Sikh, and fusion weddings. Our team understands the cultural nuances and requirements of different wedding traditions and can ensure that all ceremonial aspects are handled with respect and authenticity.",
    },
    {
      question: "What services are included in your full wedding planning package?",
      answer:
        "Our full wedding planning package includes everything from concept development and budget management to vendor selection, venue scouting, invitation management, guest accommodation, decor planning, timeline creation, and day-of coordination. We essentially handle all aspects of your wedding planning process, allowing you to enjoy your engagement period stress-free.",
    },
    {
      question: "How many meetings will we have during the planning process?",
      answer:
        "The number of meetings depends on the package you choose and the complexity of your wedding. For full planning, we typically have an initial consultation, followed by regular meetings (in-person or virtual) every 4-6 weeks, with more frequent meetings as the wedding date approaches. We're also available via phone and email throughout the planning process.",
    },
    {
      question: "Do you provide decor and catering services?",
      answer:
        "While we don't directly provide decor items or catering services, we work with a network of trusted vendors who specialize in these areas. We help you select the right vendors, coordinate with them, and ensure that your decor and catering align with your vision and budget.",
    },
    {
      question: "What happens if you're unavailable on my wedding date?",
      answer:
        "We carefully manage our calendar to ensure we don't overbook. However, in the rare case of an emergency, we have a team of experienced planners who can step in. We ensure that any replacement planner is fully briefed on all details of your wedding and can execute the plan seamlessly.",
    },
  ]

  const categories = [
    { id: "planning", name: "Planning Process" },
    { id: "services", name: "Our Services" },
    { id: "pricing", name: "Pricing & Packages" },
    { id: "vendors", name: "Vendors & Suppliers" },
    { id: "day-of", name: "Wedding Day" },
  ]

  return (
    <>
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our wedding planning services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <h2 className="text-xl font-bold text-red-700 mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <a
                        href={`#${category.id}`}
                        className="block px-4 py-2 rounded-md hover:bg-pink-50 text-gray-700 hover:text-red-700"
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-pink-50 rounded-lg">
                  <h3 className="text-lg font-bold text-red-700 mb-3">Still Have Questions?</h3>
                  <p className="text-gray-600 mb-4">
                    Can't find the answer you're looking for? Feel free to contact us directly.
                  </p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Contact Us</Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-pink-50 hover:no-underline">
                      <span className="text-left font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-6">Wedding Planning Guide</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Check out our wedding planning resources to help you navigate the wedding planning process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Planning Timeline",
                description: "A month-by-month guide to help you stay on track with your wedding planning.",
              },
              {
                title: "Budgeting Tips",
                description: "Learn how to create and stick to a wedding budget that works for you.",
              },
              {
                title: "Vendor Checklist",
                description: "A comprehensive list of vendors you might need for your wedding day.",
              },
            ].map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-700 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button variant="outline" className="border-red-700 text-red-700 hover:bg-red-50">
                  Download Guide
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Planning Your Dream Wedding?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and let us help you create the wedding of your dreams.
          </p>
          <Button className="bg-white text-red-700 hover:bg-pink-100">Book a Consultation</Button>
        </div>
      </section>
    </>
  )
}

