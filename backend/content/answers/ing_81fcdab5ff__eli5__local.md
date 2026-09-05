---
qid: ing_81fcdab5ff__eli5__local
question: 'Explain: About this document — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 235
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:02:47-05:00'
sources: []
---

Imagine a library that keeps every book on shelves sorted by title, but over time the same story gets copied into many different stacks as new editions arrive. **SSTables** are those stacks—immutable files of data written to disk. When you add or delete pages, old copies stay while new ones appear, so the library ends up with several overlapping piles of the same book.

**Compaction** is like a librarian who periodically gathers all these piles for a single title and rewrites one clean, updated copy. The old piles are then thrown away, freeing space and speeding future searches.

ScyllaDB offers different **compaction strategies**—rules telling the librarian how often to tidy up and which piles to merge first. For example, *Size-Tiered* merges only when a pile reaches a certain size, while *Time-Window* focuses on recent updates. Each strategy balances speed of writes against read performance, just as a real‑world library chooses between quick shelving or thorough reorganization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
