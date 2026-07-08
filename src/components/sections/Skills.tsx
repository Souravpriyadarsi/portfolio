import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

import SkillGroup from "../ui/SkillGroup";

import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I trust to transform ideas into polished products."
        />

        <div className="mt-20">
          {skillCategories.map((category) => (
            <SkillGroup key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
