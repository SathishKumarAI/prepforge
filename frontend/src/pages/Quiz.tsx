import { AnimatePresence, motion } from "framer-motion";
import { Chip } from "@/components/ui/chip";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { TopicBadge } from "../components/Badge";
import { Loader } from "../components/States";
import { Kbd } from "../components/Kbd";
import { BackButton, ChevronRight } from "../components/NavButton";
import { useHotkeys } from "../hooks/useHotkeys";
import { useProgress } from "../hooks/useProgress";
import { reloadQuestions, useQuestions } from "../hooks/useQuestions";
import { quizFromVideo } from "../lib/api";
import type { Difficulty, Question } from "../lib/types";

type Phase = "setup" | "run" | "done";

const COUNTS = [5, 10, 15, 20];
const DIFFS: Difficulty[] = ["easy", "medium", "hard"];

// A quiz run persisted to localStorage so leaving the page mid-quiz doesn't lose
// progress — the setup screen offers "Resume" and picks up at the same question.
const RUN_KEY = "pf-quiz-run";
type SavedRun = { deckIds: string[]; i: number; correct: number; topic: string | null };
function loadRun(): SavedRun | null {
  try {
    const r = JSON.parse(localStorage.getItem(RUN_KEY) || "null");
    return r && Array.isArray(r.deckIds) && r.deckIds.length && r.i < r.deckIds.length ? r : null;
  } catch {
    return null;
  }
}
function saveRun(r: SavedRun) { localStorage.setItem(RUN_KEY, JSON.stringify(r)); }
function clearRun() { localStorage.removeItem(RUN_KEY); }

// Quiz preferences remembered between sessions.
const CFG_KEY = "pf-quiz-config";
type QuizCfg = { count: number; topic: string | null; tags: string[]; diffs: Difficulty[]; source: string | null; weak: boolean; timed: boolean };
function loadCfg(): Partial<QuizCfg> {
  try { return JSON.parse(localStorage.getItem(CFG_KEY) || "{}") || {}; } catch { return {}; }
}
const TIMED_SECONDS = 30;

// one answered question, kept for the results review
type Answered = { q: Question; picked: number; correct: boolean };

