---
qid: ing_84c908953f__eli5__local
question: 'Explain: Why compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 242
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:18-05:00'
sources: []
---

Imagine a library where each book is stored on a shelf that never gets reordered. New chapters are always added to the front of a shelf, so the latest pages sit at the top and the older ones drift down. Over time, each shelf becomes a jumble of tiny “booklets” (SSTables) – some contain only new words, others hold old copies of the same story. Readers can’t find the whole book easily because the same chapter may appear in several places.

Compaction is like a librarian who periodically takes all those booklets from a shelf, reads every page, and rewrites a clean, single volume that contains each chapter just once, in proper order. ScyllaDB does this automatically: it merges many SSTables into fewer, larger ones while discarding obsolete or duplicate data. The strategy (e.g., “size‑tiered” or “leveled”) decides how the librarian chooses which booklets to merge—balancing speed and storage use so that queries always read a small, well‑organized set of pages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
