// Theme + text-scale application. Pure DOM side-effects; state lives in settings.
export type ThemeMode = "mocha" | "latte" | "system";
export type TextSize = "sm" | "base" | "lg" | "xl";

export const THEME_OPTIONS: { value: ThemeMode; label: string }[] = [
  { value: "mocha", label: "Dark" },
  { value: "latte", label: "Light" },
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
  const light = mode === "latte" || (mode === "system" && prefersLight());
  if (light) root.setAttribute("data-theme", "latte");
  else root.removeAttribute("data-theme");
}

export function applyTextSize(size: TextSize): void {
  const root = document.documentElement;
  if (size === "base") root.removeAttribute("data-textsize");
  else root.setAttribute("data-textsize", size);
}
