import clsx from "clsx";
import TechBadge from "./TechBadge";
import type { Experience } from "../../types/experience";

interface TimelineItemProps {
  experience: Experience;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  const isNow = experience.year === "NOW";

  return (
    <div className="relative">
      {/* Timeline Spine (desktop) */}
      {!isNow && (
        <div className="absolute left-53.75 top-0 bottom-0 hidden w-px bg-white/10 lg:block" />
      )}

      <div
        className={clsx(
          "grid gap-12 py-28 lg:grid-cols-[220px_1fr]",
          !isNow && "timeline-divider",
        )}
      >
        {/* Year */}
        <div>
          <h3 className={clsx("timeline-year", isNow && "text-white/20")}>
            {experience.year}
          </h3>
        </div>

        {/* Content */}
        <div className="max-w-2xl lg:pl-10">
          <h4 className="timeline-title">{experience.title}</h4>

          <p className={clsx("timeline-subtitle", isNow && "text-white/70")}>
            {experience.subtitle}
          </p>

          <p className={clsx("timeline-description", isNow && "text-white/85")}>
            {experience.description}
          </p>

          <div className="mt-14">
            <p className="timeline-label">Focus</p>

            <div className="flex flex-wrap gap-3">
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
