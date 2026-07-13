import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const SHORTCUTS: { keys: string; desc: string }[] = [
  { keys: "/", desc: "Focus the search on Browse" },
  { keys: "Esc", desc: "Close any dialog / reader" },
  { keys: "?", desc: "Show this shortcut help" },
  { keys: "Tab", desc: "Move between controls (focus ring shows)" },
  { keys: "Enter", desc: "Open the focused link / button" },
];

export function ShortcutHelp({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Keyboard shortcuts</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-1.5">
          {SHORTCUTS.map((s) => (
            <div key={s.keys} className="flex items-center justify-between gap-4 rounded-lg px-2 py-1.5 hover:bg-surface0/40">
              <span className="text-sm text-subtext1">{s.desc}</span>
              <kbd className="rounded border border-white/10 bg-crust px-2 py-0.5 font-mono text-xs text-subtext0">{s.keys}</kbd>
            </div>
          ))}
        </div>
        <p className="mt-2 font-mono text-[11px] text-overlay0">More shortcuts (flashcards / quiz / learn) are on the way.</p>
      </DialogContent>
    </Dialog>
  );
}
