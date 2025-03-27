import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const categories = [
    { id: "all", name: "All" },
    { id: "weddings", name: "Weddings" },
    { id: "decorations", name: "Decorations" },
    { id: "pre-wedding", name: "Pre-Wedding" },
    { id: "receptions", name: "Receptions" },
  ]

  const galleryImages = [
    { id: 1, category: "weddings", src: "/media/weddingImge6.f49503e498259a09991e440ed79f3569.svg", alt: "Wedding Ceremony" },
    { id: 2, category: "decorations", src: "/media/Wedding-aboutus-page.c3558b6706fb4fd7fde715946d7a92dc.svg", alt: "Wedding Decoration" },
    { id: 3, category: "pre-wedding", src: "/media/preWedShoot1.ecebd5a6146fe8b8b1e64bfa08a2ef64.svg", alt: "Pre-Wedding Shoot" },
    { id: 4, category: "receptions", src: "/media/weddind-image.ebb016d5ec4203528b35.jpg", alt: "Wedding Reception" },
    { id: 5, category: "weddings", src: "/media/weddingImge3.f1d66320850418e4c698382ce469d256.svg", alt: "Wedding Ceremony" },
    { id: 6, category: "decorations", src: "/media/preWedShoot2.16e9bb5bb63ea3ef3b598bdf2ef53068.svg", alt: "Wedding Decoration" },
    { id: 7, category: "pre-wedding", src: "/media/popular-blog.e352fca1778f492f1412.png", alt: "Pre-Wedding Shoot" },
    { id: 8, category: "receptions", src: "/media/weddingImge3.f1d66320850418e4c698382ce469d256.svg", alt: "Wedding Reception" },
    { id: 9, category: "weddings", src: "/media/weddingImge6.f49503e498259a09991e440ed79f3569.svg", alt: "Wedding Ceremony" },
    { id: 10, category: "decorations", src: "/media/traditional-wedding.4724c7a2ac265dfabd0838cb1f6c5019.svg", alt: "Wedding Decoration" },
    { id: 11, category: "pre-wedding", src: "/media/Wedding-aboutus-page3.b23784153801d8972816eacdad416e28.svg", alt: "Pre-Wedding Shoot" },
    { id: 12, category: "receptions", src: "/media/wedding-reception.ea7179a7329a3a9724eb.jpg", alt: "Wedding Reception" },
    { id: 13, category: "weddings", src: "/media/weddingImge5.ebcde45a67d18db475c7a940c8407b3b.svg", alt: "Wedding Ceremony" },
    { id: 14, category: "decorations", src: "/media/project-6.jpg.c55cd4907bb8ea25e6d26eb619f57d61.svg", alt: "Wedding Decoration" },
    { id: 15, category: "pre-wedding", src: "/media/Wedding-aboutus-page4.6ae981d026a485476118970b8b302d79.svg", alt: "Pre-Wedding Shoot" },
    { id: 16, category: "receptions", src: "/media/bridal-event.169d2187005f1d87e4c9.png", alt: "Wedding Reception" },
  ]

  return (
    <>
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Our Gallery</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Browse through our collection of beautiful wedding moments and celebrations we've had the privilege to
            create.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-pink-50">
                {categories.map((category) => (
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            {categories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages
                    .filter((image) => image.category === category.id)
                    .map((image) => (
                      <div
                        key={image.id}
                        className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          width={300}
                          height={300}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Want to see more of our work or discuss your wedding photography needs?
            </p>
            <Button className="bg-red-700 hover:bg-red-800 text-white">Contact Us</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-6">Our Photography Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            We offer comprehensive photography services to capture every moment of your special day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Wedding Shoots",
                description: "Capture your love story before the big day with our beautiful pre-wedding photoshoots.",
              },
              {
                title: "Wedding Day Coverage",
                description: "Comprehensive coverage of your wedding day, from preparations to the final farewell.",
              },
              {
                title: "Cinematic Videos",
                description: "Cinematic wedding films that tell your unique love story in a beautiful narrative.",
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
    </>
  )
}

