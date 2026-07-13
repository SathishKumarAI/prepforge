import { useEffect, useState } from "react";
import { readResource, type ReadResult } from "../lib/api";
import type { Resource } from "../lib/types";
import { TopicBadge } from "./Badge";
import { ReadingPane } from "./ReadingPane";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

// In-app reader popup (Radix Dialog: focus trap, Esc, aria, scroll-lock). Fetches
// a resource's readable content and renders it here instead of opening a new tab.
export function ArticleReader({ resource, onClose }: { resource: Resource | null; onClose: () => void }) {
  const [data, setData] = useState<ReadResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!resource) return;
    setData(null);
    setLoading(true);
    readResource(resource.url, resource.topic, resource.title)
      .then(setData)
      .catch(() => setData({ error: "network", message: "Couldn't load content." }))
      .finally(() => setLoading(false));
  }, [resource]);

  return (
    <Dialog open={!!resource} onOpenChange={(o) => !o && onClose()}>
      {resource && (
        <DialogContent className="max-w-2xl">
          <div className="mb-1 flex items-start gap-3 pr-8">
            <div className="min-w-0 flex-1">
              <div className="mb-2"><TopicBadge topic={resource.topic} /></div>
              <DialogTitle className="leading-tight">{data?.title ?? resource.title}</DialogTitle>
              <div className="mt-1 font-mono text-[11px] text-overlay0">{resource.source}</div>
            </div>
            <a
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="pill shrink-0 text-subtext0 hover:text-text"
              title="Open in a new tab"
            >
              ↗ New tab
            </a>
          </div>

          <div className="rounded-2xl border border-white/[0.05] bg-crust/40 p-5">
            {loading ? (
              <div className="flex items-center gap-3 py-10 text-subtext0">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-surface1 border-t-mauve" />
                <span className="font-mono text-sm">Fetching &amp; cleaning content…</span>
              </div>
            ) : data?.error ? (
              <div className="py-8 text-center text-sm text-subtext0">
                {data.message ?? "Couldn't extract readable content."}
                <div className="mt-2">
                  <a href={resource.url} target="_blank" rel="noreferrer" className="text-mauve underline">
                    Open the original ↗
                  </a>
                </div>
              </div>
            ) : (
              <ReadingPane md={data?.markdown ?? ""} storageKey={`article:${resource.url}`} maxHeight="64vh" />
            )}
          </div>

          {data?.saved && (
            <div className="font-mono text-[11px] text-green">
              ✓ Saved to <span className="text-subtext1">{data.saved}</span> — available for revision &amp; the graph.
            </div>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}
