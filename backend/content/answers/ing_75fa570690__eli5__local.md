---
qid: ing_75fa570690__eli5__local
question: 'Explain: Disk use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 234
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:43:32-05:00'
sources: []
---

Imagine your data as a library where each book is stored on a shelf (a file). Over time new editions are added to the back of the shelves, and old copies sit beside them. “Compaction” is like a librarian tidying up: she pulls out all books from several shelves, re‑orders them by title, removes duplicates, and places the cleaned, sorted set on a fresh shelf. While this happens, the library still needs space to hold both the original piles (the old files) and the new tidy pile (the compacted file). The disk “usage” during compaction is therefore the sum of the sizes of all shelves being read plus the size of the new shelf that will replace them. ScyllaDB’s compaction strategies decide which shelves to gather (e.g., by age or size) and how many to merge at once, balancing speed against how much extra space is needed temporarily. Once the new shelf is finished, the old ones are deleted, freeing up disk again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
