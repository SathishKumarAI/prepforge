import { useCallback, useEffect, useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { useProviders } from "../hooks/useProviders";
import { useSettings } from "../hooks/useSettings";
import { generateAnswer } from "../lib/api";
import { personaHint } from "../lib/settings";
import type { GeneratedAnswer, Provider } from "../lib/types";
import { Markdown } from "./Markdown";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export type Mode = "deep" | "star" | "eli5" | "first_principles" | "aws" | "thinking" | "faang" | "custom";
/** `view` indexes `data.versions` — 0 is the newest, which is what a fresh load shows. */
type Slot = {
  status: "loading" | "done";
  data: GeneratedAnswer | null;
  view: number;
  /** A regenerate that failed. Kept apart from `data` so the answer already on screen survives it. */
  error?: GeneratedAnswer;
};

/** Exported so a caller can put these lenses in ITS tab row — see `controlled`. */
export const LENS_TABS: { mode: Mode; label: string }[] = [
  { mode: "deep", label: "Grounded" },
  { mode: "star", label: "Interview · STAR" },
  { mode: "eli5", label: "ELI5" },
  { mode: "first_principles", label: "First-principles" },
  { mode: "aws", label: "AWS" },
  { mode: "thinking", label: "Thinking" },
  { mode: "faang", label: "FAANG" },
  { mode: "custom", label: "My content" },
];
const TABS = LENS_TABS;

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

/**
 * The generated answers: eight lenses on one question, each fetched the first
 * time you ask for it and kept in a slot after that.
 *
 * Two shapes, one component. Left alone it is self-contained: a button, then its
 * own tab row — that is the card in a list, where the lenses are an aside. Given
 * `controlled`, the caller owns the tab row and this renders only the body for
 * the mode it is handed — that is the Library detail pane, where the lenses are
 * the point and belong in the same row as the bank answer.
 *
 * Either way a lens generates as soon as it is selected — hovered or pressed,
 * no second confirmation. One tab, one call.
 */
export function DeepAnswer({
  question,
  topic,
  qid,
  controlled,
}: {
  question: string;
  topic: string;
  qid: string;
  /** Render just the body for this mode; the caller draws the tabs. */
  controlled?: Mode;
}) {
  const [opened, setOpened] = useState(false);
  const [mode, setMode] = useState<Mode>(controlled ?? "deep");
  const [slots, setSlots] = useState<Partial<Record<Mode, Slot>>>({});
  const [customText, setCustomText] = useState("");
  const [infoOpen, setInfoOpen] = useState(false);
  const { settings } = useSettings();
  const { progress, setCustom } = useProgress();
  const providers = useProviders();

  // A regenerate keeps the current answer on screen while the new one is
  // written; the old one is not lost either way — the backend keeps every
  // version on disk and sends them all back, newest first.
  const load = useCallback(
    async (m: Mode, provider?: Provider) => {
      setSlots((s) => ({ ...s, [m]: { status: "loading", data: provider ? s[m]?.data ?? null : null, view: 0 } }));
      let res: GeneratedAnswer;
      try {
        res = await generateAnswer(question, topic, personaHint(settings), qid, m, provider ? { provider, force: true } : {});
      } catch (e) {
        res = { error: "network", message: String(e) };
      }
      setSlots((s) => {
        const prev = s[m];
        // A regenerate that fails must not take the answer on screen with it.
        if (res.error && provider && prev?.data && !prev.data.error) {
          return { ...s, [m]: { status: "done", data: prev.data, view: prev.view, error: res } };
        }
        return { ...s, [m]: { status: "done", data: res, view: 0 } };
      });
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

  // Controlled: follow the caller's tab, and fetch that lens the first time it
  // is asked for. The guard on `slots` is what keeps this to one call per lens —
  // an effect that refetched on every render would bill you per keystroke.
  useEffect(() => {
    if (!controlled) return;
    setMode(controlled);
    if (controlled === "custom") {
      setCustomText(progress.custom[qid] ?? "");
      return;
    }
    if (!slots[controlled]) load(controlled);
    // `slots` is deliberately absent: it changes as the fetch lands, and
    // depending on it would re-run this the moment the answer arrives.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlled, qid, load]);

  if (!opened && !controlled) {
    return (
      <button
        onClick={open}
        className="mt-4 inline-flex h-9 items-center gap-2 rounded-lg bg-surface0 px-3.5 text-small font-medium text-text transition-colors duration-100 hover:bg-surface1"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8" />
        </svg>
        Answers — 7 lenses + your notes
      </button>
    );
  }

  const slot = slots[mode];
  // What is on screen: the version the learner picked, else the newest.
  const shown = slot?.data && !slot.data.error ? slot.data.versions?.[slot.view] ?? slot.data : null;
  const versions = slot?.data?.versions ?? [];
  const err = slot?.status === "done" ? slot.error ?? (slot.data?.error ? slot.data : null) : null;

  return (
    <div className={controlled ? "" : "mt-4 rounded-lg border border-surface0 bg-crust p-4"}>
      {/* tabs (shadcn/Radix) — the caller's row replaces this when controlled */}
      {!controlled && (
        <Tabs value={mode} onValueChange={(v) => switchTo(v as Mode)} className="mb-3">
          <TabsList>
            {TABS.map((t) => (
              <TabsTrigger key={t.mode} value={t.mode}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

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
              className="inline-flex h-9 items-center rounded-lg bg-mauve px-3.5 text-small font-medium text-on-accent transition-colors duration-100 hover:bg-mauve/90"
            >
              Save
            </button>
            {(progress.custom[qid] ?? "") === customText && customText.trim() && (
              <span className="font-mono text-[11px] text-green">✓ saved</span>
            )}
          </div>
          {progress.custom[qid] && (
            <div className="mt-4 border-t border-surface0 pt-3">
              <div className="mb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">✎ My content</div>
              <Markdown>{progress.custom[qid]}</Markdown>
            </div>
          )}
        </div>
      )}

      {/* Both the frame before the effect fires its fetch and the fetch itself.
          `spinner-late`: a lens on disk lands in ~20 ms, and a spinner that
          exists for one frame is not feedback, it is the flicker — measured
          at 709 → 463 → 892 px of article height per hover-switch. It waits
          150 ms, so only a real generation ever shows it. */}
      {((controlled && !slot) || slot?.status === "loading") && mode !== "custom" && (
        <div className="spinner-late flex items-center gap-3 px-1 py-4 text-sm text-subtext0">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-surface1 border-t-mauve" />
          {MODE_LOADING[mode]}
        </div>
      )}

      {err && (
        <div className="mb-3 rounded-xl border border-red/30 bg-red/10 px-4 py-3 text-sm text-red">
          {err.message ?? "Generation failed."}
          {err.error === "no_credentials" && (
            <div className="mt-1 text-micro text-red">
              Add ANTHROPIC_API_KEY to backend/.env, or run `ant auth login`, then restart the backend.
            </div>
          )}
        </div>
      )}

      {/* No fade. The 300 ms opacity ramp ended in a one-frame drop to 0 on
          every lens switch (framer-motion remount, measured in the browser),
          and six tabs switch on hover once LM Studio is up — so the fade was
          the flicker, not the polish. */}
      {shown && (
        <div>
            <div className="mb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
              {MODE_TITLE[mode]}
            </div>

            {/* approach legend — small italic tags to internalise the structure */}
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-mantle/50 px-3 py-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-overlay0">how to approach ›</span>
              {APPROACH[mode].map((a, i) => (
                <span key={i} className="text-[11px]">
                  <sup className="mr-0.5 font-semibold not-italic text-mauve">{a.tag}</sup>
                  <span className="italic text-overlay1">{a.desc}</span>
                </span>
              ))}
            </div>

            {shown.answer && <Markdown>{shown.answer}</Markdown>}

            {/* Every version stays on disk; this row is the history. */}
            {versions.length > 1 && (
              <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-surface0 pt-3">
                <span className="font-mono text-[9px] uppercase tracking-widest text-overlay0">versions ›</span>
                {versions.map((v, i) => (
                  <button
                    key={v.meta?.file ?? i}
                    onClick={() => setSlots((s) => ({ ...s, [mode]: { ...s[mode]!, view: i } }))}
                    className={`pill transition-colors ${i === slot?.view ? "border-mauve/60 text-mauve" : "text-overlay1 hover:text-text"}`}
                    title={v.meta?.file}
                  >
                    v{versions.length - i} · {when(v.meta?.generated_at)} · {shortModel(v.meta?.model)}
                  </button>
                ))}
              </div>
            )}

            {shown.meta && (
              <div className="mt-4 border-t border-surface0 pt-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {typeof shown.meta.cost_usd === "number" && <Meta label={`$${shown.meta.cost_usd.toFixed(4)}`} accent />}
                  {shown.meta.cached && <Meta label="✓ saved on disk · no API call" accent />}
                  <button
                    onClick={() => setInfoOpen((o) => !o)}
                    aria-expanded={infoOpen}
                    aria-label="How this answer was made"
                    className={`pill transition-colors ${infoOpen ? "border-mauve/60 text-mauve" : "text-overlay1 hover:text-text"}`}
                  >
                    ⓘ info
                  </button>
                </div>
                {infoOpen && (
                  <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5 rounded-lg bg-mantle/50 px-3 py-2 font-mono text-[11px] text-subtext0">
                    <dt className="text-overlay0">model</dt>
                    <dd>{shown.meta.model ?? "—"}{shown.meta.provider ? ` · ${shown.meta.provider}` : ""}</dd>
                    <dt className="text-overlay0">written</dt>
                    <dd>{shown.meta.generated_at ? new Date(shown.meta.generated_at).toLocaleString() : "—"}</dd>
                    <dt className="text-overlay0">tokens</dt>
                    <dd>{(shown.meta.input_tokens ?? 0).toLocaleString()} in · {(shown.meta.output_tokens ?? 0).toLocaleString()} out</dd>
                    <dt className="text-overlay0">cost</dt>
                    <dd>{typeof shown.meta.cost_usd === "number" ? `$${shown.meta.cost_usd.toFixed(4)}` : "—"}{(shown.meta.web_searches ?? 0) > 0 ? ` · ${shown.meta.web_searches} web search${shown.meta.web_searches! > 1 ? "es" : ""}` : ""}</dd>
                    <dt className="text-overlay0">file</dt>
                    <dd className="truncate">{shown.meta.file ?? "—"}</dd>
                  </dl>
                )}
              </div>
            )}

            {shown.sources && shown.sources.length > 0 && (
              <div className="mt-4">
                <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-overlay0">
                  Sources · {shown.sources.length}
                </div>
                <div className="flex flex-col gap-1.5">
                  {shown.sources.map((s, i) => (
                    <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="group flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-surface0/50">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded bg-surface0 font-mono text-micro text-subtext0">{i + 1}</span>
                      <span className="min-w-0">
                        <span className="block truncate text-subtext0 group-hover:text-text">{s.title}</span>
                        <span className="block truncate font-mono text-[11px] text-overlay0">{hostname(s.url)}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* A new answer, kept alongside this one. Local is free and hidden
                when LM Studio is off; Claude bills, and web search bills more —
                the press itself is the confirmation, as everywhere else here. */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-surface0 pt-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-overlay0">new answer ›</span>
              {providers.local_model && (
                <Regen onClick={() => load(mode, "local")} busy={slot?.status === "loading"} label="↻ Local · free" tip={providers.local_model} />
              )}
              <Regen onClick={() => load(mode, "claude")} busy={slot?.status === "loading"} label="↻ Claude" tip="Bills tokens, no web search" />
              <Regen onClick={() => load(mode, "claude_search")} busy={slot?.status === "loading"} label="↻ Claude + web search" tip="Bills tokens and up to 4 searches; adds citations" />
            </div>
        </div>
      )}
    </div>
  );
}

function Regen({ onClick, busy, label, tip }: { onClick: () => void; busy: boolean; label: string; tip?: string }) {
  return (
    <button onClick={onClick} disabled={busy} title={tip} className="pill text-overlay1 transition-colors hover:text-text disabled:opacity-50">
      {label}
    </button>
  );
}

function when(iso?: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  return isNaN(d.getTime()) ? iso : d.toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

/** `claude-opus-4-8` → `opus-4-8`; a long LM Studio id keeps its last segment. */
function shortModel(model?: string): string {
  if (!model) return "?";
  return model.replace(/^claude-/, "").split("/").pop()!.slice(0, 24);
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
