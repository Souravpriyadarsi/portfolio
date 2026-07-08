import type { SkillCategory } from "../types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description:
      "Building responsive interfaces with a focus on performance and usability.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "Backend",
    description:
      "Developing APIs and working with databases to support scalable applications.",
    skills: ["Node.js", "Express", "REST APIs", "SQL", "MongoDB"],
  },

  {
    title: "State & Data",
    description:
      "Managing application state and data flow with modern patterns.",
    skills: ["Zustand", "Redux Toolkit", "React Query"],
  },

  {
    title: "Design",
    description:
      "Designing interfaces that are clean, accessible and enjoyable to use.",
    skills: ["Figma", "Accessibility", "Responsive Design", "Motion"],
  },

  {
    title: "Workflow",
    description: "Tools that help me build, collaborate and ship efficiently.",
    skills: ["Git", "GitHub", "Vite", "VS Code"],
  },
];
