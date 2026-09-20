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
    slug: "ai-food-support-assistant",
    title: "AI-Powered Food Order Support Assistant",
    kicker: "TPO / SM Assessment · Sep 2026",
    summary:
      "Support agents were drowning in manual lookups across five systems for every ticket. Delivered a human-in-the-loop AI assistant — context aggregation, PII masking, grounded 3-sentence summaries, categorized next-best-actions — with agents always owning the final decision.",
    status: "In flight",
    priority: "Urgent",
    period: "Sep 2026 – Dec 2026 (12 weeks / 3 releases)",
    team: [
      "Technical Product Owner / Scrum Master (author)",
      "Backend / API gateway",
      "AI engineering",
      "QA",
      "Compliance",
      "Support operations",
    ],
    role: "Technical Product Owner & Scrum Master — wrote the functional + non-functional requirements, drove MoSCoW + WSJF sequencing, owned GDPR sign-off as a release gate, facilitated Three Amigos and retros",
    stack: [
      "Enterprise GPT API (zero-retention tier)",
      "React / Vue SPA agent portal",
      "REST integrations (5 systems)",
      "OAuth 2.0 + RBAC",
      "PostgreSQL audit log",
      "Adapter pattern + circuit breakers",
    ],
    metrics: [
      { label: "AHT reduction", value: "−30%", note: "vs baseline (target)" },
      { label: "FCR improvement", value: "+10 pts", note: "vs baseline (target)" },
      { label: "Recommendation acceptance", value: "≥ 70%", note: "Approved without modification" },
      { label: "Hallucination rate", value: "≤ 2%", note: "QA audit sampling" },
    ],
    problem: {
      heading: "The Problem",
      body: [
        "Support teams were handling thousands of food-order inquiries every week. Before responding, agents manually reviewed order details, delivery status, payment information, and prior interactions across five separate systems. The result was long handling times, inconsistent resolutions, and lower CSAT — with the stated business target being a 30% reduction in AHT and an FCR improvement.",
        "Building an AI assistant is the obvious answer; doing it without leaking PII, hallucinating policy, or removing human accountability is the hard part. The assessment defined the MVP that ships in three months while keeping agents in full control of every customer-facing decision.",
      ],
      bullets: [
        "Manual context gathering across five systems was the single largest AHT driver",
        "Existing solutions either skip PII protection or auto-execute customer-facing actions",
        "Outdated delivery status silently corrupts downstream refund recommendations",
        "Baseline AHT / FCR, PII field list, and AI provider policy all undecided at kickoff",
      ],
    },
    architecture: {
      heading: "The Architecture",
      body: [
        "Every inquiry becomes a case. The platform fans out to five REST APIs in parallel, masks PII before any external transmission, and sends a minimized payload to an enterprise GPT API on a zero-retention tier. The model returns a grounded 3-sentence summary and a categorized next-best-action — never an executed decision. Agents validate, edit, or override every recommendation in a unified web portal.",
      ],
      bullets: [
        "Agent Portal SPA — summary card on top, categorized NBA below, raw-context toggle always one click away for verification.",
        "API Gateway — OAuth 2.0 + RBAC at the edge, throttling, tracing, and circuit breakers per integration.",
        "Aggregation Service — parallel fan-out across ordering, delivery, payment/refund, CRM and support APIs, normalized into one schema with per-API timeout and graceful fallback.",
        "Data Sanitizer — regex / NLP masking layer replacing names, emails, phone numbers, addresses, and payment references with [TOKEN] before any payload leaves the boundary.",
        "Generative AI Middleware — versioned prompt templates, JSON schema enforcement for the six allowed NBA categories, confidence scoring, automatic fallback on schema violation or timeout.",
        "Feedback & Audit Service — append-only, tamper-evident log of every approve / reject / override event feeding both the operational dashboard and the eval harness.",
        "ISO 8601 timestamps + freshness guards (≤ 5 min since last update) — stale data blocks refund recommendations before they render.",
      ],
      table: [
        ["API", "Data", "Auth", "Timeout", "Failure handling", "Risk"],
        ["Ordering", "Items, value, restaurant, placed time", "OAuth 2.0", "2s", "Unavailable panel + retry; snapshot data", "Med"],
        ["Delivery Tracking", "Status, courier, ETA, last-update ts", "OAuth 2.0", "2s", "Last-known-good + STALE badge; ≥ 5 min blocks refund NBA", "HIGH"],
        ["Payment / Refund", "Status, refund status, reference", "mTLS", "3s", "Masked references only; refund NBA disabled on failure; never raw PAN", "HIGH"],
        ["CRM", "Last 5 interactions, notes, segments", "OAuth 2.0", "1s", "No-history state; informational only — never a fact source", "Low"],
        ["Customer Support", "Case data, prior tickets", "OAuth 2.0", "2s", "Local queue + async retry on write failure", "Med"],
      ],
    },
    execution: {
      heading: "The Execution",
      body: [
        "Three monthly releases gated by MoSCoW + WSJF. Sprint boards were strictly Must-Have-only; anything else was refined for the next sprint. Fully automated refund / cancellation execution was explicitly Won't-Have to preserve the human-in-the-loop constraint.",
      ],
      bullets: [
        "R1 — Foundation (W1–W4): API gateway, adapters for all five systems, unified JSON schema, normalization + timeout fallbacks, freshness guard v1, compliance spike on masking architecture.",
        "R2 — AI Engine & Core UI (W5–W8): PII masking layer compliance-approved, LLM integration on the zero-retention tier, prompt engineering + eval harness, React portal with summary card, NBA, raw-context toggle.",
        "R3 — Feedback & Go-Live (W9–W12): override / feedback capture, immutable audit log, KPI dashboard, UAT with 10–20 pilot agents, GDPR audit, production deploy + hypercare.",
        "Three Amigos sessions (PO, QA Lead, Tech Lead) before each sprint planning to map edge cases in the data layer before writing code.",
        "Critical defect (outdated delivery status) was logged as the highest-priority bug + impediment and swarmed with paired dev + QA until regression coverage landed.",
        "Stakeholder dashboard request mid-sprint was logged to backlog, declined for the current sprint, and explicitly targeted post-MVP to protect the goal.",
      ],
    },
    impact: {
      heading: "The Impact",
      body: [
        "The release removes the single largest AHT driver — manual context gathering across five systems — and standardizes decision quality across agents, while preserving the GDPR posture and keeping humans in charge of every customer-facing action.",
      ],
      bullets: [
        "Business KPI — AHT reduction ≥ 30% vs baseline; FCR improvement ≥ +10 pts vs baseline.",
        "Operational KPI — portal uptime ≥ 99.9%, gateway latency ≤ 300ms p95, third-party timeout rate ≤ 1%.",
        "AI Quality KPI — recommendation acceptance ≥ 70% (approved unmodified), hallucination rate ≤ 2% (QA sampling), summary adherence ≥ 95% (grounded, ≤ 3 sentences).",
        "Compliance KPI — zero GDPR incidents, append-only audit retained ≥ 12 months, DPIA signed before go-live.",
        "Adoption KPI — ≥ 80% of pilot agents daily-active by W12; ≥ 90% feedback / override completion on rejections.",
      ],
    },
    appendix: [
      {
        heading: "Fallback behavior matrix",
        bullets: [
          "Delivery data stale (≥ 5 min) — STALE badge; refund NBA suppressed; 'Data stale — escalate manually' shown.",
          "Payment API unavailable — refund NBA disabled; 'Payment status unknown — escalate' shown; non-refund actions proceed.",
          "AI confidence low — caution label + raw-context toggle highlighted; agent decision still possible.",
          "Required data missing — 'Unavailable' panel + retry; AI prompted only with what exists; summary notes the gap.",
          "Systems disagree — source-of-truth hierarchy applied (ordering / delivery / payment over CRM); conflict surfaced to the agent explicitly.",
          "AI service outage / timeout — circuit breaker opens; portal switches to manual-template mode with raw context; requests replayed async. Agent is never blocked.",
        ],
      },
      {
        heading: "Top risks and mitigations",
        bullets: [
          "Outdated delivery status — freshness guard + read-time validation + regression tests (TPO + Eng).",
          "AI hallucination from misread / missing data — masked-but-complete context, strict JSON schemas, confidence scores, rules validation (AI Eng).",
          "GDPR / payment-reference exposure — tokenization pre-LLM, zero-retention DPA, audit logs, DPIA before go-live (Compliance).",
          "Agent adoption resistance — shadowing sessions, raw-context toggle, feedback loop, agent champions (TPO + Ops).",
        ],
      },
      {
        heading: "AI model decision",
        bullets: [
          "Recommended: Option A — External enterprise GPT API on a zero-retention tier, protected by a backend PII masking / tokenization layer and a signed DPA.",
          "Rationale: 3-month deadline makes internal LLM deployment unfeasible; zero-retention keeps GDPR posture defensible.",
          "Exit path: model-abstraction layer so a future swap to an internal LLM is configuration, not a rewrite.",
        ],
      },
    ],
    source: "TPO / SM Assessment — AI-Powered Food Order & Customer Support Assistant, Yamama, Sep 2026",
  }
