import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">
            Direct-to-wrist fitness instruments. Fit-verified so the sensor is
            actually reading — not guessing.
          </p>
        </div>
        <div>
          <p className="font-display text-xs tracking-[0.2em] text-faint uppercase">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xs tracking-[0.2em] text-faint uppercase">
            IronPulse
          </p>
          <p className="mt-3 text-sm text-muted">
            Stark Industries · D2C wearables
            <br />
            18–30 · India first
            <br />
            Pairing, fit, and certainty — in that order.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs tracking-[0.18em] text-faint uppercase">
        © {new Date().getFullYear()} Stark Industries · IronPulse series
      </div>
    </footer>
  );
}
