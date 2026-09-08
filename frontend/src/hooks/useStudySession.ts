import { useEffect, useState } from "react";
import type { Outcome } from "../components/page/Spine";
import { fetchQuestionBatch, type QuestionLite } from "../lib/api";
import type { Rating } from "../lib/srs";
import { MODES, type StudyMode } from "../lib/studyModes";
import { isUserCardId, toQuestion, type UserCard } from "../lib/userCards";
import type { Question } from "../lib/types";
import { useHotkeys } from "./useHotkeys";
import { useProgress } from "./useProgress";

/** Seconds per question when the quiz is timed. A timeout is a miss, not a skip. */
export const TIMED_SECONDS = 30;

export interface Session {
  mode: StudyMode;
  queue: Question[];
  pos: number;
  outcomes: Outcome[];
  revealed: boolean;
  picked: number | null;
  correct: number;
}

/**
 * The running session: its queue, where you are in it, and every transition —
 * start, reveal, rate, pick, next, end — plus the quiz countdown and the keys.
 *
 * Owns nothing about setup. The page decides what a session would contain
 * (`plan`) and hands the decision here; this fetches those cards and runs them.
 * Grades go where the mode registry says: `srs` moves due dates, `flash` is
 * "do I know this", and the two are deliberately not unified.
 */
export function useStudySession({
  mode,
  topic,
  timed,
  plan,
  userCards,
  enabled,
}: {
  mode: StudyMode;
  /** For the quiz record. */
  topic: string | null;
  timed: boolean;
  /** The queue, as index rows, in the order it should run. Empty = nothing to study. */
  plan: () => QuestionLite[];
  userCards: UserCard[];
  /** Hotkeys off while the page is still loading. */
  enabled: boolean;
}) {
  const { getCard, markSeen, rateCard, setFlash, addQuiz } = useProgress();
  const [session, setSession] = useState<Session | null>(null);
  const [remaining, setRemaining] = useState(TIMED_SECONDS);
  // Starting a session is a request now. It is one request for at most 40 cards,
  // but it can be slow and it can fail, and a primary button that does nothing
  // visible is the failure mode that makes people press it twice.
  const [starting, setStarting] = useState(false);
  const [cardsFailed, setCardsFailed] = useState(false);

  /**
   * The one place the whole questions are fetched, and it is at most `size` of
   * them — 40 at the largest setting, against 18,284 before. The order the plan
   * decided is the order the batch returns, so the topic interleave survives.
   */
  async function start() {
    if (starting) return;
    const planned = plan();
    if (planned.length === 0) return;
    setStarting(true);
    try {
      // Your own cards are already here; only the bank's ids cost a request. The
      // queue is then rebuilt in the PLANNED order rather than the response's,
      // because the two sets have to interleave and only the plan knows how.
      const bankIds = planned.filter((q) => !isUserCardId(q.id)).map((q) => q.id);
      const fetched = bankIds.length ? await fetchQuestionBatch(bankIds) : [];
      const byId = new Map(fetched.map((q) => [q.id, q]));
      for (const card of userCards) byId.set(card.id, toQuestion(card));
      const queue = planned
        .map((q) => byId.get(q.id))
        .filter((q): q is Question => Boolean(q));
      if (queue.length === 0) return; // the bank was rebuilt out from under us
      setSession({ mode, queue, pos: 0, outcomes: [], revealed: false, picked: null, correct: 0 });
      setRemaining(TIMED_SECONDS);
    } catch {
      setCardsFailed(true);
    } finally {
      setStarting(false);
    }
  }

  const end = () => setSession(null);

  const current = session && session.pos < session.queue.length ? session.queue[session.pos] : null;

  function advance(outcome: Outcome, wasCorrect = false) {
    setSession((s) =>
      s
        ? {
            ...s,
            outcomes: [...s.outcomes, outcome],
            pos: s.pos + 1,
            revealed: false,
            picked: null,
            correct: s.correct + (wasCorrect ? 1 : 0),
          }
        : s,
    );
    setRemaining(TIMED_SECONDS);
  }

  function reveal() {
    if (!current) return;
    markSeen(current.id);
    setSession((s) => (s ? { ...s, revealed: true } : s));
  }

  function rate(r: Rating) {
    if (!current || !session) return;
    // The registry says where a grade lands. These are not unified: `flash` is
    // "do I know this", `srs` moves real due dates, and merging them would
    // rewrite the meaning of every card graded before today.
    if (MODES[session.mode].grades === "srs") rateCard(current.id, r);
    else setFlash(current.id, r === "again" ? "learning" : "known");
    advance(r);
  }

  function pick(i: number) {
    if (!current || !session || session.picked !== null) return;
    // Record the choice only. The score is incremented once, in advance(),
    // when the answer is committed — counting it here as well double-counted
    // every correct answer.
    setSession((s) => (s ? { ...s, picked: i } : s));
  }

  function nextQuiz() {
    if (!session || session.picked === null || !current) return;
    const wasCorrect = session.picked === current.quiz?.correctIndex;
    const last = session.pos + 1 >= session.queue.length;
    advance(wasCorrect ? "good" : "again");
    if (last) {
      addQuiz({
        date: new Date().toISOString(),
        topic: topic ?? "Mixed",
        total: session.queue.length,
        correct: session.correct + (wasCorrect ? 1 : 0),
      });
    }
  }

  // Per-question countdown. A timeout is a miss, not a skip.
  useEffect(() => {
    if (!session || session.mode !== "quiz" || !timed || session.picked !== null || !current) return;
    setRemaining(TIMED_SECONDS);
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r > 1) return r - 1;
        clearInterval(id);
        setSession((s) => (s && s.picked === null ? { ...s, picked: -1 } : s));
        return 0;
      });
    }, 1000);
    return () => clearInterval(id);
    // Keyed on position, not on the whole session: pushing an outcome changes
    // the session object, and depending on it would tear down and restart the
    // countdown on every state write.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.pos, session?.mode, session?.picked, timed]);

  useHotkeys(
    {
      " ": () => {
        if (session && current && session.mode !== "quiz" && !session.revealed) reveal();
      },
      Enter: () => {
        if (!session) start();
        else if (session.mode === "quiz" && session.picked !== null) nextQuiz();
      },
      "1": () => key(0),
      "2": () => key(1),
      "3": () => key(2),
      "4": () => key(3),
    },
    enabled,
  );

  function key(i: number) {
    if (!session || !current) return;
    if (session.mode === "quiz") pick(i);
    else if (session.revealed) {
      const r = MODES[session.mode].ratings[i];
      if (r) rate(r.key);
    }
  }

  return {
    session,
    current,
    remaining,
    starting,
    cardsFailed,
    start,
    end,
    reveal,
    rate,
    pick,
    nextQuiz,
    /** The SRS card for the current question, for the rating previews. */
    card: current ? getCard(current.id) : null,
  };
}
