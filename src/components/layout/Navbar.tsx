import Container from "../ui/Container";
import clsx from "clsx";
import { useScroll } from "../../hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll();
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
            "mx-auto flex items-center justify-between transition-[padding,background-color,border-color,box-shadow] duration-500",
            scrolled
              ? "rounded-full border border-white/10 bg-black/40 px-8 py-4 shadow-1g backdrop-blur-xl"
              : "border border-transparent rounded-full bg-transparent px-0 py-6",
          )}
        >
          <a
            href="#home"
            className="text-xl font-bold tracking-wide transition-opacity duration-300 hover:opacity-80"
          >
            SP
          </a>

          <ul className="hidden md:flex items-center gap-12 text-sm">
            <li>
              <a
                href="#about"
                className="text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
