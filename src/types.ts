export interface Skill {
  id: string;
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'AI & Computer Vision' | 'Databases & Infrastructure';
  level: 'Expert' | 'Advanced' | 'Intermediate';
  icon?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  tags: string[];
  category: 'Full Stack' | 'APIs & Systems' | 'Mobile & FinTech';
  image?: string;
  isCodeSnippet?: boolean;
  codeSnippet?: string;
  linkText: string;
  linkType: 'case-study' | 'github' | 'app-store';
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  architecture?: string[];
  stats?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  date: string;
  duration?: string;
  description: string;
  details: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  badgeUrl?: string;
  skillsVerified: string[];
}

export interface Hackathon {
  id: string;
  title: string;
  event: string;
  organizer: string;
  date: string;
  description: string;
}