,

  {
    slug: "dsquares-loyalty-wallet-engine",
    title: "Dsquares Loyalty: Transparent Wallet & Earning Engine",
    kicker: "Strategic PRD · 2024",
    summary:
      "Users were logging in at scale but converting at only 70% — and support was drowning in expired-voucher tickets. Rebuilt the rewards layer as a utility-first transaction companion with explicit state, real-time criteria, and graceful cart validation.",
    status: "Shipped",
    priority: "High",
    period: "2024",
    team: [
      "Delivery Product Owner (author)",
      "Mobile — iOS & Android",
      "Backend",
      "QA",
      "Compliance",
      "Retail brand partners",
    ],
    role: "Delivery Product Owner — wrote the PRD, ran RICE prioritization, owned the Gherkin acceptance criteria, sequenced releases across multi-brand partners",
    stack: [
      "PostgreSQL",
      "Metabase",
      "Mixpanel / Amplitude",
      "Push notifications",
      "POS webhooks",
      "ISO 8601 UTC time normalization",
    ],
    metrics: [
      { label: "Activation target", value: "70% → 85%", note: "Login → first transaction conversion" },
      { label: "Support overhead", value: "−40%", note: "Tickets tagged 'Expired Benefits' / 'Invalid Codes'" },
      { label: "API latency", value: "< 200ms", note: "Cart validation p95" },
      { label: "RICE winner", value: "Init. 2", note: "Real-Time Wallet & State Engine" },
    ],
    problem: {
      heading: "The Problem",
      body: [
        "The loyalty app had strong reach — most logged-in users browsed for extended sessions — yet only 70% of them converted into an actual transaction. The application behaved like a passive catalog, leaving users in a state of decision paralysis when faced with high-value but abstract offers.",
        "In parallel, support was spending an outsized share of its week answering the same two questions: why is my voucher expired, and why is this code already used. Both complaints traced back to the same root cause — users could not see the rules that governed their benefits, and the cart validation API failed loudly on edge cases rather than recovering gracefully.",
      ],
      bullets: [
        "30% drop-off between login and first transaction — the activation chasm",
        "No structural urgency or transparent earning logic to nudge browsing toward action",
        "Users unaware of voucher expiration windows and minimum-spend criteria until failure at checkout",
        "Cart validation API hitting race conditions during peak traffic and disconnected retail POS states",
        "Repeated support tickets that the application itself could have prevented",
      ],
    },
    architecture: {
      heading: "The Architecture",
      body: [
        "The redesign shifted the app from a passive catalog into an active, utility-focused transaction companion. Instead of rebuilding the catalog, three initiatives were evaluated against the RICE framework and sequenced by impact, not by elegance.",
      ],
      bullets: [
        "Initiative 1 — Transparent Earning Ledger: a clean, tabular UI on the home screen detailing exactly how points are computed across different retail brands, removing calculation confusion during browsing.",
        "Initiative 2 — Real-Time Wallet & State Engine (the chosen focus): a full wallet overhaul replacing static lists with explicit utility-driven states ('Active,' 'Expiring in X Hours,' 'Criteria Not Met'), paired with time-sensitive push alerts before vouchers lapse.",
        "Initiative 3 — Proactive Cart Error Guard: enhanced cart validation API that gracefully degrades on edge-case failures — caching token states locally and surfacing clear, actionable error messages instead of generic crashes.",
        "API synchronization via webhooks between retail brand POS networks and the loyalty core, so an offline redemption propagates to the app database instantly and prevents 'already used code' replay attacks.",
        "ISO 8601 UTC timestamp normalization across multi-brand databases, so a user's app and a brand's backend agree on whether a voucher is still active.",
        "Intelligent local caching of voucher criteria rules for sub-200ms cart validation feedback, even during partner-server micro-downtimes.",
      ],
      table: [
        ["Initiative", "Reach", "Impact", "Confidence", "Effort (pw)", "RICE"],
        ["1 — Earning Ledger", "8", "1.5", "80%", "2", "4.8"],
        ["2 — Real-Time Wallet Engine 🏆", "9", "2.5", "90%", "4", "5.06"],
        ["3 — Cart Error Guard", "4", "2.0", "70%", "3", "1.86"],
      ],
    },
    execution: {
      heading: "The Execution",
      body: [
        "Initiative 2 was selected first because it directly addressed the activation drop-off while systematically clearing the support ticket backlog — high reach combined with straightforward backend logic. The work was scoped from a single user story, expressed in Gherkin syntax that engineering could split into Linear/Jira epics.",
      ],
      bullets: [
        "User story: 'As a loyalty app user, I want to view the exact expiration countdown and required purchasing criteria of my vouchers directly inside my wallet, so that I can confidently complete my transaction before my benefits expire without encountering cart errors.'",
        "Scenario — Active voucher near expiry: given the user is in 'My Wallet,' when a voucher is within 48 hours of expiration, then a high-visibility countdown renders (e.g., 'Expires in 23h 14m') alongside brand criteria (e.g., 'Valid on online orders over 500 EGP').",
        "Scenario — Unfulfilled criteria at cart: given the cart totals 300 EGP, when the user applies a voucher requiring a minimum spend of 500 EGP, then the API returns 'Add 200 EGP more to unlock this voucher' and blocks an invalid payload from reaching the partner POS.",
        "Three Amigos alignment sessions (PO, QA Lead, Tech Lead) before sprint planning ensured edge cases in the data layer were accounted for before any code was written.",
        "Phased rollout isolated the new wallet engine to a single retail brand ecosystem first to monitor technical stability before wide-scale release.",
      ],
    },
    impact: {
      heading: "The Impact",
      body: [
        "The wallet stopped being a list and became a decision surface. Browsing users could see exactly what to do next, and the cart stopped being a place where benefits died.",
      ],
      bullets: [
        "Primary KPI — Login → first transaction conversion moving from the 70% baseline toward an 85% target.",
        "Operational KPI — 40% reduction in support tickets tagged 'Expired Benefits' or 'Invalid Codes' within the first 30 days of full release.",
        "System KPI — Cart code validation latency held under 200ms at p95, even during peak traffic.",
        "Trust KPI — 'Already used code' complaints replaced by proactive push alerts before vouchers lapse.",
      ],
    },
    appendix: [
      {
        heading: "Why Initiative 2 over Initiative 1",
        bullets: [
          "Higher reach — most logged-in users already visited this surface daily.",
          "Directly addresses both the activation chasm and the support backlog in a single release.",
          "Cleaner backend contract — state-machine validation rather than visual redesign work.",
        ],
      },
      {
        heading: "Cross-system blockers cleared",
        bullets: [
          "POS webhook propagation delays — solved with real-time push endpoints and idempotent redemption tokens.",
          "Multi-brand time-zone drift — normalized to ISO 8601 UTC across databases.",
          "Partner-server latency on cart validation — cached criteria rules locally with explicit fallback states.",
        ],
      },
    ],
    source: "Strategic PRD — Loyalty Application Optimization, Yamama, 2024",
  },

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
    source: "PRD — Consolidated Financial Dashboard v1.0, Yamama, Jun 2025",
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
    slug: "app-rebrand-v2",
    title: "App Rebrand: Suplyd V1 → V2",
    kicker: "Figma design system · 2025",
    summary:
      "The app had grown feature by feature for years with no shared visual language holding it together. Led the rebrand from the original Figma file to a new V2.0 system spanning mobile and web.",
    status: "Shipped",
    priority: "Medium",
    period: "2025",
    team: ["Product / Design (lead)", "Mobile — React Native", "Web — ReactJS"],
    role: "Design & PM hybrid — design direction, spec ownership, rollout",
    stack: ["Figma", "React Native", "ReactJS", "Design tokens"],
    metrics: [
      { label: "Design system", value: "V1 → V2", note: "New Figma library" },
      { label: "Surfaces updated", value: "Mobile + web", note: "Single shared visual language" },
      { label: "Rollout", value: "Phased", note: "By screen, not a single big-bang release" },
    ],
    problem: {
      heading: "The Problem",
      body: [
        "The original app had been built out feature by feature over several years, each screen designed to solve its own problem without a shared system holding the whole thing together. Colours, spacing, type scale and component styling had all drifted independently — the app worked, but it didn't feel like one product.",
        "That inconsistency showed up as friction: new features took longer to design because there was no reusable foundation, and the app read as dated next to newer competitors in the same space.",
      ],
      bullets: [
        "No shared component library — every screen restyled from scratch",
        "Colour, spacing and type inconsistent across mobile and web",
        "Slower design turnaround for new features with nothing to reuse",
        "Visual identity that no longer matched where the brand was heading",
      ],
    },
    architecture: {
      heading: "The Architecture",
      body: [
        "Rather than restyle screens one by one, the rebrand started from a new Figma foundation — a V2.0 file built as a proper design system rather than a flat set of mockups — and every surface was migrated onto it.",
      ],
      bullets: [
        "New design system in Figma: colour tokens, typography scale, spacing units and a reusable component library.",
        "Component-first approach — buttons, cards, inputs and navigation patterns defined once, then composed into screens.",
        "Mobile (React Native) and web (ReactJS) mapped to the same token set, so both surfaces read as one brand.",
        "Old and new component styles allowed to coexist during rollout, so migration didn't have to be a single big-bang release.",
      ],
    },
    execution: {
      heading: "The Execution",
      body: [
        "The rollout moved screen by screen against the new Figma library, prioritising the highest-traffic flows first so the visual gap between old and new was closed where users would notice it most.",
      ],
      bullets: [
        "Audited every existing screen against the new component library to flag what could be swapped directly versus what needed a redesign.",
        "Sequenced the migration by traffic and visibility — core flows first, edge-case screens last.",
        "Worked directly in Figma alongside engineering to keep the component library and the shipped implementation in sync.",
        "Kept the rebrand scoped to visual and component-level change — underlying flows and IA were left untouched unless a screen specifically needed it.",
      ],
    },
    impact: {
      heading: "The Impact",
      body: [
        "The app now reads as one coherent product across mobile and web, and every new feature since has been designed against the V2.0 library instead of from a blank canvas.",
      ],
      bullets: [
        "Single design system now governs both the mobile and web apps.",
        "New features design faster with a reusable component library instead of one-off styling.",
        "Visual identity brought in line with where the brand is positioned today.",
      ],
    },
    appendix: [
      {
        heading: "Non-goals (scope discipline)",
        bullets: [
          "Rebuilding information architecture or navigation — this was a visual and component-level rebrand, not a UX overhaul.",
          "Redesigning every screen from scratch — reused what already worked, restyled what didn't.",
        ],
      },
    ],
    source: "Figma — Suplyd App (V1) and Suplyd V2.0 design files",
  },

  {
    slug: "odoo-15-to-18-upgrade",
    title: "Odoo 15 → 18 Upgrade",
    kicker: "Platform migration · 2024",
    summary:
      "Three major versions behind and blocking every new integration. Migrated the core ERP from Odoo 15 to 18 with zero data loss and no disruption to live operations.",
    status: "Shipped",
    priority: "High",
    period: "Dec 2023 – May 2025",
    team: ["QA (lead)", "Backend", "Operations"],
    role: "Migration lead",
    stack: ["Odoo", "PostgreSQL", "Python", "Docker"],
    metrics: [
      { label: "Versions jumped", value: "15 → 18", note: "Three major upgrades in one project" },
      { label: "Data loss", value: "0", note: "Across the full migration" },
      { label: "Post-release defects", value: "−20%", note: "Regression automation" },
      { label: "Downtime", value: "Zero", note: "For live operations teams" },
    ],
    problem: {
      heading: "The Problem",
      body: [
        "Odoo 15 was three major versions behind, which meant every module customisation had to be re-verified against upstream changes before an upgrade could even be attempted. Newer integrations and vendor modules increasingly required Odoo 17+, so staying on 15 was quietly blocking the operations roadmap.",
        "A straight version jump from 15 to 18 could not be done in one step — each major Odoo release changes its data model, so the migration had to pass through every intermediate version without corrupting live financial and inventory data.",
      ],
      bullets: [
        "Three major versions of accumulated schema and module drift",
        "Custom modules with no guarantee of compatibility past v15",
        "Operations teams running live on the database being migrated",
        "No tolerance for data loss on financial and inventory records",
      ],
    },
    architecture: {
      heading: "The Architecture",
      body: [
        "The migration ran as a staged upgrade rather than a single cutover — each version hop validated independently before the next began, with a full regression pass at every stage.",
      ],
      bullets: [
        "Sequential upgrade path (15 → 16 → 17 → 18) instead of a direct jump, isolating breakage to one version at a time.",
        "Staging environment mirroring production data for every hop, so failures surfaced before they reached live operations.",
        "Custom module audit at each version — patched, replaced, or deprecated based on upstream compatibility.",
        "Full database backups and rollback checkpoints before every stage.",
        "Regression suite run against core flows (invoicing, inventory, procurement) after each version.",
      ],
      table: [
        ["Stage", "Focus", "Gate"],
        ["15 → 16", "Module compatibility audit", "Staging regression pass"],
        ["16 → 17", "Data model migration", "Zero diff on financial totals"],
        ["17 → 18", "Final cutover rehearsal", "Full regression + rollback tested"],
      ],
    },
    execution: {
      heading: "The Execution",
      body: [
        "Each version hop followed the same rhythm: audit, migrate on staging, regress, then cut over — repeated three times rather than attempted as one high-risk leap.",
      ],
      bullets: [
        "Audited every custom module for breaking changes before each upgrade, patching or replacing what upstream no longer supported.",
        "Ran the full migration on a staging clone of production first, comparing record counts and financial totals before and after.",
        "Built a regression checklist covering the operations team's daily flows, run manually and via automation after every hop.",
        "Scheduled the final cutover for a low-traffic window with a tested rollback path, so the live database was never at risk without a way back.",
        "Kept operations informed at each stage so the migration never surprised the people depending on the system daily.",
      ],
    },
    impact: {
      heading: "The Impact",
      body: [
        "The upgrade cleared the version debt that was blocking new integrations, without a single record lost or a day of downtime for the teams running on Odoo daily.",
      ],
      bullets: [
        "Migrated three major versions with zero data loss on financial and inventory records.",
        "Unblocked integrations and vendor modules that required Odoo 17+.",
        "No disruption to live operations — the cutover was invisible to daily users.",
        "Established a repeatable staged-upgrade playbook for future Odoo version jumps.",
      ],
    },
    appendix: [
      {
        heading: "Why staged, not direct",
        bullets: [
          "A direct 15 → 18 jump would have combined three versions' worth of data-model changes into one unverifiable step.",
          "Staging each hop meant any failure was traceable to a single version, not buried in a three-version diff.",
        ],
      },
    ],
    source: "Résumé — Senior QA Engineer & Associate PM, Suplyd",
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
