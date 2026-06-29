// ── Edit everything below to make this your own ──────────────────────────

export const profile = {
  name: "Roshan",
  role: "Full-Stack Web Developer",
  tagline: "I build fast, accessible web apps from database to pixel.",
  location: "Based Noida, UP, India · Open to remote and onsite",
  email: "roshanjaiswal.bca@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/171tJObKX2_pqTmnlDUPFF_EnMmgFqpp2/view?usp=sharing",
  codeProfile: 'https://codolio.com/profile/roshan.',
  socials: {
    github: "https://github.com/roshansu",
    linkedin: "https://www.linkedin.com/in/roshan-kumar-960184291/",
    twitter: "https://twitter.com",
  },
};

export const codeSnippetLines = [
  { code: "const developer = {", color: "paper" },
  { code: "  name: 'Roshan',", color: "mint", indent: 1 },
  { code: "  stack: ['Javascript', 'React', 'Node', 'Express', 'Mongoose', 'RAG'],", color: "mint", indent: 1 },
  { code: "  loves: 'shipping fast',", color: "mint", indent: 1 },
  { code: "  coffeeLevel: Infinity,", color: "yolk", indent: 1 },
  { code: "};", color: "paper" },
  { code: "", color: "paper" },
  { code: "developer.buildSomethingGreat();", color: "coral" },
];

export const skills = [
  "Javascript(ES6+)", "React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB",
  "RAG", "LangChain", "LLM", "REST APIs", "Pinecone", "GIT", "Render",
  "Express", "SQL", "Redis", "CI/CD", "C++",
];

export const projects = [
  {
    id: 1,
    title: "Vital Sync — Appointment System",
    description:
      `Built a doctor appointment booking platform with role-based access for Patients, And Doctors, supporting
        appointment scheduling, prescription management, and medical report handling.`,
    tags: ["React", "Node.js", "MongoDB", "Redis", "JWT"],
    color: "coral",
    link: "https://vital-sync-virid.vercel.app/",
    repo: "https://github.com/roshansu/vital-sync",
  },
  {
    id: 2,
    title: "Lead Flow — Lead Management",
    description:
      `Built a real time centralized Lead Management System to manage leads from Website, Meta Ads, and Google Ads in a single dashboard.
      use credential to access - id - admin@gmail.com, pass - Admin@123
      `,
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    color: "mint",
    link: "https://lead-management-sustem.vercel.app",
    repo: "https://github.com/roshansu/lead-management-sustem",
  },
  {
    id: 3,
    title: "Crime Alert — Crime Reporting",
    description:
    `Build a platform that allows users to report crimes and suspicious activities in their area. The platform focuses on maintaining community safety by enabling users to quickly share incidents and allowing moderators to verify the authenticity of reports.`,
    tags: ["React", "Node.js", "MongoDB"],
    color: "yolk",
    link: "https://crime-reports.vercel.app/",
    repo: "http://github.com/roshansu/crime-report",
  },
  {
    id: 4,
    title: "Hexa.Ai — Multi Ai Chat Platform",
    description:
    `uilt a unified multi-AI chat platform integrating ChatGPT, Gemini, and DeepSeek APIs
    Implemented model switching and multi-model chat, enabling users to interact with one or multiple LLMs
    simultaneously via toggle controls.
    `,
    tags: ["React", "Node.js", "MongoDB", "Gemini", "Deepseek", "OpenAI"],
    color: "coral",
    link: "https://hexaai-wheat.vercel.app/",
    repo: "https://github.com/roshansu/hexa-ai",
  },
  {
    id: 5,
    title: "ByteUp — Student Mentorship",
    description:
    `Developed student mentorship platform where students can find mentor and connect with them.`,
    tags: ["React", "Node.js", "MongoDB", "Gemini API"],
    color: "coral",
    link: "https://github.com/roshansu/byteup",
    repo: "https://byteup-83bv.vercel.app/",
  },
  {
    id: 6,
    title: "Movie App — Movie Search",
    description:
    `Built a movie discovery platform using TMDB API, implementing debounced search and infinite scroll,
     Developed a mood-based recommendation system to personalize content.`,
    tags: ["React", "Node.js", "MongoDB", "Gemini API"],
    color: "mint",
    link: "https://movie-app-seven-rouge.vercel.app/",
    repo: "https://github.com/roshansu/movie-app",
  },
  {
    id: 7,
    title: "EventSphere",
    description:
    `A React and Redux-based frontend platform designed to explore and showcase events with an intuitive, responsive interface for a smooth user experience.`,
    tags: ["React", "redux"],
    color: "mint",
    link: "https://eventsphere-three.vercel.app/",
    repo: "https://github.com/roshansu/eventsphere",
  },
    {
    id: 8,
    title: "NoteKeeper",
    description:
    `Developed a secure note keeper app where you can write your notes and you can secure notes by locking it.`,
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    color: "mint",
    link: "https://notekeeperz.netlify.app/",
    repo: "https://github.com/roshansu/noteKeeper",
  },
];

export const experience = [
  {
    id: 1,
    role: "Full-Stack Developer Intern",
    company: "Prodesk IT",
    period: "jan 2026 — Jun 2026",
    description:
    `Developed full-stack web applications using the MERN stack, implemented debounced search that reduced
      redundant API calls by 40% and improved responsiveness
      • Engineered infinite scroll functionality for seamless data loading, decreasing initial page load time by 35% and
      enhancing user experience`
  },
];

export const about = {
  bio: "I'm a full-stack developer who likes the messy parts of the job: untangling a gnarly database schema in the morning, polishing a button's hover state in the afternoon. I care about software that feels fast and code that's easy to delete. When I'm not at the keyboard I'm usually climbing, brewing coffee badly, or fixing something that wasn't actually broken.",
  stats: [
    { label: "Years building personal projects", value: "1+" },
    { label: "Projects shipped", value: "20+" },
    { label: "Cups of coffee", value: "∞" },
  ],
};
