import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data/case-studies";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const statusTone: Record<string, string> = {
  Shipped: "border-gold/40 text-gold",
  Completed: "border-gold/40 text-gold",
  "In flight": "border-white/25 text-white/60",
};

export function CaseStudyGrid() {
  return (
    <section
      id="case-studies"
      className="scroll-mt-24 border-t border-hairline py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Case Studies"
          title="Four problems, and what actually shipped."
          lead="Every case study below is reconstructed from the real artifact — the PRD, the Linear project, the ticket history. Same four questions each time: what was broken, how it was designed, how it was sequenced, what changed."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} i={i} as="article">
              <Link
                href={`/case-studies/${cs.slug}`}
                className="card card-hover group flex h-full flex-col p-7 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${
                        statusTone[cs.status]
                      }`}
                    >
                      {cs.status}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/35">
                      {cs.kicker}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="flex-none text-white/30 transition-all duration-300 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  />
                </div>

                <h3 className="mt-6 text-2xl leading-tight transition-colors duration-300 group-hover:text-gold">
                  {cs.title}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/55">
                  {cs.summary}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-hairline pt-6">
                  {cs.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <dd className="font-display text-2xl font-bold text-gold">
                        {m.value}
                      </dd>
                      <dt className="mt-1 text-[11px] uppercase tracking-wider text-white/40">
                        {m.label}
                      </dt>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {cs.stack.slice(0, 4).map((s) => (
                    <li
                      key={s}
                      className="rounded border border-hairline px-2 py-1 font-mono text-[10px] text-white/45"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
