import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="absolute left-1/2 top-1/2 -z-10 h-150 w-600 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <Container>
        <div className="max-w-5xl">
          <p className="hero-eyebrow">Full-Stack Web Developer & Designer</p>

          <h1>
            <span className="hero-title">Sourav</span>

            <span className="hero-title">Priyadarsi</span>
          </h1>

          <p className="hero-description">
            Turning ideas into intuitive digital experiences.
          </p>

          <div className="mt-12 flex items-center gap-8">
            <Button>View Work →</Button>

            <span className="scroll-label">Scroll</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
