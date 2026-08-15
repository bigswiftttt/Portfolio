"use client";

import { useState } from "react";

export function EmailCopy() {
    const [copied, setCopied] = useState(false);
    const email = "bashirawwal30@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative">
            <button onClick={handleCopy} className="text-left group">
                <span className="font-display text-[clamp(32px,6vw,56px)] block pb-2">{email}</span>
                <div className="flex items-center gap-2 text-muted group-hover:text-foreground transition-colors">
                    <span className="text-sm">📋</span>
                    <span className="font-mono text-xs">{copied ? "Copied!" : "Click to copy"}</span>
                </div>
            </button>
        </div>
    );
}