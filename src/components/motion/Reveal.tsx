import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap } from "../../lib/gsap";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y,
      duration: 0.9,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 82%",
        once,
      },
    });
  });

  return <div ref={ref}>{children}</div>;
}
