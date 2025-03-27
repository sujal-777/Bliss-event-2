import ImageCollageAlt from "@/components/about-bliss/image-collage-alt"; // ✅ Correct import
import { ContentSectionAlt } from "./content-section-alt"

export function AboutBlissEventAlt() {
  return (
    <section className="w-full bg-pink-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image collage */}
          <ImageCollageAlt />

          {/* Right side - Text content */}
          <ContentSectionAlt />
        </div>
      </div>
    </section>
  )
}

