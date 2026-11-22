export type TimelineCategory =
  | "education"
  | "employment"
  | "research"
  | "project";

export type CareerTrack =
  | "software"
  | "data"
  | "intelligence"
  | "vision"
  | "systems"
  | "research"
  | "education"
  | "community";

export type EmploymentType =
  | "permanent"
  | "independent-consulting"
  | "fixed-term"
  | "unknown";

export interface DateRange {
  /** Inclusive starting month, formatted YYYY-MM. */
  start: string;
  /** Inclusive ending month, formatted YYYY-MM. */
  end?: string;
}

export interface TimelineEntry {
  id: string;
  category: TimelineCategory;
  title: string;
  organization: string;
  location: string;
  period: DateRange;
  tracks: CareerTrack[];
  description: string;
  highlights: string[];
  employmentType?: EmploymentType;
  verificationNote?: string;
}

export interface ProfileLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  shortName: string;
  headline: string;
  location: string;
  summary: string;
  domains: string[];
  email: string;
  links: ProfileLink[];
}

/* Project archive */

export type ProjectCategory =
  | "independent"
  | "professional-open-source"
  | "supporting";

export type ProjectStatus = "ongoing" | "published";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  problem: string;
  contribution: string[];
  technologies: string[];
  links: ProjectLink[];
  featured: boolean;
  context?: string;
}

export type SkillProficiency =
  | "expert"
  | "advanced"
  | "intermediate"
  | "novice";

export interface Skill {
  name: string;
  level: SkillProficiency;
  evidence: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface EngineeringAttribute {
  id: string;
  label: string;
  score: number;
  evidence: string;
}

export interface Achievement {
  id: string;
  metric: string;
  label: string;
  context: string;
}
