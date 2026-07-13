import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { useSettings } from "../hooks/useSettings";
import { generateAnswer } from "../lib/api";
import { personaHint } from "../lib/settings";
import type { GeneratedAnswer } from "../lib/types";
import { Markdown } from "./Markdown";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type Mode = "deep" | "star" | "eli5" | "first_principles" | "aws" | "thinking" | "faang" | "custom";
type Slot = { status: "loading" | "done"; data: GeneratedAnswer | null };

const TABS: { mode: Mode; label: string }[] = [
  { mode: "deep", label: "Grounded" },
  { mode: "star", label: "Interview · STAR" },
  { mode: "eli5", label: "ELI5" },
  { mode: "first_principles", label: "First-principles" },
  { mode: "aws", label: "AWS" },
  { mode: "thinking", label: "Thinking" },
  { mode: "faang", label: "FAANG" },
  { mode: "custom", label: "My content" },
];

const MODE_TITLE: Record<Mode, string> = {
  deep: "✦ Grounded answer",
  star: "★ Interview answer (STAR)",
  eli5: "◕ Explain like I'm 5",
  first_principles: "△ From first principles",
  aws: "▲ Amazon / AWS interview",
  thinking: "◎ The thinking process",
  faang: "◆ FAANG approach",
  custom: "✎ My content",
};

const MODE_LOADING: Record<Mode, string> = {
  deep: "Searching the web & reasoning…",
  star: "Composing a STAR interview answer…",
  eli5: "Finding a simple, vivid explanation…",
  first_principles: "Deriving it from fundamentals…",
  aws: "Framing it the Amazon/AWS way…",
  thinking: "Mapping the thinking process…",
  faang: "Structuring the FAANG answer…",
  custom: "",
};

// The "how to approach it" legend — teaches the structure so you can reuse it.
const APPROACH: Record<Mode, { tag: string; desc: string }[]> = {
  deep: [
    { tag: "Answer", desc: "lead with the crisp answer" },
    { tag: "Nuance", desc: "then the caveats" },
    { tag: "Specifics", desc: "real tools & metrics" },
    { tag: "Trade-offs", desc: "what you'd weigh" },
  ],
  star: [
    { tag: "S · Situation", desc: "set the context" },
    { tag: "T · Task", desc: "your goal" },
    { tag: "A · Action", desc: "what you did" },
    { tag: "R · Result", desc: "measurable outcome" },
  ],
  eli5: [
    { tag: "Plain words", desc: "no jargon" },
    { tag: "Analogy", desc: "one that maps to the mechanism" },
    { tag: "Accurate", desc: "simplified, not wrong" },
  ],
  first_principles: [
    { tag: "Problem", desc: "what it fundamentally solves" },
    { tag: "Why", desc: "derive, don't recite" },
    { tag: "Deeper principle", desc: "the underlying law" },
    { tag: "Insight", desc: "what most people miss" },
  ],
  aws: [
    { tag: "Leadership Principle", desc: "anchor to the LP" },
    { tag: "STAR / design", desc: "structure it" },
    { tag: "Data", desc: "quantified result" },
    { tag: "Dive deep", desc: "depth + trade-offs" },
  ],
  thinking: [
    { tag: "Clarify", desc: "assumptions first" },
    { tag: "Framework", desc: "the mental model" },
    { tag: "Reason", desc: "step by step" },
    { tag: "Check", desc: "sanity + communicate" },
  ],
  faang: [
    { tag: "Clarify", desc: "restate + assumptions" },
    { tag: "Approach", desc: "plan first" },
    { tag: "Depth", desc: "detail + complexity" },
    { tag: "Edge cases", desc: "what breaks" },
    { tag: "Optimize", desc: "improve + narrate" },
  ],
  custom: [
    { tag: "Paste", desc: "drop your own content" },
    { tag: "Save", desc: "kept for this question" },
    { tag: "Recall", desc: "your words, your memory" },
  ],
};

