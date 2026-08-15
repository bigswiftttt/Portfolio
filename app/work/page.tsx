import Link from "next/link";
import { Container } from "../components/Container";
import { projects } from "../lib/projects";

export default function Work() {
  return (
    <div className="pt-[140px] pb-40">
      <Container className="max-w-none px-6 md:px-20">
        <header className="mb-24 border-b border-border/30 pb-6">
          <h1 className="font-display text-[clamp(40px,8vw,96px)] font-extrabold tracking-tighter leading-[0.95] animate-fade-up">
            SELECTED <br /> <span className="italic text-muted">WORKS</span>
          </h1>
        </header>
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="group border-b border-border/30 py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-8">
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")} /</span>
                <h2 className="font-display text-3xl md:text-4xl group-hover:pl-2 transition-all duration-300">{p.name}</h2>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <span className="font-mono text-xs text-muted uppercase">{p.tag}</span>
                <div className="flex gap-2 flex-wrap">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-border/10 font-mono text-xs">{t}</span>
                  ))}
                </div>
                <span className="hidden md:inline text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}