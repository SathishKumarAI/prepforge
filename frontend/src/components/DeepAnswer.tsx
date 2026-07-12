import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { generateAnswer } from "../lib/api";
import type { GeneratedAnswer } from "../lib/types";
import { Markdown } from "./Markdown";

// Grounded, anti-slop answer with Perplexity-style token/cost/source metadata.
export function DeepAnswer({ question, topic }: { question: string; topic: string }) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [data, setData] = useState<GeneratedAnswer | null>(null);

  async function run() {
    setState("loading");
    try {
      const res = await generateAnswer(question, topic);
      setData(res);
    } catch (e) {
      setData({ error: "network", message: String(e) });
    } finally {
      setState("done");
    }
  }

  if (state === "idle") {
    return (
      <button
        onClick={run}
        className="mt-4 flex items-center gap-2 rounded-xl border border-lavender/40 bg-lavender/10 px-3.5 py-2 text-sm font-medium text-lavender transition-colors hover:bg-lavender/20"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8" />
        </svg>
        Deep answer — grounded &amp; sourced
      </button>
    );
  }

  if (state === "loading") {
    return (
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-crust/40 px-4 py-3 text-sm text-subtext0">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-surface1 border-t-lavender" />
        Searching the web &amp; reasoning…
      </div>
    );
  }

  if (data?.error) {
    return (
      <div className="mt-4 rounded-xl border border-red/30 bg-red/10 px-4 py-3 text-sm text-red">
        {data.message ?? "Generation failed."}
        {data.error === "no_api_key" && (
          <div className="mt-1 font-mono text-xs text-maroon">
            Add ANTHROPIC_API_KEY to backend/.env, then restart the backend.
          </div>
        )}
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border border-lavender/20 bg-crust/50 p-4">
      <div className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-lavender">
        ✦ Grounded answer
      </div>
      {data?.answer && <Markdown>{data.answer}</Markdown>}

      {/* metadata bar — like Perplexity's cost/model footer */}
      {data?.meta && (
        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/[0.05] pt-3">
          <Meta label={data.meta.model} />
          <Meta label={`${data.meta.total_tokens.toLocaleString()} tok`} tip={`${data.meta.input_tokens} in · ${data.meta.output_tokens} out`} />
          <Meta label={`$${data.meta.cost_usd.toFixed(4)}`} accent />
          {data.meta.web_searches > 0 && <Meta label={`${data.meta.web_searches} search${data.meta.web_searches > 1 ? "es" : ""}`} />}
        </div>
      )}

      {/* sources — read more on curiosity */}
      <AnimatePresence>
        {data?.sources && data.sources.length > 0 && (
          <div className="mt-4">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-overlay0">
              Sources · {data.sources.length}
            </div>
            <div className="flex flex-col gap-1.5">
              {data.sources.map((s, i) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-surface0/50"
                >
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded bg-lavender/20 font-mono text-[10px] text-lavender">
                    {i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-subtext1 group-hover:text-lavender">{s.title}</span>
                    <span className="block truncate font-mono text-[11px] text-overlay0">
                      {hostname(s.url)}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Meta({ label, tip, accent }: { label: string; tip?: string; accent?: boolean }) {
  return (
    <span
      title={tip}
      className={`pill ${accent ? "border-green/40 text-green" : "text-overlay1"}`}
    >
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
