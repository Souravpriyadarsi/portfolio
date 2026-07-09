import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ProjectGallery from "../ui/ProjectGallery";
import TechBadge from "../ui/TechBadge";
import Reveal from "../motion/Reveal";

import { projects } from "../../data/projects";

export default function CaseStudy() {
  const project = projects[0];

  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Projects" title={project.title} />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="case-study-tagline">{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="case-study-description">{project.description}</p>
        </Reveal>

        {/* New Overview */}
        <Reveal delay={0.3}>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
                Overview
              </p>

              <p className="max-w-2xl leading-8 text-white/70">
                LifeXP is a gamified productivity platform designed to make
                habit building enjoyable and sustainable. Instead of simply
                checking off tasks, users earn XP, build streaks, unlock
                achievements and redeem meaningful rewards—creating a system
                that encourages consistency through positive reinforcement.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
                Highlights
              </p>

              <ul className="space-y-3 text-white/70">
                <li>• XP & Level Progression</li>
                <li>• Daily Streak Tracking</li>
                <li>• Achievement System</li>
                <li>• Reward Economy</li>
                <li>• Responsive Progressive Web App</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </Reveal>

        <div className="mt-16">
          <Reveal delay={0.5}>
            <ProjectGallery images={project.images} title={project.title} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
