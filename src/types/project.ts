export interface ProjectShot {
  label: string;

  dark: string;

  light: string;
}

export interface Project {
  id: number;

  title: string;

  tagline: string;

  description: string;

  highlights: string[];

  stack: string[];

  shots: ProjectShot[];

  video?: string;

  problem?: string;

  solution?: string;

  role?: string;

  github?: string;

  live?: string;
}
