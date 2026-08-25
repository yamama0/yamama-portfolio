import { Download, Instagram, Radio, Youtube } from "lucide-react";
import { profile } from "@/lib/data/profile";
import { maqamat, episodes, roadmapDownloadUrl } from "@/lib/data/angry-bird";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function AngryBird() {
  return (
    <section
      id="angry-bird"
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Fusion Roadmap"
          title="The Angry Bird"
          lead="Where 2,000-Year-Old Music Meets High-Gain Guitar. A fusion project breaking the boundaries between ancient Middle Eastern Maqamat scales and Heavy Metal. Built on 7 essential scales that form a new sonic language — where the Oud meets distortion."
        />

        {/* --- The Maqamat grid --- */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {maqamat.map((m, i) => (
            <Reveal key={m.name} i={i} as="article" className="card card-hover p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold">
                {m.metalVibe}
              </p>
              <h3 className="mt-3 text-sm font-bold leading-snug text-white">{m.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/50">{m.note}</p>
            </Reveal>
          ))}
        </div>

        {/* --- Mission statement --- */}
        <Reveal className="card mt-14 border-gold/25 p-8 sm:p-10">
          <blockquote className="font-display text-xl leading-snug text-white sm:text-2xl">
            &ldquo;Breaking the boundaries between the 2,000-year-old Music and the
            modern high-gain guitar.&rdquo;
          </blockquote>
        </Reveal>

        {/* --- Free roadmap CTA --- */}
        <Reveal className="card mt-6 overflow-hidden p-8 sm:p-10">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Get the Free Fusion Roadmap
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/55">
                7 Maqamat scales translated into metal guitar language. Notes,
                TABs, and metal interpretation for each scale. Free download —
                no catch.
              </p>
            </div>
            <div className="flex flex-none flex-wrap items-center gap-4">
              <a
                href={roadmapDownloadUrl}
                download
                target="_blank"
                rel="noreferrer"
                className="btn-primary group"
              >
                <Download size={16} />
                Download Free PDF
              </a>
              <a
                href="https://www.instagram.com/llyamamall"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <Instagram size={15} />
                Follow {profile.creatorHandle}
              </a>
            </div>
          </div>
        </Reveal>

        {/* --- Content series teaser --- */}
        <div className="mt-14">
          <p className="eyebrow">The series</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {episodes.map((ep, i) => (
              <Reveal key={ep.number} i={i} as="article" className="card p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/35">
                  Episode {String(ep.number).padStart(2, "0")}
                </p>
                <h4 className="mt-3 text-base font-bold leading-snug text-white">
                  {ep.scale}
                </h4>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {ep.platforms.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/45"
                    >
                      {p === "YouTube" ? <Youtube size={11} /> : <Radio size={11} />}
                      {p}
                    </span>
                  ))}
                  <span className="rounded-full border border-gold/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
                    {ep.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
