export type Project = {
  slug: string;
  name: string;
  tag: string;
  year: string;
  tech: string[];
  role: string;
  started: string;
  overview: string;
  features: { title: string; description: string }[];
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "studyos",
    name: "StudyOS",
    tag: "EdTech Platform",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Supabase"],
    role: "Full-Stack Developer",
    started: "May 2026",
    overview: "StudyOS re-architects the digital learning experience, replacing cluttered legacy LMS platforms with a minimalist, focused dashboard for coursework, deadlines, and progress.",
    features: [
      { title: "Unified Analytics", description: "Aggregates performance metrics across all enrolled courses into a single, comprehensive view." },
      { title: "Smart Scheduling", description: "Parses syllabus data to populate an interactive calendar with deadlines." },
    ],
    url: "https://studyos-ms.vercel.app",
    image: "/projects/studyos.png",
  },
  {
    slug: "glamorous-thread",
    name: "Glamorous Thread",
    tag: "Fashion Ecommerce",
    year: "2026",
    tech: ["Next.js", "Supabase"],
    role: "Full-Stack Developer",
    started: "June 2026",
    overview: "A luxury fashion and tailoring platform offering bridal couture, native wear, and bespoke fashion — tailored to each client's identity.",
    features: [
      { title: "Collections Showcase", description: "Bridal couture, native wear, corporate and event design collections." },
      { title: "Booking System", description: "Clients can book consultations and appointments directly." },
    ],
    url: "https://glamorous-thread.vercel.app",
    image: "/projects/glamorous-thread.png",
  },
  {
    slug: "devforge",
    name: "DevForge",
    tag: "Developer Tooling",
    year: "2026",
    tech: ["Next.js", "GitHub API", "Groq"],
    role: "Full-Stack Developer",
    started: "July 2026",
    overview: "DevForge is an AI-powered repository intelligence platform that helps developers understand and navigate unfamiliar codebases faster.",
    features: [
      { title: "Repo Intelligence", description: "Analyzes repository structure and surfaces key architectural insights." },
      { title: "AI Q&A", description: "Ask natural-language questions about a codebase and get grounded answers." },
    ],
    url: "https://devforge-ms.vercel.app",
    image: "/projects/devforge.png",
  },
  {
    slug: "atlas",
    name: "Atlas",
    tag: "Productivity App",
    year: "2026",
    tech: ["Next.js", "PostgreSQL", "Gemini"],
    role: "Full-Stack Developer",
    started: "August 2026",
    overview: "Atlas is a premium knowledge operating system — upload complex documents, unstructured data, or abstract concepts, and synthesize them into clear, architectural visual models.",
    features: [
      { title: "Document Ingestion", description: "Upload complex documents and unstructured data for processing." },
      { title: "Visual Synthesis", description: "Converts raw information into clear, architectural visual models." },
    ],
    url: "https://atlas-ms.vercel.app",
    image: "/projects/atlas.png",
  },
];