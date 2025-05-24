import { Calendar } from "lucide-react";
import type { RecentClimb } from "../../types/ProfilePage.types";

const RecentClimbs: React.FC<{ climbs: RecentClimb[] }> = ({ climbs }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-5 w-5 text-blue-500" />
        <h3 className="text-xl font-semibold text-slate-800">Recent Climbs</h3>
      </div>
      <div className="space-y-3">
        {climbs.map((climb) => (
          <div
            key={climb.id}
            className="bg-white border border-slate-200/60 rounded-lg p-4 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
                    climb.completed ? "bg-green-500" : "bg-orange-500"
                  }`}
                >
                  {climb.grade}
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">{climb.name}</h4>
                  <p className="text-sm text-slate-500">{climb.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-700">
                  {formatDate(climb.date)}
                </p>
                <p className="text-xs text-slate-500">
                  {climb.attempts} attempt{climb.attempts !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  climb.completed ? "bg-green-500" : "bg-orange-500"
                }`}
              ></div>
              <span
                className={`text-xs font-medium ${
                  climb.completed ? "text-green-700" : "text-orange-700"
                }`}
              >
                {climb.completed ? "Completed" : "In Progress"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentClimbs;
