// User profile + interests + appearance. Local-only. Feeds the generator persona and Learn mix.
import { load, save } from "./storage";
import { DEFAULT_THEME, type Density, type TextSize, type ThemeMode } from "./theme";

export interface Settings {
  name: string;
  role: string; // target role, e.g. "ML Engineer"
  seniority: "junior" | "mid" | "senior" | "staff";
  interests: string[]; // topic names the user cares about
  difficulty: ("easy" | "medium" | "hard")[]; // preferred difficulties (empty = all)
  companies: string; // free text, capped
  theme: ThemeMode; // appearance
  textSize: TextSize; // global text scale
  density: Density; // card/list spacing
  themeMigration?: number; // last applied default-theme migration (see loadSettings)
}

const MAX_TEXT = 200;

// Bumped when the theme set changes. Anyone sitting on a theme that no longer
// exists is moved once, to the one of the two that matches what they had — a
// light theme stays light. The marker is written at the same time, so an
// explicit later choice is never touched again. Idempotent by construction:
// running it twice is a no-op, so it is safe on every load.
//
// 2 (2026-08-28): five themes became two. Anything not "dark", "light" or
//                 "system" is a retired theme and lands here.
// 1: the default moved off Catppuccin Mocha.
const THEME_MIGRATION = 2;
const RETIRED_THEMES: Record<string, ThemeMode> = {
  mocha: "dark",
  "databricks-dark": "dark",
  latte: "light",
  "databricks-light": "light",
  sepia: "light",
};

export const EMPTY_SETTINGS: Settings = {
  name: "",
  role: "",
  seniority: "mid",
  interests: [],
  difficulty: [],
  companies: "",
  theme: DEFAULT_THEME,
  textSize: "base",
  density: "comfortable",
  themeMigration: THEME_MIGRATION,
};

export function loadSettings(): Settings {
  const s = { ...EMPTY_SETTINGS, ...load<Settings>("settings", EMPTY_SETTINGS) };
  // defensive: clamp free text, ensure arrays
  s.name = (s.name ?? "").slice(0, MAX_TEXT);
  s.role = (s.role ?? "").slice(0, MAX_TEXT);
  s.companies = (s.companies ?? "").slice(0, MAX_TEXT);
  s.interests = Array.isArray(s.interests) ? s.interests : [];
  s.difficulty = Array.isArray(s.difficulty) ? s.difficulty : [];
  s.theme = s.theme ?? DEFAULT_THEME;
  s.textSize = s.textSize ?? "base";
  s.density = s.density ?? "comfortable";
  // One-time move off a retired theme. Writing the marker is what makes this
  // run once. The fallback is unconditional rather than migration-gated: a
  // theme id that no longer has a CSS block would otherwise render the default
  // palette while the settings panel showed nothing selected.
  if ((s.themeMigration ?? 0) < THEME_MIGRATION) {
    s.theme = RETIRED_THEMES[s.theme] ?? s.theme;
    s.themeMigration = THEME_MIGRATION;
    saveSettings(s);
  }
  if (s.theme !== "dark" && s.theme !== "light" && s.theme !== "system") {
    s.theme = RETIRED_THEMES[s.theme] ?? DEFAULT_THEME;
  }
  return s;
}

export function saveSettings(s: Settings): void {
  save("settings", s);
}

// Build a persona hint string for the answer generator from the profile.
export function personaHint(s: Settings): string {
  const bits: string[] = [];
  if (s.role) bits.push(`targeting a ${s.seniority} ${s.role} role`);
  if (s.interests.length) bits.push(`interested in ${s.interests.join(", ")}`);
  if (s.companies.trim()) bits.push(`prepping for ${s.companies.trim()}`);
  return bits.join("; ");
}
