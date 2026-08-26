import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { IronWatch } from "@/components/iron-watch";
import { NeonFrame } from "@/components/neon-frame";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  bandFromMm,
  getProduct,
  recommendSlug,
  type WatchSlug,
} from "@/lib/products";
import { formatInr } from "@/lib/utils";

const activities = [
  { id: "daily" as const, label: "Daily", hint: "Commute, sleep, a few sessions" },
  { id: "train" as const, label: "Train", hint: "Runs, gym, weekend long" },
  { id: "race" as const, label: "Race", hint: "Load, HRV, multi-sport" },
];

export function FitWizard({ compact = false }: { compact?: boolean }) {
  const [mm, setMm] = useState(172);
  const [activity, setActivity] = useState<"daily" | "train" | "race">("train");

  const size = bandFromMm(mm);
  const slug: WatchSlug = useMemo(
    () => recommendSlug(mm, activity),
    [mm, activity],
  );
  const product = getProduct(slug)!;

  return (
    <NeonFrame className="grid gap-8 p-6 md:grid-cols-2 md:p-8" glow="strong">
      <div>
        <p className="font-display text-xs tracking-[0.22em] text-primary uppercase">
          FitSense
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-fg">
          Measure once. Wear for years.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Seventy-seven percent of buyers wanted a wrist guide before checkout.
          FitSense is that guide — it maps millimetres to a band that keeps the
          sensor honest.
        </p>

        <div className="mt-8 space-y-2">
          <Label>
            Wrist circumference · {mm} mm · recommended {size}
          </Label>
          <input
            type="range"
            min={140}
            max={210}
            value={mm}
            onChange={(e) => setMm(Number(e.target.value))}
            className="w-full accent-primary"
            aria-label="Wrist circumference in millimetres"
          />
          <div className="flex justify-between font-display text-[0.65rem] tracking-[0.16em] text-faint uppercase">
            <span>140 · S</span>
            <span>172 · M</span>
            <span>210 · L</span>
          </div>
        </div>

        <div className="mt-6">
          <Label>How you move</Label>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {activities.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setActivity(a.id)}
                className={
                  activity === a.id
                    ? "rounded-md border border-border-strong bg-surface-2 px-2 py-3 text-center shadow-[var(--shadow-neon)]"
                    : "rounded-md border border-border bg-bg px-2 py-3 text-center hover:border-border-strong"
                }
              >
                <span className="block font-display text-sm font-semibold">{a.label}</span>
                <span className="mt-1 block text-[0.7rem] leading-snug text-muted">
                  {a.hint}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        <IronWatch variant={slug} size={compact ? 200 : 240} />
        <div className="text-center">
          <p className="font-display text-xs tracking-[0.2em] text-primary uppercase">
            Your match
          </p>
          <p className="mt-1 font-display text-2xl font-semibold">{product.name}</p>
          <p className="text-sm text-muted">
            Band {size} · {formatInr(product.price)}
          </p>
          <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{product.promise}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link to="/watches/$slug" params={{ slug }}>
              View {product.series}
            </Link>
          </Button>
          {!compact && (
            <Button asChild variant="outline">
              <Link to="/fit">Full size guide</Link>
            </Button>
          )}
        </div>
      </div>
    </NeonFrame>
  );
}
