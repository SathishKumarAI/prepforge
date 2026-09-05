---
qid: ing_9d2d71aa22__eli5__local
question: 'Explain: Compaction Strategies — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 229
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:39-05:00'
sources: []
---

Imagine a library where every book is stored on a shelf that can only hold a fixed number of pages. When you add new chapters (data), they’re dropped onto the next empty spot, even if the same book already has an earlier chapter somewhere else on the shelf. Over time the shelf gets cluttered: the same story appears in multiple places and some pages become obsolete.

**SSTable compaction** is like a librarian who periodically takes all the scattered chapters of each book, stitches them together into one clean volume, and deletes the old copies. This reduces space, speeds up reading, and keeps only the latest version of every chapter.

In **ScyllaDB**, *compaction strategies* are rules that tell the librarian how often to do this stitching, which books to prioritize, or whether to keep multiple copies for safety (replication). They balance storage use against read/write speed. Think of them as different “shelf‑cleaning schedules” you can choose based on your library’s size and traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
