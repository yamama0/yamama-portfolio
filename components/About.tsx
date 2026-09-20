import { education, certifications } from "@/lib/data/experience";
import { skillGroups } from "@/lib/data/profile";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-hairline py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="The Operator"
          title="QA's discipline, a product manager's judgement."
        />

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="space-y-6 text-base leading-relaxed text-white/65 sm:text-[1.0625rem]">
            <p>
              I came into software through <strong className="font-semibold text-white">QA</strong> — the
              best on-ramp to product I could have asked for. Writing 100+ test
              cases teaches you that a requirement without an observable outcome
              isn't one. Then I built the pipeline that runs them — Docker, GitHub
              Actions, regression suites — and{" "}
              <strong className="font-semibold text-white">cut deployment time by 40%</strong>.
            </p>
            <p>
              Today I run discovery-to-release at Suplyd:{" "}
              <strong className="font-semibold text-white">112 tickets authored</strong>,
              Mixpanel funnels as the tiebreaker, PRDs that leave engineers
              nothing to guess at. If it's blocked on a GraphQL response shape
              or a Docker build, I read the error rather than forward it.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((g, i) => (
                <Reveal key={g.title} i={i} className="card card-hover p-5">
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
                    {g.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {g.items.map((it) => (
                      <li
                        key={it.name}
                        className="flex items-center gap-2.5 text-[13px] leading-snug text-white/70"
                      >
                        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md border border-hairline bg-charcoal-900 text-gold/80">
                          <it.icon size={13} strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="text-white">{it.name}</span>
                          {it.note ? (
                            <span className="text-white/40"> · {it.note}</span>
                          ) : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal i={2} className="card p-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
                Education
              </h3>
              <p className="mt-4 font-display text-base font-bold text-white">
                {education.degree}
              </p>
              <p className="text-sm text-white/55">
                {education.school} · {education.year} · Grade: {education.grade}
              </p>
              <p className="mt-4 border-l-2 border-gold/40 pl-4 text-[13px] leading-relaxed text-white/50">
                {education.thesis}
              </p>
            </Reveal>

            <Reveal i={3} className="card p-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
                Certifications
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-hairline px-3 py-1.5 text-[12px] text-white/60"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
