/**
 * The one declarative table for "how am I studying".
 *
 * This used to be three separate routes (/learn, /flashcards, /quiz), which is
 * the same failure as a stored mode field: no single place knew enough to
 * decide, so every screen re-derived its own answer and they drifted. Three
 * routes meant three session shells, three progress bars, three empty states
 * and three ideas of what "due" means.
 *
 * Everything that varies by mode lives here — copy included. Components read
 * the table; no component branches on a mode literal to decide what to render.
 *
 * Owns: mode identity, eligibility, copy, how a grade is recorded.
 * Does NOT own: scheduling (lib/srs), persistence (lib/storage), layout.
 */
import type { Question } from "./types";
import type { SrsCard } from "./srs";
import { isDue } from "./srs";

/** Typed as a union, not a string: the compiler then finds every stale write. */
export type StudyMode = "recall" | "drill" | "quiz";

/** Where a grade is recorded. Deliberately not unified — see `grades` below. */
export type GradeSink = "srs" | "flash" | "quiz";

export interface ModeSpec {
  key: StudyMode;
  /** Segment label. */
  label: string;
  /** One line under the segment, saying what this mode does to your memory. */
  blurb: string;
  /** Act-zone heading. Changes with mode: "Recall from memory", not "Study". */
  heading: string;
  /** Verb-first CTA naming the outcome. */
  cta: string;
  /** What the orient bar's headline fact counts, in this mode's terms. */
  readyLabel: string;
  /** Copy for the state where nothing is available. */
  emptyLabel: string;
  /**
   * Which questions this mode can use at all. Quiz needs a multiple-choice
   * payload; the others only need an answer to check yourself against.
   */
  eligible: (q: Question) => boolean;
  /**
   * Which eligible questions are *ready right now*. Recall respects the SM-2
   * due date; the other two are self-paced and always ready.
   */
  ready: (q: Question, card: SrsCard | undefined) => boolean;
  /**
   * Where a grade lands.
   *
   * These are NOT unified on purpose. `flash` is a two-state "do I know this",
   * `srs` drives real scheduling, and merging them would silently rewrite the
   * meaning of every card graded before today — a casual flip would start
   * moving due dates. Progress reads both.
   */
  grades: GradeSink;
  /** Rating buttons this mode offers, worst → best. */
  ratings: { key: "again" | "hard" | "good" | "easy"; label: string }[];
}

const FOUR_POINT: ModeSpec["ratings"] = [
  { key: "again", label: "Again" },
  { key: "hard", label: "Hard" },
  { key: "good", label: "Good" },
  { key: "easy", label: "Easy" },
];

const TWO_POINT: ModeSpec["ratings"] = [
  { key: "again", label: "Missed it" },
  { key: "good", label: "Got it" },
];

export const MODES: Record<StudyMode, ModeSpec> = {
  recall: {
    key: "recall",
    label: "Recall",
    blurb: "Spaced repetition. Answer from memory, then rate how it went.",
    heading: "Recall from memory",
    cta: "Start recall session",
    readyLabel: "due now",
    emptyLabel: "Nothing is due. Spaced repetition works by making you wait.",
    eligible: (q) => Boolean(q.answer),
    ready: (_q, card) => Boolean(card?.seen && isDue(card)),
    grades: "srs",
    ratings: FOUR_POINT,
  },
  drill: {
    key: "drill",
    label: "Drill",
    blurb: "Fast flip through a deck. No scheduling, no pressure.",
    heading: "Drill the deck",
    cta: "Start drilling",
    readyLabel: "in the deck",
    emptyLabel: "No cards match. Widen the topic filter.",
    eligible: (q) => Boolean(q.answer),
    ready: () => true,
    grades: "flash",
    ratings: TWO_POINT,
  },
  quiz: {
    key: "quiz",
    label: "Quiz",
    blurb: "Multiple choice, scored at the end. Tests recognition, not recall.",
    heading: "Answer the question",
    cta: "Start quiz",
    readyLabel: "quiz-ready",
    emptyLabel: "No question in this filter carries a multiple-choice quiz.",
    eligible: (q) => Boolean(q.quiz),
    ready: () => true,
    grades: "quiz",
    ratings: [],
  },
};

export const MODE_ORDER: StudyMode[] = ["recall", "drill", "quiz"];

/** Normalise anything persisted or arriving from a link. Never guesses. */
export function toStudyMode(value: unknown): StudyMode {
  return typeof value === "string" && value in MODES ? (value as StudyMode) : "recall";
}

/** Legacy route → mode, so old links and bookmarks keep working. */
export const LEGACY_ROUTES: Record<string, StudyMode> = {
  "/learn": "recall",
  "/flashcards": "drill",
  "/quiz": "quiz",
};
