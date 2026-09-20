import {
  BarChart3,
  BookText,
  Figma,
  ListTodo,
  MessageCircle,
  MessageSquare,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Yamama",
  role: "Technical Product Manager",
  altRole: "Audio Tech Creator",
  location: "New Cairo, Egypt",
  timezone: "GMT+2 · overlaps EU & US-East",
  email: "mohamedyamama001@gmail.com",
  phone: "+20 100 424 4521",
  linkedin: "https://www.linkedin.com/in/mohamed-yamama001",
  github: "https://github.com/yamama0",
  creatorHandle: "@llyamamall",
  headline: "Bridging the Gap Between Engineering Execution and Audio Innovation.",
  subheadline: "Yamama | Technical Product Manager & Audio Tech Creator",
  availability:
    "Open to global remote roles and relocation.",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "Intermediate" },
  ],
} as const;

/** Pulled from the Linear export (My issues › Created.csv, 112 tickets). */
export const stats = [
  { value: "40%", label: "Deployment time cut", detail: "Docker + GitHub Actions CI/CD" },
  { value: "112", label: "Tickets authored", detail: "Linear, May 2025 – Aug 2026" },
  { value: "83%", label: "Shipped to production", detail: "93 of 112 released" },
  { value: "13+", label: "Years on instruments", detail: "Composer & producer" },
] as const;

export type ToolItem = {
  name: string;
  note?: string;
  icon: LucideIcon;
};

export type SkillItem = string | ToolItem;

export const skillGroups: { title: string; items: readonly SkillItem[] }[] = [
  {
    title: "Product",
    items: [
      "Technical roadmap planning",
      "PRDs & user stories",
      "Requirements gathering",
      "Stakeholder management",
      "Agile / Scrum",
      "Backlog grooming",
    ],
  },
  {
    title: "Technical",
    items: [
      "CI/CD (GitHub Actions, Docker)",
      "REST & GraphQL APIs",
      "SQL (basic), MongoDB",
      "AI/ML integration concepts",
      "React Native & ReactJS delivery",
      "Odoo data modelling",
    ],
  },
  {
    title: "Quality",
    items: [
      "Cypress & Selenium automation",
      "End-to-end test strategy",
      "API testing (Postman, REST-Assured)",
      "Performance (JMeter, LoadRunner)",
      "ISTQB Certified Tester",
      "Mobile app testing",
    ],
  },
  {
    title: "Tooling",
    items: [
      { name: "Linear", icon: ListTodo },
      { name: "Notion", note: "databases & workflows", icon: BookText },
      { name: "Jira", icon: Workflow },
      { name: "Figma", icon: Figma },
      { name: "Mixpanel", icon: BarChart3 },
      { name: "WebEngage", icon: MessageSquare },
      { name: "Chat PRD", icon: MessageCircle },
    ],
  },
];

export const audioStack = [
  {
    category: "DAW & Interface",
    items: [
      { name: "Ableton Live", role: "DAW / arrangement", note: "Primary production environment" },
      { name: "Focusrite Scarlett 2i2", role: "Audio interface", note: "Tracking guitars, oud & vocals" },
    ],
  },
  {
    category: "Signal Chain & Control",
    items: [
      { name: "Zoom G6 Multieffects", role: "Tone & FX", note: "Tone shaping and FX for the electrics" },
      { name: "Novation Launchkey", role: "MIDI controller", note: "Keys, drums, automation" },
    ],
  },
  {
    category: "Instruments",
    items: [
      { name: "Cort Jade 1E-AW", role: "Acoustic", note: "Main acoustic — rhythm and foundation" },
      { name: "Schecter C1 Platinum", role: "Drop-tuned metal", note: "The darkest, heaviest riffs" },
      { name: "Ibanez RG 421", role: "Lead", note: "Soloing and balanced playing" },
      { name: "Squier Telecaster Affinity", role: "Clean tones", note: "Jazz, rock and pop" },
      { name: "Epiphone Les Paul SL", role: "Rock", note: "Rock rhythm and crunch" },
      { name: "Oud", role: "Oriental lead", note: "Arabic maqam and oriental phrasing" },
    ],
  },
] as const;

export const socials = [
  {
    platform: "Instagram",
    handle: "@llyamamall",
    url: "https://www.instagram.com/llyamamall/",
  },
  {
    platform: "YouTube",
    handle: "@llyamamall",
    url: "https://www.youtube.com/@llyamamall",
  },
  {
    platform: "Facebook",
    handle: "Yamama",
    url: "https://www.facebook.com/profile.php?id=61571549683342",
  },
  {
    platform: "TikTok",
    handle: "@llyamamall",
    url: "https://www.tiktok.com/@llyamamall?lang=en",
  },
] as const;
