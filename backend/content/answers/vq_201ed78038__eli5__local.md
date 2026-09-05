---
qid: vq_201ed78038__eli5__local
question: Talk about the different tombstone markers used for deletion purpose in
  Hbase?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 271
total_tokens: 434
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:04:58-05:00'
sources: []
---

Imagine a library where books are stored on shelves that can hold many copies of the same title, each copy dated with the time it was added. When a book is removed, you don’t pull all its copies out at once; instead, you place a small “removed” sticker on the newest copy so everyone knows that this version should be ignored.

In HBase, rows are like those books and every change creates a new *cell* (a tiny data block). When you delete a row or a column, HBase writes a special invisible marker called a **tombstone**. The most common tombstones are:

- **Row‑level tombstone**: marks the entire row as deleted.
- **Column‑family tombstone**: marks all columns in one family as deleted.
- **Cell tombstone**: marks a single cell (a specific column and timestamp) as deleted.

These markers sit beside normal data. When HBase scans, it treats any cell that has a newer tombstone than the data as “gone,” just like ignoring a book with a removed sticker. The tombstones also help keep storage tidy later by allowing compaction to physically delete the old cells.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
