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
const listeners = new Set<(c: { questions: Question[]; topics: string[] }) => void>();

/** Shared id → question lookup (built from the cached bank; rebuilt on reload). */
export function questionMap(): Map<string, Question> {
  if (!idMap && cache) idMap = new Map(cache.questions.map((q) => [q.id, q]));
  return idMap ?? new Map();
}

/** Force a fresh fetch (e.g. after ingesting a video) and notify all consumers. */
export async function reloadQuestions(): Promise<void> {
  const data = await fetchQuestions();
  cache = { questions: data.questions, topics: data.topics };
  idMap = null;
  listeners.forEach((fn) => fn(cache!));
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
      fetchQuestions()
        .then((data) => {
          cache = { questions: data.questions, topics: data.topics };
          idMap = null;
          if (alive) listeners.forEach((fn) => fn(cache!));
        })
        .catch((e) => {
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
