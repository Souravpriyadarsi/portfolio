type Props = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <>
      <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-500">
        {eyebrow}
      </p>

      <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>
    </>
  );
}
