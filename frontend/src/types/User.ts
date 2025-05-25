export interface UserProfile {
  id: string;
  fullName: string;
  username: string;
  profilePictureUrl?: string;
  bio?: string;
  followersCount: number;
  followingCount: number;
}

export interface UserStats {
  totalClimbs: number;
  highestGradeClimbed: string;
  averageGrade: string;
  sessionsLogged: number;
}

export interface User extends UserProfile, UserStats {}
