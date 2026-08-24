"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { profile, stats } from "@/lib/data/profile";
import { DovePattern } from "./ui/Logo";
import { Waveform } from "./ui/Waveform";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? { initial: {}, animate: {} }
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, delay, ease },
        };

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-48">
      {/* Layered brand background: gold bloom, grid, dove weave. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-gold" />
      <div aria-hidden className="absolute inset-0 -z-10 grid-lines opacity-60" />
      <DovePattern className="pointer-events-none absolute -right-24 -top-16 -z-10 h-[560px] w-[760px] animate-drift text-gold/[0.07]" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* --- Left: the thesis --- */}
          <div>
            <motion.div {...rise(0)} className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-70 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <p className="eyebrow">Open to global roles</p>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="mt-6 text-[2.6rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.25rem]"
            >
              Bridging the gap between{" "}
              <span className="text-gradient-gold">engineering execution</span>{" "}
              and <span className="text-gradient-gold">audio innovation</span>.
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-7 max-w-xl text-lg text-white/65"
            >
              {profile.subheadline}
            </motion.p>

            <motion.p {...rise(0.22)} className="mt-4 max-w-xl text-base text-white/45">
              Mechatronics engineer turned TPM. I built the release pipeline
              before I owned the roadmap — so specs land with acceptance
              criteria engineers can actually build against.
            </motion.p>

            <motion.div {...rise(0.3)} className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/#case-studies" className="btn-primary group">
                View TPM case studies
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
                />
              </Link>
              <Link href="/#audio" className="btn-outline group">
                <Play size={15} className="text-gold" />
                Explore music content
              </Link>
            </motion.div>

            <motion.div {...rise(0.38)} className="mt-14 flex items-end gap-6">
              <Waveform bars={26} className="h-10 w-40" />
              <p className="pb-1 font-mono text-xs uppercase tracking-widest text-white/35">
                {profile.location} · {profile.timezone}
              </p>
            </motion.div>
          </div>

          {/* --- Right: the numbers that back it up --- */}
          <motion.div
            {...rise(0.44)}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="group bg-charcoal-900 p-6 transition-colors duration-500 ease-brand hover:bg-charcoal-800 sm:p-8"
              >
                <p className="font-display text-3xl font-bold text-gold sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 font-display text-sm font-bold text-white">
                  {s.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/40">
                  {s.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
