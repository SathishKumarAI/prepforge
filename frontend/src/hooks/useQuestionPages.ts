import { useCallback, useEffect, useRef, useState } from "react";
import { fetchBrowse, type Browse } from "../lib/api";
import type { QuestionRowLite } from "../lib/types";

/**
 * Rows per page. Small on purpose: this is a real page from the server, not a
 * window onto rows already in memory, so the first screen costs one page and
 * the rest arrive only if you scroll to them.
 */
export const PAGE = 60;

/**
 * Long enough that typing "kafka" is one request rather than five, short enough
 * that the list feels like it is keeping up. Not the hover-peek delay — that is
 * hover intent, a different question with a different right answer.
 */
const TYPING_MS = 180;

/**
 * The server-paged question list for one filter (query, topic, difficulty).
 *
 * Owns: page one (debounced, restarted on any filter change), appending the
 * next page, and the sentinel that asks for it. Does NOT own selection, the
 * layout, or what the rows look like — QuestionsView does.
 *
 * This used to be a client-side Fuse index over the whole 39.7 MB bank, and
 * the ONLY reason the bank had to be here was that Fuse searched `answer`
 * text — which `/questions/index` does not carry. Moving the search to the
 * server removed the reason, so the answers never come down at all.
 *
 * `error` is kept separate from an empty result: "nothing matches kafka" and
 * "the backend is not answering" look identical otherwise, and one of them is
 * a lie the reader cannot tell from the truth.
 */
export function useQuestionPages(query: string, topic: string | null, diff: string | null) {
  const [rows, setRows] = useState<QuestionRowLite[]>([]);
  /** What the whole match looks like: total, topic list, links. Page one only. */
  const [meta, setMeta] = useState<Browse | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [paging, setPaging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sentinel = useRef<HTMLDivElement>(null);

  // Page one, debounced. Changing the filter restarts the walk from the top —
  // keeping the old rows while a new filter loads would show results that do not
  // match what the box says.
  useEffect(() => {
    let live = true;
    const timer = window.setTimeout(() => {
      fetchBrowse({ q: query.trim(), topic, difficulty: diff, limit: PAGE, offset: 0 })
        .then((res) => {
          if (!live) return;
          setRows(res.questions);
          setMeta(res);
          setHasMore(res.has_more);
          setError(null);
        })
        .catch((e) => live && setError(String(e)))
        .finally(() => live && setLoading(false));
    }, TYPING_MS);
    return () => {
      live = false;
      window.clearTimeout(timer);
    };
  }, [query, topic, diff]);

  /**
   * The next page, appended.
   *
   * `paging` is the guard that makes this safe to call from an observer: the
   * sentinel can intersect several times while a request is in flight, and
   * without it the same offset would be fetched three times and appended three
   * times. The offset comes from `rows.length` rather than a counter, so a
   * failed page is retried rather than skipped.
   */
  const loadMore = useCallback(() => {
    if (paging || !hasMore) return;
    setPaging(true);
    fetchBrowse({
      q: query.trim(),
      topic,
      difficulty: diff,
      limit: PAGE,
      offset: rows.length,
    })
      .then((res) => {
        setRows((prev) => {
          // Belt and braces: an id already held is dropped rather than rendered
          // twice, so a duplicate can never become a duplicate React key.
          const seen = new Set(prev.map((r) => r.id));
          return [...prev, ...res.questions.filter((r) => !seen.has(r.id))];
        });
        setHasMore(res.has_more);
      })
      .catch(() => setHasMore(false))
      .finally(() => setPaging(false));
  }, [paging, hasMore, query, topic, diff, rows.length]);

  // 800px of lead time, so the next page is usually already there by the time
  // you reach the bottom rather than being a wait you watch.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries[0]?.isIntersecting && loadMore(),
      { rootMargin: "800px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loadMore]);

  return { rows, meta, hasMore, loading, paging, error, sentinel };
}
