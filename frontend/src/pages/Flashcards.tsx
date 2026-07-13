import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Markdown } from "../components/Markdown";
import { DifficultyBadge, TopicBadge } from "../components/Badge";
import { Empty, Loader } from "../components/States";
import { NavButton } from "../components/NavButton";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";
import type { FlashState } from "../lib/storage";

export function Flashcards() {
  const { questions, topics, loading } = useQuestions();
  const { progress, setFlash } = useProgress();
  const [topic, setTopic] = useState<string | null>(null);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const deck = useMemo(
    () => (topic ? questions.filter((q) => q.topic === topic) : questions),
    [questions, topic]
  );

  if (loading) return <Loader label="Shuffling deck" />;
  if (deck.length === 0) return <Empty title="No cards" />;

  const card = deck[Math.min(i, deck.length - 1)];
  const state = progress.flash[card.id] ?? "new";

  function go(next: number) {
    setFlipped(false);
    setI((v) => (v + next + deck.length) % deck.length);
  }
  function grade(s: FlashState) {
    setFlash(card.id, s);
    setTimeout(() => go(1), 180);
  }

  const known = deck.filter((q) => progress.flash[q.id] === "known").length;

  return (
    <div>
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-text">Flashcards</h1>
          <p className="mt-1 text-sm text-subtext0">Tap the card to flip. Grade yourself to build recall.</p>
        </div>
        <div className="text-right font-mono text-xs text-overlay1">
          <div className="text-2xl font-bold text-green">{known}</div>
          <div>known / {deck.length}</div>
        </div>
      </header>

      <div className="mb-6 flex flex-wrap gap-2">
        <TopicPill active={!topic} onClick={() => { setTopic(null); setI(0); }} label="All" />
        {topics.map((t) => (
          <TopicPill key={t} active={topic === t} onClick={() => { setTopic(t); setI(0); }} label={t} />
        ))}
      </div>

      {/* progress bar */}
      <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-surface0">
        <motion.div
          className="h-full bg-gradient-to-r from-mauve to-blue"
          animate={{ width: `${((i + 1) / deck.length) * 100}%` }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* card */}
      <div className="[perspective:1600px]">
        <motion.button
          key={card.id + String(flipped)}
          onClick={() => setFlipped((f) => !f)}
          initial={{ opacity: 0, y: 24, rotateX: -6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative flex min-h-[20rem] w-full flex-col justify-center rounded-3xl px-8 py-10 text-left shadow-card"
        >
          <div className="mb-4 flex items-center gap-2">
            <TopicBadge topic={card.topic} />
            <DifficultyBadge difficulty={card.difficulty} />
            <span className="ml-auto font-mono text-xs text-overlay0">
              {i + 1} / {deck.length}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!flipped ? (
              <motion.div key="q" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-mauve">Question</div>
                <div className="font-display text-2xl font-medium leading-snug text-text">{card.question}</div>
                <div className="mt-6 font-mono text-xs text-overlay0">click to reveal answer</div>
              </motion.div>
            ) : (
              <motion.div key="a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-teal">Answer</div>
                <Markdown>{card.answer}</Markdown>
              </motion.div>
            )}
          </AnimatePresence>

          {state !== "new" && (
            <span className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-widest text-overlay0">
              {state}
            </span>
          )}
        </motion.button>
      </div>

      {/* controls */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <NavButton dir="prev" label="Prev" onClick={() => go(-1)} />
        <div className="flex gap-2">
          <button onClick={() => grade("learning")} className="pill border-red/40 px-4 py-2 text-red hover:bg-red/10">
            Again
          </button>
          <button onClick={() => grade("known")} className="pill border-green/40 px-4 py-2 text-green hover:bg-green/10">
            Got it
          </button>
        </div>
        <NavButton dir="next" label="Next" onClick={() => go(1)} />
      </div>
    </div>
  );
}

function TopicPill({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
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
