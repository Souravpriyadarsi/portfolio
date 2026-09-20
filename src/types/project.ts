export interface Project {
  id: number;

  title: string;

  tagline: string;

  problem: string;

  solution: string;

  role: string;

  description: string;

  stack: string[];

  images: string[];

  video?: string;

  github?: string;

  live?: string;
}
