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

// Bumped when the app's default theme changes. Anyone still sitting on the old
// default is moved once; an explicit later choice is never touched again
// because the marker is written at the same time. Idempotent by construction —
// running it twice is a no-op, so it is safe on every load.
const THEME_MIGRATION = 1;
const SUPERSEDED_DEFAULT: ThemeMode = "mocha";

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
  // One-time move off the superseded default. Writing the marker is what makes
  // this run once, so a later deliberate pick of that theme survives.
  if ((s.themeMigration ?? 0) < THEME_MIGRATION) {
    if (s.theme === SUPERSEDED_DEFAULT) s.theme = DEFAULT_THEME;
    s.themeMigration = THEME_MIGRATION;
    saveSettings(s);
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
