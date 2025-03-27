import { StatCard } from "./stat-card"

export function ContentSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-5xl font-bold text-red-700">ABOUT BLISS EVENT</h2>

      <p className="text-gray-700">
        The Bliss Events embodies the art of transforming dreams into reality. With a dedicated team driven by
        innovation and an eye for detail, we transform visions into reality. Our journey is defined by a commitment to
        excellence, crafting bespoke experiences that capture the essence of every celebration.
      </p>

      <p className="text-gray-700">
        From elegant weddings to mesmerizing events, we infuse creativity and expertise into every facet, ensuring each
        occasion is a masterpiece. At The Bliss Events, we embrace diversity, infuse elegance, and curate moments that
        linger in the hearts of our clients and their guests long after the event concludes.
      </p>

      {/* Stats section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <StatCard icon={<HeartIcon />} value="150+" label="Families Happily Served" />

        <StatCard icon={<ExperienceIcon />} value="10+" label="Years of Experienced" />

        <StatCard icon={<ProjectIcon />} value="12K" label="Going projects" />
      </div>
    </div>
  )
}

function HeartIcon() {
  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="#8B0000" 
  stroke="#8B0000"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
</svg>

  )
}

function ExperienceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M20 12h2" />
      <path d="M2 12h2" />
    </svg>
  )
}

function ProjectIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m4.9 4.9 14.2 14.2" />
    </svg>
  )
}

