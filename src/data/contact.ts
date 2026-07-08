import type { ContactData } from "../types/contact";

export const contact: ContactData = {
  title: "Ready to build something meaningful?",
  description:
    "I'm always interested in discussing new ideas, exciting products, and opportunities to create thoughtful digital experiences. If you have something in mind, I'd love to hear about it.",

  links: [
    {
      label: "Email",
      value: "your@email.com",
      href: "mailto:your@email.com",
    },
    {
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: "/resume.pdf",
    },
  ],
};
