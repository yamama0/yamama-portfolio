export type Metric = { label: string; value: string; note?: string };

export type Section = {
  /** Short heading rendered as the Notion-style block title. */
  heading: string;
  body?: string[];
  bullets?: string[];
  /** Optional table: first row is the header row. */
  table?: string[][];
};

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  status: "Shipped" | "Completed" | "In flight";
  priority: "Urgent" | "High" | "Medium";
  period: string;
  team: string[];
  role: string;
  stack: string[];
  metrics: Metric[];
  /** The four-act structure: Problem, Architecture, Execution, Impact. */
  problem: Section;
  architecture: Section;
  execution: Section;
  impact: Section;
  /** Extra Notion-style blocks rendered after the four acts. */
  appendix?: Section[];
  source: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "consolidated-financial-dashboard",
    title: "Consolidated Financial Dashboard",
    kicker: "PRD v1.0 · Jun 2025",
    summary:
      "Three disconnected money screens — wallet, invoices, savings — merged into one dashboard where users can actually act, not just look.",
    status: "Shipped",
    priority: "High",
    period: "Jun 2025 – Q4 2025",
    team: ["Product (author)", "Mobile — React Native", "Web — ReactJS", "Backend", "QA"],
    role: "PRD author, spec owner, release coordination",
    stack: ["React Native", "ReactJS", "Aggregation APIs", "Payment gateway", "Notification service"],
    metrics: [
      { label: "Page navigations", value: "−30%", note: "Between wallet / invoices / savings" },
      { label: "Dashboard DAU", value: "+20%", note: "Within three months of launch" },
      { label: "Task completion", value: "+25%", note: "Pay invoice, check savings" },
      { label: "Load budget", value: "< 2s", note: "Hard technical target" },
    ],
    problem: {
      heading: "The Problem",
      body: [
        "Financial information on the platform lived in three separate places. A user checking their standing had to open the wallet for a balance, jump to invoices to see what was due, then switch to savings to track progress — a disjointed, time-consuming dance for what should be a single glance.",
        "The cost was not only navigation depth. Because seeing and acting were decoupled, users routinely spotted an overdue invoice and then abandoned the flow before paying it.",
      ],
      bullets: [
        "Excessive page navigation for routine checks",
        "No single view of financial standing",
        "Actions lived one or two screens away from the data that triggered them",
        "No proactive signal for low balance or overdue invoices",
      ],
    },
    architecture: {
      heading: "The Architecture",
      body: [
        "The design deliberately did not rebuild the wallet, invoices, or savings modules. The dashboard is an aggregation layer on top of them, which kept the blast radius small and the delivery fast.",
      ],
      bullets: [
        "Aggregated read endpoints returning wallet balance, outstanding invoice totals and savings progress in a single call.",
        "Three summary cards with progressive disclosure — wallet (balance + last 3–5 transactions), invoices (outstanding amount + overdue count), savings (total saved + this month's progress).",
        "Unified action layer: atomic transactions that debit the wallet and mark an invoice paid in one operation, plus wallet-to-savings transfer.",
        "Notification service integration for low balance, overdue invoice and savings milestone alerts.",
        "User preference store so card order and visibility persist per account.",
      ],
      table: [
        ["Layer", "Responsibility", "Constraint"],
        ["Aggregation API", "One call, all summaries", "< 2s end-to-end"],
        ["Action layer", "Pay invoice, transfer to savings", "Atomic — no partial states"],
        ["Alerts", "Low balance, overdue, milestones", "99% delivery success"],
        ["Preferences", "Card order and visibility", "Per-user, non-blocking"],
      ],
    },
    execution: {
      heading: "The Execution",
      body: [
        "Ten tickets tracked in Linear against the Consolidated Financial Dashboard project, sequenced so the read-only dashboard shipped before any money-moving action went live.",
      ],
      bullets: [
        "Discovery first: user interviews on check frequency and workflow, plus usage analysis to find which sections were accessed together and where users dropped off.",
        "Information hierarchy fixed before UI — wallet balance top, pending invoices immediately below, savings third.",
        "Read-only dashboard shipped first to validate the aggregation performance budget under real load.",
        "Unified actions gated behind the payment gateway integration and reviewed as a separate release.",
        "Optional onboarding tour added to introduce unified actions and customisation without blocking the screen.",
        "Mobile-first breakpoints; adaptive layout verified on small screens before desktop polish.",
      ],
    },
    impact: {
      heading: "The Impact",
      body: [
        "The dashboard became the default landing surface after login. The measurable win was not the view — it was that acting on the data no longer required leaving it.",
      ],
      bullets: [
        "30% reduction in navigation between the three financial sections.",
        "20% increase in daily active users on the dashboard within three months.",
        "25% of users engaging with unified actions directly from the dashboard.",
        "+15% user satisfaction on financial management in the post-launch survey.",
      ],
    },
    appendix: [
      {
        heading: "Non-goals (scope discipline)",
        bullets: [
          "Redesigning the individual wallet, invoices or savings pages from scratch.",
          "Complex budgeting or investment features beyond core overview.",
          "Becoming a full personal finance management tool.",
        ],
      },
      {
        heading: "Known risks logged at spec time",
        bullets: [
          "Balancing information density against clarity — the card could become a wall of numbers.",
          "Real-time accuracy across summarised metrics pulled from three sources.",
          "Sensitive financial data handling under Egyptian data privacy requirements, with audit logs on every dashboard-initiated transaction.",
        ],
      },
    ],
    source: "PRD — Consolidated Financial Dashboard v1.0, Mohamed Yamama, Jun 2025",
  },
  {
    slug: "data-cleansing-onboarding",
    title: "Data Cleansing & Onboarding",
    kicker: "Linear project · Completed Feb 2026",
    summary:
      "Duplicate and incomplete restaurant records were quietly breaking sales, segmentation and AI labelling. Fixed the legacy data, then closed the door behind it.",
    status: "Completed",
    priority: "Urgent",
    period: "Nov 2025 – Feb 2026",
    team: ["Product (lead)", "Backend", "Growth", "Commercial", "Support"],
    role: "Project lead, PRD author",
    stack: ["Odoo", "Fuzzy matching", "Webhooks", "Instagram Graph API", "AI enrichment"],
    metrics: [
      { label: "Target data accuracy", value: "99%", note: "Active restaurants in Odoo" },
      { label: "Support load", value: "−50%", note: "Record-confusion tickets" },
      { label: "Tickets shipped", value: "20", note: "Tracked in Linear" },
      { label: "Free-text addresses", value: "0", note: "Canonical zones only" },
    ],
    problem: {
      heading: "The Problem",
      body: [
        "Rapid B2B growth had filled Odoo with duplicate, inconsistent and incomplete restaurant records. A commercial rep standing outside a venue could not reliably tell whether it was already in the system. Growth could not match external intelligence to internal records, so segmentation and AI labelling ran on unreliable input.",
        "Meanwhile the signup flow was the source of the mess: free-text addresses and optional-everything fields meant every new account risked becoming another duplicate.",
      ],
      bullets: [
        "Duplicates on restaurant name + area, with no reliable de-dupe check",
        "Free-text location entry producing unmatchable address data",
        "Segmentation and AI enrichment degraded by dirty input",
        "Manual support effort spent reconciling records by hand",
      ],
    },
    architecture: {
      heading: "The Architecture",
      body: [
        "Three tracks running in parallel: cleanse what exists, harden the front door, and keep it clean automatically. Automation and pragmatism drove coverage — manually correcting every legacy record was an explicit non-goal.",
      ],
      bullets: [
        "One-time cleansing: fuzzy match on restaurant name + area, merge, then enrich missing fields.",
        "Phone verification as the authentication anchor for every new account.",
        "Instagram handle as the business-identity signal — skippable, but the account stays flagged unverified pending a manual call.",
        "Searchable multi-select of canonical cities and zones. No free-text location entry anywhere in the onboarding UI.",
        "Branch count inferred from selected zones rather than demanded at signup.",
        "Scheduled nightly job scanning for new duplicates, suspicious fields and critical missing data.",
        "Save-time block: a clear name + area duplicate cannot be written.",
        "Audit log on every merge and edit, visible to the internal team.",
      ],
      table: [
        ["Track", "Mechanism", "Owner"],
        ["Legacy cleanup", "Fuzzy match, merge, enrich", "Backend + AI enrichment"],
        ["Prevention", "Phone → Instagram → canonical zones", "Product + Mobile"],
        ["Ongoing integrity", "Nightly scan + flag for review", "Support / Commercial"],
      ],
    },
    execution: {
      heading: "The Execution",
      body: [
        "20 tickets in Linear, priority Urgent, sequenced so prevention landed before the bulk merge — otherwise the cleanup would have been re-polluted while it ran.",
      ],
      bullets: [
        "Built canonical city and zone master lists, kept in lockstep with platform location changes.",
        "Rewrote the signup flow: phone verification, then Instagram, then zone multi-select — no address, no documents.",
        "Added real-time de-dupe checks between the customer app and the Odoo data store via webhooks.",
        "Shipped a lightweight flag-for-review workflow so commercial and support could correct records without engineering.",
        "Ran the merge in batches with audit logging, so any bad merge stayed reversible.",
        "Rolled corrections out without disrupting live internal workflows — a stated project risk.",
      ],
    },
    impact: {
      heading: "The Impact",
      body: [
        "Data stopped being a hurdle and started being usable input. Field reps can search a name and area and trust the answer; growth can match external intelligence to internal records.",
      ],
      bullets: [
        "Target of 99% accuracy and uniqueness for active restaurant records.",
        "Roughly half the manual support workload on record confusion removed.",
        "Segmentation by cuisine, location and menu intelligence unblocked.",
        "Signup friction reduced rather than increased — phone plus Instagram plus zones, in seconds.",
        "Designed to hold at 10x current data volume with batched scheduled jobs.",
      ],
    },
    appendix: [
      {
        heading: "The hard cases",
        bullets: [
          "Common restaurant names — a 'Grill House' in every zone defeats naive matching.",
          "Blocking obvious duplicates without adding customer-facing friction.",
          "Weak social footprint venues that legitimately have no Instagram presence.",
        ],
      },
    ],
    source: "Linear — Development › Completed projects export",
  },
  {
    slug: "analytics-tracking-consistency",
    title: "Analytics Tracking Consistency",
    kicker: "Linear project · 2026",
    summary:
      "Mixpanel and WebEngage disagreed about what users were doing. Rebuilt the event contract so prioritisation stopped running on contradictory numbers.",
    status: "Shipped",
    priority: "High",
    period: "2026",
    team: ["Product (lead)", "Mobile — React Native", "Web — ReactJS", "Growth"],
    role: "Spec owner, event schema definition",
    stack: ["Mixpanel", "WebEngage", "React Native", "ReactJS"],
    metrics: [
      { label: "Tickets shipped", value: "6", note: "Tracked in Linear" },
      { label: "Surfaces aligned", value: "3", note: "Mobile, web, delivery app" },
      { label: "Event contract", value: "1", note: "Single shared schema" },
    ],
    problem: {
      heading: "The Problem",
      body: [
        "Two analytics systems were instrumented independently across mobile and web, with drifting event names and inconsistent properties. Funnels built in Mixpanel did not reconcile with WebEngage campaign data, which meant every prioritisation argument could be won by whoever picked the more flattering source.",
      ],
      bullets: [
        "Divergent event naming between platforms and vendors",
        "Missing or inconsistent event properties",
        "Funnel numbers that could not be reconciled",
        "Prioritisation decisions resting on untrustworthy data",
      ],
    },
    architecture: {
      heading: "The Architecture",
      body: [
        "One event contract, defined in product, implemented identically on every surface. The tracking plan became a reviewable artifact rather than tribal knowledge in each codebase.",
      ],
      bullets: [
        "Canonical event taxonomy with fixed names, required properties and expected types.",
        "Shared instrumentation helpers on mobile and web to make the correct call the easy call.",
        "Parity checks between Mixpanel and WebEngage on the same user journeys.",
        "Documented tracking plan as the single reference for growth and engineering.",
      ],
    },
    execution: {
      heading: "The Execution",
      bullets: [
        "Audited existing events across React Native and ReactJS apps to find drift and gaps.",
        "Defined the corrected schema and reviewed it with growth before any code changed.",
        "Rolled corrections out per surface, validating each against a known user journey.",
        "Retired duplicate and dead events rather than leaving them to confuse future analysis.",
      ],
    },
    impact: {
      heading: "The Impact",
      bullets: [
        "Funnels reconcile across vendors, so feature prioritisation runs on one number.",
        "Growth campaigns trigger on events that mean what they claim to mean.",
        "New features ship with instrumentation specified in the ticket, not retrofitted after launch.",
      ],
    },
    source: "Linear — Mixpanel & WebEngage Correction and Tracking Consistency",
  },
  {
    slug: "cicd-pipeline-automation",
    title: "CI/CD Pipeline Automation",
    kicker: "Engineering foundation · 2024",
    summary:
      "Before the product work: containerised the build and wired GitHub Actions, taking 40% off deployment time and making release cadence a decision rather than an event.",
    status: "Shipped",
    priority: "High",
    period: "Dec 2023 – May 2025",
    team: ["QA (lead)", "Backend", "DevOps"],
    role: "Implementation lead",
    stack: ["Docker", "GitHub Actions", "Cypress", "GraphQL"],
    metrics: [
      { label: "Deployment time", value: "−40%", note: "vs. manual release process" },
      { label: "Post-release defects", value: "−20%", note: "Regression automation" },
      { label: "Test cases authored", value: "100+", note: "Web and mobile" },
    ],
    problem: {
      heading: "The Problem",
      body: [
        "Releases were manual, slow and therefore rare — which made every release large and every large release risky. Regression coverage lived in people's heads, so quality depended on who happened to be testing.",
      ],
      bullets: [
        "Manual, environment-dependent deployments",
        "Release batching that concentrated risk",
        "No automated regression gate before production",
        "API responses verified ad hoc rather than systematically",
      ],
    },
    architecture: {
      heading: "The Architecture",
      bullets: [
        "Docker images to make build environments reproducible across machines.",
        "GitHub Actions pipelines running build, test and deploy stages on every push.",
        "Cypress and Selenium regression suites wired as a gate, not an afterthought.",
        "GraphQL query testing to verify API responses and data accuracy across the platform.",
      ],
    },
    execution: {
      heading: "The Execution",
      bullets: [
        "Containerised the build first, so the pipeline had a stable target to deploy.",
        "Added stages incrementally — build, then test, then deploy — keeping the team shipping throughout.",
        "Built the web and mobile test strategy alongside the pipeline so automation had something to run.",
        "Mentored QA engineers on maintaining suites, so coverage survived handover.",
      ],
    },
    impact: {
      heading: "The Impact",
      body: [
        "This is the work that made the product role possible. Owning the release pipeline meant later owning what went through it — and being able to unblock engineering directly instead of escalating.",
      ],
      bullets: [
        "40% reduction in deployment time.",
        "20% fewer post-release defects.",
        "Release cadence became a product decision rather than an engineering constraint.",
      ],
    },
    source: "Résumé — Senior QA Engineer & Associate PM, Suplyd",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
