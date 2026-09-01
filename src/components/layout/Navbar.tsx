import { useState } from "react";
import Container from "../ui/Container";
import clsx from "clsx";
import { useScroll } from "../../hooks/useScroll";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={clsx(
        "fixed left-0 top-0 z-50 w-full transition-[padding,background-color,border-color,box-shadow] duration-500",
        scrolled ? "py-4" : "py-8",
      )}
    >
      <Container>
        <nav
          className={clsx(
            "mx-auto flex flex-col transition-[padding,background-color,border-color,box-shadow] duration-500",
            scrolled || open
              ? "rounded-3xl border border-white/10 bg-black/40 px-6 py-4 shadow-1g backdrop-blur-xl md:rounded-full md:px-8"
              : "border border-transparent rounded-full bg-transparent px-0 py-6",
          )}
        >
          <div className="flex w-full items-center justify-between">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="text-xl font-bold tracking-wide transition-opacity duration-300 hover:opacity-80"
            >
              SP
            </a>

            <ul className="hidden md:flex items-center gap-12 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-300 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition-colors duration-300 hover:bg-white hover:text-black md:hidden"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>

          {open && (
            <ul className="mt-4 flex w-full flex-col gap-1 border-t border-white/10 pt-4 text-sm md:hidden">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-2 py-3 text-neutral-300 transition-colors duration-300 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </Container>
    </header>
  );
}
