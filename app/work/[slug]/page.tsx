import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "../../components/Container";
import { projects } from "../../lib/projects";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const index = projects.findIndex((p) => p.slug === slug);
    if (index === -1) notFound();

    const project = projects[index];
    const next = projects[(index + 1) % projects.length];

    return (
        <div className="pt-[100px]">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="group relative block w-full h-[320px] md:h-[420px] bg-border/10 overflow-hidden">
                <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-8 left-6 md:left-20 max-w-lg z-10">
                    <h1 className="font-display text-4xl md:text-5xl mb-4 text-white">{project.name}</h1>
                    <div className="flex flex-wrap gap-4 font-mono text-xs text-white/80 uppercase">
                        <span>{project.tag}</span>
                        <span>{project.year}</span>
                    </div>
                </div>
            </a>

            <Container className="max-w-none px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 mt-20">
                <div className="md:col-span-3 flex flex-col gap-8">
                    <div>
                        <h3 className="font-mono text-xs text-muted mb-2">ROLE</h3>
                        <p>{project.role}</p>
                    </div>
                    <div>
                        <h3 className="font-mono text-xs text-muted mb-2">STARTED</h3>
                        <p>{project.started}</p>
                    </div>
                    <div>
                        <h3 className="font-mono text-xs text-muted mb-3">TECH STACK</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-border/10 font-mono text-xs">{t}</span>
                            ))}
                        </div>
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-muted transition-colors">
                        Visit Live Site →
                    </a>
                </div>

                <div className="md:col-span-8 md:col-start-5 flex flex-col gap-20">
                    <section>
                        <h2 className="font-display text-2xl mb-6">Overview</h2>
                        <p className="text-muted max-w-3xl leading-relaxed">{project.overview}</p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl mb-6">What it does</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.features.map((f) => (
                                <div key={f.title} className="p-6 border border-border/40">
                                    <h4 className="font-mono text-xs uppercase tracking-widest mb-2">{f.title}</h4>
                                    <p className="text-muted text-sm">{f.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </Container>

            <Link href={`/work/${next.slug}`} className="group mt-40 block border-t border-border/30 px-6 md:px-20 py-12 flex items-center justify-between hover:bg-border/5 transition-colors duration-500">
                <div>
                    <span className="font-mono text-xs text-muted block mb-2">NEXT PROJECT</span>
                    <h2 className="font-display text-[clamp(32px,6vw,64px)] group-hover:opacity-70 transition-opacity">{next.name}</h2>
                </div>
                <div className="p-4 border border-foreground rounded-full group-hover:bg-foreground group-hover:text-background transition-all duration-300">→</div>
            </Link>
        </div>
    );
}