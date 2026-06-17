// ── Edit everything below to make this your own ──────────────────────────

export const profile = {
  name: "Alex Rivera",
  role: "Full-Stack Web Developer",
  tagline: "I build fast, accessible web apps from database to pixel.",
  location: "Based in Austin, TX · Open to remote",
  email: "hello@alexrivera.dev",
  resumeUrl: "#",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const codeSnippetLines = [
  { code: "const developer = {", color: "paper" },
  { code: "  name: 'Alex Rivera',", color: "mint", indent: 1 },
  { code: "  stack: ['React', 'Node', 'Postgres'],", color: "mint", indent: 1 },
  { code: "  loves: 'shipping fast',", color: "mint", indent: 1 },
  { code: "  coffeeLevel: Infinity,", color: "yolk", indent: 1 },
  { code: "};", color: "paper" },
  { code: "", color: "paper" },
  { code: "developer.buildSomethingGreat();", color: "coral" },
];

export const skills = [
  "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL",
  "GraphQL", "Next.js", "Docker", "AWS", "Framer Motion",
  "Express", "MongoDB", "Redis", "CI/CD", "Figma",
];

export const projects = [
  {
    id: 1,
    title: "Pulse — Realtime Analytics",
    description:
      "A live dashboard for tracking product metrics with sub-second updates, built on websockets and a custom charting engine.",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    color: "coral",
    link: "#",
    repo: "#",
  },
  {
    id: 2,
    title: "Loopline — Async Standups",
    description:
      "Slack-style async standup tool for distributed teams, with smart digest emails and a public API for integrations.",
    tags: ["Next.js", "GraphQL", "Redis"],
    color: "mint",
    link: "#",
    repo: "#",
  },
  {
    id: 3,
    title: "Crate — Headless Commerce Kit",
    description:
      "A composable storefront starter kit with theme-able components, cart logic, and Stripe checkout baked in.",
    tags: ["TypeScript", "Stripe", "Tailwind"],
    color: "yolk",
    link: "#",
    repo: "#",
  },
  {
    id: 4,
    title: "Notebox — Markdown Notes API",
    description:
      "A self-hostable notes backend with full-text search, tagging, and end-to-end encryption at rest.",
    tags: ["Express", "MongoDB", "Docker"],
    color: "coral",
    link: "#",
    repo: "#",
  },
];

export const experience = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer",
    company: "Northwind Labs",
    period: "2023 — Present",
    description:
      "Lead a team of 4 building the core platform serving 200k+ monthly active users. Cut p95 API latency by 40% through query optimization and caching.",
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Brightloop",
    period: "2021 — 2023",
    description:
      "Built and shipped the company's first mobile-responsive dashboard, owned the design system, and mentored two junior engineers.",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Studio Forge",
    period: "2019 — 2021",
    description:
      "Delivered client websites and web apps for 15+ clients, specializing in performant animations and pixel-accurate implementation.",
  },
];

export const about = {
  bio: "I'm a full-stack developer who likes the messy parts of the job: untangling a gnarly database schema in the morning, polishing a button's hover state in the afternoon. I care about software that feels fast and code that's easy to delete. When I'm not at the keyboard I'm usually climbing, brewing coffee badly, or fixing something that wasn't actually broken.",
  stats: [
    { label: "Years building", value: "6+" },
    { label: "Projects shipped", value: "40+" },
    { label: "Cups of coffee", value: "∞" },
  ],
};
