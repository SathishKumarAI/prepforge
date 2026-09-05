---
qid: vq_ecef0e3e0a__eli5__local
question: WHAT IS A COMPOSITE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 194
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:33:05-05:00'
sources: []
---

Imagine you’re in a library where every book is sorted first by its genre (fiction, history, science) and then within each genre by the author’s last name. A **composite index** works just like that two‑step sorting system for a database table.

In a database, a composite index is a single “index” that keeps track of multiple columns together. When you look up records, the database can jump straight to the right place using both columns at once—just as you’d first find the correct genre shelf and then the author’s section on that shelf.

Because it knows how those columns are arranged together, queries that filter or sort by both columns run much faster than if the database had to search each column separately. It’s a single, efficient roadmap for two (or more) pieces of data working hand‑in‑hand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
