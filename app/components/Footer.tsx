import { Container } from "./Container";

export function Footer() {
    return (
        <footer className="border-t border-border/60 py-8">
            <Container className="flex items-center justify-between text-xs text-muted">
                <span>© {new Date().getFullYear()} Awwal Bashir</span>
            </Container>
        </footer>
    );
}