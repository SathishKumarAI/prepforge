import { useEffect, useState } from "react";

const KEYS = [
  "base", "mantle", "crust", "surface0", "surface1", "overlay0", "overlay1",
  "subtext0", "text", "mauve", "blue", "teal", "peach", "green", "yellow", "red", "lavender", "sky",
] as const;

type ColorKey = (typeof KEYS)[number];

// Reads the live Catppuccin/Databricks CSS variables as rgb() strings, and
// re-reads on theme change — so Recharts (which needs concrete color strings,
// not CSS vars) stays theme-aware in light and dark.
export function useThemeColors(): Record<ColorKey, string> {
  const [colors, setColors] = useState<Record<ColorKey, string>>(() => read());
  useEffect(() => {
    const update = () => setColors(read());
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return colors;
}

function read(): Record<ColorKey, string> {
  const cs = typeof window !== "undefined" ? getComputedStyle(document.documentElement) : null;
  const out = {} as Record<ColorKey, string>;
  for (const k of KEYS) {
    const v = cs?.getPropertyValue(`--ctp-${k}`).trim();
    out[k] = v ? `rgb(${v})` : "#888888";
  }
  return out;
}
