import type { QuestionLite } from "./api";
import type { StudyMode } from "./studyModes";

/** New cards a recall session admits after its reviews. */
export const NEW_PER_SESSION = 6;

/** Round-robin across topics so two consecutive cards are rarely alike. */
export function interleave(items: QuestionLite[]): QuestionLite[] {
  const lanes = new Map<string, QuestionLite[]>();
  for (const q of items) {
    if (!lanes.has(q.topic)) lanes.set(q.topic, []);
    lanes.get(q.topic)!.push(q);
  }
  const out: QuestionLite[] = [];
  const queues = [...lanes.values()];
  for (let more = true; more; ) {
    more = false;
    for (const lane of queues) {
      const next = lane.shift();
      if (next) {
        out.push(next);
        more = true;
      }
    }
  }
  return out;
}

/**
 * How many cards a session will hold, for the setup screen — the same number
 * `planQueue` returns, computed without building the queue.
 */
export function plannedSize(
  mode: StudyMode,
  size: number,
  ready: QuestionLite[],
  fresh: QuestionLite[],
): number {
  return mode === "recall"
    ? Math.min(size, ready.length + Math.min(NEW_PER_SESSION, fresh.length))
    : Math.min(size, ready.length);
}

/**
 * The queue as ids — ordering only, which never needed an answer to decide.
 * Pure: the same inputs plan the same session.
 *
 * Recall: reviews before new material — retrieval first, encoding with what is
 * left. Drill and quiz: deterministic order (no Math.random), rotated by how
 * much you have already done so a second session is not the same ten cards.
 */
export function planQueue({
  mode,
  size,
  ready,
  fresh,
  weakFirst,
  isWeak,
  studied,
}: {
  mode: StudyMode;
  size: number;
  ready: QuestionLite[];
  fresh: QuestionLite[];
  weakFirst: boolean;
  isWeak: (q: QuestionLite) => boolean;
  /** How many cards carry SRS state — the rotation offset. */
  studied: number;
}): QuestionLite[] {
  if (mode === "recall") {
    return [...interleave(ready), ...interleave(fresh).slice(0, NEW_PER_SESSION)].slice(0, size);
  }
  const ordered = [...ready].sort((a, b) => a.id.localeCompare(b.id));
  const offset = studied % Math.max(1, ordered.length);
  let rotated = [...ordered.slice(offset), ...ordered.slice(0, offset)];
  if (weakFirst) rotated = [...rotated].sort((a, b) => Number(isWeak(b)) - Number(isWeak(a)));
  return rotated.slice(0, size);
}
