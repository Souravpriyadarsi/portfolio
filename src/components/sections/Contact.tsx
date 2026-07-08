import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

import { contact } from "../../data/contact";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading eyebrow="Let's Talk" title={contact.title} />

        <p className="contact-description">{contact.description}</p>

        <div className="mt-20 space-y-8">
          {contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="contact-link"
            >
              <span className="contact-label">{link.label}</span>

              <span className="contact-value">{link.value} →</span>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
