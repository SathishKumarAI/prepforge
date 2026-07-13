import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { DifficultyBadge, TopicBadge } from "../components/Badge";
import { Markdown } from "../components/Markdown";
import { Empty, Loader } from "../components/States";
import { BackButton, ChevronRight, NavButton } from "../components/NavButton";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";
import { isDue, previewInterval, type Rating } from "../lib/srs";
import type { Question } from "../lib/types";

const NEW_PER_SESSION = 6;
const RATINGS: { key: Rating; label: string; cls: string }[] = [
  { key: "again", label: "Again", cls: "border-red/50 text-red hover:bg-red/10" },
  { key: "hard", label: "Hard", cls: "border-peach/50 text-peach hover:bg-peach/10" },
  { key: "good", label: "Good", cls: "border-green/50 text-green hover:bg-green/10" },
  { key: "easy", label: "Easy", cls: "border-blue/50 text-blue hover:bg-blue/10" },
];

// interleave: round-robin across topics so consecutive cards differ
function interleave(items: Question[]): Question[] {
  const byTopic = new Map<string, Question[]>();
  for (const q of items) {
    if (!byTopic.has(q.topic)) byTopic.set(q.topic, []);
    byTopic.get(q.topic)!.push(q);
  }
  const lanes = [...byTopic.values()];
  const out: Question[] = [];
  let added = true;
  while (added) {
    added = false;
    for (const lane of lanes) {
      const next = lane.shift();
      if (next) {
        out.push(next);
        added = true;
      }
    }
  }
  return out;
}

