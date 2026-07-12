// User profile + interests. Local-only. Feeds the generator persona and Learn mix.
import { load, save } from "./storage";

export interface Settings {
  name: string;
  role: string; // target role, e.g. "ML Engineer"
  seniority: "junior" | "mid" | "senior" | "staff";
  interests: string[]; // topic names the user cares about
  difficulty: ("easy" | "medium" | "hard")[]; // preferred difficulties (empty = all)
  companies: string; // free text, capped
}

export const EMPTY_SETTINGS: Settings = {
  name: "",
  role: "",
  seniority: "mid",
  interests: [],
  difficulty: [],
  companies: "",
};

const MAX_TEXT = 200;

export function loadSettings(): Settings {
  const s = { ...EMPTY_SETTINGS, ...load<Settings>("settings", EMPTY_SETTINGS) };
  // defensive: clamp free text, ensure arrays
  s.name = (s.name ?? "").slice(0, MAX_TEXT);
  s.role = (s.role ?? "").slice(0, MAX_TEXT);
  s.companies = (s.companies ?? "").slice(0, MAX_TEXT);
  s.interests = Array.isArray(s.interests) ? s.interests : [];
  s.difficulty = Array.isArray(s.difficulty) ? s.difficulty : [];
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
