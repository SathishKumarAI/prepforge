import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Page } from "../components/page/PageLayout";
import { Orient, Fact } from "../components/page/Orient";
import { Spine } from "../components/page/Spine";
import { Empty, Loader } from "../components/States";
import { RecentSessions } from "../components/study/RecentSessions";
import { SessionSummary } from "../components/study/SessionSummary";
import { Setting } from "../components/study/Setting";
import { StudyCard } from "../components/study/StudyCard";
import { Button } from "../components/ui/button";
import { Chip } from "../components/ui/chip";
import { Segmented, SegmentedPanel } from "../components/ui/segmented";
import { useProgress } from "../hooks/useProgress";
import { useStudySession, TIMED_SECONDS } from "../hooks/useStudySession";
import { useUserCards } from "../hooks/useUserCards";
import { useQuestionIndex } from "../hooks/useQuestionIndex";
import type { QuestionLite } from "../lib/api";
import { isLeech, LEECH_LAPSES } from "../lib/srs";
import { MODES, MODE_ORDER, toStudyMode } from "../lib/studyModes";
import { NEW_PER_SESSION, planQueue, plannedSize } from "../lib/studyPlan";
import { USER_CARD_TOPIC } from "../lib/userCards";

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
 *
 * Owns: session SETUP — the preferences, the pool and its counts, which
 * cards would be in a session — and the two screens. Does NOT own the queue
 * order (lib/studyPlan.ts, pure), the running session and its keys
 * (hooks/useStudySession.ts), or the card (components/study/StudyCard.tsx).
 */

const SIZES = [10, 20, 40];
const PREFS_KEY = "pf-study-prefs";

