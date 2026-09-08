import { useMemo } from "react";
import { useAnswerStats } from "../hooks/useAnswerStats";
import { useQuestionIndex } from "../hooks/useQuestionIndex";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { useSettings } from "../hooks/useSettings";
import type { Settings } from "../lib/settings";
import { DENSITIES, TEXT_SIZES, THEME_OPTIONS } from "../lib/theme";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { BackupControls } from "./BackupControls";

const SENIORITY: Settings["seniority"][] = ["junior", "mid", "senior", "staff"];
const DIFFS: ("easy" | "medium" | "hard")[] = ["easy", "medium", "hard"];

export function SettingsPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { settings, update, reset } = useSettings();
  // The index, and only once the panel is open. Layout renders this component
  // on every route, so a hook that fetched unconditionally would pull the whole
  // bank on first paint for a dialog nobody had asked for — and the only thing
  // wanted here is the topic names, which the 1.17 MB projection carries.
  const { rows, loading } = useQuestionIndex(open);
  const stats = useAnswerStats(open);
  const topics = useMemo(
    () => [...new Set(rows.map((r) => r.topic))].sort((a, b) => a.localeCompare(b)),
    [rows],
  );

  function toggleInterest(t: string) {
    const has = settings.interests.includes(t);
    update({ interests: has ? settings.interests.filter((x) => x !== t) : [...settings.interests, t] });
  }
  function toggleDiff(d: "easy" | "medium" | "hard") {
    const has = settings.difficulty.includes(d);
    update({ difficulty: has ? settings.difficulty.filter((x) => x !== d) : [...settings.difficulty, d] });
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>

        <div className="max-h-[70vh] space-y-5 overflow-y-auto pr-1">
          <Field label="Theme">
            <div className="flex flex-wrap gap-2">
              {THEME_OPTIONS.map((t) => (
                <Chip key={t.value} active={settings.theme === t.value} onClick={() => update({ theme: t.value })} label={t.label} />
              ))}
            </div>
          </Field>

          <Field label="Text size">
            <div className="flex flex-wrap gap-2">
              {TEXT_SIZES.map((t) => (
                <Chip key={t.value} active={settings.textSize === t.value} onClick={() => update({ textSize: t.value })} label={t.label} />
              ))}
            </div>
          </Field>

          <Field label="Density">
            <div className="flex flex-wrap gap-2">
              {DENSITIES.map((d) => (
                <Chip key={d.value} active={settings.density === d.value} onClick={() => update({ density: d.value })} label={d.label} />
              ))}
            </div>
          </Field>

          <Field label="Name">
            <input value={settings.name} maxLength={200} onChange={(e) => update({ name: e.target.value })} placeholder="Your name" className="input" />
          </Field>

          <Field label="Target role">
            <input value={settings.role} maxLength={200} onChange={(e) => update({ role: e.target.value })} placeholder="e.g. Machine Learning Engineer" className="input" />
          </Field>

          <Field label="Seniority">
            <div className="flex flex-wrap gap-2">
              {SENIORITY.map((s) => (
                <Chip key={s} active={settings.seniority === s} onClick={() => update({ seniority: s })} label={s} className="capitalize" />
              ))}
            </div>
          </Field>

          <Field label="Interests (drives the deep-answer persona & study mix)">
            <div className="flex flex-wrap gap-2">
              {topics.length === 0 && (
                <span className="text-small text-overlay0">
                  {loading ? "Reading the topic list…" : "No topics yet — add a source in Library."}
                </span>
              )}
              {topics.map((t) => (
                <Chip key={t} active={settings.interests.includes(t)} onClick={() => toggleInterest(t)} label={t} className="capitalize" />
              ))}
            </div>
          </Field>

          <Field label="Preferred difficulty (empty = all)">
            <div className="flex flex-wrap gap-2">
              {DIFFS.map((d) => (
                <Chip key={d} active={settings.difficulty.includes(d)} onClick={() => toggleDiff(d)} label={d} className="capitalize" />
              ))}
            </div>
          </Field>

          <Field label="Companies you're prepping for">
            <input value={settings.companies} maxLength={200} onChange={(e) => update({ companies: e.target.value })} placeholder="e.g. OpenAI, Anthropic, a Series-B startup" className="input" />
          </Field>

          <Field label="Your data">
            <BackupControls />
          </Field>

          <Field label="Generated answers">
            <AnswerStatsView stats={stats} />
          </Field>
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-surface0 pt-3">
          <Button variant="danger" size="sm" onClick={reset}>
            Reset everything
          </Button>
          <Button variant="primary" onClick={onClose}>
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/** What the lens files on disk add up to: how many, by which model, what they
 *  cost, and how long the GPU ran for them — the last one an estimate from
 *  tokens, and it says so. */
function AnswerStatsView({ stats }: { stats: ReturnType<typeof useAnswerStats> }) {
  if (!stats) return <span className="text-small text-overlay0">Reading the answers folder…</span>;
  if (stats.computing) {
    return (
      <span className="text-small text-overlay0">
        Counting {stats.answers.toLocaleString()} answer files — about 30 seconds the first time…
      </span>
    );
  }
  const lenses = Object.entries(stats.by_lens ?? {}).sort((a, b) => b[1] - a[1]);
  const day = (iso?: string | null) => (iso ? new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "—");
  return (
    <div className="space-y-3 text-small">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span><span className="font-semibold text-text">{stats.answers.toLocaleString()}</span> answers on disk</span>
        <span><span className="font-semibold text-text">{(stats.local_answers ?? 0).toLocaleString()}</span> by the local model</span>
        <span><span className="font-semibold text-text">${(stats.cost_usd ?? 0).toFixed(2)}</span> billed in total</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {lenses.map(([lens, n]) => (
          <span key={lens} className="pill text-overlay1">{lens} · {n.toLocaleString()}</span>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-[11px] text-subtext0">
          <thead>
            <tr className="text-overlay0">
              <th className="pb-1 text-left font-normal">model</th>
              <th className="pb-1 text-right font-normal">answers</th>
              <th className="pb-1 text-right font-normal">tokens in</th>
              <th className="pb-1 text-right font-normal">tokens out</th>
              <th className="pb-1 text-right font-normal">cost</th>
            </tr>
          </thead>
          <tbody>
            {(stats.by_model ?? []).map((m) => (
              <tr key={m.model}>
                <td className="truncate pr-2">{m.model}{m.provider ? ` · ${m.provider}` : ""}</td>
                <td className="text-right">{m.answers.toLocaleString()}</td>
                <td className="text-right">{m.input_tokens.toLocaleString()}</td>
                <td className="text-right">{m.output_tokens.toLocaleString()}</td>
                <td className="text-right">${m.cost_usd.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-micro text-overlay1">
        Written {day(stats.first_generated_at)} → {day(stats.last_generated_at)}. The local model's{" "}
        {(stats.output_tokens ?? 0).toLocaleString()} output tokens ≈{" "}
        <span className="text-text">{stats.local_hours_estimate} GPU-hours</span>, estimated at the measured{" "}
        {stats.estimate_basis?.tokens_per_second} tok/s × {stats.estimate_basis?.parallel} parallel slots — not a clock.
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">{label}</div>
      {children}
    </div>
  );
}

