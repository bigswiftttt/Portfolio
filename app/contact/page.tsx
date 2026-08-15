import { Container } from "../components/Container";
import { EmailCopy } from "./EmailCopy";

export default function Contact() {
    return (
        <div className="pt-[140px] pb-40">
            <Container className="max-w-none px-6 md:px-20">
                <div className="mb-24">
                    <h1 className="font-display text-[clamp(48px,10vw,120px)] font-extrabold tracking-tighter leading-tight animate-fade-up">
                        LET&apos;S BUILD.
                    </h1>
                    <p className="text-muted max-w-2xl mt-8 text-lg">
                        Available for freelance opportunities and collaborative ventures. Reach out to discuss how we can create something exceptional together.
                    </p>
                </div>

                <div className="mb-20">
                    <span className="inline-block font-mono text-xs uppercase tracking-widest text-muted border border-border/40 rounded-full px-4 py-1 mb-4">
                        Direct Line
                    </span>
                    <EmailCopy />
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-border/30 pt-8">
                    <a href="https://github.com/bigswiftttt" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                        <span className="font-display text-2xl">GITHUB</span>
                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                    </a>
                    <a href="https://twitter.com/_big_swift" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                        <span className="font-display text-2xl">TWITTER</span>
                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                    </a>
                </div>
            </Container>
        </div>
    );
}