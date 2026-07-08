import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";
import TimelineItem from "../ui/TimelineItem";
import Reveal from "../motion/Reveal";

import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="Every role changed the way I build software."
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20">
            {experiences.map((experience) => (
              <TimelineItem key={experience.year} experience={experience} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
