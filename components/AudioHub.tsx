"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  Facebook,
  Instagram,
  Music4,
  Play,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { audioStack, profile, socials } from "@/lib/data/profile";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Waveform } from "./ui/Waveform";

/**
 * 8×13 charcoal tile used as the blur placeholder while each reel
 * thumbnail streams in — keeps the layout stable and gives the eye
 * something darker than the page background to settle on.
 */
const REEL_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDEzIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjMxZjIwIi8+PC9zdmc+";

/**
 * Featured Instagram Reels. The featured grid is intentionally a single
 * platform (Instagram) — the other platforms are surfaced through the
 * "Find me on" pill row below so we don't have to maintain per-platform
 * embeds that drift out of date.
 */
const releases = [
  {
    title: "Is Metal Satanic?",
    length: "01:27",
    link: "https://www.instagram.com/reel/C6_xkllN_9w/",
    thumbnail: "/is-metal-satanic.jpg",
  },
  {
    title: "Palm Muted Chords",
    length: "00:42",
    link: "https://www.instagram.com/reel/DKc2OGXNpny/",
    thumbnail: "/palm-muted-chords.jpg",
  },
  {
    title: "Future Music Guide Collab",
    length: "00:55",
    link: "https://www.instagram.com/reel/DdZcu5ziMD8/",
    thumbnail: "/future-music-guide-collab.jpg",
  },
  {
    title: "Nothing Else Matters — Story",
    length: "01:12",
    link: "https://www.instagram.com/reel/C1NTu2bt01O/",
    thumbnail: "/nothing-else-matters.jpg",
  },
  {
    title: "This I Love (Guitar Solo)",
    length: "00:48",
    link: "https://www.instagram.com/reel/DIUZUEYtpX_/",
    thumbnail: "/this-i-love.jpg",
  },
] as const;

const platformIcon: Record<string, LucideIcon> = {
  Instagram,
  YouTube: Youtube,
  Facebook,
  TikTok: Music4,
};

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

        <p className="-mt-8 mb-12 text-sm text-white/45 sm:-mt-12 sm:mb-16">
          The Oud paired with the Schecter (drop-tuned metal) and the Zoom G6 FX
          in The Rig is the foundation of{" "}
          <a href="#angry-bird" className="text-gold underline underline-offset-4 hover:text-gold-300">
            The Angry Bird
          </a>{" "}
          fusion project — see below.
        </p>

        {/* ---------- Featured Reels (Swiper carousel, fade) ---------- */}
        <div className="reels-swiper mx-auto max-w-md">
          <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={{ clickable: true }}
            loop
            grabCursor
            autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            a11y={{ slideRole: "article" }}
            className="!pb-12"
          >
            {releases.map((r) => (
              <SwiperSlide key={r.title}>
                <article className="card card-hover overflow-hidden">
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block aspect-[9/16] overflow-hidden border-b border-hairline bg-charcoal-950"
                  >
                    {r.thumbnail ? (
                      <Image
                        src={r.thumbnail}
                        alt={r.title}
                        fill
                        sizes="(min-width: 1024px) 28rem, 100vw"
                        quality={65}
                        placeholder="blur"
                        blurDataURL={REEL_BLUR}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-radial-gold opacity-50"
                        />
                        <Waveform
                          bars={18}
                          className="absolute inset-x-0 top-1/2 mx-auto h-20 w-44 -translate-y-1/2 text-gold/15"
                          animate={false}
                        />
                      </>
                    )}

                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-transparent"
                    />

                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-charcoal-950/70 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-white/80 backdrop-blur">
                      <Instagram size={10} />
                      Reel
                    </span>

                    <span className="absolute right-3 top-3 rounded bg-charcoal-950/80 px-1.5 py-0.5 font-mono text-[9px] text-white/80 backdrop-blur">
                      {r.length}
                    </span>

                    <p className="absolute inset-x-3 bottom-3 line-clamp-2 font-display text-sm font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                      {r.title}
                    </p>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-charcoal-900/70 text-gold backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal-950">
                        <Play size={20} className="ml-0.5" fill="currentColor" />
                      </span>
                    </div>
                  </a>
                  <div className="p-5">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gold">
                      <Instagram size={13} />
                      Instagram Reel
                      <span className="text-white/30">· {r.length}</span>
                    </div>
                    <h3 className="mt-3 text-base leading-snug">{r.title}</h3>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ---------- The Rig ---------- */}
        <Reveal i={1} className="card mt-12 p-7 sm:p-9">
          <div className="flex items-center gap-3">
            <Music4 size={18} className="text-gold" />
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              The rig
            </h3>
          </div>

          <div className="mt-8 space-y-10">
            {audioStack.map((group) => {
              const cols =
                group.category === "Instruments"
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "sm:grid-cols-2";
              return (
                <div key={group.category}>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/35">
                    {group.category}
                  </p>
                  <ul
                    className={`mt-4 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline ${cols}`}
                  >
                    {group.items.map((k) => (
                      <li key={k.name} className="bg-charcoal-900 p-5">
                        <p className="font-display text-base font-bold text-white">
                          {k.name}
                        </p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-gold/80">
                          {k.role}
                        </p>
                        <p className="mt-3 text-[13px] leading-relaxed text-white/45">
                          {k.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* ---------- Find me on ---------- */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
            Find me on
          </span>
          {socials.map((s) => {
            const Icon = platformIcon[s.platform];
            return (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-charcoal-900 px-4 py-2 text-sm text-white/75 transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                <Icon size={14} />
                <span>{s.handle}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
