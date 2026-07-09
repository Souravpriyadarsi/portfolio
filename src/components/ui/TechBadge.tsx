type TechBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TechBadge({
  children,
  className = "",
}: TechBadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/5
        px-3
        py-1.5
        text-xs
        font-medium
        tracking-wide
        text-neutral-300
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-violet-500/40
        hover:bg-violet-500/10
        hover:text-white
        ${className}
      `}
    >
      {children}
    </span>
  );
}
