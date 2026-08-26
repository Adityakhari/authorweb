import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 font-display text-xs font-semibold uppercase tracking-[0.16em]",
  {
    variants: {
      variant: {
        default: "border-border bg-surface-2 text-primary",
        sport: "border-sport/40 bg-sport/10 text-sport",
        pro: "border-pro/40 bg-pro/10 text-pro",
        elite: "border-elite/40 bg-elite/10 text-elite",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
