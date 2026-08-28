import { EmptyFrame, EmptyRows } from "./page/EmptyFrame";

/**
 * Loading, skeleton and empty surfaces.
 *
 * Loading is a content-shaped skeleton, not a spinner parked in the middle of
 * the page — a spinner tells you nothing about what is arriving.
 */

export function Loader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="py-6" role="status" aria-live="polite">
      <span className="sr-only">{label}</span>
      <SkeletonRows rows={4} />
    </div>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-surface0 ${className}`} />;
}

export function SkeletonRows({ rows = 4 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-16" />
      ))}
    </div>
  );
}

/** A card-shaped skeleton row for the question deck while it loads. */
export function CardSkeleton() {
  return (
    <div className="panel px-4 py-3.5">
      <div className="mb-2.5 flex gap-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-12" />
      </div>
      <Skeleton className="h-4 w-3/4" />
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

/**
 * Empty state. Renders the zeroed structure plus one line naming the action —
 * an empty screen is an invitation to act, not a shrug in a box.
 */
export function Empty({
  title,
  hint,
  action,
  children,
}: {
  title: string;
  hint?: string;
  action?: React.ReactNode;
  /** The zeroed structure. Defaults to hairline list rows. */
  children?: React.ReactNode;
}) {
  return (
    <EmptyFrame label={hint ? `${title} — ${hint}` : title} action={action}>
      {children ?? <EmptyRows />}
    </EmptyFrame>
  );
}
