import Link from "next/link";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { projects } from "./lib/projects";

export default function Home() {
  return (
    <div className="pt-[140px] md:pt-[200px] pb-40">
      <Container className="max-w-none px-6 md:px-20">
        <section className="grid grid-cols-4 md:grid-cols-12 gap-8 mb-40">
          <div className="col-span-4 md:col-span-10 md:col-start-2">
            <h1 className="font-display font-extrabold tracking-tighter leading-[0.95] text-[clamp(40px,8vw,96px)] animate-fade-up">
              BUILDING <br />
              <span className="text-muted">REFINED</span> <br />
              SOFTWARE.
            </h1>
            <div className="grid grid-cols-4 md:grid-cols-10 gap-8 mt-12 md:mt-16">
              <div className="col-span-4 md:col-span-4 md:col-start-7 flex flex-col items-start gap-8">
                <p className="text-xl text-muted max-w-md animate-fade-up-delay">
                  Crafting high-performance digital products with obsessive attention to detail, robust architecture, and premium aesthetics.
                </p>
                <div className="flex flex-wrap gap-4 w-full border-t border-border/30 pt-8">
                  <Button href="/work">VIEW WORK →</Button>
                  <Button href="/contact" variant="ghost">CONTACT</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 border-b border-border/30 pb-4">
            <h2 className="font-display text-2xl uppercase tracking-wide">Selected Works</h2>
            <span className="font-mono text-xs text-muted mt-2 md:mt-0">[ 01 – 04 ]</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
                <div className="aspect-video border border-border/40 overflow-hidden mb-4">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex justify-between items-end border-t border-transparent group-hover:border-border/30 pt-3 transition-colors duration-300">
                  <div>
                    <h3 className="font-display text-2xl">{project.name}</h3>
                    <p className="font-mono text-xs text-muted mt-1">{project.tag}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">{project.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section>
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 border-b border-border/30 pb-4">
            <h2 className="font-display text-2xl uppercase tracking-wide">Core Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <p className="text-muted">
                A deliberate selection of modern tools optimized for performance, scalability, and developer experience.
              </p>
            </div>
            <div className="md:col-span-8">
              {[
                { n: "01", name: "TypeScript / Next.js", tags: ["FRONTEND"] },
                { n: "02", name: "Node.js / PostgreSQL", tags: ["BACKEND"] },
                { n: "03", name: "Supabase", tags: ["DATA & AUTH"] },
                { n: "04", name: "Gemini / Groq API", tags: ["AI"] },
              ].map((item) => (
                <div key={item.n} className="border-b border-border/30 py-6 flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-muted w-8">{item.n}</span>
                    <span className="font-display text-2xl">{item.name}</span>
                  </div>
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 border border-border/40 rounded-full font-mono text-xs text-muted">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}