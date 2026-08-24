import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, lead, id }: Props) {
  return (
    <header className="mb-12 max-w-3xl sm:mb-16">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal i={1}>
        <h2
          id={id}
          className="mt-4 text-3xl leading-[1.08] sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal i={2}>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            {lead}
          </p>
        </Reveal>
      ) : null}
      <Reveal i={3}>
        <div className="rule mt-8" />
      </Reveal>
    </header>
  );
}
