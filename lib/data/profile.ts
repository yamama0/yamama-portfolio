export const profile = {
  name: "Mohamed Yamama",
  role: "Technical Product Manager",
  altRole: "Audio Tech Creator",
  location: "New Cairo, Egypt",
  timezone: "GMT+2 · overlaps EU & US-East",
  email: "mohamedyamama001@gmail.com",
  phone: "+20 100 424 4521",
  linkedin: "https://www.linkedin.com/in/mohamedyamama",
  github: "https://github.com/mohamedyamama",
  creatorHandle: "@llyamamall",
  headline: "Bridging the Gap Between Engineering Execution and Audio Innovation.",
  subheadline: "Mohamed Yamama | Technical Product Manager & Audio Tech Creator",
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

export const skillGroups = [
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
      "Linear",
      "Notion (databases & workflows)",
      "Jira",
      "Mixpanel",
      "WebEngage",
      "Chat PRD",
    ],
  },
] as const;

export const audioStack = [
  { name: "Ableton Live", role: "DAW / arrangement", note: "Primary production environment" },
  { name: "Focusrite Scarlett 2i2", role: "Audio interface", note: "Tracking guitar & vocals" },
  { name: "Novation Launchkey", role: "MIDI controller", note: "Keys, drums, automation" },
  { name: "Oud & Guitar", role: "Instruments", note: "Arabic maqam meets Western harmony" },
] as const;
