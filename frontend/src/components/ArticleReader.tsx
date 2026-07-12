import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { readResource, type ReadResult } from "../lib/api";
import type { Resource } from "../lib/types";
import { TopicBadge } from "./Badge";
import { Markdown } from "./Markdown";

// In-app reader popup: fetches a resource's readable content and renders it here,
// instead of blindly opening a new tab. Also offers an explicit new-tab link.
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
    <AnimatePresence>
      {resource && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 grid place-items-start justify-center overflow-y-auto bg-crust/70 p-4 backdrop-blur-sm sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass my-auto w-full max-w-2xl rounded-3xl p-6 shadow-glow sm:p-8"
          >
            <div className="mb-4 flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <div className="mb-2"><TopicBadge topic={resource.topic} /></div>
                <h2 className="font-display text-2xl font-semibold leading-tight text-text">
                  {data?.title ?? resource.title}
                </h2>
                <div className="mt-1 font-mono text-[11px] text-overlay0">{resource.source}</div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pill text-subtext0 hover:text-text"
                  title="Open in a new tab"
                >
                  ↗ New tab
                </a>
                <button onClick={onClose} className="text-overlay1 hover:text-text" title="Close">✕</button>
              </div>
            </div>

            <div className="max-h-[68vh] overflow-y-auto rounded-2xl border border-white/[0.05] bg-crust/40 p-5">
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
                <Markdown>{data?.markdown ?? ""}</Markdown>
              )}
            </div>

            {data?.saved && (
              <div className="mt-3 font-mono text-[11px] text-green">
                ✓ Saved to <span className="text-subtext1">{data.saved}</span> — available for revision &amp; the graph.
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
