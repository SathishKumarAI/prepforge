// SM-2 spaced-repetition scheduler (Piotr Woźniak, SuperMemo 2), lightly adapted.
// Each card tracks an easiness factor, running interval, repetition count, and due date.

export type Rating = "again" | "hard" | "good" | "easy";
export type Stage = "new" | "learning" | "review" | "mastered";

export interface SrsCard {
  ef: number; // easiness factor, >= 1.3
  interval: number; // days until next review
  reps: number; // consecutive successful reviews
  lapses: number; // times forgotten
  due: string; // ISO date (YYYY-MM-DD) when the card is next due
  stage: Stage;
  seen: boolean; // has the reader encoded (read) it at least once
}

const RATING_Q: Record<Rating, number> = { again: 2, hard: 3, good: 4, easy: 5 };
const MASTERED_INTERVAL = 21;

/**
 * Forgotten this many times and the card is not being learned, it is being
 * re-read. SM-2 answers a failure by shortening the interval, which for a card
 * you cannot hold means seeing it constantly and still failing it — the review
 * load goes up and nothing sticks.
 *
 * Three, following Anki's default of eight lapses halved for a deck reviewed by
 * hand rather than daily for years: two is a bad week, three is a pattern. The
 * scheduler does NOT act on this — nothing here reschedules or suspends. It is
 * a lens: the app can finally say which cards are the problem, and the fix
 * (rewrite it, split it, learn the thing underneath) is not one the app can make.
 */
export const LEECH_LAPSES = 3;

export function isLeech(card: SrsCard | undefined): boolean {
  return Boolean(card && card.lapses >= LEECH_LAPSES);
}

export function newCard(): SrsCard {
  return { ef: 2.5, interval: 0, reps: 0, lapses: 0, due: today(), stage: "new", seen: false };
}

/**
 * The app's ONE day boundary, and it is the reader's local midnight.
 *
 * This file used to hold both halves of a contradiction: `today()` sliced an
 * ISO string, which is a UTC day, while `addDays()` parsed `"...T00:00:00"`,
 * which is LOCAL midnight. So the day a card was scheduled from and the day it
 * was compared against were not the same calendar, and east of UTC `addDays`
 * came back a day short — local midnight is the previous day in UTC.
 *
 * Built by hand rather than through `toLocaleDateString`, so no locale or ICU
 * build can decide to hand back a different order.
 *
 * Everything that asks "what day is it" goes through here: `storage.todayStr`,
 * Today's fortnight strip, Progress's streak, and `nextAction`. A second way to
 * name a day is how the first contradiction got in.
 */
export function dayKey(d: Date): string {
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

export function today(): string {
  return dayKey(new Date());
}

/** `n` days after an existing key, on the same local calendar it came from. */
function addDays(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + days);
  return dayKey(d);
}

export function isDue(card: SrsCard, ref = today()): boolean {
  return card.due <= ref;
}

/** Apply an SM-2 update for a recall rating and return the next card state. */
export function schedule(card: SrsCard, rating: Rating): SrsCard {
  const q = RATING_Q[rating];
  let { ef, interval, reps, lapses } = card;

  if (q < 3) {
    // failed recall — reset, resurface soon
    reps = 0;
    interval = 1;
    lapses += 1;
  } else {
    reps += 1;
    if (reps === 1) interval = 1;
    else if (reps === 2) interval = 6;
    else interval = Math.round(interval * ef);
    if (rating === "hard") interval = Math.max(1, Math.round(interval * 0.7));
    if (rating === "easy") interval = Math.round(interval * 1.3);
  }

  // update easiness factor
  ef = ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  ef = Math.max(1.3, ef);

  const stage: Stage =
    q < 3 ? "learning" : interval >= MASTERED_INTERVAL ? "mastered" : "review";

  return { ef, interval, reps, lapses, due: addDays(today(), interval), stage, seen: true };
}

/** Human-readable next-interval preview for a rating, used on the buttons. */
export function previewInterval(card: SrsCard, rating: Rating): string {
  const next = schedule(card, rating);
  const d = next.interval;
  if (d <= 0) return "now";
  if (d === 1) return "1d";
  if (d < 30) return `${d}d`;
  if (d < 365) return `${Math.round(d / 30)}mo`;
  return `${(d / 365).toFixed(1)}y`;
}
