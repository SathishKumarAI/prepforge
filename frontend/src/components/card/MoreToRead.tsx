import { ExternalLink } from "lucide-react";
import type { DeepLink } from "../../lib/types";

/**
 * Reading for this question: links its own source cites first, then anything
 * the index could offer it. Borrowed links carry `via`, so a suggestion never
 * passes itself off as something the author of this card actually cited.
 */
export function MoreToRead({ links, reading }: { links?: DeepLink[]; reading?: DeepLink[] }) {
  const seen = new Set<string>();
  const items: DeepLink[] = [];
  for (const l of [...(links ?? []), ...(reading ?? [])]) {
    if (!seen.has(l.url)) {
      seen.add(l.url);
      items.push(l);
    }
  }
  if (items.length === 0) return null;

  return (
    <div className="mt-5">
      <h4 className="mb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
        More to read
      </h4>
      <ul className="flex flex-col gap-0.5">
        {items.map((l) => (
          <li key={l.url}>
            <a
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-small text-subtext0 transition-colors duration-100 hover:bg-surface0 hover:text-text"
            >
              <ExternalLink aria-hidden="true" className="size-3.5 shrink-0 text-overlay0" />
              <span className="truncate">{l.title}</span>
              {l.via && <span className="shrink-0 text-micro text-overlay0">related</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
