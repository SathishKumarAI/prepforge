import { useEffect, useState } from "react";
import { fetchQuestionIndex, type QuestionLite } from "../lib/api";
import { readIndex, writeIndex } from "../lib/indexCache";

/**
 * Every question's title, its topic and difficulty, and whether it has an answer
 * or a quiz — and nothing else.
 *
 * `GET /questions` is 38 MB of answers, sources and related lists. This fetches
 * the projection instead, and only when something asks for it — a palette nobody
 * opens costs nothing.
 *
 * It is kept in IndexedDB between visits (see `lib/indexCache`), so the second
 * and every later load paints from disk before the network is consulted at all,
 * and the network round trip that follows is a conditional request that comes
 * back 304 unless the bank was rebuilt.
 */
let cache: QuestionLite[] | null = null;
let cachedEtag: string | null = null;
let inflight: Promise<void> | null = null;
/**
 * A failed fetch resolves to an empty list rather than staying pending, because
 * `loading` below is derived from `rows.length` — without this, an API that is
 * down leaves every consumer spinning forever, which is the one state a user
 * cannot tell from "still working" and cannot escape by waiting.
 */
let failed = false;
const listeners = new Set<(rows: QuestionLite[]) => void>();

function publish(rows: QuestionLite[]): void {
  cache = rows;
  listeners.forEach((fn) => fn(rows));
}

/**
 * Read from disk, paint, then revalidate — in that order, and the order is the
 * whole point. Waiting for the network before painting throws away everything
 * the stored copy is for; painting and never asking would serve cards that a
 * `POST /ingest` deleted.
 */
async function load(): Promise<void> {
  failed = false; // a retry is loading again, not still broken
  const stored = await readIndex();
  if (stored && !cache) {
    cachedEtag = stored.etag;
    publish(stored.rows);
  }
  try {
    const res = await fetchQuestionIndex(cachedEtag);
    if (res.unchanged) return; // ~300 B, and what is on screen is already right
    cachedEtag = res.etag;
    publish(res.questions);
    // Deliberately not awaited by the caller's critical path — the rows are on
    // screen already and the write is only for the next visit.
    void writeIndex(res.etag, res.questions);
  } catch {
    // the surface that asked shows its own empty state, unless the stored copy
    // already gave it something better to show
    if (!cache) {
      failed = true;
      publish([]);
    }
  }
}

/** Deduped entry point. Everything below and `primeQuestionIndex` share it. */
function loadOnce(): Promise<void> {
  if (inflight) return inflight;
  inflight = load().finally(() => {
    inflight = null;
  });
  return inflight;
}

/**
 * Start the index loading without rendering anything that needs it.
 *
 * Called from the app shell on an idle callback: whichever page you land on,
 * the index is on its way before you navigate to one that wants it. On a repeat
 * visit that costs a disk read and a 304, so it is close to free — which is why
 * it runs unconditionally rather than guessing which routes will need it.
 */
export function primeQuestionIndex(): Promise<void> {
  if (cache) return Promise.resolve();
  return loadOnce();
}

/**
 * `loading` exists because an empty index and a bank with no match render the
 * same way otherwise — and "Nothing matches kafka" while 18,284 titles are still
 * on the wire is a lie the user cannot tell from the truth.
 */
export function useQuestionIndex(enabled: boolean): { rows: QuestionLite[]; loading: boolean } {
  const [rows, setRows] = useState<QuestionLite[]>(cache ?? []);

  useEffect(() => {
    if (!enabled) return;
    listeners.add(setRows);
    // Once per page load, not once per mount. Revalidating on every navigation
    // would be four conditional requests for a bank that changes on ingest.
    if (cache) setRows(cache);
    else void loadOnce();
    return () => {
      listeners.delete(setRows);
    };
  }, [enabled]);

  return { rows, loading: enabled && rows.length === 0 && !failed };
}
