import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";

import { timelineActive } from "../../animations/timelineActive";
import { gsap } from "../../lib/gsap";

interface TimelineRevealProps {
  children: ReactNode;
}

export default function TimelineReveal({ children }: TimelineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from('[data-animate="year"]', {
        opacity: 0,
        x: -25,
        duration: 0.9,
        ease: "power3.out",
      });

      tl.from(
        '[data-animate="title"]',
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        "-=0.35",
      );

      tl.from(
        '[data-animate="subtitle"]',
        {
          opacity: 0,
          y: 20,
        },
        "-=0.35",
      );

      tl.from(
        '[data-animate="description"]',
        {
          opacity: 0,
          y: 20,
        },
        "-=0.3",
      );

      tl.from(
        '[data-animate="focus-title"]',
        {
          opacity: 0,
        },
        "-=0.2",
      );

      tl.from(
        '[data-animate="badges"]',
        {
          opacity: 0,
          y: 12,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2",
      );

      timelineActive(ref.current!);
    },
    { scope: ref },
  );

  return <div ref={ref}>{children}</div>;
}
