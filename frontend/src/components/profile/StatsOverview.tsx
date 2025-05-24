import { TrendingUp, Mountain, Award, Clock } from "lucide-react";
import { ClimbingStats } from "../../types/ProfilePage.types";

const StatsOverview: React.FC<{ stats: ClimbingStats }> = ({ stats }) => {
  const statItems = [
    {
      icon: <Mountain className="h-6 w-6 text-blue-500" />,
      label: "Total Climbs",
      value: stats.totalClimbs,
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      label: "Unique Routes",
      value: stats.uniqueRoutes,
    },
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      label: "Favorite Grade",
      value: stats.favoriteGrade,
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      label: "Longest Session",
      value: stats.longestSession,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-sm">
            {item.icon}
          </div>
          <p className="text-2xl font-bold text-slate-800">{item.value}</p>
          <p className="text-sm text-slate-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
