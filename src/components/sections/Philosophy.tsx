import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import TechBadge from "../ui/TechBadge";

import { philosophy } from "../../data/philosophy";

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "UI/UX",
];

export default function Philosophy() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={philosophy.eyebrow}
              title={philosophy.title}
            />
          </div>

          <div className="space-y-8 lg:col-span-7">
            {philosophy.body.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-neutral-400">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-4">
              {skills.map((skill) => (
                <TechBadge key={skill}>{skill}</TechBadge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
