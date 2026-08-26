import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { IronWatch } from "@/components/iron-watch";
import { NeonFrame } from "@/components/neon-frame";
import { PreorderDialog } from "@/components/preorder-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/lib/products";
import { formatInr } from "@/lib/utils";

export const Route = createFileRoute("/watches/$slug")({
  component: WatchPage,
});

function WatchPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  if (!product) throw notFound();

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-display text-xs tracking-[0.22em] text-primary uppercase">
        IronPulse · {product.series}
      </p>
      <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
        <NeonFrame className="flex flex-col items-center p-8" glow="strong">
          <IronWatch variant={product.slug} size={280} />
          <p className="mt-4 font-display text-xs tracking-[0.24em] text-muted uppercase">
            Live face · {product.caseSize} case
          </p>
        </NeonFrame>
        <div>
          <Badge variant={product.accent}>{product.solution.title}</Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold">{product.name}</h1>
          <p className="mt-3 text-lg text-muted">{product.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{product.promise}</p>
          <p className="mt-6 font-display text-3xl tabular-nums">
            {formatInr(product.price)}
            <span className="ml-3 text-base text-faint line-through">{formatInr(product.mrp)}</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PreorderDialog slug={product.slug} />
            <Button asChild variant="outline">
              <Link to="/fit">Check my size</Link>
            </Button>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {[
              ["Band", product.band],
              ["Case", product.caseSize],
              ["Weight", product.weight],
              ["Battery", product.battery],
              ["Water", product.water],
            ].map(([k, v]) => (
              <div key={k} className="rounded-md border border-border bg-surface px-3 py-2">
                <dt className="text-[0.65rem] tracking-[0.16em] text-faint uppercase">{k}</dt>
                <dd className="mt-1 text-fg">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <NeonFrame className="p-6">
          <h2 className="font-display text-xl font-semibold">What it solves</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {product.solution.points.map((pt) => (
              <li key={pt} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {pt}
              </li>
            ))}
          </ul>
        </NeonFrame>
        <NeonFrame className="p-6">
          <h2 className="font-display text-xl font-semibold">On the watch</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {product.features.map((pt) => (
              <li key={pt} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {pt}
              </li>
            ))}
          </ul>
        </NeonFrame>
      </div>

      <img
        src={product.slug === "sport" ? "/images/run.jpg" : product.slug === "pro" ? "/images/training.jpg" : "/images/lifestyle-fit.png"}
        alt=""
        className="mt-10 h-64 w-full rounded-xl object-cover sm:h-80"
      />

      <h2 className="mt-14 font-display text-xl font-semibold">The rest of the series</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {others.map((p) => (
          <Link key={p.slug} to="/watches/$slug" params={{ slug: p.slug }}>
            <NeonFrame className="flex items-center gap-4 p-4 hover:shadow-[var(--shadow-neon-strong)]">
              <IronWatch variant={p.slug} size={96} />
              <div>
                <p className="font-display font-semibold">{p.name}</p>
                <p className="text-sm text-muted">{formatInr(p.price)}</p>
              </div>
            </NeonFrame>
          </Link>
        ))}
      </div>
    </div>
  );
}
