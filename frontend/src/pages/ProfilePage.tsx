import React, { useState, useEffect } from "react";

import type {
  RecentClimb,
  ClimbGrade,
  ClimbingStats,
} from "../types/ProfilePage.types";

import {
  AddClimbButton,
  GradeDistribution,
  RecentClimbs,
  StatsOverview,
  Navbar,
} from "../components";

// Mock data - replace with API calls
const mockGradeData: ClimbGrade[] = [
  { grade: "V0", count: 15, color: "bg-green-400" },
  { grade: "V1", count: 12, color: "bg-green-500" },
  { grade: "V2", count: 8, color: "bg-yellow-400" },
  { grade: "V3", count: 6, color: "bg-yellow-500" },
  { grade: "V4", count: 4, color: "bg-orange-400" },
  { grade: "V5", count: 2, color: "bg-orange-500" },
  { grade: "V6", count: 1, color: "bg-red-400" },
];

const mockRecentClimbs: RecentClimb[] = [
  {
    id: "1",
    name: "Crimpy Traverse",
    grade: "V4",
    location: "The Spot Gym",
    date: "2024-05-23",
    attempts: 3,
    completed: true,
  },
  {
    id: "2",
    name: "Overhang Monster",
    grade: "V5",
    location: "Movement Climbing",
    date: "2024-05-22",
    attempts: 7,
    completed: false,
  },
  {
    id: "3",
    name: "Slab Master",
    grade: "V3",
    location: "Earth Treks",
    date: "2024-05-21",
    attempts: 2,
    completed: true,
  },
  {
    id: "4",
    name: "Pinch Problem",
    grade: "V4",
    location: "The Spot Gym",
    date: "2024-05-20",
    attempts: 5,
    completed: true,
  },
];

const mockStats: ClimbingStats = {
  totalClimbs: 48,
  uniqueRoutes: 35,
  favoriteGrade: "V2",
  longestSession: "3h 45m",
};

const ProfilePage: React.FC = () => {
  const [gradeData, setGradeData] = useState<ClimbGrade[]>([]);
  const [recentClimbs, setRecentClimbs] = useState<RecentClimb[]>([]);
  const [stats, setStats] = useState<ClimbingStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate API calls
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setGradeData(mockGradeData);
      setRecentClimbs(mockRecentClimbs);
      setStats(mockStats);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleAddClimb = () => {
    alert("Add climb functionality would be implemented here!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-24 bg-slate-200 rounded-xl"></div>
              ))}
            </div>
            <div className="h-64 bg-slate-200 rounded-xl mb-8"></div>
            <div className="h-96 bg-slate-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              Welcome back, Kerry!
            </h1>
            <p className="text-lg text-slate-600">
              Track your progress and celebrate your achievements.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <AddClimbButton onClick={handleAddClimb} />
          </div>
        </div>

        {stats && <StatsOverview stats={stats} />}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GradeDistribution grades={gradeData} />
          </div>

          <div className="lg:col-span-1">
            <RecentClimbs climbs={recentClimbs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
