import { useCallback, useEffect, useRef, useState } from "react";
import { load, save, type Progress } from "../lib/storage";
import { dayKey } from "../lib/srs";

/**
 * The one timer. A Pomodoro-length countdown (5 to 30 minutes) that runs
 * across pages, pauses when you step away, credits its minutes to the day it
 * ran on, and hands back a summary when it stops: time, questions opened,
 * ratings, saves.
 *
 * Module-level state, persisted under `prepforge:timer` so a reload keeps a
 * running countdown (startedAt is absolute) and the per-day minutes survive.
 * Every mounted caller sees the same state through the listener set.
 *
 * The counts are DERIVED from the progress store, never reported to: a
 * question opened bumps `recent`, a rating replaces its card object, a save
 * grows `bookmarks`. Exactly ONE caller passes `progress` (Layout's
 * FocusTimer) — the diff is against the previous render, and two watchers
 * would count each change twice.
 *
 * ponytail: `opened` counts a question when it becomes the newest recent
 * entry, so re-opening the one you just left is not a second review.
 */

export const LENGTHS = [5, 10, 15, 20, 25, 30] as const;
export type Length = (typeof LENGTHS)[number];

/** A countdown in flight. `pausedAt` set means it is paused right now. */
export interface Run {
  startedAt: number;
  lengthMin: number;
  pausedAt: number | null;
  /** Milliseconds spent paused before the current pause. */
  pausedMs: number;
  opened: string[];
  rated: number;
  saved: number;
}

export interface Summary {
  elapsedMs: number;
  lengthMin: number;
  /** The countdown reached zero by itself. */
  completed: boolean;
  opened: number;
  rated: number;
  saved: number;
}

interface TimerState {
  lengthMin: Length;
  run: Run | null;
  /** Milliseconds of focus, by day (YYYY-MM-DD). */
  days: Record<string, number>;
}

const KEY = "timer";
let shared: TimerState = load<TimerState>(KEY, { lengthMin: 25, run: null, days: {} });
const listeners = new Set<(s: TimerState) => void>();

function set(next: TimerState) {
  shared = next;
  save(KEY, next);
  listeners.forEach((l) => l(next));
}

export function elapsedMs(run: Run, now = Date.now()): number {
  const pausedNow = run.pausedAt ? now - run.pausedAt : 0;
  return Math.max(0, now - run.startedAt - run.pausedMs - pausedNow);
}

export function remainingMs(run: Run, now = Date.now()): number {
  return Math.max(0, run.lengthMin * 60_000 - elapsedMs(run, now));
}

/** mm:ss, or h:mm:ss once it matters. */
export function clock(ms: number): string {
  const s = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(sec).padStart(2, "0");
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

/** "1h 20m", "45m", "—" for nothing. */
export function hoursLabel(ms: number): string {
  const m = Math.round(ms / 60_000);
  if (m < 1) return "—";
  const h = Math.floor(m / 60);
  return h ? `${h}h ${String(m % 60).padStart(2, "0")}m` : `${m}m`;
}

function finish(completed: boolean): Summary | null {
  const run = shared.run;
  if (!run) return null;
  const now = Date.now();
  const ms = completed ? run.lengthMin * 60_000 : elapsedMs(run, now);
  const day = dayKey(new Date(run.startedAt));
  set({ ...shared, run: null, days: { ...shared.days, [day]: (shared.days[day] ?? 0) + ms } });
  return {
    elapsedMs: ms,
    lengthMin: run.lengthMin,
    completed,
    opened: run.opened.length,
    rated: run.rated,
    saved: run.saved,
  };
}

export function useFocusTimer(progress?: Progress) {
  const [state, setLocal] = useState(shared);
  const [now, setNow] = useState(Date.now());
  // The countdown that ran out, waiting for whoever shows the summary.
  const [completed, setCompleted] = useState<Summary | null>(null);

  useEffect(() => {
    listeners.add(setLocal);
    return () => {
      listeners.delete(setLocal);
    };
  }, []);

  // One tick a second while running and not paused; nothing at all otherwise.
  // The tick is also where a countdown ends itself.
  const running = Boolean(state.run && !state.run.pausedAt);
  useEffect(() => {
    if (!running) return;
    setNow(Date.now());
    const t = window.setInterval(() => {
      const n = Date.now();
      setNow(n);
      if (shared.run && !shared.run.pausedAt && remainingMs(shared.run, n) <= 0) {
        setCompleted(finish(true));
      }
    }, 1000);
    return () => window.clearInterval(t);
  }, [running]);

  // Count what happens while it runs. Only the caller that passes `progress`.
  const prev = useRef(progress);
  useEffect(() => {
    const before = prev.current;
    prev.current = progress;
    const run = shared.run;
    if (!progress || !before || !run || before === progress) return;
    const newest = progress.recent[0];
    const opened =
      newest && newest !== before.recent[0] && !run.opened.includes(newest)
        ? [...run.opened, newest]
        : run.opened;
    // A rating replaces exactly that card's object; anything else in `srs`
    // keeps its identity, so reference inequality is the count of ratings.
    const rated = Object.keys(progress.srs).filter((id) => before.srs[id] !== progress.srs[id]).length;
    const saved = Math.max(0, progress.bookmarks.length - before.bookmarks.length);
    if (opened !== run.opened || rated || saved) {
      set({ ...shared, run: { ...run, opened, rated: run.rated + rated, saved: run.saved + saved } });
    }
  }, [progress]);

  const start = useCallback((lengthMin: Length = shared.lengthMin) => {
    set({
      ...shared,
      lengthMin,
      run: { startedAt: Date.now(), lengthMin, pausedAt: null, pausedMs: 0, opened: [], rated: 0, saved: 0 },
    });
  }, []);
  const pause = useCallback(() => {
    const run = shared.run;
    if (run && !run.pausedAt) set({ ...shared, run: { ...run, pausedAt: Date.now() } });
  }, []);
  const resume = useCallback(() => {
    const run = shared.run;
    if (run?.pausedAt)
      set({ ...shared, run: { ...run, pausedAt: null, pausedMs: run.pausedMs + Date.now() - run.pausedAt } });
  }, []);
  /** Stops early. Returns the summary; the minutes are already credited. */
  const stop = useCallback(() => finish(false), []);
  const setLength = useCallback((lengthMin: Length) => set({ ...shared, lengthMin }), []);
  const clearCompleted = useCallback(() => setCompleted(null), []);

  const run = state.run;
  const todayMs =
    (state.days[dayKey(new Date())] ?? 0) +
    (run && dayKey(new Date(run.startedAt)) === dayKey(new Date()) ? elapsedMs(run, now) : 0);

  return {
    run,
    lengthMin: state.lengthMin,
    days: state.days,
    remaining: run ? remainingMs(run, now) : 0,
    todayMs,
    completed,
    clearCompleted,
    start,
    pause,
    resume,
    stop,
    setLength,
  };
}