export function Quiz() {
  const { questions, topics, loading } = useQuestions();
  const { addQuiz, progress } = useProgress();
  const cfg0 = useRef(loadCfg()).current;
  const [phase, setPhase] = useState<Phase>("setup");
  const [topic, setTopic] = useState<string | null>(cfg0.topic ?? null);
  const [tags, setTags] = useState<string[]>(cfg0.tags ?? []);
  const [diffs, setDiffs] = useState<Difficulty[]>(cfg0.diffs ?? []);
  const [count, setCount] = useState(cfg0.count ?? 10);
  const [source, setSource] = useState<string | null>(cfg0.source ?? null); // vault source path
  const [weak, setWeak] = useState(cfg0.weak ?? false);
  const [timed, setTimed] = useState(cfg0.timed ?? false);
  const [seed, setSeed] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoBusy, setVideoBusy] = useState(false);
  const [deck, setDeck] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [answers, setAnswers] = useState<Answered[]>([]);
  const [remaining, setRemaining] = useState(TIMED_SECONDS);
  const [saved, setSaved] = useState<SavedRun | null>(() => loadRun());

  // remember preferences between sessions
  useEffect(() => {
    const c: QuizCfg = { count, topic, tags, diffs, source, weak, timed };
    localStorage.setItem(CFG_KEY, JSON.stringify(c));
  }, [count, topic, tags, diffs, source, weak, timed]);

  // per-question countdown in timed mode; hitting zero auto-reveals as a miss
  useEffect(() => {
    if (phase !== "run" || !timed || picked !== null) return;
    setRemaining(TIMED_SECONDS);
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) { clearInterval(id); timeUp(); return 0; }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, i, timed, picked]);

  // is this a card the user hasn't mastered yet? (weakness-aware selection)
  const isWeak = (q: Question): boolean => {
    if (progress.flash[q.id] === "known") return false;
    if (progress.srs[q.id]?.stage === "mastered") return false;
    return true;
  };

  // only questions that actually carry a multiple-choice quiz can be quizzed
  const quizzable = useMemo(() => questions.filter((q) => q.quiz), [questions]);

  // most common tags across quizzable questions — the tag chips to offer
  const allTags = useMemo(() => {
    const m = new Map<string, number>();
    quizzable.forEach((q) => q.tags.forEach((t) => m.set(t, (m.get(t) ?? 0) + 1)));
    return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 24).map((e) => e[0]);
  }, [quizzable]);

  // vault/resource documents that have quiz-ready questions (for source-scoped quizzes)
  const quizSources = useMemo(() => {
    const m = new Map<string, { title: string; count: number }>();
    quizzable.forEach((q) =>
      (q.sources ?? []).forEach((s) => {
        const e = m.get(s.path) ?? { title: s.title, count: 0 };
        e.count += 1;
        m.set(s.path, e);
      })
    );
    return [...m.entries()].map(([path, v]) => ({ path, ...v })).sort((a, b) => b.count - a.count);
  }, [quizzable]);

  const pool = useMemo(
    () =>
      quizzable.filter(
        (q) =>
          (!topic || q.topic === topic) &&
          (diffs.length === 0 || diffs.includes(q.difficulty)) &&
          (tags.length === 0 || q.tags.some((t) => tags.includes(t))) &&
          (!source || (q.sources ?? []).some((s) => s.path === source))
      ),
    [quizzable, topic, diffs, tags, source]
  );

  // Enter starts / advances; 1–4 answer the current question. Handlers are
  // gated by phase because pick()/next() only make sense mid-run.
  useHotkeys(
    {
      Enter: () => {
        if (phase === "setup") start();
        else if (phase === "done") start();
        else if (picked !== null) next();
      },
      "1": () => phase === "run" && pick(0),
      "2": () => phase === "run" && pick(1),
      "3": () => phase === "run" && pick(2),
      "4": () => phase === "run" && pick(3),
    },
    !loading
  );

  if (loading) return <Loader label="Loading quiz" />;

  function toggle<T>(list: T[], set: (v: T[]) => void, v: T) {
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  }

  function start() {
    if (pool.length === 0) return;
    // deterministic order (no Math.random), rotated by a per-session seed so
    // "Retry" / a new run surfaces a different slice instead of the same 10.
    const ordered = [...pool].sort((a, b) => a.id.localeCompare(b.id));
    const off = seed % ordered.length;
    let rotated = [...ordered.slice(off), ...ordered.slice(0, off)];
    // weakness-aware: float not-yet-mastered / unseen cards to the front (stable)
    if (weak) rotated = [...rotated].sort((a, b) => Number(isWeak(b)) - Number(isWeak(a)));
    const d = rotated.slice(0, Math.min(count, rotated.length));
    setDeck(d);
    setSeed((s) => s + 7);
    setI(0);
    setPicked(null);
    setCorrect(0);
    setAnswers([]);
    setRemaining(TIMED_SECONDS);
    setPhase("run");
    const run: SavedRun = { deckIds: d.map((q) => q.id), i: 0, correct: 0, topic };
    saveRun(run);
    setSaved(run);
  }

  // resume a persisted run — rebuild the deck from saved ids, jump to the question
  function resume() {
    if (!saved) return;
    const d = saved.deckIds.map((id) => quizzable.find((q) => q.id === id)).filter(Boolean) as Question[];
    if (d.length !== saved.deckIds.length) { clearRun(); setSaved(null); return; } // content changed
    setDeck(d);
    setI(Math.min(saved.i, d.length - 1));
    setCorrect(saved.correct);
    setPicked(null);
    setTopic(saved.topic);
    setPhase("run");
  }

  // leave the run but keep it resumable; a fully-answered current question counts
  function exit() {
    const advanced = picked !== null ? i + 1 : i;
    if (advanced < deck.length) {
      const run: SavedRun = { deckIds: deck.map((q) => q.id), i: advanced, correct, topic };
      saveRun(run);
      setSaved(run);
    } else {
      clearRun();
      setSaved(null);
    }
    setPhase("setup");
  }

  // paste a YouTube URL → transcript → ingest → quizzable, then scope to it
  async function makeVideoQuiz() {
    const url = videoUrl.trim();
    if (!url || videoBusy) return;
    setVideoBusy(true);
    try {
      const r = await quizFromVideo(url, topic ?? "AI");
      if (r.error) {
        toast.error(r.message ?? "Couldn't build a quiz from that video.");
        return;
      }
      await reloadQuestions();
      if (r.source_path) setSource(r.source_path);
      setVideoUrl("");
      toast.success(`Quiz ready from “${r.title ?? "video"}”`, {
        description: `${r.synth_quizzes ?? 0} questions generated · source selected below.`,
      });
    } catch {
      toast.error("Video quiz failed — is the backend running?");
    } finally {
      setVideoBusy(false);
    }
  }

  if (phase === "setup") {
    return (
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 font-display text-h1 font-semibold text-text">Build your quiz</h1>
        <p className="mb-6 text-sm text-subtext0">
          Pick how many questions, which topic &amp; tags, and how hard. Self-graded, scored at the end.
        </p>

        {saved && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-mauve/30 bg-mauve/10 px-4 py-3">
            <div className="min-w-0">
              <div className="font-mono text-[11px] uppercase tracking-widest text-mauve">Quiz in progress</div>
              <div className="text-sm text-subtext1">
                Question {Math.min(saved.i + 1, saved.deckIds.length)} of {saved.deckIds.length}
                {saved.topic ? ` · ${saved.topic}` : " · Mixed"} · score {saved.correct}
              </div>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => { clearRun(); setSaved(null); }}
                className="pill text-subtext0 hover:text-red"
              >
                Discard
              </button>
              <button
                onClick={resume}
                className="group inline-flex items-center gap-2 rounded-full border border-mauve/40 bg-mauve/15 px-4 py-1.5 text-sm font-medium text-text hover:bg-mauve/25"
              >
                Resume
                <span className="transition-transform duration-300 group-hover:translate-x-0.5"><ChevronRight /></span>
              </button>
            </div>
          </div>
        )}

        <div className="glass space-y-6 rounded-2xl p-6 shadow-card">
          <Section label="How many questions">
            <div className="flex flex-wrap gap-2">
              {COUNTS.map((c) => (
                <Chip key={c} active={count === c} onClick={() => setCount(c)} label={String(c)} />
              ))}
            </div>
          </Section>

          <Section label="Topic">
            <div className="flex flex-wrap gap-2">
              <Chip active={!topic} onClick={() => setTopic(null)} label="Mixed" />
              {topics.map((t) => (
                <Chip key={t} active={topic === t} onClick={() => setTopic(t)} label={t} />
              ))}
            </div>
          </Section>

          <Section label="Difficulty" hint="empty = all">
            <div className="flex flex-wrap gap-2">
              {DIFFS.map((d) => (
                <Chip key={d} active={diffs.includes(d)} onClick={() => toggle(diffs, setDiffs, d)} label={d} />
              ))}
            </div>
          </Section>

          <Section label="Mode" hint="how you want to be tested">
            <div className="flex flex-wrap gap-2">
              <Chip active={weak} onClick={() => setWeak((v) => !v)} label="◎ Focus weak spots" />
              <Chip active={timed} onClick={() => setTimed((v) => !v)} label={`⏱ Timed · ${TIMED_SECONDS}s`} />
            </div>
          </Section>

          {allTags.length > 0 && (
            <Section label="Tags" hint={tags.length ? `${tags.length} selected · any match` : "optional"}>
              <div className="flex flex-wrap gap-2">
                {allTags.map((t) => (
                  <Chip key={t} active={tags.includes(t)} onClick={() => toggle(tags, setTags, t)} label={`#${t}`} />
                ))}
              </div>
            </Section>
          )}

          {quizSources.length > 0 && (
            <Section label="Quiz from a specific source" hint="a doc / video you ingested">
              <div className="flex flex-wrap gap-2">
                <Chip active={!source} onClick={() => setSource(null)} label="Any source" />
                {quizSources.map((s) => (
                  <Chip key={s.path} active={source === s.path} onClick={() => setSource(s.path)} label={`⛁ ${s.title} · ${s.count}`} />
                ))}
              </div>
            </Section>
          )}

          <Section label="Quiz from a YouTube video" hint="pulls the transcript — no API key">
            <div className="flex gap-2">
              <input
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && makeVideoQuiz()}
                placeholder="Paste a YouTube URL…"
                className="input flex-1 font-mono text-xs"
                disabled={videoBusy}
              />
              <button
                onClick={makeVideoQuiz}
                disabled={videoBusy || !videoUrl.trim()}
                className="shrink-0 rounded-xl border border-red/40 bg-red/10 px-4 py-2.5 text-sm font-medium text-red hover:bg-red/20 disabled:opacity-40"
              >
                {videoBusy ? "Building…" : "Build"}
              </button>
            </div>
            <div className="mt-2 font-mono text-[10px] text-overlay0">
              Fetches captions, turns them into cards + questions, and scopes this quiz to that video.
              Needs captions enabled on the video.
            </div>
          </Section>

          <div className="border-t border-white/[0.06] pt-5">
            <button
              onClick={start}
              disabled={pool.length === 0}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-mauve to-blue py-3.5 font-display text-lg font-semibold text-crust shadow-glow transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40"
            >
              Start quiz · {Math.min(count, pool.length)} Q
              <span className="transition-transform duration-300 group-hover:translate-x-0.5"><ChevronRight /></span>
            </button>
            <div className="mt-3 text-center font-mono text-xs text-overlay0">
              {pool.length === 0
                ? "No quiz-ready questions match these filters — loosen them."
                : `${pool.length} questions match · drawing ${Math.min(count, pool.length)}`}
            </div>
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-[11px] leading-relaxed text-overlay0">
          Prefer articles or PDFs? Read them under{" "}
          <span className="text-subtext0">Reader</span> (they’re ingested + auto-quizzed the same way),
          then pick them under “Quiz from a specific source”.
        </p>
      </div>
    );
  }

  if (phase === "done") {
    const pct = Math.round((correct / deck.length) * 100);
    const tone = pct >= 80 ? "green" : pct >= 50 ? "yellow" : "red";
    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-2xl">
        <div className="text-center">
          <div className="mb-2 font-mono text-xs uppercase tracking-widest text-overlay0">Quiz complete</div>
          <div className={`font-display text-7xl font-black text-${tone}`}>{pct}%</div>
          <div className="mt-2 text-subtext1">
            {correct} / {deck.length} correct{topic ? ` · ${topic}` : " · Mixed"}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <button onClick={() => setPhase("setup")} className="pill px-5 py-2.5 text-subtext1 hover:text-text">
              New quiz
            </button>
            <button onClick={start} className="pill border-mauve/40 bg-mauve/10 px-5 py-2.5 text-text">
              Retry
            </button>
          </div>
        </div>

        {answers.length > 0 && (
          <div className="mt-10">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-overlay0">Review &amp; explanations</div>
            <div className="space-y-3">
              {answers.map((a, idx) => {
                const aq = a.q.quiz!;
                const correctText = aq.choices[aq.correctIndex];
                const yourText = a.picked >= 0 ? aq.choices[a.picked] : "— timed out —";
                return (
                  <div key={idx} className={`rounded-2xl border p-4 ${a.correct ? "border-green/30 bg-green/[0.04]" : "border-red/30 bg-red/[0.04]"}`}>
                    <div className="flex items-start gap-2">
                      <span className={`mt-0.5 shrink-0 font-mono text-sm ${a.correct ? "text-green" : "text-red"}`}>
                        {a.correct ? "✓" : "✗"}
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-text">{aq.prompt ?? a.q.question}</div>
                        {!a.correct && (
                          <div className="mt-1 text-xs text-red/90">Your answer: {yourText}</div>
                        )}
                        <div className="mt-1 text-xs text-green/90">Correct: {correctText}</div>
                        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-subtext0">{glossOf(a.q.answer)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  // run
  const q = deck[i];
  const quiz = q.quiz!;
  const answered = picked !== null;

  function pick(idx: number) {
    if (answered || idx >= quiz.choices.length) return;
    const ok = idx === quiz.correctIndex;
    setPicked(idx);
    if (ok) setCorrect((c) => c + 1);
    setAnswers((a) => [...a, { q, picked: idx, correct: ok }]);
  }
  function timeUp() {
    if (picked !== null) return;
    setPicked(-1); // sentinel: timed out, no credit
    setAnswers((a) => [...a, { q, picked: -1, correct: false }]);
  }
  function next() {
    if (i + 1 >= deck.length) {
      addQuiz({ date: new Date().toISOString(), topic: topic ?? "Mixed", total: deck.length, correct });
      clearRun();
      setSaved(null);
      setPhase("done");
    } else {
      const ni = i + 1;
      setI(ni);
      setPicked(null);
      const run: SavedRun = { deckIds: deck.map((c) => c.id), i: ni, correct, topic };
      saveRun(run);
      setSaved(run);
    }
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <BackButton label="Exit" onClick={exit} />
          <TopicBadge topic={q.topic} />
        </div>
        <span className="flex items-center gap-3 font-mono text-xs text-overlay1">
          {timed && !answered && (
            <span className={remaining <= 5 ? "text-red" : "text-subtext1"}>⏱ {remaining}s</span>
          )}
          <span>{i + 1} / {deck.length} · score {correct}</span>
        </span>
      </div>
      <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-surface0">
        <motion.div className="h-full bg-gradient-to-r from-mauve to-blue" animate={{ width: `${((i + 1) / deck.length) * 100}%` }} />
      </div>
      {timed && !answered && (
        <div className="mb-6 -mt-4 h-0.5 w-full overflow-hidden rounded-full bg-surface0/60">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${remaining <= 5 ? "bg-red" : "bg-peach/70"}`}
            style={{ width: `${(remaining / TIMED_SECONDS) * 100}%` }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {kindLabel(quiz.kind) && (
            <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-teal">{kindLabel(quiz.kind)}</div>
          )}
          <h2 className="mb-6 font-display text-h2 font-medium leading-snug text-text">{quiz.prompt ?? q.question}</h2>
          <div className="flex flex-col gap-3">
            {quiz.choices.map((c, idx) => {
              const isCorrect = idx === quiz.correctIndex;
              const isPicked = idx === picked;
              let cls = "border-white/[0.07] hover:border-white/20 text-subtext1";
              if (answered && isCorrect) cls = "border-green/50 bg-green/10 text-text";
              else if (answered && isPicked) cls = "border-red/50 bg-red/10 text-text";
              else if (answered) cls = "border-white/[0.05] text-overlay0";
              return (
                <button
                  key={idx}
                  onClick={() => pick(idx)}
                  disabled={answered}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all ${cls}`}
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-white/10 font-mono text-xs">
                    {answered ? String.fromCharCode(65 + idx) : idx + 1}
                  </span>
                  <span className="flex-1">{c}</span>
                  {answered && isCorrect && <span className="text-green">✓</span>}
                  {answered && isPicked && !isCorrect && <span className="text-red">✗</span>}
                </button>
              );
            })}
          </div>

          {answered && (
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={next}
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-surface0 py-3 font-display text-lg font-medium text-text hover:bg-surface1"
            >
              {i + 1 >= deck.length ? "See results" : "Next question"}
              <Kbd>Enter</Kbd>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5"><ChevronRight /></span>
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// short label shown above a non-standard quiz question
function kindLabel(kind?: string): string {
  return kind === "cloze" ? "Fill in the blank"
    : kind === "truefalse" ? "True or false"
    : kind === "spotwrong" ? "Spot the wrong statement"
    : "";
}

// plain-text gloss of a markdown answer, for the results explanation
function glossOf(md: string): string {
  return (md || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*`>_~[\]()]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 280);
}

function Section({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2.5 flex items-baseline gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-overlay0">{label}</span>
        {hint && <span className="font-mono text-[10px] text-overlay0/70">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

