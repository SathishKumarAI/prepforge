import { useEffect, useState } from "react";
import { fetchQuestion } from "../lib/api";
import type { Question } from "../lib/types";

/**
 * One whole question, by id.
 *
 * Library's list carries index rows — id, title, topic, difficulty — and nothing
 * else, because the whole point of moving search to the server was that the
 * answers stop coming down. The detail pane is the one place that needs a whole
 * question, so it asks for exactly the one it is showing.
 *
 * A tiny module-level cache, because the list peeks on hover: crossing five rows
 * on the way to the sixth should not re-fetch the first five when you come back.
 * Bounded, because a long session over a 19,000-card bank should not slowly
 * become the 39.7 MB payload this replaced.
 */
const CACHE_MAX = 40;
const cache = new Map<string, Question>();

export function useQuestion(id: string | null): { question: Question | null; loading: boolean } {
  const [question, setQuestion] = useState<Question | null>(() => (id ? cache.get(id) ?? null : null));

  useEffect(() => {
    if (!id) {
      setQuestion(null);
      return;
    }
    const hit = cache.get(id);
    if (hit) {
      setQuestion(hit);
      return;
    }
    let live = true;
    fetchQuestion(id)
      .then((q) => {
        if (!q || (q as unknown as { error?: string }).error) return;
        // Map preserves insertion order, so the first key is the oldest.
        if (cache.size >= CACHE_MAX) cache.delete(cache.keys().next().value as string);
        cache.set(id, q);
        if (live) setQuestion(q);
      })
      .catch(() => {
        /* the pane keeps showing the last question rather than blanking */
      });
    return () => {
      live = false;
    };
  }, [id]);

  return { question, loading: Boolean(id) && (!question || question.id !== id) };
}
