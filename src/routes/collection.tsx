import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { IronWatch } from "@/components/iron-watch";
import { NeonFrame } from "@/components/neon-frame";
import { PreorderDialog } from "@/components/preorder-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { formatInr } from "@/lib/utils";

export const Route = createFileRoute("/collection")({ component: Collection });

const rows = [
  { label: "Optical HR", values: [true, true, true] },
  { label: "SpO2", values: [true, true, true] },
  { label: "Built-in GPS", values: [true, true, false] },
  { label: "Multi-sport / load", values: [false, true, false] },
  { label: "Voice assistant", values: [false, false, true] },
  { label: "Wireless charge", values: [false, false, true] },
  { label: "QR pairing card", values: [true, true, true] },
  { label: "FitSense size map", values: [false, true, true] },
  { label: "Sensor cushion", values: [false, false, true] },
  { label: "Personalised strap print", values: [false, false, true] },
];

function Collection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-display text-xs tracking-[0.22em] text-primary uppercase">Collection</p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
        IronPulse. Three ways to sit flush.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Same optical stack. Different problems of fit. Pick the instrument that
        matches how you train — FitSense will still size the band.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {products.map((p) => (
          <NeonFrame key={p.slug} className="flex flex-col p-6" glow="strong">
            <Badge variant={p.accent}>{p.series}</Badge>
            <div className="flex justify-center py-5">
              <IronWatch variant={p.slug} size={200} />
            </div>
            <h2 className="font-display text-2xl font-semibold">{p.name}</h2>
            <p className="mt-1 text-sm text-muted">{p.tagline}</p>
            <p className="mt-4 font-display text-2xl tabular-nums">
              {formatInr(p.price)}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted">
              {p.sensors.map((s) => (
                <li key={s} className="flex gap-2">
                  <Check className="mt-0.5 size-4 text-primary" /> {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <Button asChild>
                <Link to="/watches/$slug" params={{ slug: p.slug }}>
                  Configure {p.series}
                </Link>
              </Button>
              <PreorderDialog
                slug={p.slug}
                trigger={
                  <Button variant="outline" className="w-full">
                    Pre-order
                  </Button>
                }
              />
            </div>
          </NeonFrame>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-semibold">Lineup, side by side</h2>
      <NeonFrame className="mt-5 overflow-x-auto p-0">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 font-medium text-muted"> </th>
              {products.map((p) => (
                <th key={p.slug} className="px-4 py-3 font-display text-fg">
                  {p.series}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-border/60">
                <td className="px-4 py-3 text-muted">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={products[i].slug} className="px-4 py-3">
                    {v ? (
                      <Check className="size-4 text-primary" />
                    ) : (
                      <span className="text-faint">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </NeonFrame>
    </div>
  );
}
