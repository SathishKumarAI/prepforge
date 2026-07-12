import { useQuestions } from "../hooks/useQuestions";
import { useSettings } from "../hooks/useSettings";
import type { Settings } from "../lib/settings";
import { TEXT_SIZES, THEME_OPTIONS } from "../lib/theme";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const SENIORITY: Settings["seniority"][] = ["junior", "mid", "senior", "staff"];
const DIFFS: ("easy" | "medium" | "hard")[] = ["easy", "medium", "hard"];

export function SettingsPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { settings, update, reset } = useSettings();
  const { topics } = useQuestions();

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

          <Field label="Name">
            <input value={settings.name} maxLength={200} onChange={(e) => update({ name: e.target.value })} placeholder="Your name" className="input" />
          </Field>

          <Field label="Target role">
            <input value={settings.role} maxLength={200} onChange={(e) => update({ role: e.target.value })} placeholder="e.g. Machine Learning Engineer" className="input" />
          </Field>

          <Field label="Seniority">
            <div className="flex flex-wrap gap-2">
              {SENIORITY.map((s) => (
                <Chip key={s} active={settings.seniority === s} onClick={() => update({ seniority: s })} label={s} />
              ))}
            </div>
          </Field>

          <Field label="Interests (drives the deep-answer persona & study mix)">
            <div className="flex flex-wrap gap-2">
              {topics.length === 0 && <span className="text-sm text-overlay0">Load questions first.</span>}
              {topics.map((t) => (
                <Chip key={t} active={settings.interests.includes(t)} onClick={() => toggleInterest(t)} label={t} />
              ))}
            </div>
          </Field>

          <Field label="Preferred difficulty (empty = all)">
            <div className="flex flex-wrap gap-2">
              {DIFFS.map((d) => (
                <Chip key={d} active={settings.difficulty.includes(d)} onClick={() => toggleDiff(d)} label={d} />
              ))}
            </div>
          </Field>

          <Field label="Companies you're prepping for">
            <input value={settings.companies} maxLength={200} onChange={(e) => update({ companies: e.target.value })} placeholder="e.g. OpenAI, Anthropic, a Series-B startup" className="input" />
          </Field>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <button onClick={reset} className="pill text-subtext0 hover:text-red">Reset</button>
          <button onClick={onClose} className="rounded-xl bg-gradient-to-r from-mauve to-blue px-5 py-2.5 font-display font-semibold text-crust shadow-glow">
            Done
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-overlay0">{label}</div>
      {children}
    </div>
  );
}

function Chip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`pill capitalize transition-all ${active ? "border-mauve/40 bg-mauve/10 text-text" : "text-subtext0 hover:text-subtext1"}`}
    >
      {label}
    </button>
  );
}
