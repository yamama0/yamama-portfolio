"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./ui/Logo";

const links = [
  { href: "/#about", label: "About" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/#experience", label: "Experience" },
  { href: "/music", label: "Creator Hub" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet and route Escape key to close it.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Move focus into the sheet on open, back to the toggle on close.
  useEffect(() => {
    if (open) {
      // Defer one tick so the AnimatePresence has mounted the element.
      const t = window.setTimeout(() => firstLinkRef.current?.focus(), 50);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, [open]);

  const navShellClass = `fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-brand ${
    open
      ? "border-b border-hairline bg-ink"
      : scrolled
        ? "border-b border-hairline bg-ink/85 backdrop-blur-xl"
        : "border-b border-transparent"
  }`;

  return (
    <header className={navShellClass}>
      <nav className="shell flex h-[68px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-gold"
          aria-label="Yamama — home"
        >
          <Logo className="h-6 w-auto" />
          <span className="hidden font-display text-sm font-bold tracking-wide text-white sm:block">
            Yamama
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
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <>
            {/* Backdrop scrim */}
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-[68px] -z-10 h-[calc(100vh-68px)] bg-ink/70 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            />

            <motion.div
              key="sheet"
              id="mobile-nav"
              role="region"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-hairline bg-ink md:hidden"
            >
              <ul className="shell flex flex-col py-4">
                {[...links, { href: "/#contact", label: "Get in touch" }].map((l, i) => (
                  <li key={l.href}>
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
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
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