// Two answer variants per question, in one box:
//  · Grounded  — web-sourced, anti-slop, with token/cost/source metadata
//  · STAR      — first-person interview answer (Situation·Task·Action·Result)
export function DeepAnswer({ question, topic, qid }: { question: string; topic: string; qid: string }) {
  const [opened, setOpened] = useState(false);
  const [mode, setMode] = useState<Mode>("deep");
  const [slots, setSlots] = useState<Partial<Record<Mode, Slot>>>({});
  const [customText, setCustomText] = useState("");
  const { settings } = useSettings();
  const { progress, setCustom } = useProgress();

  const load = useCallback(
    async (m: Mode) => {
      setSlots((s) => ({ ...s, [m]: { status: "loading", data: null } }));
      try {
        const res = await generateAnswer(question, topic, personaHint(settings), qid, m);
        setSlots((s) => ({ ...s, [m]: { status: "done", data: res } }));
      } catch (e) {
        setSlots((s) => ({ ...s, [m]: { status: "done", data: { error: "network", message: String(e) } } }));
      }
    },
    [question, topic, qid, settings]
  );

  function open() {
    setOpened(true);
    setMode("deep");
    if (!slots.deep) load("deep");
  }

  function switchTo(m: Mode) {
    setMode(m);
    if (m === "custom") {
      setCustomText(progress.custom[qid] ?? "");
      return; // your own content — no generation
    }
    if (!slots[m]) load(m);
  }

  if (!opened) {
    return (
      <button
        onClick={open}
        className="mt-4 flex items-center gap-2 rounded-xl border border-lavender/40 bg-lavender/10 px-3.5 py-2 text-sm font-medium text-lavender transition-colors hover:bg-lavender/20"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8" />
        </svg>
        Answers — 7 lenses + your notes
      </button>
    );
  }

  const slot = slots[mode];

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border border-lavender/20 bg-crust/50 p-4">
      {/* tabs (shadcn/Radix) */}
      <Tabs value={mode} onValueChange={(v) => switchTo(v as Mode)} className="mb-3">
        <TabsList>
          {TABS.map((t) => (
            <TabsTrigger key={t.mode} value={t.mode}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {mode === "custom" && (
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-mantle/50 px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-overlay0">your content ›</span>
            <span className="text-[11px] italic text-overlay1">drop the text/notes you want to remember for this question</span>
          </div>
          <textarea
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Paste your own answer, notes, or reference content for this question… (markdown supported)"
            className="input min-h-[9rem] resize-y font-mono"
          />
          <div className="mt-2 flex items-center gap-2">
            <button
              onClick={() => setCustom(qid, customText)}
              className="rounded-xl bg-gradient-to-r from-mauve to-blue px-4 py-2 text-sm font-semibold text-crust"
            >
              Save
            </button>
            {(progress.custom[qid] ?? "") === customText && customText.trim() && (
              <span className="font-mono text-[11px] text-green">✓ saved</span>
            )}
          </div>
          {progress.custom[qid] && (
            <div className="mt-4 border-t border-white/[0.05] pt-3">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-lavender">✎ My content</div>
              <Markdown>{progress.custom[qid]}</Markdown>
            </div>
          )}
        </div>
      )}

      {slot?.status === "loading" && (
        <div className="flex items-center gap-3 px-1 py-4 text-sm text-subtext0">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-surface1 border-t-lavender" />
          {MODE_LOADING[mode]}
        </div>
      )}

      {slot?.status === "done" && slot.data?.error && (
        <div className="rounded-xl border border-red/30 bg-red/10 px-4 py-3 text-sm text-red">
          {slot.data.message ?? "Generation failed."}
          {slot.data.error === "no_credentials" && (
            <div className="mt-1 font-mono text-xs text-maroon">
              Add ANTHROPIC_API_KEY to backend/.env, or run `ant auth login`, then restart the backend.
            </div>
          )}
        </div>
      )}

      {slot?.status === "done" && slot.data && !slot.data.error && (
        <AnimatePresence mode="wait">
          <motion.div key={mode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-lavender">
              {MODE_TITLE[mode]}
            </div>

            {/* approach legend — small italic tags to internalise the structure */}
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-mantle/50 px-3 py-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-overlay0">how to approach ›</span>
              {APPROACH[mode].map((a, i) => (
                <span key={i} className="text-[11px]">
                  <sup className="mr-0.5 font-semibold not-italic text-lavender">{a.tag}</sup>
                  <span className="italic text-overlay1">{a.desc}</span>
                </span>
              ))}
            </div>

            {slot.data.answer && <Markdown>{slot.data.answer}</Markdown>}

            {slot.data.meta && (
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/[0.05] pt-3">
                {slot.data.meta.model && <Meta label={slot.data.meta.model} />}
                {typeof slot.data.meta.total_tokens === "number" && (
                  <Meta label={`${slot.data.meta.total_tokens.toLocaleString()} tok`} tip={`${slot.data.meta.input_tokens ?? 0} in · ${slot.data.meta.output_tokens ?? 0} out`} />
                )}
                {typeof slot.data.meta.cost_usd === "number" && <Meta label={`$${slot.data.meta.cost_usd.toFixed(4)}`} accent />}
                {(slot.data.meta.web_searches ?? 0) > 0 && <Meta label={`${slot.data.meta.web_searches} search${slot.data.meta.web_searches! > 1 ? "es" : ""}`} />}
                {slot.data.meta.cached && <Meta label="✓ cached · no API call" accent />}
              </div>
            )}

            {slot.data.sources && slot.data.sources.length > 0 && (
              <div className="mt-4">
                <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-overlay0">
                  Sources · {slot.data.sources.length}
                </div>
                <div className="flex flex-col gap-1.5">
                  {slot.data.sources.map((s, i) => (
                    <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="group flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-surface0/50">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded bg-lavender/20 font-mono text-[10px] text-lavender">{i + 1}</span>
                      <span className="min-w-0">
                        <span className="block truncate text-subtext1 group-hover:text-lavender">{s.title}</span>
                        <span className="block truncate font-mono text-[11px] text-overlay0">{hostname(s.url)}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}

function Meta({ label, tip, accent }: { label: string; tip?: string; accent?: boolean }) {
  return (
    <span title={tip} className={`pill ${accent ? "border-green/40 text-green" : "text-overlay1"}`}>
      {label}
    </span>
  );
}

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
