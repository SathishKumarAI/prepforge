---
qid: ing_f5be528510__eli5__local
question: 'Explain: Rate limiting — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 261
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:03:43-05:00'
sources: []
---

Think of a library that stores books (your data) on shelves that are organized by size and age. **SSTables** are those shelves: they hold sorted chunks of records, like stacks of books that were added at the same time. Over time, new books keep arriving while old ones get outdated or duplicated. **Compaction** is the librarian’s job of tidying up: she takes several old stacks, removes duplicate pages, merges them into one newer stack, and puts it back on a shelf.  

Because compaction can be heavy—like moving entire book piles—it must be **rate‑limited** so the library doesn’t stop lending books to patrons. ScyllaDB controls this by throttling how many SSTables are compacted at once (the “rate”) and by choosing different **strategies**: *size‑tiered* (grouping similar‑sized stacks) or *time‑windowed* (stacking by age). These strategies decide which piles to tidy first, balancing speed with system load. The result is a leaner library that still serves visitors smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