export function Study() {
  const [params, setParams] = useSearchParams();
  const mode = toStudyMode(params.get("mode"));
  const spec = MODES[mode];

  /**
   * The index plans the session; the bank only supplies the cards you will see.
   *
   * Everything on the setup screen — the three counts, the topic chips, the
   * planned size — is a question of which ids exist and which of them your local
   * SRS state says are due. None of it needs an answer, and the answers are 92%
   * of the payload. Session setup used to fetch all 38,573,654 B of them so it
   * could evaluate `Boolean(q.answer)`; the index carries that as a boolean now.
   *
   * The same index Today and the Ctrl+K palette already load, so arriving here
   * from either of them costs nothing at all.
   */
  const { rows: questions, loading } = useQuestionIndex(true);
  const { progress } = useProgress();
  const { cards: userCards } = useUserCards();

  /**
   * Cards you wrote yourself, as index rows. They are local, so they cost no
   * request and they are eligible for exactly what they carry: an answer, never
   * a multiple-choice payload. From here on the session cannot tell them apart
   * from the bank's — which is the point, they are in the same deck.
   */
  const userRows = useMemo<QuestionLite[]>(
    () =>
      userCards.map((c) => ({
        id: c.id,
        question: c.question,
        topic: USER_CARD_TOPIC,
        difficulty: "medium",
        has_answer: true,
        has_quiz: false,
      })),
    [userCards],
  );

  const prefs = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem(PREFS_KEY) || "{}");
    } catch {
      return {};
    }
  }, []);
  const [size, setSize] = useState<number>(prefs.size ?? 20);
  // A ?topic= in the URL wins over the remembered preference — it is how
  // Progress hands you "study your weakest topic", and a link that silently
  // ignores its own parameter is worse than not offering the link.
  const [topic, setTopic] = useState<string | null>(params.get("topic") ?? prefs.topic ?? null);
  // Follows the URL after mount too. Nothing in the UI links from Study to
  // Study with a different topic today, but the back button does exactly that,
  // and this is the same read-the-URL-once defect that made Library open the
  // wrong question.
  useEffect(() => {
    const wanted = params.get("topic");
    if (wanted && wanted !== topic) setTopic(wanted);
  }, [params, topic]);
  const [weakFirst, setWeakFirst] = useState<boolean>(prefs.weakFirst ?? false);
  const [timed, setTimed] = useState<boolean>(prefs.timed ?? false);
  const [more, setMore] = useState(false);

  useEffect(() => {
    localStorage.setItem(PREFS_KEY, JSON.stringify({ size, topic, weakFirst, timed }));
  }, [size, topic, weakFirst, timed]);

  const topics = useMemo(() => {
    const names = [...new Set(questions.map((q) => q.topic).filter(Boolean))].sort();
    // Appended, not sorted in: it is your deck, and it belongs at the end of the
    // row rather than alphabetised between Data Science and Python.
    return userRows.length ? [...names, USER_CARD_TOPIC] : names;
  }, [questions, userRows]);

  // Eligibility and readiness come from the registry, so adding a mode never
  // means hunting for the places that filter.
  /**
   * `?pool=leeches` narrows the deck to the cards you keep forgetting, which is
   * how Progress hands you "drill the ones that keep slipping". It lives in the
   * URL rather than in state because it arrives as a link — and it is NOT
   * remembered in `pf-study-prefs`: a filter you cannot see the origin of would
   * silently shrink every later session to six cards.
   */
  const onlyLeeches = params.get("pool") === "leeches";

  const pool = useMemo(
    () =>
      [...questions, ...userRows].filter(
        (q) =>
          spec.eligible(q) &&
          (!topic || q.topic === topic) &&
          (!onlyLeeches || isLeech(progress.srs[q.id])),
      ),
    [questions, userRows, spec, topic, onlyLeeches, progress.srs],
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
  // Counted over the SRS state, not the bank: only a card you have already
  // failed can be a leech, so this is a walk of what you have studied — tens of
  // rows on a real profile, against 18,284 in `questions`.
  const leechCount = useMemo(
    () => Object.values(progress.srs).filter(isLeech).length,
    [progress.srs],
  );

  const planned = plannedSize(mode, size, ready, fresh);

  const isWeak = (q: QuestionLite) =>
    progress.flash[q.id] !== "known" && progress.srs[q.id]?.stage !== "mastered";

  const {
    session,
    current,
    card,
    remaining,
    starting,
    cardsFailed,
    start,
    end,
    reveal,
    rate,
    pick,
    nextQuiz,
  } = useStudySession({
    mode,
    topic,
    timed,
    plan: () =>
      planQueue({
        mode,
        size,
        ready,
        fresh,
        weakFirst,
        isWeak,
        studied: Object.keys(progress.srs).length,
      }),
    userCards,
    enabled: !loading,
  });

  if (loading) return <Loader label="Preparing your session" />;

  // ---- in a session ------------------------------------------------------
  if (session) {
    const done = session.pos >= session.queue.length;
    return (
      <Page
        title="Study"
        actions={
          <Button variant="ghost" size="sm" onClick={end}>
            {done ? "Back to setup" : "End session"}
          </Button>
        }
        orient={
          // Same measure as the card below it — one left gutter, one right
          // gutter, or the page reads as unstructured.
          <div className="max-w-[46rem] pb-1 [.focus-mode_&]:max-w-none">
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
            outcomes={session.outcomes}
            total={session.queue.length}
            onAgain={start}
            onSetup={end}
          />
        ) : (
          current &&
          card && (
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
                card={card}
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
      aside
    >
      <Segmented
        label="Study mode"
        value={mode}
        options={MODE_ORDER.map((m) => ({ value: m, label: MODES[m].label }))}
        // `pool` rides along; everything else on this screen is component state.
        // Losing the filter on a mode switch would silently widen the deck back
        // to 18,284 cards while the chip still read as active.
        onChange={(m) =>
          setParams(onlyLeeches ? { mode: m, pool: "leeches" } : { mode: m }, { replace: true })
        }
        idPrefix="study-mode"
        panelId="study-mode-panel"
        className="mb-5"
      />

      <SegmentedPanel id="study-mode-panel" labelledBy={`study-mode-tab-${mode}`}>
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
        {/* Only when there is something to focus on. A chip that always narrows
            to nothing is a dead control on every new install. */}
        {(onlyLeeches || leechCount > 0) && (
          <Setting label="Focus">
            <Chip
              active={onlyLeeches}
              onClick={() =>
                setParams(onlyLeeches ? { mode } : { mode, pool: "leeches" }, { replace: true })
              }
              label={`Keeps slipping · ${leechCount}`}
            />
          </Setting>
        )}
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

      {planned > 0 ? (
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" onClick={start} disabled={starting}>
            {starting ? "Getting your cards…" : spec.cta}
          </Button>
          {cardsFailed && (
            <span role="alert" className="text-small text-red">
              Could not load the cards. Check the backend is running, then try again.
            </span>
          )}
          <span className="text-small text-overlay1">
            <span className="tabular-nums text-subtext0">{planned}</span> card
            {planned !== 1 ? "s" : ""}
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
        <Empty
          title={
            onlyLeeches
              ? `Nothing here has been forgotten ${LEECH_LAPSES} times. Clear the focus to study the rest.`
              : spec.emptyLabel
          }
        >
          {/* The zeroed spine, so the thing you are about to use is visible
              before you have any data in it. */}
          <Spine total={12} position={-1} outcomes={[]} />
        </Empty>
      )}
      </SegmentedPanel>
    </Page>
  );
}
