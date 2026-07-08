import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-full",
        "border",
        "border-white/10",
        "bg-white/5",
        "px-7",
        "py-3",
        "font-medium",
        "transition-all",
        "duration-300",
        "hover:bg-white",
        "hover:text-black",
        "hover:scale-105",
        className,
      )}
    >
      {children}
    </button>
  );
}
