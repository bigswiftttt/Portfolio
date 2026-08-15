import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "ghost";
    className?: string;
};

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
    const base = "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300";
    const styles =
        variant === "primary"
            ? "bg-accent text-accent-foreground hover:opacity-90 hover:shadow-lg hover:shadow-accent/20"
            : "border border-border text-foreground hover:bg-foreground/5";

    const classes = `${base} ${styles} ${className}`;

    return href ? (
        <Link href={href} className={classes}>{children}</Link>
    ) : (
        <button className={classes}>{children}</button>
    );
}