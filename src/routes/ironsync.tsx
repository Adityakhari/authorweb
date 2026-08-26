import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, LineChart, Users, Watch } from "lucide-react";
import { NeonFrame } from "@/components/neon-frame";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/ironsync")({ component: IronSyncPage });

const tiles = [
  {
    icon: Watch,
    title: "Size, then pair",
    body: "Enter wrist millimetres. IronSync recommends S, M, or L and whether you need the braided stretch. Then the QR card finishes pairing.",
  },
  {
    icon: Brain,
    title: "AI mentor",
    body: "Programmes that respect last night’s sleep, today’s HRV, and the fact that a loose band is a bad data day — not a bad athlete.",
  },
  {
    icon: LineChart,
    title: "Training that compounds",
    body: "Load, recovery, and multi-sport modes on Pro. Daily rings on Sport. Voice-first logging on Elite.",
  },
  {
    icon: Users,
    title: "A room that trains",
    body: "In-app clubs, ambassador sessions, marathons. Real user content — not a stock smile on a treadmill.",
  },
];

function IronSyncPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-display text-xs tracking-[0.22em] text-primary uppercase">IronSync</p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
        The OS for a watch that tells the truth.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Heart-rate, SpO2, GPS, sleep — then a report that actually changes
        tomorrow morning. IronSync is where FitSense, calibration, and coaching
        live.
      </p>

      <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
        <NeonFrame className="overflow-hidden p-0" glow="strong">
          <img
            src="/images/app-screen.png"
            alt="IronSync app showing a weekly training plan"
            className="w-full object-cover object-top"
          />
        </NeonFrame>
        <div className="grid gap-4 sm:grid-cols-2">
          {tiles.map((t) => (
            <NeonFrame key={t.title} className="p-5">
              <t.icon className="size-5 text-primary" />
              <h2 className="mt-3 font-display text-lg font-semibold">{t.title}</h2>
              <p className="mt-2 text-sm text-muted">{t.body}</p>
            </NeonFrame>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <img
          src="/images/training.jpg"
          alt="Athlete mid training session"
          className="h-64 w-full rounded-xl object-cover"
        />
        <img
          src="/images/friends.jpg"
          alt="Friends after a session"
          className="h-64 w-full rounded-xl object-cover"
        />
      </div>

      <NeonFrame className="mt-12 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold">Ready to size in?</h2>
          <p className="mt-1 text-sm text-muted">
            FitSense takes thirty seconds. The band you get is the band you keep.
          </p>
        </div>
        <Button asChild>
          <Link to="/fit">Open FitSense</Link>
        </Button>
      </NeonFrame>
    </div>
  );
}
