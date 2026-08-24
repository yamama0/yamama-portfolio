import Link from "next/link";
import { Waveform } from "@/components/ui/Waveform";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70vh] flex-col items-start justify-center gap-6">
      <Waveform bars={18} className="h-10 w-32" animate={false} />
      <h1 className="text-4xl sm:text-5xl">This page isn&apos;t in the mix.</h1>
      <p className="max-w-md text-white/55">
        The URL doesn&apos;t match anything here. Head back to the portfolio and
        pick a case study.
      </p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </div>
  );
}
