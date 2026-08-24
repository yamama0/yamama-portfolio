import Image from "next/image";
import { Instagram, Music4, Play, Radio, Youtube } from "lucide-react";
import { audioStack, profile } from "@/lib/data/profile";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Waveform } from "./ui/Waveform";

/**
 * Replace `embedId` with real YouTube IDs (or a TikTok oEmbed URL) as
 * content ships. Until then each tile renders as a labelled placeholder
 * rather than an empty black rectangle.
 */
const releases = [
  {
    title: "Black Metal",
    platform: "Instagram" as const,
    length: "01:27",
    embedId: null as string | null,
    link: "https://www.instagram.com/p/C6_xkllN_9w/" as string | null,
    thumbnail: "/instagram-black-metal.jpg" as string | null,
  },
  {
    title: "Sound design breakdown: turning a field recording into a pad",
    platform: "YouTube" as const,
    length: "11:02",
    embedId: null as string | null,
    link: null as string | null,
    thumbnail: null as string | null,
  },
  {
    title: "Why your mix sounds thin — one EQ move",
    platform: "TikTok" as const,
    length: "00:58",
    embedId: null as string | null,
    link: null as string | null,
    thumbnail: null as string | null,
  },
];

export function AudioHub() {
  return (
    <section
      id="audio"
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline py-20 sm:py-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-gold opacity-70" />

      <div className="shell">
        <SectionHeading
          eyebrow={`Creator Hub · ${profile.creatorHandle}`}
          title="Thirteen years of making sound, published in public."
          lead="The producer half of the practice. Studio breakdowns, sound design walkthroughs, and short-form technique clips — the same instinct for hierarchy and restraint that shows up in the product work."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {releases.map((r, i) => (
            <Reveal key={r.title} i={i} as="article" className="card card-hover overflow-hidden">
              <div className="relative aspect-video border-b border-hairline bg-charcoal-950">
                {r.embedId ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${r.embedId}`}
                    title={r.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : r.link ? (
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex h-full items-center justify-center overflow-hidden"
                  >
                    {r.thumbnail && (
                      <Image
                        src={r.thumbnail}
                        alt={r.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-charcoal-950/40 transition-colors group-hover:bg-charcoal-950/55"
                    />
                    <div className="relative flex flex-col items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-charcoal-900/80 text-gold backdrop-blur transition-colors group-hover:bg-gold group-hover:text-charcoal-950">
                        <Play size={18} className="ml-0.5" fill="currentColor" />
                      </span>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/70 group-hover:text-white">
                        Watch on {r.platform}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-4">
                    <Waveform bars={22} className="h-8 w-32" animate={false} />
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                      Embed slot · {r.platform}
                    </p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gold">
                  {r.platform === "YouTube" ? (
                    <Youtube size={13} />
                  ) : r.platform === "Instagram" ? (
                    <Instagram size={13} />
                  ) : (
                    <Radio size={13} />
                  )}
                  {r.platform}
                  <span className="text-white/30">· {r.length}</span>
                </div>
                <h3 className="mt-3 text-base leading-snug">{r.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal i={1} className="card mt-6 p-7 sm:p-9">
          <div className="flex items-center gap-3">
            <Music4 size={18} className="text-gold" />
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              The rig
            </h3>
          </div>
          <ul className="mt-7 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {audioStack.map((k) => (
              <li key={k.name} className="bg-charcoal-900 p-5">
                <p className="font-display text-base font-bold text-white">{k.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-gold/80">
                  {k.role}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-white/45">{k.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
