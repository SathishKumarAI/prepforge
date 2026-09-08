import { useCallback, useEffect, useRef, useState } from "react";
import type { Progress } from "../lib/storage";

/**
 * A timed Library session: when it started, and what happened while it ran.
 *
 * Nothing here is written to storage. The counts are DERIVED from the progress
 * store the page already updates — a question opened bumps `recent`, a rating
 * replaces its `srs` card, a save grows `bookmarks` — so no component has to
 * report to the session. It watches the store and diffs. Module-level so the
 * session survives a trip to another page and back; ended only by `end()`.
 *
 * Exactly ONE mounted component may call this hook per progress stream — the
 * diff is against the previous render, and two watchers would count each
 * change twice. Library owns it.
 *
 * ponytail: `opened` counts a question as reviewed when it becomes the newest
 * recent entry, so re-opening the one you just left is not a second review;
 * a session longer than RECENT_CAP distinct questions is still counted right
 * because the set is kept here, not read back from the capped list.
 */
export interface LibrarySession {
  startedAt: number;
  /** Distinct question ids opened while the session ran. */
  opened: string[];
  rated: number;
  saved: number;
}

let shared: LibrarySession | null = null;
const listeners = new Set<(s: LibrarySession | null) => void>();

function set(next: LibrarySession | null) {
  shared = next;
  listeners.forEach((l) => l(next));
}

export function useLibrarySession(progress: Progress) {
  const [session, setLocal] = useState<LibrarySession | null>(shared);
  useEffect(() => {
    listeners.add(setLocal);
    return () => {
      listeners.delete(setLocal);
    };
  }, []);

  const prev = useRef(progress);
  useEffect(() => {
    const before = prev.current;
    prev.current = progress;
    if (!shared || before === progress) return;
    const newest = progress.recent[0];
    const opened =
      newest && newest !== before.recent[0] && !shared.opened.includes(newest)
        ? [...shared.opened, newest]
        : shared.opened;
    // A rating replaces exactly that card's object; anything else in `srs`
    // keeps its identity, so reference inequality is the count of ratings.
    const rated = Object.keys(progress.srs).filter((id) => before.srs[id] !== progress.srs[id]).length;
    const saved = Math.max(0, progress.bookmarks.length - before.bookmarks.length);
    if (opened !== shared.opened || rated || saved) {
      set({ ...shared, opened, rated: shared.rated + rated, saved: shared.saved + saved });
    }
  }, [progress]);

  const start = useCallback(() => set({ startedAt: Date.now(), opened: [], rated: 0, saved: 0 }), []);
  /** Ends the session and hands back what it held, for the summary. */
  const end = useCallback(() => {
    const done = shared;
    set(null);
    return done;
  }, []);

  return { session, start, end };
}
