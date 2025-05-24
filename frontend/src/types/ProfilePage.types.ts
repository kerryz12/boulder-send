export interface ClimbGrade {
  grade: string;
  count: number;
  color: string;
}

export interface RecentClimb {
  id: string;
  name: string;
  grade: string;
  location: string;
  date: string;
  attempts: number;
  completed: boolean;
}

export interface ClimbingStats {
  totalClimbs: number;
  uniqueRoutes: number;
  favoriteGrade: string;
  longestSession: string;
}
