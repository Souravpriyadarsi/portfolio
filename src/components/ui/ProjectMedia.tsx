import { useEffect, useState } from "react";
import clsx from "clsx";
import type { ProjectShot } from "../../types/project";

type Props = {
  shots: ProjectShot[];
  video?: string;
  title: string;
};

type View = "screens" | "video";
type Theme = "dark" | "light";

type SegmentProps<T extends string> = {
  label: string;
  value: T;
  options: { value: T; text: string }[];
  onChange: (value: T) => void;
};

function Segment<T extends string>({
  label,
  value,
  options,
  onChange,
}: SegmentProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex rounded-full border border-white/10 bg-white/5 p-1"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
          className={clsx(
            "rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-300",
            value === option.value
              ? "bg-white text-black"
              : "text-neutral-400 hover:text-white",
          )}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default function ProjectMedia({ shots, video, title }: Props) {
  const [view, setView] = useState<View>("screens");
  const [theme, setTheme] = useState<Theme>("dark");
  const [index, setIndex] = useState(0);

  const shot = shots[index];
  const showingScreens = view === "screens";

  // Warm the cache for the most likely next views: the other theme of this
  // shot, and the next shot in the current theme.
  useEffect(() => {
    const other: Theme = theme === "dark" ? "light" : "dark";
    const next = shots[(index + 1) % shots.length];

    [shots[index][other], next[theme]].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [shots, index, theme]);

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-4 flex min-h-9 flex-wrap items-center justify-between gap-3">
        {video ? (
          <Segment<View>
            label="Media type"
            value={view}
            onChange={setView}
            options={[
              { value: "screens", text: "Screenshots" },
              { value: "video", text: "Walkthrough" },
            ]}
          />
        ) : (
          <span />
        )}

        {showingScreens && (
          <Segment<Theme>
            label="Screenshot theme"
            value={theme}
            onChange={setTheme}
            options={[
              { value: "dark", text: "Dark" },
              { value: "light", text: "Light" },
            ]}
          />
        )}
      </div>

      {/* Stage */}
      <div
        className={clsx(
          "overflow-hidden rounded-3xl border border-white/10 p-3 transition-colors duration-300 md:p-4",
          showingScreens && theme === "light" ? "bg-[#e9e9e7]" : "bg-[#0f1117]",
        )}
      >
        <div className="aspect-[16/10] w-full">
          {showingScreens ? (
            <img
              key={`${index}-${theme}`}
              src={shot[theme]}
              alt={`${title} ${shot.label} (${theme} theme)`}
              className="project-media-in h-full w-full object-contain"
            />
          ) : (
            <video
              key="walkthrough"
              src={video}
              poster={shots[0].dark}
              controls
              playsInline
              preload="metadata"
              className="project-media-in h-full w-full rounded-2xl bg-black object-contain"
            />
          )}
        </div>
      </div>

      {/* Screen picker (kept in layout on the video view so height never jumps) */}
      <div
        aria-hidden={!showingScreens}
        className={clsx(
          "mt-4 flex gap-2 overflow-x-auto pb-1",
          !showingScreens && "invisible",
        )}
      >
        {shots.map((item, i) => (
          <button
            key={item.label}
            type="button"
            tabIndex={showingScreens ? 0 : -1}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
            className={clsx(
              "shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300",
              i === index
                ? "border-violet-500 bg-violet-500/10 text-white"
                : "border-white/10 bg-white/5 text-neutral-400 hover:border-white/30 hover:text-white",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
