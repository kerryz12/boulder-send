import React from "react";
import { Climb } from "../../types";
import Card from "../common/Card";
import Button from "../common/Button";
import {
  CheckCircle,
  XCircle,
  MapPin,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

interface RecentClimbsProps {
  climbs: Climb[];
}

const ClimbCard: React.FC<{ climb: Climb }> = ({ climb }) => (
  <div className="p-4 border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="font-semibold text-slate-800 text-lg">
          {climb.name || `${climb.type} - ${climb.grade}`}
        </h3>
        {climb.name && (
          <p className="text-sm text-slate-500">{`${climb.type} - ${climb.grade}`}</p>
        )}
      </div>
      <span
        className={`flex items-center px-2.5 py-1 text-xs font-medium rounded-full ${
          climb.sent
            ? "bg-green-100 text-green-700"
            : "bg-amber-100 text-amber-700"
        }`}
      >
        {climb.sent ? (
          <CheckCircle size={14} className="mr-1" />
        ) : (
          <XCircle size={14} className="mr-1" />
        )}
        {climb.sent ? "Sent" : "Attempted"}
      </span>
    </div>

    <div className="space-y-1 text-sm text-slate-600">
      {climb.location && (
        <div className="flex items-center">
          <MapPin size={14} className="mr-1.5 text-slate-400" />{" "}
          {climb.location}
        </div>
      )}
      <div className="flex items-center">
        <CalendarDays size={14} className="mr-1.5 text-slate-400" />{" "}
        {new Date(climb.date).toLocaleDateString()}
      </div>
    </div>

    {climb.notes && (
      <p className="text-sm text-slate-500 mt-3 italic bg-slate-50 p-2 rounded">
        "{climb.notes}"
      </p>
    )}
  </div>
);

const RecentClimbs: React.FC<RecentClimbsProps> = ({ climbs }) => {
  if (!climbs || climbs.length === 0) {
    return (
      <Card title="Recent Climbs">
        <p className="text-slate-500">
          No recent climbs logged yet. Go send something! 🧗‍♀️
        </p>
        <Button variant="secondary" className="mt-4">
          Log a New Climb
        </Button>
      </Card>
    );
  }
  return (
    <Card
      title="Recent Climbs"
      titleClassName="text-2xl font-bold text-slate-800 mb-6"
    >
      <div className="space-y-4">
        {climbs.slice(0, 3).map((climb) => (
          <ClimbCard key={climb.id} climb={climb} />
        ))}
      </div>
      {climbs.length > 3 && (
        <div className="mt-6 text-center">
          <Button variant="ghost" rightIcon={<ExternalLink size={16} />}>
            View All Climbs
          </Button>
        </div>
      )}
    </Card>
  );
};

export default RecentClimbs;
