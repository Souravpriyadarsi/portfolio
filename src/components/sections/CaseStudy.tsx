import { useState, type KeyboardEvent } from "react";
import clsx from "clsx";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ProjectMedia from "../ui/ProjectMedia";
import TechBadge from "../ui/TechBadge";
import Reveal from "../motion/Reveal";

import { projects } from "../../data/projects";

export default function CaseStudy() {
  const [activeId, setActiveId] = useState(projects[0].id);

  const project = projects.find((p) => p.id === activeId) ?? projects[0];

  const links = [
    { label: "GitHub ↗", href: project.github },
    { label: "Live ↗", href: project.live },
  ].filter((link) => link.href && link.href !== "#");

  const handleTabKey = (event: KeyboardEvent, index: number) => {
    const targets: Record<string, number> = {
      ArrowRight: (index + 1) % projects.length,
      ArrowLeft: (index - 1 + projects.length) % projects.length,
      Home: 0,
      End: projects.length - 1,
    };

    const next = targets[event.key];
    if (next === undefined) return;

    event.preventDefault();
    setActiveId(projects[next].id);
    document.getElementById(`project-tab-${projects[next].id}`)?.focus();
  };

  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Products I've designed and built from scratch."
          />
        </Reveal>

        <Reveal delay={0.15}>
          {/* Project switcher */}
          <div
            role="tablist"
            aria-label="Projects"
            className="mt-12 flex gap-3 overflow-x-auto pb-1"
          >
            {projects.map((item, index) => (
              <button
                key={item.id}
                id={`project-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={item.id === activeId}
                aria-controls="project-panel"
                tabIndex={item.id === activeId ? 0 : -1}
                onClick={() => setActiveId(item.id)}
                onKeyDown={(event) => handleTabKey(event, index)}
                className={clsx(
                  "shrink-0 rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300",
                  item.id === activeId
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/30 hover:text-white",
                )}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active project */}
          <div
            key={project.id}
            id="project-panel"
            role="tabpanel"
            aria-labelledby={`project-tab-${project.id}`}
            className="project-panel mt-10 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-14"
          >
            <div>
              <h3 className="text-4xl font-bold leading-tight md:text-5xl">
                {project.title}
              </h3>

              <p className="case-study-tagline">{project.tagline}</p>

              <p className="case-study-description">{project.description}</p>

              <ul className="mt-8 space-y-2 text-sm leading-6 text-white/70">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>

              {links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <ProjectMedia
              key={project.id}
              shots={project.shots}
              video={project.video}
              title={project.title}
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