export function Learn() {
  const { questions, loading } = useQuestions();
  const { progress, getCard, markSeen, rateCard } = useProgress();
  const [queue, setQueue] = useState<Question[] | null>(null);
  const [pos, setPos] = useState(0);
  const [mode, setMode] = useState<"read" | "recall">("read");
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(0);

  // compute available work from current SRS state (recomputed when not in-session)
  const plan = useMemo(() => {
    const dueReviews = questions.filter((q) => {
      const c = progress.srs[q.id];
      return c && c.seen && isDue(c);
    });
    const fresh = questions.filter((q) => {
      const c = progress.srs[q.id];
      return !c || !c.seen;
    });
    return { dueReviews, fresh };
  }, [questions, progress.srs]);

  if (loading) return <Loader label="Preparing your session" />;
  if (questions.length === 0)
    return <Empty title="No content yet" hint="Add questions or ingest a book to start learning." />;

  function startSession() {
    const reviews = interleave([...plan.dueReviews]);
    const fresh = interleave([...plan.fresh]).slice(0, NEW_PER_SESSION);
    // reviews first (retrieval), then new material (encode) — interleaved within each block
    const q = [...reviews, ...fresh];
    setQueue(q);
    setPos(0);
    setDone(0);
    setRevealed(false);
    setMode(isFresh(q[0]) ? "read" : "recall");
  }

  function isFresh(q: Question): boolean {
    const c = progress.srs[q.id];
    return !c || !c.seen;
  }

  // ---- session not started: show the plan / dashboard ----
  if (!queue) {
    const masteredCount = questions.filter((q) => progress.srs[q.id]?.stage === "mastered").length;
    const reviewCount = questions.filter(
      (q) => progress.srs[q.id]?.seen && progress.srs[q.id]?.stage !== "mastered"
    ).length;
    const sessionSize = plan.dueReviews.length + Math.min(NEW_PER_SESSION, plan.fresh.length);
    return (
      <div>
        <header className="mb-8">
          <div className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-overlay0">
            spaced-repetition pipeline
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-text">
            Today’s <span className="italic text-mauve">study</span> session
          </h1>
          <p className="mt-2 max-w-lg text-subtext0">
            Read new material, recall it from memory, and let the SM-2 scheduler decide when you
            see each card again. Due cards come first, new cards fill the rest.
          </p>
        </header>

        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Due now" value={plan.dueReviews.length} tone="text-peach" />
          <Stat label="New avail." value={plan.fresh.length} tone="text-blue" />
          <Stat label="In review" value={reviewCount} tone="text-yellow" />
          <Stat label="Mastered" value={masteredCount} tone="text-green" />
        </div>

        <div className="glass rounded-3xl p-8 text-center shadow-card">
          <div className="mb-1 font-mono text-xs uppercase tracking-widest text-overlay0">
            this session
          </div>
          <div className="mb-1 font-display text-6xl font-black text-text">{sessionSize}</div>
          <div className="mb-6 text-sm text-subtext0">
            {plan.dueReviews.length} review · {Math.min(NEW_PER_SESSION, plan.fresh.length)} new
          </div>
          <button
            onClick={startSession}
            disabled={sessionSize === 0}
            className="group mx-auto flex items-center gap-2 rounded-xl bg-gradient-to-r from-mauve to-blue px-8 py-3.5 font-display text-lg font-semibold text-crust shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40"
          >
            Begin session
            <span className="transition-transform duration-300 group-hover:translate-x-0.5"><ChevronRight /></span>
          </button>
          {sessionSize === 0 && (
            <div className="mt-4 font-mono text-xs text-green">
              ✓ All caught up — nothing due. Come back later.
            </div>
          )}
        </div>
      </div>
    );
  }

  // ---- session complete ----
  if (pos >= queue.length) {
    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-md text-center">
        <div className="mb-2 font-mono text-xs uppercase tracking-widest text-overlay0">session complete</div>
        <div className="font-display text-7xl font-black text-green">✓</div>
        <div className="mt-3 text-lg text-subtext1">{done} cards reviewed</div>
        <p className="mt-2 text-sm text-subtext0">
          Each card is now scheduled by how well you recalled it. Consistency beats cramming — a
          short daily session keeps the forgetting curve at bay.
        </p>
        <div className="mt-8 flex justify-center">
          <NavButton dir="prev" label="Back to overview" onClick={() => setQueue(null)} />
        </div>
      </motion.div>
    );
  }

  // ---- active card ----
  const q = queue[pos];
  const card = getCard(q.id);
  const fresh = isFresh(q);

  function toRecall() {
    markSeen(q.id);
    setMode("recall");
    setRevealed(false);
  }
  function advance() {
    const nextPos = pos + 1;
    setDone((d) => d + 1);
    setPos(nextPos);
    setRevealed(false);
    if (nextPos < queue!.length) setMode(isFresh(queue![nextPos]) ? "read" : "recall");
  }
  function rate(r: Rating) {
    rateCard(q.id, r);
    advance();
  }

  const stageLabel = fresh ? "① Read — encode" : "② Recall — retrieve";

  return (
    <div>
      {/* header */}
      <div className="mb-4 flex items-center justify-between">
        <BackButton label="exit" onClick={() => setQueue(null)} />
        <span className="font-mono text-xs text-overlay1">
          {pos + 1} / {queue.length}
        </span>
      </div>
      <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-surface0">
        <motion.div className="h-full bg-gradient-to-r from-mauve to-blue" animate={{ width: `${(pos / queue.length) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id + mode}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="glass min-h-[22rem] rounded-3xl p-8 shadow-card"
        >
          <div className="mb-4 flex items-center gap-2">
            <TopicBadge topic={q.topic} />
            <DifficultyBadge difficulty={q.difficulty} />
            <span className={`ml-auto font-mono text-[11px] uppercase tracking-widest ${fresh ? "text-blue" : "text-teal"}`}>
              {stageLabel}
            </span>
          </div>

          <h2 className="font-display text-2xl font-medium leading-snug text-text">{q.question}</h2>

          {/* READ mode: answer visible, encourage encoding */}
          {mode === "read" && (
            <div className="mt-5">
              <div className="rounded-2xl border border-white/[0.05] bg-crust/50 p-5">
                <Markdown>{q.answer}</Markdown>
              </div>
              <button
                onClick={toRecall}
                className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-surface0 py-3 font-display text-lg font-medium text-text hover:bg-surface1"
              >
                I’ve read it — test my recall
                <span className="transition-transform duration-300 group-hover:translate-x-0.5"><ChevronRight /></span>
              </button>
            </div>
          )}

          {/* RECALL mode: retrieve first, then reveal + rate */}
          {mode === "recall" && (
            <div className="mt-5">
              {!revealed ? (
                <div className="rounded-2xl border border-dashed border-white/10 bg-crust/30 p-6 text-center">
                  <div className="mb-4 font-mono text-xs text-overlay0">
                    Answer out loud or in your head, then reveal.
                  </div>
                  <button
                    onClick={() => setRevealed(true)}
                    className="rounded-xl border border-mauve/40 bg-mauve/10 px-6 py-2.5 text-text hover:bg-mauve/20"
                  >
                    Reveal answer
                  </button>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="rounded-2xl border border-white/[0.05] bg-crust/50 p-5">
                    <Markdown>{q.answer}</Markdown>
                  </div>
                  <div className="mt-5">
                    <div className="mb-2 text-center font-mono text-xs text-overlay0">
                      How well did you recall it?
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {RATINGS.map((r) => (
                        <button
                          key={r.key}
                          onClick={() => rate(r.key)}
                          className={`flex flex-col items-center gap-1 rounded-xl border py-3 transition-colors ${r.cls}`}
                        >
                          <span className="font-display text-sm font-semibold">{r.label}</span>
                          <span className="font-mono text-[10px] text-overlay1">
                            {previewInterval(card, r.key)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div className="glass rounded-2xl p-4 shadow-card">
      <div className="font-mono text-[10px] uppercase tracking-widest text-overlay0">{label}</div>
      <div className={`mt-1 font-display text-3xl font-bold ${tone}`}>{value}</div>
    </div>
  );
}
