import {
  Award,
  BarChart3,
  BookText,
  Boxes,
  CheckCheck,
  ClipboardList,
  Code,
  Container,
  Database,
  Figma,
  FileText,
  FlaskConical,
  Gauge,
  ListChecks,
  ListTodo,
  Map,
  MessageCircle,
  MessageSquare,
  Plug,
  Repeat,
  Smartphone,
  Sparkles,
  Users,
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
  { value: "100+", label: "Test cases authored", detail: "Cypress & Selenium automation" },
] as const;

export type SkillItem = {
  name: string;
  note?: string;
  icon: LucideIcon;
};

export const skillGroups: { title: string; items: readonly SkillItem[] }[] = [
  {
    title: "Product",
    items: [
      { name: "Roadmap planning", icon: Map },
      { name: "PRDs & user stories", icon: FileText },
      { name: "Requirements gathering", icon: ClipboardList },
      { name: "Stakeholder management", icon: Users },
      { name: "Agile / Scrum", icon: Repeat },
      { name: "Backlog grooming", icon: ListChecks },
    ],
  },
  {
    title: "Technical",
    items: [
      { name: "CI/CD", note: "GitHub Actions, Docker", icon: Container },
      { name: "REST & GraphQL APIs", icon: Code },
      { name: "Databases", note: "SQL, MongoDB", icon: Database },
      { name: "AI/ML integration", icon: Sparkles },
      { name: "React Native & ReactJS", icon: Smartphone },
      { name: "Odoo data modelling", icon: Boxes },
    ],
  },
  {
    title: "Quality",
    items: [
      { name: "Cypress & Selenium automation", icon: FlaskConical },
      { name: "End-to-end test strategy", icon: CheckCheck },
      { name: "API testing", note: "Postman, REST-Assured", icon: Plug },
      { name: "Performance", note: "JMeter, LoadRunner", icon: Gauge },
      { name: "ISTQB Certified Tester", icon: Award },
      { name: "Mobile app testing", icon: Smartphone },
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
