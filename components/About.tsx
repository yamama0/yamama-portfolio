"use client";

import { education, certifications } from "@/lib/data/experience";
import { skillGroups, type SkillItem } from "@/lib/data/profile";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Logo } from "./ui/Logo";

type SkillGroup = (typeof skillGroups)[number];

function SkillCard({ group, index }: { group: SkillGroup; index?: number }) {
  const body = (
    <article className="card card-hover h-full p-5">
      <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
        {group.title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {group.items.map((it: SkillItem) => (
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
    </article>
  );

  return typeof index === "number" ? <Reveal i={index}>{body}</Reveal> : body;
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-hairline py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="The Operator"
          title="QA's discipline, a product manager's judgement."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-white/65 sm:text-[1.0625rem]">
            <p>
              I came into software through{" "}
              <strong className="font-semibold text-white">QA</strong> — and it
              turned out to be the best possible on-ramp to product. Writing a
              hundred test cases teaches you that a requirement without an
              observable outcome isn't a requirement, it's a wish. So I built
              the pipeline that runs them — Docker, GitHub Actions, regression
              suites — and watched deployment time drop until I knew I'd earned
              the right to decide what goes through it.
            </p>
            <p>
              Today I run discovery-to-release at Suplyd. Mixpanel funnels are
              the tiebreaker, PRDs leave engineers nothing to guess at, and
              when something's blocked on a GraphQL response shape or a Docker
              build, I read the error rather than forward it.
            </p>
          </div>

          <Reveal i={1} className="flex items-center justify-center lg:justify-end">
            <Logo className="h-44 w-auto text-gold/35 lg:h-56" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.title} group={g} index={i} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
    </section>
  );
}
