import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { PageTransition } from "@/components/PageTransition";
import { profile } from "@/lib/data/profile";

/**
 * Agate-Bold and ITC Avant Garde Gothic Std are licensed faces and cannot
 * be served from a public CDN. Montserrat (display) and Poppins (body) are
 * the sanctioned fallbacks; app/globals.css lets the real faces take over
 * automatically if the .woff2 files are dropped into /public/fonts.
 */
const display = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedyamama.com"),
  title: {
    default: "Yamama — Technical Product Manager & Audio Tech Creator",
    template: "%s · Yamama",
  },
  description:
    "Technical Product Manager with an engineering foundation in QA automation and CI/CD. Portfolio of TPM case studies and audio production work.",
  keywords: [
    "Technical Product Manager",
    "TPM portfolio",
    "Product Manager Egypt",
    "CI/CD",
    "audio tech",
    "Yamama",
    "Maqam guitar",
    "Oriental Metal",
    "Oud guitar fusion",
    "The Angry Bird",
    "Arabic scales metal",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Yamama — Technical Product Manager & Audio Tech Creator",
    description: `${profile.headline} Creator of The Angry Bird — a fusion of ancient Maqamat and Heavy Metal guitar.`,
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#231F20",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} dark`}
    >
      <body className="min-h-screen bg-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
