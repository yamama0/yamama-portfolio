import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies, getCaseStudy, type Section } from "@/lib/data/case-studies";
import { Reveal } from "@/components/ui/Reveal";
import { DovePattern } from "@/components/ui/Logo";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return { title: "Case study not found" };
  return { title: cs.title, description: cs.summary };
}

/** Notion-style content block: numbered act heading, prose, bullets, table. */
function Block({
  section,
  index,
}: {
  section: Section;
  index?: number;
}) {
  return (
    <Reveal as="section" className="scroll-mt-28" >
      <div className="flex items-baseline gap-4">
        {typeof index === "number" ? (
          <span className="font-mono text-sm text-gold/70">
            {String(index).padStart(2, "0")}
          </span>
        ) : null}
        <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
      </div>

      {section.body?.map((p) => (
        <p
          key={p.slice(0, 40)}
          className="mt-6 text-[15px] leading-relaxed text-white/65 sm:text-base"
        >
          {p}
        </p>
      ))}

      {section.bullets ? (
        <ul className="mt-6 space-y-3">
          {section.bullets.map((b) => (
            <li
              key={b.slice(0, 40)}
              className="flex gap-3.5 text-[15px] leading-relaxed text-white/65"
            >
              <span
                aria-hidden
                className="mt-[9px] h-1.5 w-1.5 flex-none rotate-45 bg-gold/60"
              />
              {b}
            </li>
          ))}
        </ul>
      ) : null}

      {section.table ? (
        <div className="mt-8 overflow-x-auto rounded-xl border border-hairline">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="bg-charcoal-800">
                {section.table[0].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-gold"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.slice(1).map((row) => (
                <tr key={row[0]} className="border-t border-hairline">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-5 py-3.5 text-[14px] ${
                        ci === 0 ? "font-medium text-white" : "text-white/55"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </Reveal>
  );
}

export default function CaseStudyPage({ params }: Params) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const acts = [cs.problem, cs.architecture, cs.execution, cs.impact];
  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article className="pb-24">
      {/* ---------- Header ---------- */}
      <header className="relative isolate overflow-hidden border-b border-hairline pb-14 pt-32 sm:pt-40">
        <div aria-hidden className="absolute inset-0 -z-10 bg-radial-gold" />
        <DovePattern className="pointer-events-none absolute -right-20 -top-10 -z-10 h-[420px] w-[600px] text-gold/[0.06]" />

        <div className="shell">
          <Link
            href="/#case-studies"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/40 transition-colors hover:text-gold"
          >
            <ArrowLeft
              size={13}
              className="transition-transform duration-300 ease-brand group-hover:-translate-x-1"
            />
            All case studies
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-gold/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
              {cs.status}
            </span>
            <span className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/50">
              Priority: {cs.priority}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/35">
              {cs.period}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.03] sm:text-6xl">
            {cs.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {cs.summary}
          </p>

          {/* Notion-style property table. */}
          <dl className="mt-12 grid gap-x-10 gap-y-5 border-t border-hairline pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-white/35">
                My role
              </dt>
              <dd className="mt-2 text-sm text-white/75">{cs.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-white/35">
                Team
              </dt>
              <dd className="mt-2 text-sm text-white/75">{cs.team.join(" · ")}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-white/35">
                Stack
              </dt>
              <dd className="mt-2 text-sm text-white/75">{cs.stack.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ---------- Metrics band ---------- */}
      <div className="shell -mt-px">
        <ul className="grid gap-px overflow-hidden border-x border-b border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {cs.metrics.map((m) => (
            <li key={m.label} className="bg-charcoal-900 p-6">
              <p className="font-display text-3xl font-bold text-gold">{m.value}</p>
              <p className="mt-2 font-display text-[13px] font-bold text-white">
                {m.label}
              </p>
              {m.note ? (
                <p className="mt-1 text-xs leading-relaxed text-white/40">{m.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>

      {/* ---------- Body ---------- */}
      <div className="shell mt-20 max-w-3xl space-y-20">
        {acts.map((section, i) => (
          <Block key={section.heading} section={section} index={i + 1} />
        ))}

        {cs.appendix?.length ? (
          <div className="space-y-14 rounded-2xl border border-hairline bg-charcoal-800/40 p-7 sm:p-10">
            {cs.appendix.map((s) => (
              <Block key={s.heading} section={s} />
            ))}
          </div>
        ) : null}

        <p className="border-t border-hairline pt-6 font-mono text-[11px] uppercase tracking-widest text-white/30">
          Source: {cs.source}
        </p>
      </div>

      {/* ---------- Next ---------- */}
      <div className="shell mt-20">
        <Link
          href={`/case-studies/${next.slug}`}
          className="card card-hover group flex flex-col gap-3 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gold">
              Next case study
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-white transition-colors group-hover:text-gold">
              {next.title}
            </p>
          </div>
          <ArrowRight
            size={22}
            className="flex-none text-white/30 transition-all duration-300 ease-brand group-hover:translate-x-1 group-hover:text-gold"
          />
        </Link>
      </div>
    </article>
  );
}
