---
qid: ing_5a061b149e__eli5__local
question: 'Explain: Date-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 210
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:59:03-05:00'
sources: []
---

Imagine a library that stores books in piles of paper. Each pile is sorted by the first page’s title (the key). When new books arrive they’re added to a fresh, tiny pile. To keep the library tidy, the librarian periodically merges several small piles into one larger, neatly ordered pile—this is *compaction*.  

In ScyllaDB, data lives in SSTables, which are immutable sorted files on disk. *Date‑tiered compaction* means new SSTables sit at the top (most recent), and older ones form lower tiers. When a tier gets too full, it’s merged into the next tier below, just like the librarian combining piles. This strategy keeps read lookups fast (you only check the newest tier first) while preventing disk space from ballooning with many tiny files. It’s a simple, automatic “clean‑up” that mirrors the library’s tidy pile‑merging habit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
