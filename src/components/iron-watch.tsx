import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { WatchSlug } from "@/lib/products";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

const SSR_HOUR = 10;
const SSR_MIN = 8;
const SSR_SEC = 12;

export function IronWatch({
  variant,
  className,
  size,
}: {
  variant: WatchSlug;
  className?: string;
  size?: number;
}) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const hours = now ? now.getHours() : SSR_HOUR;
  const minutes = now ? now.getMinutes() : SSR_MIN;
  const seconds = now ? now.getSeconds() : SSR_SEC;
  const label = variant.toUpperCase();

  return (
    <div
      className={cn("iron-watch", className)}
      data-variant={variant}
      style={size ? { ["--watch-size" as string]: `${size}px` } : undefined}
      aria-hidden="true"
    >
      <div className="band top" />
      <div className="band bot" />
      <div className="case">
        <div className="bezel">
          <div className="crystal">
            <div className="rings" />
            <div className="rings inner" />
            <div
              className="hand"
              style={{ transform: `translateX(-50%) rotate(${seconds * 6}deg)` }}
            />
            <div className="face">
              <div className="time">
                {pad(hours)}:{pad(minutes)}
              </div>
              <div className="sub">{label}</div>
              <div className="hr-dot">HR 72</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
