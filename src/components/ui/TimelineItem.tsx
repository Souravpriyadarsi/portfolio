import clsx from "clsx";
import TechBadge from "./TechBadge";
import type { Experience } from "../../types/experience";

interface TimelineItemProps {
  experience: Experience;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  const isNow = experience.year === "NOW";

  return (
    <div className="timeline-item relative" data-timeline-item>
      <div
        className={clsx(
          "grid gap-12 py-28 lg:grid-cols-[220px_1fr]",
          !isNow && "timeline-divider",
        )}
      >
        {/* Year */}
        <div>
          <h3
            data-animate="year"
            className={clsx(
              "text-[5rem] md:text-[7rem] lg:text-[8rem] font-black leading-none tracking-tight",
              isNow ? "text-white/20" : "text-white/10",
            )}
          >
            {experience.year}
          </h3>
        </div>

        {/* Content */}
        <div
          className="timeline-content max-w-2xl lg:pl-10"
          data-timeline-content
        >
          <h4 data-animate="title" className="timeline-title">
            {experience.title}
          </h4>

          <p
            data-animate="subtitle"
            className={clsx("timeline-subtitle", isNow && "text-white/70")}
          >
            {experience.subtitle}
          </p>

          <p
            data-animate="description"
            className={clsx("timeline-description", isNow && "text-white/85")}
          >
            {experience.description}
          </p>

          <div className="mt-14 flex flex-col gap-5">
            <p data-animate="focus-title" className="timeline-label">
              KEY TAKEAWAYS
            </p>

            <div data-animate="badges" className="flex flex-wrap gap-3">
              {experience.focus.map((item) => (
                <TechBadge key={item}>{item}</TechBadge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
