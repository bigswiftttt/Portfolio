import { Container } from "../components/Container";

const stack = [
    { name: "Next.js", role: "Full-stack Framework / SSR / Routing" },
    { name: "React", role: "UI Library / Component Systems" },
    { name: "TypeScript", role: "Type Safety / Architecture / Tooling" },
    { name: "Tailwind CSS", role: "Styling / Design System" },
    { name: "Node.js", role: "Server Runtime / APIs" },
    { name: "Supabase", role: "Database / Auth / Storage" },
    { name: "PostgreSQL", role: "Relational Data" },
    { name: "GitHub API", role: "Repository Intelligence / Integrations" },
    { name: "Gemini API", role: "AI Reasoning / Generation" },
    { name: "Groq", role: "Fast LLM Inference" },
    { name: "Vercel", role: "Deployment / Hosting" },
    { name: "Git", role: "Version Control" },
];

export default function About() {
    return (
        <div className="pt-[140px] pb-40">
            <Container className="max-w-none px-6 md:px-20">
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
                    <div className="md:col-span-5">
                        <div className="aspect-[3/4] w-full bg-border/10 border border-border/40" />
                    </div>
                    <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center gap-8">
                        <h1 className="font-display text-4xl md:text-5xl">Building precision interfaces.</h1>
                        <div className="text-muted flex flex-col gap-6 max-w-2xl">
                            <p>I&apos;m a full-stack developer focused on the intersection of technical excellence and premium design. I build systems that feel inevitable — where every component exists with purpose and restraint.</p>
                            <p>My work draws inspiration from editorial minimalism, translating that sense of permanence into digital experiences.</p>
                        </div>
                        <div className="pt-6 border-t border-border/30 w-fit">
                            <span className="font-mono text-xs text-muted uppercase">Working Remotely</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="font-mono text-xs text-muted tracking-widest uppercase mb-8 border-b border-border/30 pb-4">Technology Stack</h2>
                    <div className="flex flex-col">
                        {stack.map((item) => (
                            <div key={item.name} className="group border-b border-border/20 py-6 flex justify-between items-center">
                                <h3 className="font-display text-2xl md:text-3xl group-hover:text-muted transition-colors duration-300">{item.name}</h3>
                                <span className="font-mono text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">{item.role}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </div>
    );
}