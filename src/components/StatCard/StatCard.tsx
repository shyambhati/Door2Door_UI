import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: string;
  isPositive?: boolean;
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  change,
  isPositive = true,
}: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex justify-between items-start">
      <div className="flex flex-col justify-between h-full">
        <h4 className="text-sm text-gray-400">{title}</h4>
        <p className="text-2xl font-semibold text-gray-800">{value}</p>
      </div>

      <div className="flex flex-col items-end gap-6">
        <Icon className="w-5 h-5 text-gray-500" />
        {change && (
          <div className="flex flex-col items-end">
            <span
              className={`text-sm font-medium ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}>
              {change}
            </span>
            <span className="text-xs text-gray-400">vs last week</span>
          </div>
        )}
      </div>
    </div>
  );
};
