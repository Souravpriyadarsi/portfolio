import type { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx("relative py-28 md:py-36", className)}>
      {children}
    </section>
  );
}
