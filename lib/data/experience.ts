export type Role = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  /** One line that explains why this step mattered. */
  thesis: string;
  highlights: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: "Suplyd",
    title: "Technical Product Manager",
    location: "Cairo, Egypt",
    start: "Jun 2025",
    end: "Present",
    current: true,
    thesis:
      "Owning discovery-to-release for a B2B procurement platform, with the technical depth to unblock engineering instead of escalating to it.",
    highlights: [
      "Ran the roadmap and backlog in Linear and Notion, authoring 112 tickets across mobile, web and backend teams.",
      "Analysed Mixpanel funnels and support feedback to prioritise an app revamp that lifted usability by 30%.",
      "Shipped a consolidated invoicing and financial dashboard, collapsing three separate sections into one screen.",
      "Automated operations workflows, improving process throughput by 15% and cutting manual reconciliation.",
      "Used Chat PRD to standardise technical user stories so engineers stopped chasing missing acceptance criteria.",
    ],
    tags: ["Roadmap", "Mixpanel", "Linear", "Odoo", "React Native"],
  },
  {
    company: "Suplyd",
    title: "Senior QA Engineer & Associate Product Manager",
    location: "Cairo, Egypt",
    start: "Dec 2023",
    end: "May 2025",
    thesis:
      "The hinge point — building the release pipeline first, then earning the right to decide what goes through it.",
    highlights: [
      "Spearheaded CI/CD automation with Docker and GitHub Actions, reducing deployment time by 40%.",
      "Wrote requirements for mobile and web features alongside stakeholders, moving from testing specs to writing them.",
      "Ran GraphQL query testing to verify API responses and guarantee data accuracy across the platform.",
      "Mentored QA engineers and built the web and mobile test strategy from scratch.",
    ],
    tags: ["Docker", "GitHub Actions", "GraphQL", "Test strategy"],
  },
  {
    company: "Zeal Global Solutions",
    title: "Junior QA Software Engineer",
    location: "Cairo, Egypt",
    start: "May 2022",
    end: "Jun 2023",
    thesis:
      "Where the habit started: if you can describe a defect precisely, you can describe a requirement precisely.",
    highlights: [
      "Designed and executed 100+ test cases and bug reports in Jira, tightening defect resolution workflows.",
      "Led API testing with Postman and REST-Assured for backend services.",
      "Built Selenium WebDriver regression suites that cut post-release defects by 20%.",
    ],
    tags: ["Jira", "Selenium", "Postman", "REST-Assured"],
  },
];

export const education = {
  degree: "B.Eng. Mechatronics",
  school: "Benha University, Faculty of Engineering",
  year: "2021",
  grade: "Excellent",
  thesis:
    "Automated hospital system with an intelligent guided vehicle robot for patient examination — safety-critical control, sensing and pathing.",
};

export const certifications = [
  "ISTQB Certified Tester",
  "Product Management mentoring — Taymour Elkadi",
  "Test Automation: Selenium WebDriver & Cypress",
  "Performance Testing: JMeter & LoadRunner",
  "API Testing: REST-Assured & GraphQL",
  "Mobile Application Testing",
];
