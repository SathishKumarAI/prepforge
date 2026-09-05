---
qid: ing_6f8a268914__eli5__local
question: 'Explain: Size-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 202
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:32:56-05:00'
sources: []
---

Imagine a library that keeps books in many tiny shelves (SSTables). Every time you add a new book, it goes to a fresh shelf. Over time the shelves pile up—some hold only a few pages while others are full of old copies. **Size‑tiered compaction** is like a librarian who groups shelves by size: all small ones go together and are merged into a larger shelf; all medium ones merge into an even bigger one, and so on. The goal is to reduce the number of shelves (SSTables) and eliminate duplicate pages (old data).  

**Compaction strategy** is the rulebook telling the librarian which shelves to pick first: “always combine the smallest shelves” or “keep a fixed number of large shelves.” By following these rules, ScyllaDB keeps its database fast and tidy, just like a well‑organized library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
