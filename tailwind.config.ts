import type { Config } from "tailwindcss";

/**
 * Brand tokens taken directly from "Yamama Branding.pdf".
 *   Golden Yellow  #FDB913  (C=0  M=30 Y=100 K=0)
 *   Charcoal Black #231F20  (C=0  M=0  Y=0   K=100)
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Core brand ---
        gold: {
          DEFAULT: "#FDB913",
          50: "#FFF8E6",
          100: "#FEEFC2",
          200: "#FEE290",
          300: "#FDD05B",
          400: "#FDC434",
          500: "#FDB913",
          600: "#D99A08",
          700: "#A87604",
          800: "#6F4E02",
          900: "#3B2A01",
        },
        charcoal: {
          DEFAULT: "#231F20",
          // Tuned elevation ramp above the brand black — used for cards & borders.
          950: "#1A1718",
          900: "#231F20",
          800: "#2C2829",
          700: "#3A3536",
          600: "#4C4647",
          500: "#6B6465",
        },
        // Semantic aliases so components never hardcode hex values.
        ink: "#231F20",
        surface: "#2C2829",
        hairline: "#3A3536",
      },
      fontFamily: {
        // Agate-Bold / ITC Avant Garde Gothic Std are licensed faces.
        // We load them from /public/fonts when present and fall back to
        // Montserrat / Poppins (loaded via next/font in app/layout.tsx).
        display: ["var(--font-display)", "Montserrat", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Poppins", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "10xl": ["9.5rem", { lineHeight: "0.86", letterSpacing: "-0.04em" }],
      },
      letterSpacing: {
        brand: "0.42em", // the "P R O D U C T I O N S" lockup spacing
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(110deg, #FDB913 0%, #FDD05B 45%, #FDB913 100%)",
        "ink-fade":
          "linear-gradient(180deg, rgba(35,31,32,0) 0%, #231F20 70%)",
        "radial-gold":
          "radial-gradient(60% 60% at 50% 0%, rgba(253,185,19,0.16) 0%, rgba(35,31,32,0) 100%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(253,185,19,0.35), 0 18px 40px -18px rgba(253,185,19,0.45)",
        lift: "0 24px 60px -28px rgba(0,0,0,0.85)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-2.5%, -1.5%, 0)" },
        },
        "bar-pulse": {
          "0%,100%": { transform: "scaleY(0.28)" },
          "50%": { transform: "scaleY(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        drift: "drift 26s ease-in-out infinite",
        "bar-pulse": "bar-pulse 1.1s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: { shell: "78rem" },
    },
  },
  plugins: [],
};

export default config;
