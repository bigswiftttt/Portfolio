"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";

const links = [
    { href: "/work", label: "WORK" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 border-b border-border/30 bg-background/70 backdrop-blur-xl transition-all duration-500 hover:backdrop-blur-2xl">
            <Container className="flex h-20 items-center justify-between max-w-none px-6 md:px-20">
                <Link href="/" className="font-display text-2xl font-extrabold tracking-tighter">
                    AWWAL
                </Link>
                <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="relative text-muted hover:text-foreground transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <button onClick={() => setOpen(!open)} className="md:hidden font-mono text-xs uppercase tracking-widest">
                    {open ? "Close" : "Menu"}
                </button>
            </Container>
            {open && (
                <nav className="md:hidden flex flex-col border-t border-border/30 bg-background/95 backdrop-blur-xl">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="px-6 py-4 font-mono text-xs uppercase tracking-widest border-b border-border/20">
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}