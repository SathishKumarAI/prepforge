import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const GROUPS: { title: string; items: { keys: string; desc: string }[] }[] = [
  {
    title: "Anywhere",
    items: [
      { keys: "Ctrl B", desc: "Show or hide the navigation" },
      { keys: "f", desc: "Focus mode — hide every piece of chrome" },
      { keys: "?", desc: "Open this list" },
      { keys: "Esc", desc: "Leave focus mode, or close a dialog" },
    ],
  },
  {
    title: "Browsing",
    items: [
      { keys: "/", desc: "Jump to the search box" },
      { keys: "Enter", desc: "Open the focused question" },
    ],
  },
];

export function ShortcutHelp({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) onClose();
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Keyboard shortcuts</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          {GROUPS.map((g) => (
            <section key={g.title}>
              <h3 className="mb-1.5 border-b border-surface0 pb-1.5 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
                {g.title}
              </h3>
              <dl className="flex flex-col">
                {g.items.map((s) => (
                  <div key={s.keys} className="flex items-center justify-between gap-4 py-1.5">
                    <dd className="text-small text-subtext0">{s.desc}</dd>
                    <dt className="flex shrink-0 gap-1">
                      {s.keys.split(" ").map((k) => (
                        <kbd
                          key={k}
                          className="inline-grid h-5 min-w-[1.25rem] place-items-center rounded border border-surface1 bg-crust px-1.5 font-mono text-micro text-subtext0"
                        >
                          {k}
                        </kbd>
                      ))}
                    </dt>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
