/**
 * Owns the three-zone page contract: orient (one bar of facts), act (the thing
 * the page exists to do), review (what has been recorded). There is no zone 4 —
 * content that fits none of the three belongs on a different page, and taking
 * the zones as props rather than as children is what keeps that true.
 *
 * Does NOT own: what goes inside a zone, page-specific chrome, or the app shell
 * (that is components/Layout.tsx).
 *
 * The wide tier splits act | review on a CONTAINER query, never a viewport one:
 * the sidebar collapses, so viewport width cannot answer "how much room does
 * this page have". See .page-split in styles/index.css.
 */
import type { ReactNode } from "react";

export function Page({
  title,
  actions,
  orient,
  children,
  review,
  aside = false,
}: {
  /**
   * The page's name. Small and quiet on purpose — in a study tool the content
   * is the hero, and the page is furniture. No kicker above it.
   */
  title: string;
  /** Page-level controls that are not the primary action (that lives in act). */
  actions?: ReactNode;
  /** Zone 1. At most four facts, each one that changes the next 30 seconds. */
  orient?: ReactNode;
  /** Zone 2 — act. Holds the page's single primary button. */
  children: ReactNode;
  /** Zone 3 — review. Summary, signature visual, then the list. */
  review?: ReactNode;
  /** Render review as a sticky side column once the container is wide enough. */
  aside?: boolean;
}) {
  return (
    <div className="page">
      <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-h3 font-semibold tracking-tight text-text">{title}</h1>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </header>

      {orient && <div className="mb-6">{orient}</div>}

      {review && aside ? (
        <div className="page-split">
          <div className="min-w-0">{children}</div>
          <aside className="page-aside min-w-0">{review}</aside>
        </div>
      ) : (
        <>
          <div className="min-w-0">{children}</div>
          {review && <div className="mt-10 min-w-0">{review}</div>}
        </>
      )}
    </div>
  );
}

/**
 * A labelled region inside a zone: heading plus a hairline, never card chrome.
 * A raised box tells the user something is interactive; a region is not.
 */
export function Band({
  label,
  hint,
  action,
  children,
  className = "",
}: {
  label: string;
  hint?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mb-8 last:mb-0 ${className}`}>
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-surface0 pb-2">
        <h2 className="text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
          {label}
        </h2>
        {hint && <span className="text-small text-overlay0">{hint}</span>}
        {action && <div className="ml-auto">{action}</div>}
      </div>
      {children}
    </section>
  );
}
