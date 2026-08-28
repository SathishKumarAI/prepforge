// Theme + text-scale application. Pure DOM side-effects; state lives in settings.
//
// Two themes, not five. A palette is a thing you have to measure and maintain —
// `npm run contrast` holds every text pairing to a floor — and five palettes
// meant four of them were unmeasured and drifting. Dark and light are the two a
// reader actually switches between: by the light in the room, not by mood.
export type ThemeMode = "dark" | "light" | "system";
export type TextSize = "sm" | "base" | "lg" | "xl";
export type Density = "comfortable" | "compact";

// which themes are light — kept for callers that need to branch on it
const LIGHT_THEMES = new Set(["light"]);

/** The theme that lives on :root with no attribute, so first paint is correct. */
export const DEFAULT_THEME: ThemeMode = "dark";

export const THEME_OPTIONS: { value: ThemeMode; label: string }[] = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
  { value: "system", label: "System" },
];

export const TEXT_SIZES: { value: TextSize; label: string }[] = [
  { value: "sm", label: "S" },
  { value: "base", label: "M" },
  { value: "lg", label: "L" },
  { value: "xl", label: "XL" },
];

export const DENSITIES: { value: Density; label: string }[] = [
  { value: "comfortable", label: "Comfortable" },
  { value: "compact", label: "Compact" },
];

function prefersLight(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches;
}

export function applyTheme(mode: ThemeMode): void {
  const root = document.documentElement;
  const theme = mode === "system" ? (prefersLight() ? "light" : DEFAULT_THEME) : mode;
  // dark is the palette on :root — no attribute needed
  if (theme === DEFAULT_THEME) root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
  root.setAttribute("data-mode", LIGHT_THEMES.has(theme) ? "light" : "dark");
}

export function applyTextSize(size: TextSize): void {
  const root = document.documentElement;
  if (size === "base") root.removeAttribute("data-textsize");
  else root.setAttribute("data-textsize", size);
}

export function applyDensity(density: Density): void {
  const root = document.documentElement;
  if (density === "comfortable") root.removeAttribute("data-density");
  else root.setAttribute("data-density", density);
}
