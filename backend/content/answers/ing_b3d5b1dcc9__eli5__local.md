---
qid: ing_b3d5b1dcc9__eli5__local
question: 'Explain: Memory use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 270
total_tokens: 453
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:07-05:00'
sources: []
---

Imagine a library that stores books (data) in shelves (SSTables). Every time new books arrive they’re put on fresh shelves; old shelves become outdated because some pages are duplicated or wrong. **Compaction** is like a librarian who periodically goes through the shelves, picks up all the copies of each book, writes the latest version on a single copy, and then places that cleaned copy back on the shelf while discarding the old ones.

During this process the librarian needs extra space: she must hold the original books (old SSTables), the new “clean” book she’s writing (the output SSTable), and some temporary memory to keep track of which pages belong together. **Memory use** is therefore roughly the sum of the sizes of the input shelves plus a small buffer for sorting and deduplication.

ScyllaDB offers different **compaction strategies**—like choosing whether the librarian works on all shelves at once (Compaction Strategy A) or focuses on one shelf at a time to reduce memory pressure (Strategy B). The goal is always the same: keep the library tidy while using as little temporary space as possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
