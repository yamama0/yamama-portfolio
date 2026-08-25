import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, MessageCircle } from "lucide-react";
import { profile } from "@/lib/data/profile";
import { Reveal } from "./ui/Reveal";
import { DovePattern, Logo } from "./ui/Logo";

const socials = [
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", href: profile.github, Icon: Github },
];

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline"
    >
      <DovePattern className="pointer-events-none absolute -bottom-24 -left-20 h-[420px] w-[620px] text-gold/[0.05]" />

      <div className="shell relative py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">Contact</p>
        </Reveal>

        <Reveal i={1}>
          <h2 className="mt-5 max-w-3xl text-3xl leading-[1.06] sm:text-5xl lg:text-[3.5rem]">
            Let&apos;s build the future of tech.
          </h2>
        </Reveal>

        <Reveal i={2}>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            {profile.availability} Based in {profile.location}, working{" "}
            {profile.timezone}.
          </p>
        </Reveal>

        <Reveal i={3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary group">
              {profile.email}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="btn-outline">
              {profile.phone}
            </a>
            <a
              href={`https://wa.me/${profile.phone.replace(/[\s+]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-outline group"
            >
              <MessageCircle size={15} className="text-gold" />
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal i={4}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="card card-hover flex items-center gap-2.5 px-5 py-3 text-sm text-white/70 hover:text-gold"
                >
                  <Icon size={16} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-gold">
            <Logo className="h-6 w-auto" />
            <span className="font-body text-[10px] uppercase tracking-brand text-white/40">
              Productions
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-white/30">
            <span>© {new Date().getFullYear()} Yamama</span>
            <span>
              {profile.languages.map((l) => `${l.name} · ${l.level}`).join("   /   ")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
