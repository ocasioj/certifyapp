export interface Provider {
  id: string;
  name: string;
  shortName: string;
  description: string;
  website: string;
  color: string;
  certificationCount: number;
  categories: string[];
}

export interface ExamInfo {
  code: string;
  numberOfQuestions: number;
  questionTypes: string[];
  duration: number;
  passingScore: number;
  maxScore: number;
  cost: number;
  currency: string;
  deliveryMethod: string;
  languages: string[];
  retakePolicy: string;
  validityPeriod: string;
}

export interface TrainingResource {
  name: string;
  provider: string;
  type: "Self-paced" | "Instructor-led" | "Hands-on lab" | "Video course" | "Practice exam";
  url: string;
  duration: string;
  free: boolean;
}

export interface ExamDomain {
  name: string;
  percentage: number;
}

export interface JobRole {
  title: string;
  averageSalary: string;
  demandLevel: "High" | "Medium" | "Moderate";
}

export interface Certification {
  id: string;
  providerId: string;
  name: string;
  shortName: string;
  slug: string;
  level: string;
  description: string;
  badges: string[];
  exam: ExamInfo;
  prerequisites: string[];
  recommendedTraining: TrainingResource[];
  examDomains: ExamDomain[];
  jobRoles: JobRole[];
  relatedCertifications: string[];
  lastUpdated: string;
}
