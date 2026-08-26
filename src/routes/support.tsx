import { createFileRoute, Link } from "@tanstack/react-router";
import { NeonFrame } from "@/components/neon-frame";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/support")({ component: SupportPage });

const faqs = [
  {
    q: "Why does band size change my heart-rate?",
    a: "Optical sensors need consistent skin contact. A metal bracelet one link too big lifts the diode. FitSense exists so that never ships.",
  },
  {
    q: "How does the QR card work?",
    a: "Every Sport (and optionally Pro / Elite) includes a unique QR. Scan it in IronSync: the watch pairs, locates, and plays a 90-second seating guide.",
  },
  {
    q: "I am between S and M.",
    a: "Choose M on metal and add the braided stretch. Pro’s flex band covers up to six extra inches without floating the sensor.",
  },
  {
    q: "Can I print a strap?",
    a: "Elite only. Initials, a date, a short line — set in IronSync before the leather is cut.",
  },
  {
    q: "What is the return window?",
    a: "14 days, unworn, with the QR card. FitSense is designed so you do not need it. If the size is wrong, we swap the band first.",
  },
  {
    q: "Is IronPulse medical?",
    a: "No. It is a fitness instrument. Readings are for training and recovery, not diagnosis.",
  },
];

function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-display text-xs tracking-[0.22em] text-primary uppercase">Support</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Pair. Seat. Train.</h1>
      <p className="mt-3 text-muted">
        Most “broken” watches are just unpaired, or sitting a millimetre off the
        wrist. Start here before you ship anything back.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/fit">Size guide</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/ironsync">IronSync help</Link>
        </Button>
      </div>

      <div className="mt-10 space-y-3">
        {faqs.map((f) => (
          <NeonFrame key={f.q} className="p-5">
            <h2 className="font-display text-base font-semibold">{f.q}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
          </NeonFrame>
        ))}
      </div>
    </div>
  );
}
