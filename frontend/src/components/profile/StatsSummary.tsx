import React from "react";
import { UserStats } from "../../types";
import Card from "../common/Card";
import { TrendingUp, BarChart2, Zap, Target } from "lucide-react";

interface StatsSummaryProps {
  stats: UserStats;
}

const StatItem: React.FC<{
  label: string;
  value: string | number;
  icon: React.ReactNode;
}> = ({ label, value, icon }) => (
  <div className="text-left p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
    <div className="flex items-center mb-1">
      <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-xl font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  </div>
);

const StatsSummary: React.FC<StatsSummaryProps> = ({ stats }) => {
  return (
    <Card
      title="Your Climbing Stats"
      titleClassName="text-2xl font-bold text-slate-800 mb-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatItem
          label="Total Climbs"
          value={stats.totalClimbs}
          icon={<BarChart2 className="h-5 w-5 text-blue-500" />}
        />
        <StatItem
          label="Highest Grade"
          value={stats.highestGradeClimbed}
          icon={<TrendingUp className="h-5 w-5 text-blue-500" />}
        />
        <StatItem
          label="Average Grade"
          value={stats.averageGrade}
          icon={<Target className="h-5 w-5 text-blue-500" />}
        />
        <StatItem
          label="Sessions Logged"
          value={stats.sessionsLogged}
          icon={<Zap className="h-5 w-5 text-blue-500" />}
        />
      </div>
    </Card>
  );
};

export default StatsSummary;
