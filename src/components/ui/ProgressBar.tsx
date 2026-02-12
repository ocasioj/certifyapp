interface ProgressBarProps {
  percentage: number;
  color?: string;
  label: string;
  showPercentage?: boolean;
}

export default function ProgressBar({
  percentage,
  color = "#3b82f6",
  label,
  showPercentage = true,
}: ProgressBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-700 font-medium">{label}</span>
        {showPercentage && (
          <span className="text-slate-500 font-medium">{percentage}%</span>
        )}
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
