export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type CourseLevelLabel = "Principiante" | "Intermedio" | "Avanzado";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  level: CourseLevel;
  levelLabel: CourseLevelLabel;
}