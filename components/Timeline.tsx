import { experience } from "@/lib/data/experience";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Timeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-hairline py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Experience"
          title="QA engineer → release owner → technical product manager."
          lead="Not a career change. A widening scope: from verifying what was built, to controlling how it ships, to deciding what gets built."
        />

        <ol className="relative">
          {/* The spine. */}
          <span
            aria-hidden
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold/60 via-hairline to-transparent sm:left-[9px]"
          />

          {experience.map((role, i) => (
            <Reveal key={`${role.company}-${role.title}`} i={i} as="li" className="relative pb-14 pl-9 last:pb-0 sm:pl-14">
              <span
                aria-hidden
                className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border-2 sm:h-[19px] sm:w-[19px] ${
                  role.current
                    ? "border-gold bg-gold shadow-gold"
                    : "border-hairline bg-charcoal-900"
                }`}
              >
                {role.current ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                ) : null}
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold">
                  {role.start} — {role.end}
                </p>
                {role.current ? (
                  <span className="rounded-full bg-gold/12 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-gold">
                    Current
                  </span>
                ) : null}
              </div>

              <h3 className="mt-3 text-xl sm:text-2xl">{role.title}</h3>
              <p className="mt-1 text-sm text-white/50">
                {role.company} · {role.location}
              </p>

              <p className="mt-5 border-l-2 border-gold/40 pl-4 text-[15px] italic leading-relaxed text-white/60">
                {role.thesis}
              </p>

              <ul className="mt-6 space-y-2.5">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-white/60">
                    <span
                      aria-hidden
                      className="mt-[9px] h-1 w-1 flex-none rounded-full bg-gold/60"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {role.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-hairline px-2 py-1 font-mono text-[10px] text-white/45"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
