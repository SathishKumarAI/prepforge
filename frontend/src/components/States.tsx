export function Loader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-subtext0">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-surface1 border-t-mauve" />
      <span className="font-mono text-sm">{label}…</span>
    </div>
  );
}

export function Empty({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
      <div className="font-display text-2xl text-subtext1">{title}</div>
      {hint && <div className="max-w-sm text-sm text-subtext0">{hint}</div>}
    </div>
  );
}
