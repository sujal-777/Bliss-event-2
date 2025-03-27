import { ImageCollage } from "./image-collage"
import { ContentSection } from "./content-section"

export function AboutBlissEvent() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image collage */}
          <ImageCollage />
          
          {/* Right side - Text content */}
          <ContentSection />
        </div>
      </div>
    </section>
  )
}

