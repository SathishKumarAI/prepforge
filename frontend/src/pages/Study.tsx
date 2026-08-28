import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Page, Band } from "../components/page/PageLayout";
import { Orient, Fact } from "../components/page/Orient";
import { Spine, type Outcome } from "../components/page/Spine";
import { Empty, Loader } from "../components/States";
import { StudyCard } from "../components/study/StudyCard";
import { Button } from "../components/ui/button";
import { Chip } from "../components/ui/chip";
import { useHotkeys } from "../hooks/useHotkeys";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";
import { isDue, type Rating } from "../lib/srs";
import { MODES, MODE_ORDER, toStudyMode, type StudyMode } from "../lib/studyModes";
import type { Question } from "../lib/types";

/**
 * One study surface, three modes. Replaces /learn, /flashcards and /quiz.
 *
 * Slot table
 *   route    /study?mode=recall|drill|quiz  (legacy routes redirect here)
 *   job      run exactly one focused session
 *   object   a session: mode + queue + position + outcomes
 *   orient   before a session, three counts; DURING one, the spine — because
 *            mid-session the only fact that changes what you do next is where
 *            you are in the queue
 *   act      the mode switch and the start button; then the card
 *   review   recent sessions — deliberately ABSENT during a session. A page
 *            whose job is concentration does not also show you a scoreboard
 *   accent   primary button, active mode segment, spine's current mark
 *   moved    the YouTube quiz-builder went to Sources: it ingests content, it
 *            is not session setup, and it made this page ask nine questions
 *            before you could start one
 */

const SIZES = [10, 20, 40];
const NEW_PER_SESSION = 6;
const TIMED_SECONDS = 30;
const PREFS_KEY = "pf-study-prefs";

interface Session {
  mode: StudyMode;
  queue: Question[];
  pos: number;
  outcomes: Outcome[];
  revealed: boolean;
  picked: number | null;
  correct: number;
}

/** Round-robin across topics so two consecutive cards are rarely alike. */
function interleave(items: Question[]): Question[] {
  const lanes = new Map<string, Question[]>();
  for (const q of items) {
    if (!lanes.has(q.topic)) lanes.set(q.topic, []);
    lanes.get(q.topic)!.push(q);
  }
  const out: Question[] = [];
  const queues = [...lanes.values()];
  for (let more = true; more; ) {
    more = false;
    for (const lane of queues) {
      const next = lane.shift();
      if (next) {
        out.push(next);
        more = true;
      }
    }
  }
  return out;
}

