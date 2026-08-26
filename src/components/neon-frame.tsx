import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function NeonFrame({
  children,
  className,
  glow = "soft",
}: {
  children: ReactNode;
  className?: string;
  glow?: "soft" | "strong" | "none";
}) {
  return (
    <div
      className={cn(
        "neon-frame rounded-xl border border-border bg-surface/80",
        glow === "soft" && "neon-glow",
        glow === "strong" && "neon-glow-strong",
        className,
      )}
    >
      <div className="neon-corners" aria-hidden="true">
        <span className="tl" />
        <span className="tr" />
        <span className="bl" />
        <span className="br" />
      </div>
      {children}
    </div>
  );
}
