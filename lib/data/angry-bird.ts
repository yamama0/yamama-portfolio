export type Maqam = {
  name: string;
  metalVibe: string;
  note: string;
};

export const maqamat: Maqam[] = [
  { name: "Ajam / Major", metalVibe: "Major / Power", note: "Triumphant, anthem-like Metal riffs." },
  { name: "Nahawand / Harmonic Minor", metalVibe: "Harmonic Minor", note: "Neo-classical shredding with an Oriental soul." },
  { name: "Kurd / Natural Minor", metalVibe: "Natural Minor", note: "Heavy, rhythmic chugging with a dark foundation." },
  { name: "Hijaz / Phrygian Dominant", metalVibe: "Dark / Phrygian", note: "The backbone of Oriental Metal — instant tension." },
  { name: "Hijaz Kar / Double Harmonic", metalVibe: "Double Harmonic", note: "Evil and exotic under high-gain distortion." },
  { name: "Hijaz Kar Kurd", metalVibe: "Phrygian / Sultana", note: "Soulful, haunting melodies over heavy chugging." },
  { name: "Saba Zamzama", metalVibe: "Haunting / Diminished", note: "Atmospheric and dark — for intros and breakdowns." },
  { name: "Nawa Athar", metalVibe: "Mystical / Harmonic", note: "Progressive edge that keeps the listener guessing." },
];

export type Episode = {
  number: number;
  scale: string;
  platforms: string[];
  status: string;
};

export const episodes: Episode[] = [
  { number: 1, scale: "Hijaz / Phrygian Dominant", platforms: ["YouTube", "TikTok"], status: "Coming Soon" },
  { number: 2, scale: "Hijaz Kar / Double Harmonic", platforms: ["YouTube", "TikTok"], status: "Coming Soon" },
  { number: 3, scale: "Nahawand / Harmonic Minor", platforms: ["YouTube", "TikTok"], status: "Coming Soon" },
];

/**
 * Served directly from /public. Swap for a Gumroad URL instead if you'd
 * rather gate the download behind email capture.
 */
export const roadmapDownloadUrl = "/The%20Angry%20Bird.pdf";
