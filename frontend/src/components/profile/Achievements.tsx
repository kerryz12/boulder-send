import React from "react";
import { Achievement } from "../../types";
import Card from "../common/Card";
import { Award, CalendarClock, ExternalLink } from "lucide-react";
import Button from "../common/Button";

interface AchievementsProps {
  achievements: Achievement[];
}

const AchievementItem: React.FC<{ achievement: Achievement }> = ({
  achievement,
}) => (
  <div className="flex items-start space-x-4 p-4 bg-white border border-slate-200 rounded-lg">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
      {typeof achievement.icon === "string" && achievement.icon.length < 3 ? (
        <span className="text-2xl">{achievement.icon}</span>
      ) : (
        <Award className="h-6 w-6 text-blue-500" />
      )}
    </div>
    <div>
      <h4 className="font-semibold text-slate-800">{achievement.title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">
        {achievement.description}
      </p>
      <div className="text-xs text-slate-400 mt-1 flex items-center">
        <CalendarClock size={12} className="mr-1" />
        Unlocked: {new Date(achievement.dateUnlocked).toLocaleDateString()}
      </div>
    </div>
  </div>
);

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  if (!achievements || achievements.length === 0) {
    return (
      <Card title="Recent Achievements">
        <p className="text-slate-500">
          No achievements unlocked yet. Keep climbing!
        </p>
      </Card>
    );
  }
  return (
    <Card
      title="Recent Achievements"
      titleClassName="text-xl font-semibold text-slate-800 mb-5"
    >
      <div className="space-y-3">
        {achievements.slice(0, 3).map((ach) => (
          <AchievementItem key={ach.id} achievement={ach} />
        ))}
      </div>
      {achievements.length > 3 && (
        <div className="mt-4 text-center">
          <Button
            variant="ghost"
            size="sm"
            rightIcon={<ExternalLink size={14} />}
          >
            View All Achievements
          </Button>
        </div>
      )}
    </Card>
  );
};

export default Achievements;
