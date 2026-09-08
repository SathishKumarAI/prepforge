import { useEffect, useState } from "react";
import { fetchAnswerStats, type AnswerStats } from "../lib/api";

/**
 * Totals over every generated answer on disk — how many, by which model, what
 * it cost, how long the GPU ran. Shown in Settings and under a lens's ⓘ.
 *
 * Module-level cache, like `useProviders`: the number does not change between
 * one ⓘ and the next, and the backend's first answer can take 30 s (it scans
 * 107k files once, then serves a JSON it keeps). While the backend says
 * `computing`, this polls every 3 s so the panel fills in without a reload.
 *
 * `enabled` gates the fetch: Settings mounts on every route, and nobody wants
 * a 30 s scan started by a dialog that was never opened.
 */
let cache: AnswerStats | null = null;
const listeners = new Set<(s: AnswerStats) => void>();

async function load() {
  try {
    const s = await fetchAnswerStats();
    cache = s;
    listeners.forEach((fn) => fn(s));
    if (s.computing) setTimeout(load, 3000);
  } catch {
    /* the panel shows nothing rather than a stale number */
  }
}

export function useAnswerStats(enabled: boolean): AnswerStats | null {
  const [stats, setStats] = useState<AnswerStats | null>(cache);
  useEffect(() => {
    if (!enabled) return;
    listeners.add(setStats);
    if (cache && !cache.computing) setStats(cache);
    else void load();
    return () => {
      listeners.delete(setStats);
    };
  }, [enabled]);
  return stats;
}
