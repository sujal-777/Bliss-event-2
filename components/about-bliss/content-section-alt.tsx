import { ProgressBar } from "./progress-bar"
import Link from "next/link"

export function ContentSectionAlt() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold text-red-700">About The Bliss Event</h2>

      <h3 className="text-2xl md:text-3xl font-bold text-navy-800">
        We Inspire You To Bring Your Wedding In Real Life
      </h3>

      {/* Progress bars section */}
      <div className="space-y-6 pt-4">
        <ProgressBar label="Accessories" percentage={93} />

        <ProgressBar label="Hair Style" percentage={94} />

        <ProgressBar label="Perfect Dress" percentage={98} />
      </div>

      <div className="flex justify-end">
        <Link href="#" className="text-gray-700 font-medium text-lg hover:text-red-700 transition-colors">
          Read More...
        </Link>
      </div>
    </div>
  )
}

