---
qid: ing_d83333acac__eli5__local
question: 'Explain: When to start using compacted tables — SSTable compaction and
  compaction strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 213
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:17:28-05:00'
sources: []
---

Imagine a library that keeps adding new books every day but never removes old copies. If you try to find a story, you might stumble over dozens of nearly identical volumes and spend time sorting through them. A **compact** table in databases works like a librarian who periodically gathers all the duplicate or outdated copies into one tidy shelf, leaving only the newest, most relevant version.  

In ScyllaDB, an **SSTable (Sorted String Table)** is that shelf of sorted data on disk. **Compaction** is the process of merging many SSTables into fewer ones, discarding older rows and compressing storage space. A **compaction strategy** decides when and how aggressively this librarian cleans up—whether to wait until a lot of space is wasted or to keep shelves lean at all times. Using compaction early saves disk space, speeds reads, and keeps the database running smoothly, just like a well‑managed library stays clear for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
