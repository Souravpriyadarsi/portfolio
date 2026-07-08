import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="absolute left-1/2 top-1/2 -z-10 h-150 w-600 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
      <Container>
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Full-Stack Web Developer & Designer
          </p>

          <h1 className="leading-none font-bold tracking-tight">
            <span className="block text-[clamp(4rem,10vw,9rem)]">Sourav</span>

            <span className="block text-[clamp(4rem,10vw,9rem)]">
              Priyadarsi
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-neutral-400">
            Turning ideas into intuitive digital experiences.
          </p>

          <div className="mt-12 flex items-center gap-8">
            <Button>View Work →</Button>

            <span className="text-sm tracking-widest uppercase text-neutral-500">
              Scroll
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
