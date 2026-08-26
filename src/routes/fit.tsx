import { createFileRoute } from "@tanstack/react-router";
import { Ruler, ScanLine, Sparkles } from "lucide-react";
import { FitWizard } from "@/components/fit-wizard";
import { NeonFrame } from "@/components/neon-frame";

export const Route = createFileRoute("/fit")({ component: FitPage });

const steps = [
  {
    icon: Ruler,
    title: "Measure the wrist, not the ego",
    body: "Wrap a tape just below the wrist bone. FitSense wants millimetres, not a guess from a T-shirt size.",
  },
  {
    icon: ScanLine,
    title: "We pick S, M, or L — and a stretch option",
    body: "Metal on Pro used to return at 42%. Stretchable S/M/L plus a braided flex band covers the in-between wrists.",
  },
  {
    icon: Sparkles,
    title: "QR, then first calibration",
    body: "Sport ships a unique QR card. One scan pairs the watch, seats the optical stack, and plays the tension clip.",
  },
];

function FitPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-display text-xs tracking-[0.22em] text-primary uppercase">FitSense</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
        The white space is not another sensor. It is a verified fit.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Healthy wearables return 12–18%. Stark was at 28%. IronPulse Pro, with a
        metal band, hit 42%. Whoever solves fit-confidence first converts the
        premiumization wave into share.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <NeonFrame key={s.title} className="p-5">
            <s.icon className="size-5 text-primary" />
            <h2 className="mt-3 font-display text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-muted">{s.body}</p>
          </NeonFrame>
        ))}
      </div>

      <div className="mt-12">
        <FitWizard compact />
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <img
          src="/images/run.jpg"
          alt="Runner whose watch stays seated on the wrist"
          className="h-64 w-full rounded-xl object-cover"
        />
        <NeonFrame className="p-6">
          <h2 className="font-display text-xl font-semibold">What 70 buyers told us</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>77% want a wrist-measurement guide before they buy.</li>
            <li>38% have returned — or thought about returning — over fit.</li>
            <li>75% know a loose band wrecks heart-rate and SpO2.</li>
            <li>74% will pay more for a guaranteed, verified fit.</li>
          </ul>
        </NeonFrame>
      </div>
    </div>
  );
}
