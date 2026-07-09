import { ScrollTrigger } from "../lib/gsap";

export function timelineActive(item: HTMLElement) {
  ScrollTrigger.create({
    trigger: item,

    start: "top center",

    end: "bottom center",

    onEnter: () => item.classList.add("is-active"),

    onLeave: () => item.classList.remove("is-active"),

    onEnterBack: () => item.classList.add("is-active"),

    onLeaveBack: () => item.classList.remove("is-active"),
  });
}
