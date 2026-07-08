import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ProjectGallery from "../ui/ProjectGallery";
import TechBadge from "../ui/TechBadge";

import { projects } from "../../data/projects";

export default function CaseStudy() {
  const project = projects[0];

  return (
    <Section id="projects">
      <Container>
        <SectionHeading eyebrow="Case Study" title={project.title} />

        <p className="case-study-tagline">{project.tagline}</p>

        <p className="case-study-description">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <div className="mt-14">
          <ProjectGallery images={project.images} title={project.title} />
        </div>
      </Container>
    </Section>
  );
}