export function Study() {
  const [params, setParams] = useSearchParams();
  const mode = toStudyMode(params.get("mode"));
  const spec = MODES[mode];

  const { questions, topics, loading } = useQuestions();
  const { progress, getCard, markSeen, rateCard, setFlash, addQuiz } = useProgress();

  const prefs = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem(PREFS_KEY) || "{}");
    } catch {
      return {};
    }
  }, []);
  const [size, setSize] = useState<number>(prefs.size ?? 20);
  const [topic, setTopic] = useState<string | null>(prefs.topic ?? null);
  const [weakFirst, setWeakFirst] = useState<boolean>(prefs.weakFirst ?? false);
  const [timed, setTimed] = useState<boolean>(prefs.timed ?? false);
  const [more, setMore] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [remaining, setRemaining] = useState(TIMED_SECONDS);

  useEffect(() => {
    localStorage.setItem(PREFS_KEY, JSON.stringify({ size, topic, weakFirst, timed }));
  }, [size, topic, weakFirst, timed]);

  // Eligibility and readiness come from the registry, so adding a mode never
  // means hunting for the places that filter.
  const pool = useMemo(
    () => questions.filter((q) => spec.eligible(q) && (!topic || q.topic === topic)),
    [questions, spec, topic],
  );
  const ready = useMemo(
    () => pool.filter((q) => spec.ready(q, progress.srs[q.id])),
    [pool, spec, progress.srs],
  );
  const fresh = useMemo(
    () => pool.filter((q) => !progress.srs[q.id]?.seen),
    [pool, progress.srs],
  );
  const mastered = useMemo(
    () => pool.filter((q) => progress.srs[q.id]?.stage === "mastered").length,
    [pool, progress.srs],
  );

  const plannedSize =
    mode === "recall"
      ? Math.min(size, ready.length + Math.min(NEW_PER_SESSION, fresh.length))
      : Math.min(size, ready.length);

  const isWeak = (q: Question) =>
    progress.flash[q.id] !== "known" && progress.srs[q.id]?.stage !== "mastered";

  function start() {
    if (plannedSize === 0) return;
    let queue: Question[];
    if (mode === "recall") {
      // Reviews before new material: retrieval first, encoding with what is left.
      queue = [
        ...interleave(ready),
        ...interleave(fresh).slice(0, NEW_PER_SESSION),
      ].slice(0, size);
    } else {
      // Deterministic order (no Math.random), rotated by how much you have
      // already done so a second session is not the same ten cards.
      const ordered = [...ready].sort((a, b) => a.id.localeCompare(b.id));
      const offset = Object.keys(progress.srs).length % Math.max(1, ordered.length);
      let rotated = [...ordered.slice(offset), ...ordered.slice(0, offset)];
      if (weakFirst) rotated = [...rotated].sort((a, b) => Number(isWeak(b)) - Number(isWeak(a)));
      queue = rotated.slice(0, size);
    }
    setSession({ mode, queue, pos: 0, outcomes: [], revealed: false, picked: null, correct: 0 });
    setRemaining(TIMED_SECONDS);
  }

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
    !loading,
  );

  function key(i: number) {
    if (!session || !current) return;
    if (session.mode === "quiz") pick(i);
    else if (session.revealed) {
      const r = MODES[session.mode].ratings[i];
      if (r) rate(r.key);
    }
  }

  if (loading) return <Loader label="Preparing your session" />;

  // ---- in a session ------------------------------------------------------
  if (session) {
    const done = session.pos >= session.queue.length;
    return (
      <Page
        title="Study"
        actions={
          <Button variant="ghost" size="sm" onClick={() => setSession(null)}>
            {done ? "Back to setup" : "End session"}
          </Button>
        }
        orient={
          // Same measure as the card below it — one left gutter, one right
          // gutter, or the page reads as unstructured.
          <div className="max-w-[46rem] pb-1">
            <Spine
              total={session.queue.length}
              position={session.pos}
              outcomes={session.outcomes}
            />
          </div>
        }
      >
        {done ? (
          <SessionSummary
            session={session}
            onAgain={start}
            onSetup={() => setSession(null)}
          />
        ) : (
          current && (
            <>
              {session.mode === "quiz" && timed && session.picked === null && (
                <p className="mb-3 text-small text-overlay1">
                  <span className="tabular-nums text-subtext0">{remaining}s</span> left on this
                  question
                </p>
              )}
              <StudyCard
                mode={session.mode}
                question={current}
                card={getCard(current.id)}
                revealed={session.revealed}
                picked={session.picked}
                onReveal={reveal}
                onRate={rate}
                onPick={pick}
                onNext={nextQuiz}
                isLast={session.pos + 1 >= session.queue.length}
              />
            </>
          )
        )}
      </Page>
    );
  }

  // ---- setup -------------------------------------------------------------
  return (
    <Page
      title="Study"
      orient={
        <Orient>
          <Fact label={spec.readyLabel} value={ready.length || null} emphasis={ready.length > 0} />
          <Fact label="never seen" value={fresh.length || null} />
          <Fact label="mastered" value={mastered || null} />
        </Orient>
      }
      review={<RecentSessions />}
    >
      <div
        role="tablist"
        aria-label="Study mode"
        className="mb-5 inline-flex rounded-lg border border-surface0 bg-mantle p-0.5"
      >
        {MODE_ORDER.map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={m === mode}
            onClick={() => setParams({ mode: m }, { replace: true })}
            className={`rounded-md px-3.5 py-1.5 text-small transition-colors duration-100 ${
              m === mode
                ? "bg-mauve font-medium text-crust"
                : "text-subtext0 hover:bg-surface0 hover:text-text"
            }`}
          >
            {MODES[m].label}
          </button>
        ))}
      </div>
      <p className="mb-6 max-w-prose text-small text-overlay1">{spec.blurb}</p>

      <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Setting label="Session length">
          {SIZES.map((s) => (
            <Chip key={s} active={size === s} onClick={() => setSize(s)} label={String(s)} />
          ))}
        </Setting>
        <Setting label="Topic">
          <Chip active={!topic} onClick={() => setTopic(null)} label="All" />
          {topics.map((t) => (
            <Chip
              key={t}
              active={topic === t}
              onClick={() => setTopic(topic === t ? null : t)}
              label={t}
            />
          ))}
        </Setting>
      </div>

      {/* One disclosure, below the fold, for the settings most sessions do not
          touch. Two disclosures would mean the page is doing two jobs. */}
      <details
        className="mb-6 border-y border-surface0 py-2"
        open={more}
        onToggle={(e) => setMore((e.currentTarget as HTMLDetailsElement).open)}
      >
        <summary className="flex cursor-pointer list-none items-center gap-2 text-small text-overlay1 hover:text-subtext0 [&::-webkit-details-marker]:hidden">
          <ChevronRight
            aria-hidden="true"
            className={`size-3.5 transition-transform duration-150 ${more ? "rotate-90" : ""}`}
          />
          {more ? "Fewer options" : "More options"}
        </summary>
        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Setting label="Order">
            <Chip
              active={weakFirst}
              onClick={() => setWeakFirst((v) => !v)}
              label="Weakest first"
            />
          </Setting>
          {mode === "quiz" && (
            <Setting label="Pace">
              <Chip
                active={timed}
                onClick={() => setTimed((v) => !v)}
                label={`Timed · ${TIMED_SECONDS}s`}
              />
            </Setting>
          )}
        </div>
      </details>

      {plannedSize > 0 ? (
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" onClick={start}>
            {spec.cta}
          </Button>
          <span className="text-small text-overlay1">
            <span className="tabular-nums text-subtext0">{plannedSize}</span> card
            {plannedSize !== 1 ? "s" : ""}
            {mode === "recall" && fresh.length > 0 && (
              <>
                {" · "}
                <span className="tabular-nums">{Math.min(ready.length, size)}</span> review,{" "}
                <span className="tabular-nums">
                  {Math.max(0, Math.min(size - ready.length, NEW_PER_SESSION, fresh.length))}
                </span>{" "}
                new
              </>
            )}
          </span>
        </div>
      ) : (
        <Empty title={spec.emptyLabel}>
          {/* The zeroed spine, so the thing you are about to use is visible
              before you have any data in it. */}
          <Spine total={12} position={-1} outcomes={[]} />
        </Empty>
      )}
    </Page>
  );
}

