import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap } from "../../lib/gsap";

import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.9,
          ease: "power3.out",
        },
      });

      tl.from(".hero-eyebrow", {
        opacity: 0,
        y: 40,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 40,
            stagger: 0.12,
          },
          "-=0.55",
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 40,
          },
          "-=0.45",
        )
        .from(
          ".hero-actions",
          {
            opacity: 0,
            y: 40,
          },
          "-=0.45",
        );
    },
    { scope: heroRef },
  );

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-150 w-600 max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <Container>
        <div ref={heroRef} className="max-w-5xl">
          <p className="hero-eyebrow">Full-Stack Web Developer & Designer</p>

          <h1>
            <span className="hero-title">Sourav</span>

            <span className="hero-title">Priyadarsi</span>
          </h1>

          <p className="hero-description">
            Turning ideas into intuitive digital experiences.
          </p>

          <div className="hero-actions mt-12 flex flex-wrap items-center gap-4 sm:gap-8">
            <a
              href="#projects"
              className="text-neutral-300 transition-colors duration-300 hover:text-white"
            >
              <Button>View Work →</Button>
            </a>
            <a
              href="/Sourav_Resume_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Resume ↗</Button>
            </a>
            <span className="scroll-label">Scroll ↓</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
