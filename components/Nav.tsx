"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./ui/Logo";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#case-studies", label: "Case studies" },
  { href: "/#audio", label: "Audio" },
  { href: "/#experience", label: "Experience" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-brand ${
        scrolled
          ? "border-b border-hairline bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-[68px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-gold"
          aria-label="Mohamed Yamama — home"
        >
          <Logo className="h-6 w-auto" />
          <span className="hidden font-display text-sm font-bold tracking-wide text-white sm:block">
            Mohamed Yamama
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative font-body text-sm text-white/65 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 ease-brand group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/#contact" className="btn-primary hidden !py-2.5 !text-[13px] sm:inline-flex">
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-hairline bg-ink/98 backdrop-blur-xl md:hidden"
          >
            <ul className="shell flex flex-col py-4">
              {[...links, { href: "/#contact", label: "Get in touch" }].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-hairline/60 py-4 font-display text-lg text-white last:border-0"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
