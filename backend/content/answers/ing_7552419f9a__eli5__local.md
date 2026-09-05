---
qid: ing_7552419f9a__eli5__local
question: 'Explain: Scheduling — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 225
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:42:50-05:00'
sources: []
---

Imagine a library where every book is stored on shelves that are organized by size. When new books arrive, they’re first placed on a tiny shelf (a “SSTable”). Over time the library gets many small shelves piled up, making it hard to find a book quickly. **Compaction** is like an orderly librarian who gathers all those little shelves, sorts the books by their titles, and then repacks them into fewer, larger shelves. This reduces clutter and speeds up future searches.

In ScyllaDB, each SSTable holds rows of data. The database uses different *compaction strategies*—rules that decide when to gather small tables, how many to merge, and whether to keep or delete old versions of the same row (since updates create duplicates). A simple strategy might just always combine any two adjacent tables; a more advanced one looks at read/write patterns to choose the best timing. The goal is the same: fewer, well‑organized shelves mean faster queries and less wasted storage space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
