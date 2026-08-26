import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatInr } from "@/lib/utils";
import { bandFromMm, getProduct, type WatchSlug } from "@/lib/products";

export function PreorderDialog({
  slug,
  trigger,
}: {
  slug: WatchSlug;
  trigger?: ReactNode;
}) {
  const product = getProduct(slug)!;
  const [open, setOpen] = useState(false);
  const [mm, setMm] = useState(172);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const size = bandFromMm(mm);

  function submit(e: FormEvent) {
    e.preventDefault();
    const raw = localStorage.getItem("ironpulse-orders");
    const orders: unknown[] = raw ? (JSON.parse(raw) as unknown[]) : [];
    orders.push({ slug, mm, size, email, at: Date.now() });
    localStorage.setItem("ironpulse-orders", JSON.stringify(orders));
    setDone(true);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setDone(false);
      }}
    >
      <DialogTrigger asChild>
        {trigger ?? <Button>Pre-order {product.series}</Button>}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{done ? "You're on the list" : `Pre-order ${product.name}`}</DialogTitle>
        <DialogDescription>
          {done
            ? `We'll hold a ${size} band and email when the next allocation ships.`
            : `${formatInr(product.price)} · FitSense sizes the band before it leaves the warehouse.`}
        </DialogDescription>
        {done ? (
          <Button className="mt-5 w-full" onClick={() => setOpen(false)}>
            Continue
          </Button>
        ) : (
          <form className="mt-5 space-y-4" onSubmit={submit}>
            <div className="space-y-2">
              <Label htmlFor={`wrist-${slug}`}>
                Wrist circumference · {mm} mm · size {size}
              </Label>
              <input
                id={`wrist-${slug}`}
                type="range"
                min={140}
                max={210}
                value={mm}
                onChange={(e) => setMm(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`email-${slug}`}>Email</Label>
              <Input
                id={`email-${slug}`}
                required
                type="email"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Reserve {product.series} · {size}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
