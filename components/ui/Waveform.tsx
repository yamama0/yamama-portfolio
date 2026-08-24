"use client";

import { useReducedMotion } from "framer-motion";

/**
 * The signature element: a bar-graph that reads as both an audio level
 * meter and a delivery burndown. Bar heights are seeded, not random, so
 * server and client render identically.
 */
const SEED = [
  0.32, 0.55, 0.78, 0.44, 0.92, 0.61, 0.38, 0.7, 0.85, 0.5, 0.27, 0.66, 0.94,
  0.41, 0.58, 0.8, 0.35, 0.72, 0.48, 0.88, 0.3, 0.63, 0.76, 0.42, 0.9, 0.53,
  0.36, 0.68, 0.82, 0.46,
];

export function Waveform({
  bars = 30,
  className = "",
  animate = true,
}: {
  bars?: number;
  className?: string;
  animate?: boolean;
}) {
  const reduce = useReducedMotion();
  const live = animate && !reduce;

  return (
    <div
      className={`flex items-end gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => {
        const h = SEED[i % SEED.length];
        return (
          <span
            key={i}
            className={`w-[3px] flex-none rounded-full bg-gold/70 ${
              live ? "animate-bar-pulse" : ""
            }`}
            style={{
              height: `${Math.round(h * 100)}%`,
              transformOrigin: "bottom",
              animationDelay: `${(i % 12) * 0.09}s`,
              animationDuration: `${1 + (i % 5) * 0.14}s`,
            }}
          />
        );
      })}
    </div>
  );
}
