import type { Project } from "../types/project";
import dashboard from "../assets/images/life_XP/dashboard-dark.png";
import achievements from "../assets/images/life_XP/achievements-dark.png";
import rewards from "../assets/images/life_XP/rewards-dark.png";
import calendar from "../assets/images/life_XP/calendar-dark.png";
import settings from "../assets/images/life_XP/settings-dark.png";
import lifeXPVideo from "../assets/videos/life_XP/brag_lifeXP.mp4";

export const projects: Project[] = [
  {
    id: 1,
    title: "LifeXP",
    tagline: "Level Up Your Everyday",
    problem:
      "Traditional task managers help organize work but often fail to motivate users to build lasting habits.",
    solution:
      "LifeXP combines productivity with gamification by introducing XP, levels, achievements, streaks, and a virtual reward system that encourages long-term consistency.",
    role: "Designed and developed the entire application, including UI/UX, frontend architecture, state management, and the complete gamification system.",
    description:
      "A productivity platform that rewards consistency through XP, streaks, achievements and meaningful progress, with a gamified approach that motivates users to build lasting habits.",
    stack: ["React", "TypeScript", "Tailwind", "Zustand", "Recharts", "PWA"],
    github: "#",
    live: "#",
    images: [dashboard, achievements, rewards, calendar, settings],
    video: lifeXPVideo,
  },
];
