import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { TopicBadge } from "../components/Badge";
import { Empty, Loader } from "../components/States";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";
import type { Question } from "../lib/types";

type Phase = "setup" | "run" | "done";

export function Quiz() {
  const { questions, topics, loading } = useQuestions();
  const { addQuiz } = useProgress();
  const [phase, setPhase] = useState<Phase>("setup");
  const [topic, setTopic] = useState<string | null>(null);
  const [deck, setDeck] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);

  const pool = useMemo(
    () => questions.filter((q) => q.quiz && (!topic || q.topic === topic)),
    [questions, topic]
  );

  if (loading) return <Loader label="Loading quiz" />;

  function start() {
    // stable pseudo-shuffle without Math.random (deterministic but varied by length)
    const shuffled = [...pool].sort((a, b) => a.id.localeCompare(b.id)).reverse();
    setDeck(shuffled.slice(0, Math.min(10, shuffled.length)));
    setI(0);
    setPicked(null);
    setCorrect(0);
    setPhase("run");
  }

  if (phase === "setup") {
    return (
      <div>
        <h1 className="mb-2 font-display text-3xl font-semibold tracking-tight text-text">Quiz</h1>
        <p className="mb-8 text-sm text-subtext0">
          10 multiple-choice questions. Self-graded, scored at the end.
        </p>
        <div className="glass rounded-2xl p-6 shadow-card">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-overlay0">Choose a topic</div>
          <div className="mb-6 flex flex-wrap gap-2">
            <Pill active={!topic} onClick={() => setTopic(null)} label="Mixed" />
            {topics.map((t) => (
              <Pill key={t} active={topic === t} onClick={() => setTopic(t)} label={t} />
            ))}
          </div>
          <button
            onClick={start}
            disabled={pool.length === 0}
            className="w-full rounded-xl bg-gradient-to-r from-mauve to-blue py-3.5 font-display text-lg font-semibold text-crust shadow-glow transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40"
          >
            Start quiz →
          </button>
          <div className="mt-3 text-center font-mono text-xs text-overlay0">
            {pool.length} questions available
          </div>
        </div>
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
    if (answered) return;
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
          <h2 className="mb-6 font-display text-2xl font-medium leading-snug text-text">{q.question}</h2>
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
                    {String.fromCharCode(65 + idx)}
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
              className="mt-6 w-full rounded-xl bg-surface0 py-3 font-display text-lg font-medium text-text hover:bg-surface1"
            >
              {i + 1 >= deck.length ? "See results →" : "Next question →"}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Pill({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`pill transition-all ${
        active ? "border-mauve/40 bg-mauve/10 text-text" : "text-subtext0 hover:text-subtext1"
      }`}
    >
      {label}
    </button>
  );
}
