// Theme + text-scale application. Pure DOM side-effects; state lives in settings.
export type ThemeMode =
  | "mocha" | "latte" | "databricks-dark" | "databricks-light" | "sepia" | "system";
export type TextSize = "sm" | "base" | "lg" | "xl";

// which themes are light (for data-mode) — drives the light-render fixes in CSS
const LIGHT_THEMES = new Set(["latte", "databricks-light", "sepia"]);

export const THEME_OPTIONS: { value: ThemeMode; label: string }[] = [
  { value: "mocha", label: "Catppuccin dark" },
  { value: "latte", label: "Catppuccin light" },
  { value: "databricks-dark", label: "Databricks dark" },
  { value: "databricks-light", label: "Databricks light" },
  { value: "sepia", label: "Sepia (low-blue)" },
  { value: "system", label: "System" },
];

export const TEXT_SIZES: { value: TextSize; label: string }[] = [
  { value: "sm", label: "S" },
  { value: "base", label: "M" },
  { value: "lg", label: "L" },
  { value: "xl", label: "XL" },
];

function prefersLight(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches;
}

export function applyTheme(mode: ThemeMode): void {
  const root = document.documentElement;
  // resolve "system" to a concrete Catppuccin theme
  const theme = mode === "system" ? (prefersLight() ? "latte" : "mocha") : mode;
  // mocha is the default palette on :root — no attribute needed
  if (theme === "mocha") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
  root.setAttribute("data-mode", LIGHT_THEMES.has(theme) ? "light" : "dark");
}

export function applyTextSize(size: TextSize): void {
  const root = document.documentElement;
  if (size === "base") root.removeAttribute("data-textsize");
  else root.setAttribute("data-textsize", size);
}
