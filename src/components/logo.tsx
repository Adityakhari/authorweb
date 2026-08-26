import { useId } from "react";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  const gid = useId();
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 64 64"
        className={cn("size-8 shrink-0", markClassName)}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7aefff" />
            <stop offset="100%" stopColor="#0088cc" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="29" fill="none" stroke={`url(#${gid})`} strokeWidth="3.4" strokeDasharray="38 12" />
        <circle cx="32" cy="10" r="2.6" fill="#3ee0ff" />
        <circle cx="54" cy="32" r="2.6" fill="#3ee0ff" />
        <circle cx="32" cy="54" r="2.6" fill="#3ee0ff" />
        <circle cx="10" cy="32" r="2.6" fill="#3ee0ff" />
        <circle cx="32" cy="32" r="13" fill="#05070c" stroke="#cfefff" strokeWidth="1.6" />
        <path
          d="M27.2 39.2V24.8h6.4c3.4 0 5.4 1.9 5.4 4.6 0 1.9-1.1 3.3-2.9 4l3.5 5.8h-3.5l-3.1-5.3h-2.4v5.3H27.2zm3.4-8h2.7c1.6 0 2.5-.8 2.5-2s-.9-2-2.5-2h-2.7v4z"
          fill="#e8eef8"
        />
      </svg>
      <span className="leading-tight">
        <span className="block font-display text-sm font-semibold tracking-[0.22em] text-fg">
          STARK
        </span>
        <span className="block text-xs tracking-[0.38em] text-muted uppercase">
          Industries
        </span>
      </span>
    </span>
  );
}
