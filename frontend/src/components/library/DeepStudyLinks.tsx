import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import type { DeepLink } from "../../lib/types";

/**
 * Every "go deeper" link the matched questions cite, deduped and ranked by how
 * many of them cite it — the reading list for whatever you are looking at.
 *
 * Deduped and counted on the SERVER now. It used to walk every question's
 * `links` and `reading` arrays in the browser, which meant this one disclosure
 * was a second reason the whole bank had to be in memory: those arrays are not
 * in the index projection either.
 */
export function DeepStudyLinks({
  links,
  total,
  label,
}: {
  links: (DeepLink & { count: number })[];
  /** Distinct links before the server's cap, so the count does not lie. */
  total: number;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  if (links.length === 0) return null;
  const shown = open ? links : links.slice(0, 6);

  // A quiet disclosure, not a titled card: this is a side door off the deck.
  // Giving it card chrome gave six links the same weight as the deck itself.
  return (
    <details
      // Also gone in focus mode: it sits in the same band as the search box and
      // is the same kind of thing — a side door off the deck, not the reading.
      className="mb-5 border-b border-surface0 pb-3 [.focus-mode_&]:hidden"
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
    >
      <summary className="flex cursor-pointer list-none items-center gap-2 text-micro text-overlay1 marker:content-none hover:text-subtext0 [&::-webkit-details-marker]:hidden">
        <ChevronRight
          aria-hidden="true"
          className={`size-3.5 transition-transform duration-150 ${open ? "rotate-90" : ""}`}
        />
        <span className="font-semibold uppercase tracking-[0.14em]">Go deeper</span>
        <span>
          <span className="tabular-nums">{total.toLocaleString()}</span> link
          {total !== 1 ? "s" : ""} the sources cite for {label}
        </span>
      </summary>
      <ul className="mt-2 flex flex-col gap-0.5">
        {shown.map((l) => (
          <li key={l.url}>
            <a
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-small text-subtext0 transition-colors duration-100 hover:bg-surface0 hover:text-text"
            >
              <ExternalLink aria-hidden="true" className="size-3.5 shrink-0 text-overlay0" />
              <span className="truncate">{l.title}</span>
              {l.count > 1 && (
                <span className="shrink-0 tabular-nums text-micro text-overlay0">
                  cited {l.count}×
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