function Setting({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
        {label}
      </div>
      <div className="flex flex-wrap items-center gap-1.5">{children}</div>
    </div>
  );
}

function SessionSummary({
  session,
  onAgain,
  onSetup,
}: {
  session: Session;
  onAgain: () => void;
  onSetup: () => void;
}) {
  const missed = session.outcomes.filter((o) => o === "again").length;
  const total = session.queue.length;
  return (
    <div className="max-w-prose">
      <h2 className="text-h2 font-medium text-text">
        {total - missed} of {total} came back.
      </h2>
      <p className="mt-2 text-small text-subtext0">
        {missed === 0
          ? "Nothing missed. Those intervals just got longer — the next session will be shorter."
          : `The ${missed} you missed are scheduled to come round again soon. That is the point of missing them here rather than in an interview.`}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Button variant="primary" onClick={onAgain}>
          Study again
        </Button>
        <Button variant="ghost" onClick={onSetup}>
          Change the session
        </Button>
      </div>
    </div>
  );
}

/** The review zone: what has been recorded, not what is possible. */
function RecentSessions() {
  const { progress } = useProgress();
  const sessions = [...progress.quizzes].reverse().slice(0, 6);
  return (
    <Band label="Recent quizzes" hint={`${progress.quizzes.length} recorded`}>
      {sessions.length === 0 ? (
        <p className="text-small text-overlay1">
          Scored sessions show up here. Recall and drill are not scored — they move due dates
          instead.
        </p>
      ) : (
        <ul className="flex flex-col">
          {sessions.map((q, i) => (
            <li
              key={i}
              className="flex items-baseline justify-between gap-4 border-b border-surface0 py-2 last:border-0"
            >
              <span className="truncate text-small text-subtext0">{q.topic}</span>
              <span className="shrink-0 text-small tabular-nums text-overlay1">
                {q.correct}/{q.total}
              </span>
              <span className="shrink-0 text-micro tabular-nums text-overlay0">
                {q.date.slice(0, 10)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Band>
  );
}
