import { useState } from "react";
import { Markdown } from "../Markdown";
import { Button } from "../ui/button";

/**
 * Long vault answers clamp with a reveal and a reading-time hint, so a card
 * does not blow out to a wall of text before you decide to read it.
 */
export function CollapsibleAnswer({ md }: { md: string }) {
  const long = md.length > 900;
  const [expanded, setExpanded] = useState(!long);
  const mins = Math.max(1, Math.round(md.split(/\s+/).length / 200));
  if (!long) return <Markdown>{md}</Markdown>;
  return (
    <div>
      <div className="mb-2 text-micro text-overlay0">{mins} min read</div>
      <div className={expanded ? "" : "relative max-h-72 overflow-hidden"}>
        <Markdown>{md}</Markdown>
        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-mantle to-transparent" />
        )}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="mt-2"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </div>
  );
}
