export enum ClimbType {
  BOULDER = "Boulder",
  SPORT = "Sport",
  TRAD = "Trad",
}

export interface Climb {
  id: string;
  name?: string;
  grade: string;
  type: ClimbType;
  location?: string;
  date: string;
  attempts?: number;
  sent: boolean;
  notes?: string;
  imageUrl?: string;
}

export interface GradeDistribution {
  [grade: string]: number;
}
