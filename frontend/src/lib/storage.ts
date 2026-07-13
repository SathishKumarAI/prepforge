// All persistence is browser-local. No backend, no login.

const NS = "prepforge:";

export function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(NS + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function save<T>(key: string, value: T): void {
  try {
    localStorage.setItem(NS + key, JSON.stringify(value));
  } catch {
    /* quota / private mode — ignore */
  }
}

// ---- domain types persisted locally ----

export type FlashState = "new" | "learning" | "known";

import type { SrsCard } from "./srs";

export interface Progress {
  // per-question flashcard bucket (legacy quick-grade)
  flash: Record<string, FlashState>;
  // SM-2 spaced-repetition state keyed by question id
  srs: Record<string, SrsCard>;
  // bookmarked question ids
  bookmarks: string[];
  // personal notes keyed by question id
  notes: Record<string, string>;
  // user-provided "my content" answers keyed by question id
  custom: Record<string, string>;
  // quiz session history
  quizzes: QuizResult[];
  // day-strings the user studied, for streaks e.g. "2026-07-10"
  studyDays: string[];
}

export interface QuizResult {
  date: string; // ISO
  topic: string;
  total: number;
  correct: number;
}

export const EMPTY_PROGRESS: Progress = {
  flash: {},
  srs: {},
  bookmarks: [],
  notes: {},
  custom: {},
  quizzes: [],
  studyDays: [],
};

export function loadProgress(): Progress {
  return { ...EMPTY_PROGRESS, ...load<Progress>("progress", EMPTY_PROGRESS) };
}

export function saveProgress(p: Progress): void {
  save("progress", p);
}

export function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}
