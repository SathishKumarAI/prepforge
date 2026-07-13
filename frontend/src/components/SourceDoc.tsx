import { useEffect, useState } from "react";
import { libraryReadSource, vaultReadSource, type ReadResult } from "../lib/api";
import type { VaultSource } from "../lib/types";
import { ReadingPane } from "./ReadingPane";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

// Opens a source document (the PDF/note/video a question came from) as readable
// markdown in a Radix Dialog. Vault sources read from the Obsidian vault; ingested
// docs/videos (kind: "library") read from content/library.
export function SourceDoc({ source, onClose }: { source: VaultSource | null; onClose: () => void }) {
  const [data, setData] = useState<ReadResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!source) return;
    setData(null);
    setLoading(true);
    const read = source.kind === "library" ? libraryReadSource : vaultReadSource;
    read(source.path)
      .then(setData)
      .catch(() => setData({ error: "network", message: "Couldn't open that document." }))
      .finally(() => setLoading(false));
  }, [source]);

  return (
    <Dialog open={!!source} onOpenChange={(o) => !o && onClose()}>
      {source && (
        <DialogContent className="max-w-2xl">
          <div className="pr-8">
            <div className="mb-1 font-mono text-[11px] uppercase tracking-widest text-peach">
              {source.kind === "library" ? "ingested source" : "vault source"}
            </div>
            <DialogTitle className="text-h3 leading-tight">{data?.title ?? source.title}</DialogTitle>
            <div className="mt-1 truncate font-mono text-[11px] text-overlay0">{source.path}</div>
          </div>

          <div className="rounded-2xl border border-white/[0.05] bg-crust/40 p-5">
            {loading ? (
              <div className="flex items-center gap-3 py-10 text-subtext0">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-surface1 border-t-peach" />
                <span className="font-mono text-sm">Opening document…</span>
              </div>
            ) : data?.error ? (
              <div className="py-8 text-center text-sm text-subtext0">{data.message ?? "Couldn't read this document."}</div>
            ) : (
              <ReadingPane md={data?.markdown ?? ""} storageKey={`vault:${source.path}`} maxHeight="66vh" />
            )}
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
