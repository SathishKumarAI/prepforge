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

export function newCard(): SrsCard {
  return { ef: 2.5, interval: 0, reps: 0, lapses: 0, due: today(), stage: "new", seen: false };
}

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function addDays(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
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
