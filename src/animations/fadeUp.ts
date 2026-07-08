import { gsap } from "../lib/gsap";

interface FadeUpOptions {
  delay?: number;
  duration?: number;
  y?: number;
}

export function fadeUp(target: gsap.TweenTarget, options: FadeUpOptions = {}) {
  const { delay = 0, duration = 0.9, y = 40 } = options;

  return gsap.from(target, {
    opacity: 0,
    y,
    delay,
    duration,
    ease: "power3.out",
  });
}
