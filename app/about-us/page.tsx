import { AboutBlissEvent } from "@/components/about-bliss/about-section"
import { AboutBlissEventAlt } from "@/components/about-bliss/about-section-alt"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Your other homepage sections */}

      {/* First About Bliss Event Section */}
      <AboutBlissEvent />

      {/* Second About Bliss Event Section (Alternative) */}
      <AboutBlissEventAlt />

      {/* Your other homepage sections */}
    </main>
  )
}

