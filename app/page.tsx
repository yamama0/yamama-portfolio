import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { AudioHub } from "@/components/AudioHub";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CaseStudyGrid />
      <AudioHub />
      <Timeline />
      <Contact />
    </>
  );
}
