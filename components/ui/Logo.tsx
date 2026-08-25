/**
 * The Yamama dove mark — the interlocking X/Y form from the brand book,
 * redrawn as inline SVG so it inherits currentColor.
 */
export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1700.79 1117.97"
      className={className}
      role="img"
      aria-label="Yamama Productions"
      fill="currentColor"
      fillRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1381,636.08l-.09-.14a199.82,199.82,0,0,0-161.66-82.16H1080l219-444.6L1110.65,16.45a200.08,200.08,0,0,0-256.64,91L725.11,369.2l-187.82-283-.17-.26A199.82,199.82,0,0,0,372.75,0H0L319.82,481.86l.1.14a199.8,199.8,0,0,0,161.66,82.16H629.11L410.07,1009l181.49,89.39a200.11,200.11,0,0,0,264.61-90v-.06L980.47,756l183,275.74a3,3,0,0,0,.16.26,199.89,199.89,0,0,0,164.37,86h372.76ZM1018.57,182.72a47.23,47.23,0,1,1,47.23-47.23,47.22,47.22,0,0,1-47.23,47.23" />
    </svg>
  );
}

/**
 * Tiling background pattern derived from the brand book's interlocking
 * dove/"Y" motif. Rendered as an SVG <pattern> so it stays crisp and
 * costs nothing to scale.
 */
export function DovePattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id="yamama-weave"
          width="88"
          height="88"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(12)"
        >
          <path
            d="M4 4l20 34-20 34M44 4l20 34-20 34M24 38h20M64 38h20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <circle cx="30" cy="12" r="2" fill="currentColor" />
          <circle cx="70" cy="56" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#yamama-weave)" />
    </svg>
  );
}
