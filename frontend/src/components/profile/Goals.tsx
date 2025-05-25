import React from "react";
import { Goal, GoalStatus } from "../../types";
import Card from "../common/Card";
import Button from "../common/Button";
import {
  PlusCircle,
  CheckCircle,
  ExternalLink,
  Target,
  Calendar,
  Info,
} from "lucide-react";

interface GoalsProps {
  goals: Goal[];
}

const GoalItem: React.FC<{ goal: Goal }> = ({ goal }) => {
  const statusStyles = {
    [GoalStatus.PENDING]: {
      bg: "bg-slate-100",
      text: "text-slate-600",
      icon: <Info size={14} className="mr-1 text-slate-500" />,
    },
    [GoalStatus.IN_PROGRESS]: {
      bg: "bg-amber-100",
      text: "text-amber-700",
      icon: <Target size={14} className="mr-1 text-amber-600" />,
    },
    [GoalStatus.COMPLETED]: {
      bg: "bg-green-100",
      text: "text-green-700",
      icon: <CheckCircle size={14} className="mr-1 text-green-600" />,
    },
  };
  const currentStatusStyle = statusStyles[goal.status];

  return (
    <div className="p-4 border border-slate-200 rounded-lg bg-white">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-slate-800 text-lg flex-grow pr-2">
          {goal.title}
        </h4>
        <span
          className={`flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${currentStatusStyle.bg} ${currentStatusStyle.text}`}
        >
          {currentStatusStyle.icon}
          {goal.status}
        </span>
      </div>
      {goal.description && (
        <p className="text-sm text-slate-600 mt-1 mb-2">{goal.description}</p>
      )}
      <div className="text-sm space-y-1">
        {goal.targetGrade && (
          <div className="flex items-center text-slate-500">
            <Target size={14} className="mr-1.5 text-blue-500" /> Target Grade:{" "}
            <strong className="ml-1 text-slate-700">{goal.targetGrade}</strong>
          </div>
        )}
        {goal.targetDate && (
          <div className="flex items-center text-slate-500">
            <Calendar size={14} className="mr-1.5 text-blue-500" /> Target Date:{" "}
            <span className="ml-1 text-slate-700">
              {new Date(goal.targetDate).toLocaleDateString()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const Goals: React.FC<GoalsProps> = ({ goals }) => {
  const displayedGoals = goals.slice(0, 2);

  return (
    <Card
      title="Your Goals"
      titleClassName="text-xl font-semibold text-slate-800 mb-5"
    >
      {(!goals || goals.length === 0) && (
        <p className="text-slate-500 mb-3">
          No goals set yet. What's your next challenge?
        </p>
      )}
      {displayedGoals.length > 0 && (
        <div className="space-y-3 mb-4">
          {displayedGoals.map((goal) => (
            <GoalItem key={goal.id} goal={goal} />
          ))}
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-2">
        <Button
          variant="secondary"
          size="sm"
          leftIcon={<PlusCircle size={16} />}
        >
          Set a New Goal
        </Button>
        {goals.length > 2 && (
          <Button
            variant="ghost"
            size="sm"
            rightIcon={<ExternalLink size={14} />}
          >
            View All Goals
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Goals;
