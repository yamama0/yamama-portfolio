import type { Metadata } from "next";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Five problems, and what actually shipped — TPM case studies reconstructed from the real PRDs, Linear projects, and ticket history.",
};

export default function CaseStudiesPage() {
  return <CaseStudyGrid />;
}
