import type { Metadata } from "next";
import { AudioHub } from "@/components/AudioHub";
import { AngryBird } from "@/components/AngryBird";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Creator Hub and The Angry Bird — audio production work and the fusion of Maqamat scales with Heavy Metal guitar.",
};

export default function MusicPage() {
  return (
    <>
      <AudioHub />
      <AngryBird />
    </>
  );
}
