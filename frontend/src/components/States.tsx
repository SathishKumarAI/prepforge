export function Loader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-subtext0">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-surface1 border-t-mauve" />
      <span className="font-mono text-sm">{label}…</span>
    </div>
  );
}

// Shimmer placeholder — a calmer perceived-load than a spinner (content-shaped).
export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-surface0/60 ${className}`} />;
}

// A card-shaped skeleton row for the Browse deck while questions load.
export function CardSkeleton() {
  return (
    <div className="glass rounded-2xl border-l-2 border-surface1 px-5 py-4">
      <div className="mb-2 flex gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-14" />
      </div>
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="mt-2 h-3 w-full" />
      <Skeleton className="mt-1.5 h-3 w-5/6" />
    </div>
  );
}

export function CardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 items-start gap-3 xl:grid-cols-2">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function Empty({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
      <div className="font-display text-h2 text-subtext1">{title}</div>
      {hint && <div className="max-w-sm text-sm text-subtext0">{hint}</div>}
    </div>
  );
}
