import { useEffect, useState } from "react";
import { fetchQuestions } from "../lib/api";
import type { Question } from "../lib/types";

interface State {
  questions: Question[];
  topics: string[];
  loading: boolean;
  error: string | null;
}

let cache: { questions: Question[]; topics: string[] } | null = null;
let idMap: Map<string, Question> | null = null;
/**
 * The request currently on the wire, shared by everyone who asks while it is.
 * `if (!cache)` alone is not a guard: every consumer that mounts in the same
 * tick sees a null cache and starts its own copy. Measured on Library before
 * this existed — four concurrent `GET /questions`, 39.7 MB each, 158 MB to
 * render one list. `useQuestionIndex` has always had this; this one did not.
 */
let inflight: Promise<void> | null = null;
const listeners = new Set<(c: { questions: Question[]; topics: string[] }) => void>();

/** Shared id → question lookup (built from the cached bank; rebuilt on reload). */
export function questionMap(): Map<string, Question> {
  if (!idMap && cache) idMap = new Map(cache.questions.map((q) => [q.id, q]));
  return idMap ?? new Map();
}

function fill(data: { questions: Question[]; topics: string[] }): void {
  cache = { questions: data.questions, topics: data.topics };
  idMap = null;
  listeners.forEach((fn) => fn(cache!));
}

/** Force a fresh fetch (e.g. after ingesting a video) and notify all consumers. */
export async function reloadQuestions(): Promise<void> {
  fill(await fetchQuestions());
}

/** Fetch the bank once, however many consumers ask for it at the same moment. */
function load(): Promise<void> {
  if (inflight) return inflight;
  inflight = fetchQuestions()
    .then(fill)
    .finally(() => {
      inflight = null;
    });
  return inflight;
}

export function useQuestions(): State {
  const [state, setState] = useState<State>({
    questions: cache?.questions ?? [],
    topics: cache?.topics ?? [],
    loading: !cache,
    error: null,
  });

  useEffect(() => {
    // subscribe so a reloadQuestions() elsewhere updates this consumer too
    const onUpdate = (c: { questions: Question[]; topics: string[] }) =>
      setState({ ...c, loading: false, error: null });
    listeners.add(onUpdate);

    let alive = true;
    if (!cache) {
      load().catch((e) => {
        if (alive) setState((s) => ({ ...s, loading: false, error: String(e) }));
      });
    }
    return () => {
      alive = false;
      listeners.delete(onUpdate);
    };
  }, []);

  return state;
}
