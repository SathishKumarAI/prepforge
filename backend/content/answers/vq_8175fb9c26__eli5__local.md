---
qid: vq_8175fb9c26__eli5__local
question: Are views updated when I update base tables ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 198
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:18:05-05:00'
sources: []
---

Think of a view as a *live photo frame* that shows whatever’s on the wall behind it.  
When you change the picture (the base table), the frame automatically displays the new image—no extra work is needed.  

A view in SQL is just a stored “SELECT” statement, not a separate copy of data. Whenever you query the view, the database runs that SELECT against the current rows of its underlying tables. So if you insert, update, or delete rows in those base tables, the next time you read the view you’ll see those changes right away.

The only time a view looks “stale” is if it’s a *materialized view* (a snapshot stored on disk). Those need to be refreshed manually or on a schedule. For ordinary views, updates to the base tables always propagate instantly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
