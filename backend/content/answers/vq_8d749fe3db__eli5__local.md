---
qid: vq_8d749fe3db__eli5__local
question: WHAT IS A UNIQUE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 183
total_tokens: 337
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:19:48-05:00'
sources: []
---

A **unique index** is like a library’s “call‑number” system that guarantees no two books share the same number.  
When you create an index on a column (or several columns) in a database table, the engine builds a special lookup structure—think of it as a sorted list of those numbers. A *unique* index adds one extra rule: before a new row can be added or an existing row changed, the database checks that its value(s) do not already appear in the index. If they do, the operation is rejected.

So, just as every book’s call number must be distinct so you can find it without confusion, a unique index ensures each record’s key values are one‑of‑a‑kind. It speeds up searches and keeps data integrity intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
