---
qid: ing_597bbd3955__eli5__local
question: 'Explain: Uh oh! — SSTable compaction and compaction strategies \u00b7 scylladb/scylladb
  Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 225
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:58:22-05:00'
sources: []
---

Imagine a library that keeps books on many shelves (the *SSTables*). Each time you add a new chapter, the librarian writes it to a fresh shelf rather than editing old ones, so the process is fast but the library becomes cluttered with many tiny piles of pages.  
**Compaction** is like a tidy‑up day: the librarian gathers all the overlapping chapters from different shelves and rewrites them into a single, clean shelf. The new shelf contains only the most recent versions of each page, while old copies are thrown away.  

ScyllaDB offers several *compaction strategies*—different ways to decide which shelves to merge and when. Think of them as rules: “merge only if there are more than 10 small piles,” or “always keep a maximum of 4 large piles.” They balance speed, storage space, and read performance, just like choosing the right tidying schedule keeps a library both neat and quick for visitors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
