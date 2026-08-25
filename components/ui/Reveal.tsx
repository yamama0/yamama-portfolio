"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger index — multiplied by 0.08s. */
  i?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "span";
};

/**
 * Scroll-triggered reveal. Honours prefers-reduced-motion by rendering
 * content immediately with no transform.
 */
export function Reveal({ children, i = 0, y = 20, className, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      style={{ willChange: "opacity, transform" }}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.7,
        delay: i * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
