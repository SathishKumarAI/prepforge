import { useCallback, useEffect, useState } from "react";
import {
  EMPTY_PROGRESS,
  loadProgress,
  saveProgress,
  todayStr,
  type FlashState,
  type Progress,
  type QuizResult,
} from "../lib/storage";
import { newCard, schedule, type Rating, type SrsCard } from "../lib/srs";

let shared: Progress = loadProgress();
const listeners = new Set<(p: Progress) => void>();

function set(next: Progress) {
  shared = next;
  saveProgress(next);
  listeners.forEach((l) => l(next));
}

/** App-wide progress store backed by localStorage, shared across components. */
export function useProgress() {
  const [progress, setLocal] = useState<Progress>(shared);

  useEffect(() => {
    const l = (p: Progress) => setLocal(p);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const markStudied = useCallback(() => {
    const d = todayStr();
    if (!shared.studyDays.includes(d)) set({ ...shared, studyDays: [...shared.studyDays, d] });
  }, []);

  const setFlash = useCallback(
    (id: string, state: FlashState) => {
      set({ ...shared, flash: { ...shared.flash, [id]: state } });
      markStudied();
    },
    [markStudied]
  );

  const toggleBookmark = useCallback((id: string) => {
    const has = shared.bookmarks.includes(id);
    set({
      ...shared,
      bookmarks: has ? shared.bookmarks.filter((x) => x !== id) : [...shared.bookmarks, id],
    });
  }, []);

  const setNote = useCallback((id: string, text: string) => {
    const notes = { ...shared.notes };
    if (text.trim()) notes[id] = text;
    else delete notes[id];
    set({ ...shared, notes });
  }, []);

  const addQuiz = useCallback(
    (r: QuizResult) => {
      set({ ...shared, quizzes: [...shared.quizzes, r] });
      markStudied();
    },
    [markStudied]
  );

  // ---- spaced repetition (SM-2) ----
  const getCard = useCallback((id: string): SrsCard => shared.srs[id] ?? newCard(), []);

  const markSeen = useCallback((id: string) => {
    const card = { ...(shared.srs[id] ?? newCard()), seen: true };
    if (card.stage === "new") card.stage = "learning";
    set({ ...shared, srs: { ...shared.srs, [id]: card } });
  }, []);

  const rateCard = useCallback(
    (id: string, rating: Rating) => {
      const prev = shared.srs[id] ?? newCard();
      const next = schedule(prev, rating);
      set({ ...shared, srs: { ...shared.srs, [id]: next } });
      markStudied();
    },
    [markStudied]
  );

  const reset = useCallback(() => set({ ...EMPTY_PROGRESS }), []);

  return {
    progress,
    setFlash,
    toggleBookmark,
    setNote,
    addQuiz,
    markStudied,
    getCard,
    markSeen,
    rateCard,
    reset,
  };
}
