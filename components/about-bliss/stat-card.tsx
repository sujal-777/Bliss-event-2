import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  value: string
  label: string
}

export function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center gap-3">
      <div className="text-red-600">{icon}</div>
      <div>
        <div className="font-bold text-gray-800 text-2xl">{value}</div>
        <div className="text-gray-600 text-sm">{label}</div>
      </div>
    </div>
  )
}

