---
qid: vq_a27d5a80d6__eli5__local
question: WHAT ARE SOME DOWNSIDES OF USING INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 216
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:22:40-05:00'
sources: []
---

Think of a database like a giant library. An index is the table of contents that lets you jump straight to a book, but it also takes up space and needs to be updated whenever the books change.

**Downsides of indexes**

1. **Extra storage** – The index itself is another data structure that occupies disk space, just like a separate index volume in a library.
2. **Slower writes** – Whenever you add, delete, or modify a row, the database must also update every relevant index. That’s extra work, so insertions and updates take longer.
3. **Maintenance overhead** – Over time indexes can become fragmented; they need periodic rebuilding or re‑organizing to stay fast, just like cleaning a library’s catalog.

So while an index speeds up searches (like flipping directly to the right chapter), it comes at the cost of more storage, slower updates, and extra upkeep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
