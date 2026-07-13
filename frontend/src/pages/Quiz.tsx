import { AnimatePresence, motion } from "framer-motion";
import { Chip } from "@/components/ui/chip";
import { useMemo, useState } from "react";
import { TopicBadge } from "../components/Badge";
import { Empty, Loader } from "../components/States";
import { Kbd } from "../components/Kbd";
import { ChevronRight } from "../components/NavButton";
import { useHotkeys } from "../hooks/useHotkeys";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";
import type { Difficulty, Question } from "../lib/types";

type Phase = "setup" | "run" | "done";

const COUNTS = [5, 10, 15, 20];
const DIFFS: Difficulty[] = ["easy", "medium", "hard"];

export function Quiz() {
  const { questions, topics, loading } = useQuestions();
  const { addQuiz } = useProgress();
  const [phase, setPhase] = useState<Phase>("setup");
  const [topic, setTopic] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [diffs, setDiffs] = useState<Difficulty[]>([]);
  const [count, setCount] = useState(10);
  const [source, setSource] = useState<string | null>(null); // vault source path
  const [seed, setSeed] = useState(0);
  const [deck, setDeck] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);

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
    const rotated = [...ordered.slice(off), ...ordered.slice(0, off)];
    setDeck(rotated.slice(0, Math.min(count, rotated.length)));
    setSeed((s) => s + 7);
    setI(0);
    setPicked(null);
    setCorrect(0);
    setPhase("run");
  }

  if (phase === "setup") {
    return (
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 font-display text-h1 font-semibold text-text">Build your quiz</h1>
        <p className="mb-6 text-sm text-subtext0">
          Pick how many questions, which topic &amp; tags, and how hard. Self-graded, scored at the end.
        </p>
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
          Want to quiz on a YouTube video or article? Ingest it under{" "}
          <span className="text-subtext0">Resources → auto-Q&amp;A</span>, then generate quiz
          questions for it. MCQ generation from a single resource is on the roadmap.
        </p>
      </div>
    );
  }

  if (phase === "done") {
    const pct = Math.round((correct / deck.length) * 100);
    const tone = pct >= 80 ? "green" : pct >= 50 ? "yellow" : "red";
    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-md text-center">
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
      </motion.div>
    );
  }

  // run
  const q = deck[i];
  const quiz = q.quiz!;
  const answered = picked !== null;

  function pick(idx: number) {
    if (answered || idx >= quiz.choices.length) return;
    setPicked(idx);
    if (idx === quiz.correctIndex) setCorrect((c) => c + 1);
  }
  function next() {
    if (i + 1 >= deck.length) {
      addQuiz({ date: new Date().toISOString(), topic: topic ?? "Mixed", total: deck.length, correct });
      setPhase("done");
    } else {
      setI((v) => v + 1);
      setPicked(null);
    }
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <TopicBadge topic={q.topic} />
        <span className="font-mono text-xs text-overlay1">
          {i + 1} / {deck.length} · score {correct}
        </span>
      </div>
      <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-surface0">
        <motion.div className="h-full bg-gradient-to-r from-mauve to-blue" animate={{ width: `${((i + 1) / deck.length) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-6 font-display text-h2 font-medium leading-snug text-text">{q.question}</h2>
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

