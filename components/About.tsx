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
          title="An engineer's hands, a product manager's judgement, a musician's ear."
        />

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="space-y-6 text-base leading-relaxed text-white/65 sm:text-[1.0625rem]">
            <p>
              I trained as a{" "}
              <strong className="font-semibold text-white">
                mechatronics engineer
              </strong>{" "}
              — sensors, actuators, control loops, and a graduation project that
              put an autonomous guided vehicle inside a hospital where getting
              it wrong had consequences. That's where the instinct came from:
              systems fail at the interfaces, so specify the interfaces.
            </p>
            <p>
              I entered software through QA, which turned out to be the best
              possible on-ramp to product. Writing 100+ test cases teaches you
              that a requirement without an observable outcome isn't a
              requirement. Then I built the delivery pipeline itself — Docker
              images, GitHub Actions, regression suites — and took{" "}
              <strong className="font-semibold text-white">
                40% off deployment time
              </strong>
              . Owning the pipe is how I earned the right to decide what goes
              through it.
            </p>
            <p>
              Today I run discovery-to-release at Suplyd: 112 tickets authored,
              Mixpanel funnels as the tiebreaker, and PRDs written so engineers
              don't have to guess. When something is blocked on a GraphQL
              response shape or a Docker build, I read the error rather than
              forward it.
            </p>
            <p>
              The other half is{" "}
              <strong className="font-semibold text-white">
                13+ years as a musician and producer
              </strong>
              . Mixing is product work in disguise: you cannot make everything
              loud. You decide what the listener needs to hear first, cut what
              competes with it, and ship a balance rather than a wishlist. That's
              the same muscle as a roadmap.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((g, i) => (
                <Reveal key={g.title} i={i} className="card card-hover p-5">
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
                    {g.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-2.5 text-[13px] leading-snug text-white/60"
                      >
                        <span
                          aria-hidden
                          className="mt-[7px] h-1 w-1 flex-none rounded-full bg-gold/60"
                        />
                        {it}
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
