import { useEffect, useMemo, useRef } from "react";
import GithubSlugger from "github-slugger";
import { Markdown } from "./Markdown";

type Head = { depth: number; text: string; id: string };

// Pull h1–h3 out of the markdown for a jump-to table of contents. Ids match
// rehype-slug (github-slugger), so anchor links resolve to the rendered headings.
function outline(md: string): Head[] {
  const slugger = new GithubSlugger();
  const heads: Head[] = [];
  for (const line of md.split("\n")) {
    const m = /^(#{1,3})\s+(.+?)\s*#*$/.exec(line);
    if (!m) continue;
    const text = m[2].replace(/[*_`]/g, "").trim();
    if (text) heads.push({ depth: m[1].length, text, id: slugger.slug(text) });
  }
  return heads;
}

/**
 * Long-form reading surface: calm reading-mode typography, a sticky
 * table-of-contents on wide screens, and scroll-position persistence keyed by
 * `storageKey` so reopening a doc lands where you left off.
 */
export function ReadingPane({
  md,
  storageKey,
  maxHeight = "74vh",
}: {
  md: string;
  storageKey: string;
  maxHeight?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const heads = useMemo(() => outline(md), [md]);
  const key = `pf-scroll:${storageKey}`;

  // restore on mount / when the document changes; save on scroll (throttled via rAF).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const saved = Number(sessionStorage.getItem(key) ?? "0");
    if (saved > 0) el.scrollTop = saved;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        sessionStorage.setItem(key, String(el.scrollTop));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [key]);

  function jump(id: string) {
    const el = scrollRef.current?.querySelector(`#${CSS.escape(id)}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const hasToc = heads.length >= 3;

  return (
    <div className={hasToc ? "grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]" : ""}>
      {hasToc && (
        <nav className="hidden lg:block">
          <div className="sticky top-4">
            <div className="mb-2 font-mono text-micro uppercase tracking-[0.14em] text-overlay1">
              On this page
            </div>
            <ul className="space-y-1 border-l border-surface1/60">
              {heads.map((h, i) => (
                <li key={`${h.id}-${i}`}>
                  <button
                    onClick={() => jump(h.id)}
                    style={{ paddingLeft: `${(h.depth - 1) * 0.75 + 0.75}rem` }}
                    className="block w-full truncate py-0.5 text-left text-small text-subtext0 transition-colors hover:text-text"
                  >
                    {h.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
      <div
        ref={scrollRef}
        className="reading-lg overflow-y-auto scroll-smooth"
        style={{ maxHeight }}
      >
        <Markdown>{md}</Markdown>
      </div>
    </div>
  );
}
