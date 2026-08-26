export type WatchSlug = "sport" | "pro" | "elite";

export type Product = {
  slug: WatchSlug;
  name: string;
  series: string;
  tagline: string;
  promise: string;
  price: number;
  mrp: number;
  accent: "sport" | "pro" | "elite";
  band: string;
  caseSize: string;
  weight: string;
  battery: string;
  water: string;
  sensors: string[];
  features: string[];
  solution: {
    title: string;
    points: string[];
  };
  fitNote: string;
};

export const products: Product[] = [
  {
    slug: "sport",
    name: "IronPulse Sport",
    series: "Sport",
    tagline: "Built to move. Sized to read.",
    promise: "One-scan pairing and a band that stays flush so heart-rate and SpO2 stay honest.",
    price: 4990,
    mrp: 6990,
    accent: "sport",
    band: "Adaptive cobalt silicone, 14–22 cm",
    caseSize: "45 mm",
    weight: "38 g",
    battery: "11 days typical",
    water: "5 ATM",
    sensors: ["Optical heart rate", "SpO2", "Built-in GPS", "Sleep staging"],
    features: [
      "Unique QR card in every box",
      "One-scan pairing and location lock",
      "Guided calibration in under 90 seconds",
      "AI setup videos inside IronSync",
    ],
    solution: {
      title: "Smart QR Setup",
      points: [
        "A unique QR card ships with every Sport.",
        "Scan once — the watch pairs, locates, and walks you through sensor seating.",
        "Animated AI clips cover strap tension, wrist bone, and first workout.",
      ],
    },
    fitNote: "Strong volume driver. Lowest return rate in the lineup when the QR setup is completed.",
  },
  {
    slug: "pro",
    name: "IronPulse Pro",
    series: "Pro",
    tagline: "FitSense. Because metal should never guess.",
    promise: "Enter your wrist once. Stretchable metal and braided bands lock the sensor where it belongs.",
    price: 9990,
    mrp: 12990,
    accent: "pro",
    band: "Stretch metal S / M / L + braided flex up to 6 in",
    caseSize: "46 mm",
    weight: "52 g",
    battery: "16 days typical",
    water: "10 ATM",
    sensors: ["Multi-band GPS", "Advanced HRV", "SpO2", "Skin-temp trend"],
    features: [
      "Wrist-size entry in IronSync",
      "App-recommended S / M / L metal",
      "Braided stretch band for mixed wrists",
      "Multi-sport modes and training load",
    ],
    solution: {
      title: "FitSense Technology",
      points: [
        "Pro returns were 42% — almost all of them a metal-band sizing miss.",
        "FitSense maps circumference to a size before the box ships.",
        "Braided stretch covers the in-between wrists metal links never could.",
      ],
    },
    fitNote: "Highest historical return rate. FitSense is the whole product.",
  },
  {
    slug: "elite",
    name: "IronPulse Elite",
    series: "Elite",
    tagline: "Luxury that actually sits still.",
    promise: "Sensor cushion, gel-padded leather, and 360° product visuals so the first unboxing is the last.",
    price: 16990,
    mrp: 19990,
    accent: "elite",
    band: "Gel-padded leather + silicon sensor cushion",
    caseSize: "44 mm",
    weight: "48 g",
    battery: "9 days typical · wireless charge",
    water: "5 ATM",
    sensors: ["Precision HR", "SpO2", "Voice assistant", "Sleep & recovery"],
    features: [
      "Silicon sensor cushion against the wrist",
      "Gel padding in the leather strap",
      "360° product visuals before you buy",
      "Personalised strap printing",
    ],
    solution: {
      title: "Comfort Architecture",
      points: [
        "Elite buyers expect a jewel. They return a bruise.",
        "A hidden silicon cushion keeps optics seated without crushing the wrist.",
        "Personalised straps and 360° views close the expectation gap.",
      ],
    },
    fitNote: "Moderate returns, mostly comfort and finish. Cushion + leather gel is the fix.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const features = [
  {
    key: "hr",
    title: "Heart rate that sits flush",
    body: "Loose metal is the #1 reason optical HR lies. FitSense and the Sport QR both exist to keep the diode on skin.",
  },
  {
    key: "spo2",
    title: "SpO2 you can trust at 2 a.m.",
    body: "Seventy-five percent of the people we surveyed already know a loose band wrecks overnight oxygen. We designed for that person.",
  },
  {
    key: "gps",
    title: "Built-in GPS, no phone leash",
    body: "Sport and Pro lock satellites on the watch. Elite leans on the phone when you want the slimmer case.",
  },
  {
    key: "sleep",
    title: "Sleep that recovers, not just logs",
    body: "IronSync turns staging into a next-day plan — training load, caffeine cut-off, and a wrist that stayed put all night.",
  },
  {
    key: "ai",
    title: "IronSync AI mentor",
    body: "Personal programmes, workout form cues, calorie honesty, and a live size-check if the band ever creeps.",
  },
  {
    key: "qr",
    title: "Pairing that does not fight you",
    body: "A unique QR card. One scan. Guided calibration. The #1 return reason in wearables is pairing — we removed the maze.",
  },
];

export const nav = [
  { to: "/", label: "Pulse" },
  { to: "/collection", label: "Collection" },
  { to: "/fit", label: "FitSense" },
  { to: "/ironsync", label: "IronSync" },
  { to: "/support", label: "Support" },
] as const;

export function bandFromMm(mm: number): "S" | "M" | "L" {
  if (mm < 160) return "S";
  if (mm <= 185) return "M";
  return "L";
}

export function recommendSlug(mm: number, activity: "daily" | "train" | "race"): WatchSlug {
  if (activity === "daily") return "elite";
  if (activity === "race") return "pro";
  if (mm >= 185) return "pro";
  return "sport";
}
