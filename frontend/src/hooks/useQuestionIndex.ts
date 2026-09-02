import { useEffect, useState } from "react";
import { fetchQuestionIndex, type QuestionLite } from "../lib/api";
import { questionMap } from "./useQuestions";

/**
 * Every question's title, and nothing else.
 *
 * The palette needs four fields per row; `GET /questions` is 15 MB of answers,
 * sources and related lists. This fetches the projection instead, and only when
 * something asks for it — a palette nobody opens costs nothing.
 *
 * If the full bank happens to be loaded already (Library was open), that is used
 * as-is rather than fetching a second copy of the same titles.
 */
let cache: QuestionLite[] | null = null;
let inflight: Promise<void> | null = null;
/**
 * A failed fetch resolves to an empty list rather than staying pending, because
 * `loading` below is derived from `rows.length` — without this, an API that is
 * down leaves every consumer spinning forever, which is the one state a user
 * cannot tell from "still working" and cannot escape by waiting.
 */
let failed = false;
const listeners = new Set<(rows: QuestionLite[]) => void>();

function load(): Promise<void> {
  if (inflight) return inflight;
  failed = false; // a retry is loading again, not still broken
  inflight = fetchQuestionIndex()
    .then((d) => {
      cache = d.questions;
      listeners.forEach((fn) => fn(cache!));
    })
    .catch(() => {
      // the surface that asked shows its own empty state
      failed = true;
      listeners.forEach((fn) => fn([]));
    })
    .finally(() => {
      inflight = null;
    });
  return inflight;
}

/**
 * `loading` exists because an empty index and a bank with no match render the
 * same way otherwise — and "Nothing matches kafka" while 8,330 titles are still
 * on the wire is a lie the user cannot tell from the truth.
 */
export function useQuestionIndex(enabled: boolean): { rows: QuestionLite[]; loading: boolean } {
  const [rows, setRows] = useState<QuestionLite[]>(cache ?? []);

  useEffect(() => {
    if (!enabled) return;
    const loaded = [...questionMap().values()];
    if (loaded.length) {
      setRows(loaded.map((q) => ({ id: q.id, question: q.question, topic: q.topic, difficulty: q.difficulty })));
      return;
    }
    listeners.add(setRows);
    if (cache) setRows(cache);
    else void load();
    return () => {
      listeners.delete(setRows);
    };
  }, [enabled]);

  return { rows, loading: enabled && rows.length === 0 && !failed };
}
