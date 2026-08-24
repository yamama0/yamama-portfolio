/**
 * The Yamama dove mark — the interlocking X/Y form from the brand book,
 * redrawn as inline SVG so it inherits currentColor.
 */
export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1706 1128"
      className={className}
      role="img"
      aria-label="Mohamed Yamama Productions"
      fill="currentColor"
    >
      <path d="M0 0h382c96 0 186 50 236 132l104 172L1005 44c46-27 99-42 153-42h140l-347 574h249c96 0 186 50 236 132l270 420h-382c-96 0-186-50-236-132l-104-172-283 260c-46 27-99 42-153 42H408l347-574H506c-96 0-186-50-236-132L0 0z" />
      <circle cx="1013" cy="130" r="58" fill="#231F20" />
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
