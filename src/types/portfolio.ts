export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  tags: string[];
  technologies: string[];

  challenges?: string[];
  futureImprovements?: string[];

  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}