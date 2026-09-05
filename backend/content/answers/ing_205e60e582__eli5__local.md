---
qid: ing_205e60e582__eli5__local
question: 'Explain: Merging partitions — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 248
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:27:31-05:00'
sources: []
---

Imagine a library where every book is split into chapters that are stored on separate shelves (the “partitions”). Over time new editions arrive, and the same chapter can appear on multiple shelves – some old, some newer. **SSTable compaction** is like an editor who pulls all copies of each chapter from every shelf, reads them in order, and rewrites a single, tidy page that contains only the most recent version of that chapter.  

The **compaction strategy** decides how the editor chooses which shelves to read first:  
* *Size‑Tiered*: grab any two shelves that together exceed a size threshold; this works well when many small edits pile up quickly.  
* *Leveled*: keep shelves in “levels” where each level is about 10× larger than the previous one; this keeps the final book compact and quick to read, especially for frequent updates.  

By merging partitions (chapters) regularly, ScyllaDB keeps data fast, consistent, and easy to retrieve—just like a well‑organized library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
