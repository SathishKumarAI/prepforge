import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { vaultReadSource, type ReadResult } from "../lib/api";
import { Markdown } from "./Markdown";

// Opens a vault source document (the PDF/note a question came from) as readable
// markdown, so you can jump from a question to where it's explained.
export function SourceDoc({ source, onClose }: { source: { title: string; path: string } | null; onClose: () => void }) {
  const [data, setData] = useState<ReadResult | null>(null);
  const [loading, setLoading] = useState(false);
  useEscapeKey(!!source, onClose);

  useEffect(() => {
    if (!source) return;
    setData(null);
    setLoading(true);
    vaultReadSource(source.path)
      .then(setData)
      .catch(() => setData({ error: "network", message: "Couldn't open that document." }))
      .finally(() => setLoading(false));
  }, [source]);

  return (
    <AnimatePresence>
      {source && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] grid place-items-start justify-center overflow-y-auto bg-crust/70 p-4 backdrop-blur-sm sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass my-auto w-full max-w-2xl rounded-3xl p-6 shadow-glow sm:p-8"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="mb-1 font-mono text-[11px] uppercase tracking-widest text-peach">vault source</div>
                <h2 className="font-display text-xl font-semibold leading-tight text-text">{data?.title ?? source.title}</h2>
                <div className="mt-1 truncate font-mono text-[11px] text-overlay0">{source.path}</div>
              </div>
              <button onClick={onClose} aria-label="Close document" className="shrink-0 text-overlay1 hover:text-text">✕</button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-white/[0.05] bg-crust/40 p-5">
              {loading ? (
                <div className="flex items-center gap-3 py-10 text-subtext0">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-surface1 border-t-peach" />
                  <span className="font-mono text-sm">Opening document…</span>
                </div>
              ) : data?.error ? (
                <div className="py-8 text-center text-sm text-subtext0">{data.message ?? "Couldn't read this document."}</div>
              ) : (
                <Markdown>{data?.markdown ?? ""}</Markdown>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
