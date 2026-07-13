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

/** Shared id → question lookup (built once from the cached bank). */
export function questionMap(): Map<string, Question> {
  if (!idMap && cache) idMap = new Map(cache.questions.map((q) => [q.id, q]));
  return idMap ?? new Map();
}

export function useQuestions(): State {
  const [state, setState] = useState<State>({
    questions: cache?.questions ?? [],
    topics: cache?.topics ?? [],
    loading: !cache,
    error: null,
  });

  useEffect(() => {
    if (cache) return;
    let alive = true;
    fetchQuestions()
      .then((data) => {
        cache = { questions: data.questions, topics: data.topics };
        if (alive) setState({ ...cache, loading: false, error: null });
      })
      .catch((e) => {
        if (alive) setState((s) => ({ ...s, loading: false, error: String(e) }));
      });
    return () => {
      alive = false;
    };
  }, []);

  return state;
}
