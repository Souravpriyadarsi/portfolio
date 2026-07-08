import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header
      className="
fixed
top-0
left-0
z-50
w-full
backdrop-blur-md
bg-black/20
border-b
border-white/5
"
    >
      <Container>
        <nav className="flex h-24 items-center justify-between">
          <h2 className="text-xl font-bold tracking-wide">SP</h2>

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
