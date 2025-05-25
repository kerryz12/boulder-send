import React, { useState, useEffect } from "react";

import {
  UserProfile,
  StatsSummary,
  RecentClimbs,
  Achievements,
  Goals,
  GradeDistribution,
  PageWrapper,
} from "../components";

import {
  User,
  Climb,
  Achievement,
  Goal,
  GradeDistributionType,
  ClimbType,
  GoalStatus,
} from "../types";

// Mock Data - Replace with actual API calls
const mockUser: User = {
  id: "kerry",
  fullName: "Kerry Zhang",
  username: "kerry",
  profilePictureUrl: "https://via.placeholder.com/150/0EA5E9/FFFFFF?Text=AH",
  bio: "Aspiring boulderer",
  followersCount: 1050,
  followingCount: 88,
  totalClimbs: 156,
  highestGradeClimbed: "V3",
  averageGrade: "V3",
  sessionsLogged: 78,
};

const mockRecentClimbs: Climb[] = [
  {
    id: "climb1",
    name: "Midnight Lightning",
    grade: "V8",
    type: ClimbType.BOULDER,
    location: "Camp 4, Yosemite",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    sent: true,
    notes: "Felt strong today!",
  },
  {
    id: "climb2",
    grade: "V6",
    type: ClimbType.BOULDER,
    location: "The Buttermilks",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    sent: true,
  },
  {
    id: "climb3",
    name: "Crimpin' Ain't Easy",
    grade: "V7",
    type: ClimbType.BOULDER,
    location: "Local Gym",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    sent: false,
    attempts: 5,
  },
];

const mockAchievements: Achievement[] = [
  {
    id: "ach1",
    title: "First V5!",
    description: "Sent your first V5 graded boulder.",
    dateUnlocked: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    icon: "🎉",
  },
  {
    id: "ach2",
    title: "Century Climber",
    description: "Logged 100 climbs.",
    dateUnlocked: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    icon: "💯",
  },
  {
    id: "ach3",
    title: "Onsight King",
    description: "Onsighted a V4.",
    dateUnlocked: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    icon: "👑",
  },
];

const mockGoals: Goal[] = [
  {
    id: "goal1",
    title: "Send a V9",
    description: 'Projecting "The Orb" at the local crag.',
    targetGrade: "V9",
    status: GoalStatus.IN_PROGRESS,
    targetDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
  },
  { id: "goal2", title: "Climb Outdoors 5 Times", status: GoalStatus.PENDING },
];

const mockGradeDistribution: GradeDistributionType = {
  V0: 5,
  V1: 12,
  V2: 25,
  V3: 30,
  V4: 28,
  V5: 20,
  V6: 15,
  V7: 10,
  V8: 7,
  V9: 3,
  V10: 1,
};

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [recentClimbs, setRecentClimbs] = useState<Climb[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [gradeDistribution, setGradeDistribution] =
    useState<GradeDistributionType>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser(mockUser);
      setRecentClimbs(mockRecentClimbs);
      setAchievements(mockAchievements);
      setGoals(mockGoals);
      setGradeDistribution(mockGradeDistribution);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading || !user) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-blue"></div>
          <p className="ml-4 text-sky-blue-dark text-xl">Loading Profile...</p>
        </div>
      </PageWrapper>
    );
  }

  const {
    fullName,
    username,
    profilePictureUrl,
    bio,
    followersCount,
    followingCount,
    ...userStats
  } = user;
  const userProfileData = {
    fullName,
    username,
    profilePictureUrl,
    bio,
    followersCount,
    followingCount,
    id: user.id,
  };

  return (
    <PageWrapper>
      <div className="space-y-6">
        <UserProfile user={userProfileData} />

        <StatsSummary stats={userStats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <RecentClimbs climbs={recentClimbs} />
            <GradeDistribution distribution={gradeDistribution} />
          </div>
          <div className="space-y-6">
            <Achievements achievements={achievements} />
            <Goals goals={goals} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProfilePage;
