interface ProgressBarProps {
    label: string
    percentage: number
  }
  
  export function ProgressBar({ label, percentage }: ProgressBarProps) {
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-800 font-medium">{label}</span>
          <span className="text-gray-800 font-medium">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-red-700 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    )
  }
  
  