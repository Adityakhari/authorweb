import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Cpu,
  Droplets,
  Heart,
  MapPin,
  Moon,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import { FitWizard } from "@/components/fit-wizard";
import { IronWatch } from "@/components/iron-watch";
import { NeonFrame } from "@/components/neon-frame";
import { PreorderDialog } from "@/components/preorder-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { features, products } from "@/lib/products";
import { formatInr } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const icons = [Heart, Droplets, MapPin, Moon, Cpu, QrCode];

function Home() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100dvh-4rem)] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="scanlines" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <Badge>IronPulse series · D2C</Badge>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-gradient sm:text-6xl">
              Certainty
              <br />
              on your wrist.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Every competitor sells a sensor. None of them sell the fit that
              makes it accurate. Sport, Pro, and Elite — built so heart-rate and
              SpO2 are actually reading.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/collection">
                  Explore the series <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/fit">Run FitSense</Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                ["3 yrs", "D2C in India"],
                ["18–30", "Primary pulse"],
                ["Fit 1st", "Returns down"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-xl font-semibold text-fg sm:text-2xl">{k}</dt>
                  <dd className="text-xs tracking-wide text-muted uppercase">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto">
            <NeonFrame className="p-6 sm:p-8" glow="strong">
              <IronWatch variant="pro" size={220} />
              <p className="mt-4 text-center font-display text-xs tracking-[0.28em] text-primary uppercase">
                IronPulse Pro · live face
              </p>
            </NeonFrame>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs tracking-[0.22em] text-primary uppercase">
              The series
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Three instruments. One standard of fit.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/collection">Compare all</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {products.map((p) => (
            <Link key={p.slug} to="/watches/$slug" params={{ slug: p.slug }} className="group">
              <NeonFrame className="flex h-full flex-col p-5 transition-[box-shadow] duration-200 group-hover:shadow-[var(--shadow-neon-strong)]">
                <Badge variant={p.accent}>{p.series}</Badge>
                <div className="flex justify-center py-4">
                  <IronWatch variant={p.slug} size={168} />
                </div>
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                <p className="mt-4 font-display text-lg tabular-nums">
                  {formatInr(p.price)}
                  <span className="ml-2 text-sm text-faint line-through">{formatInr(p.mrp)}</span>
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                  See {p.series} <ArrowRight className="size-4" />
                </span>
              </NeonFrame>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative py-6">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
          <img
            src="/images/run.jpg"
            alt="Runner on an open road at dusk"
            className="h-64 w-full rounded-xl object-cover sm:h-80"
          />
          <img
            src="/images/gym-dark.jpg"
            alt="Training in a dark gym"
            className="h-64 w-full rounded-xl object-cover sm:h-80"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FitWizard />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="font-display text-xs tracking-[0.22em] text-primary uppercase">
          Why returns happen — and stop
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Pairing, fit, sensors, battery. We designed against all four.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = icons[i] ?? Activity;
            return (
              <NeonFrame key={f.key} className="p-5">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-3 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </NeonFrame>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <NeonFrame className="grid items-center gap-8 overflow-hidden p-0 md:grid-cols-2" glow="strong">
          <div className="p-6 sm:p-10">
            <Badge>IronSync</Badge>
            <h2 className="mt-4 font-display text-3xl font-semibold">
              The watch is hardware. The certainty is software.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Size recommendation, AI training blocks, live calibration, and a
              community that actually wears the same instrument. IronSync is
              how Sport, Pro, and Elite stay honest after day one.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <ShieldCheck className="mt-0.5 size-4 text-primary" /> Wrist size → band, before it ships
              </li>
              <li className="flex gap-2">
                <ShieldCheck className="mt-0.5 size-4 text-primary" /> AI mentor for sessions and recovery
              </li>
              <li className="flex gap-2">
                <ShieldCheck className="mt-0.5 size-4 text-primary" /> Ambassador events, marathons, in-app clubs
              </li>
            </ul>
            <Button asChild className="mt-6">
              <Link to="/ironsync">Open IronSync</Link>
            </Button>
          </div>
          <img
            src="/images/app-screen.png"
            alt="IronSync training dashboard on a phone"
            className="h-full max-h-[480px] w-full object-cover object-top md:rounded-none"
          />
        </NeonFrame>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <img
            src="/images/lifestyle-fit.png"
            alt="Two people comparing IronPulse on the wrist"
            className="h-72 w-full rounded-xl object-cover"
          />
          <NeonFrame className="flex flex-col justify-between p-6">
            <div>
              <p className="font-display text-xs tracking-[0.2em] text-primary uppercase">
                Gift a pulse
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">
                A promise beyond protection.
              </h2>
              <p className="mt-2 text-sm text-muted">
                Rakhi, Diwali, a first marathon. Personalised straps and a
                FitSense card in every box so the person you gift actually
                keeps it.
              </p>
            </div>
            <PreorderDialog
              slug="elite"
              trigger={<Button className="mt-6 w-full sm:w-auto">Reserve Elite</Button>}
            />
          </NeonFrame>
        </div>
      </section>
    </>
  );
}
