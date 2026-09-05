---
qid: vq_8175fb9c26__fp__local
question: Are views updated when I update base tables ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 283
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:43:31-05:00'
sources: []
---

**Views are not automatically refreshed; only the underlying data changes**

A *view* is a virtual table defined by a SQL query.  
When you run `SELECT * FROM v` the database executes that query against the current state of the base tables. Therefore, as soon as any base row that satisfies the view’s predicate is inserted, updated, or deleted, the next read of the view will reflect those changes.

However, the view itself contains no stored rows; it has no “state” to update.  
Only *materialized views* store a snapshot of the query result on disk. Those snapshots are refreshed explicitly (e.g., `REFRESH MATERIALIZED VIEW`) or automatically if the database supports incremental refreshes. The underlying principle is that a materialized view trades storage for read performance, so its data must be kept in sync by an external mechanism.

**Non‑obvious insight:**  
Because a standard view is recomputed on every access, you can use it to *enforce* referential integrity or security policies that must always see the latest data. In contrast, a materialized view can lag behind and may present stale information unless refreshed—this subtle difference is why many systems use *views* for real‑time filtering and *materialized views* for analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
