---
qid: ing_27bf2727d5__eli5__local
question: 'Explain: Efficiency of compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 228
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:38:40-05:00'
sources: []
---

Imagine a library where every new book is first shelved in its own tiny box on the floor (an SSTable). Over time you get thousands of boxes, each with many books that are now scattered all over the shelves. A *compactor* is like an orderly librarian who periodically takes these boxes, opens them up, and rearranges the books into a few large, well‑organized volumes. 

In ScyllaDB, compaction does exactly this: it merges several small SSTables into fewer larger ones, discarding duplicate or obsolete rows (like old editions). This reduces disk space, speeds up reads (fewer files to search), and lowers write amplification because future writes can skip over the merged data. The “efficiency” comes from choosing when and how many boxes to merge—balancing between too frequent merges that waste CPU and too infrequent ones that leave the library cluttered. This strategy keeps the database lean, fast, and easy to navigate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
