import type { Project } from "../types/project";

import lifeXPDashboardDark from "../assets/images/life_XP/dashboard-dark.webp";
import lifeXPDashboardLight from "../assets/images/life_XP/dashboard-light.webp";
import lifeXPAchievementsDark from "../assets/images/life_XP/achievements-dark.webp";
import lifeXPAchievementsLight from "../assets/images/life_XP/achievements-light.webp";
import lifeXPRewardsDark from "../assets/images/life_XP/rewards-dark.webp";
import lifeXPRewardsLight from "../assets/images/life_XP/rewards-light.webp";
import lifeXPCalendarDark from "../assets/images/life_XP/calendar-dark.webp";
import lifeXPCalendarLight from "../assets/images/life_XP/calendar-light.webp";
import lifeXPSettingsDark from "../assets/images/life_XP/settings-dark.webp";
import lifeXPSettingsLight from "../assets/images/life_XP/settings-light.webp";
import lifeXPVideo from "../assets/videos/life_XP/brag_lifeXP.mp4";

import expenseDashboardDark from "../assets/images/expense_tracker/framed-01-dashboard-dark.webp";
import expenseDashboardLight from "../assets/images/expense_tracker/framed-02-dashboard-light.webp";
import expenseReportsDark from "../assets/images/expense_tracker/framed-03-reports-dark.webp";
import expenseReportsLight from "../assets/images/expense_tracker/framed-04-reports-investments-light.webp";
import expenseAddEntryDark from "../assets/images/expense_tracker/framed-05-add-entry-dark.webp";
import expenseAddEntryLight from "../assets/images/expense_tracker/framed-06-add-entry-light.webp";
import expenseVideo from "../assets/videos/expense_tracker/brag_expense_tracker.mp4";

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
    highlights: [
      "XP & Level Progression",
      "Daily Streak Tracking",
      "Achievement System",
      "Reward Economy",
      "Responsive Progressive Web App",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Zustand", "Recharts", "PWA"],
    shots: [
      {
        label: "Dashboard",
        dark: lifeXPDashboardDark,
        light: lifeXPDashboardLight,
      },
      {
        label: "Achievements",
        dark: lifeXPAchievementsDark,
        light: lifeXPAchievementsLight,
      },
      {
        label: "Rewards",
        dark: lifeXPRewardsDark,
        light: lifeXPRewardsLight,
      },
      {
        label: "Calendar",
        dark: lifeXPCalendarDark,
        light: lifeXPCalendarLight,
      },
      {
        label: "Settings",
        dark: lifeXPSettingsDark,
        light: lifeXPSettingsLight,
      },
    ],
    video: lifeXPVideo,
    github: "https://github.com/Souravpriyadarsi/self-reward-app",
  },

  {
    id: 2,
    title: "Expense Manager",
    tagline: "Your Money, On Your Machine",
    description:
      "A lightweight desktop tracker for expenses, investments and income. Local-first by design: your data stays on your machine, with no account and no server.",
    highlights: [
      "Monthly Dashboard & Spending Breakdown",
      "6-Month Income, Expense & Investment Trends",
      "Rapid Entry for Expenses, Investments & Income",
      "Searchable Reports with Date Ranges",
      "JSON Backup Export & Import",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "Recharts",
      "Tauri",
      "Rust",
    ],
    shots: [
      {
        label: "Dashboard",
        dark: expenseDashboardDark,
        light: expenseDashboardLight,
      },
      {
        label: "Reports",
        dark: expenseReportsDark,
        light: expenseReportsLight,
      },
      {
        label: "Add Entry",
        dark: expenseAddEntryDark,
        light: expenseAddEntryLight,
      },
    ],
    video: expenseVideo,
    github: "https://github.com/Souravpriyadarsi/Expense-Manager",
  },
];
