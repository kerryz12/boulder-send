export enum GoalStatus {
  PENDING = "Pending",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
}

export interface Goal {
  id: string;
  title: string;
  description?: string;
  targetGrade?: string;
  targetDate?: string;
  status: GoalStatus;
}
