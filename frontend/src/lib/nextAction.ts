/**
 * What to do right now, ranked.
 *
 * Today's whole reason to exist. Without this it would be a second door into
 * Study's setup screen, which already shows what is due — so the page earns its
 * place only by seeing signals Study cannot: questions you bookmarked and never
 * came back to, material you have ingested and never opened, a streak about to
 * lapse.
 *
 * Pure functions over progress + questions. No React, no formatting decisions —
 * the page decides how to render these, this file decides which one wins.
 */
import { isDue } from "./srs";
import type { Progress } from "./storage";
import type { Question } from "./types";

export interface Suggestion {
  /** Stable key, also used to explain why this was chosen. */
  id: "due" | "saved" | "unseen" | "lapsing" | "start";
  /** Verb-first, naming the outcome. Rendered as the button. */
  cta: string;
  /** One line of why. Rendered beside the button. */
  detail: string;
  to: string;
  /** How many items it concerns; drives the copy and the ordering tiebreak. */
  count: number;
}

/**
 * Ranked hard, not scored. A weighted score would need tuning nobody will do,
 * and the ordering here is not actually contentious: overdue recall decays, and
 * everything else can wait a day.
 */
export function suggestActions(questions: Question[], progress: Progress): Suggestion[] {
  const out: Suggestion[] = [];

  const due = questions.filter((q) => {
    const c = progress.srs[q.id];
    return c && c.seen && isDue(c);
  }).length;

  const unseen = questions.filter((q) => !progress.srs[q.id]?.seen).length;

  // Bookmarked and never actually studied — the pile everyone accumulates and
  // nobody revisits, and the one thing Study has no way to surface.
  const savedUnstudied = progress.bookmarks.filter((id) => !progress.srs[id]?.seen).length;

  const studiedToday = progress.studyDays.includes(new Date().toISOString().slice(0, 10));
  const streak = progress.studyDays.length;

  if (due > 0) {
    out.push({
      id: "due",
      cta: `Review ${due} due card${due === 1 ? "" : "s"}`,
      detail: "These are the ones your memory is about to drop. Recall decays on a schedule.",
      to: "/study?mode=recall",
      count: due,
    });
  }

  if (savedUnstudied > 0) {
    out.push({
      id: "saved",
      cta: `Study ${savedUnstudied} you bookmarked`,
      detail: "You set these aside and have not come back to them.",
      to: "/library?view=saved",
      count: savedUnstudied,
    });
  }

  // Only worth raising once nothing is overdue — otherwise it competes with the
  // work that actually decays.
  if (due === 0 && unseen > 0) {
    out.push({
      id: "unseen",
      cta: "Learn new material",
      detail: `${unseen.toLocaleString()} questions you have never seen. Nothing is overdue, so this is free time.`,
      to: "/study?mode=recall",
      count: unseen,
    });
  }

  if (!studiedToday && streak > 0 && due === 0 && unseen === 0) {
    out.push({
      id: "lapsing",
      cta: "Drill the deck",
      detail: "Everything is scheduled out. A quick pass keeps the habit without touching due dates.",
      to: "/study?mode=drill",
      count: 0,
    });
  }

  if (out.length === 0) {
    out.push({
      id: "start",
      cta: "Start a session",
      detail: "Nothing is queued. Add a source, or drill what you already have.",
      to: "/study",
      count: 0,
    });
  }

  return out;
}
