---
qid: vq_793bdd839b__faang__local
question: WHAT IS A COMPOSITE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 453
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:17:59-05:00'
sources: []
---

**Composite Key – Structured FAANG‑style Answer**

| Section | Content |
|---------|---------|
| **Clarify** | *Problem restated*: Explain what a composite key is in relational databases and why it matters for data integrity. Ask: “Are we talking about primary keys, unique constraints, or indexing?” Assume the context is a SQL database where multiple columns jointly identify a row. |
| **Approach** | 1. Define the concept. <br>2. Contrast with single‑column keys. <br>3. Discuss use cases (many‑to‑many join tables, natural composite identifiers). <br>4. Mention enforcement mechanisms and performance impact. |
| **Depth** | A composite key is a combination of two or more columns that together enforce uniqueness for each row. It can serve as a *primary key* (`PRIMARY KEY(col1, col2)`) or as a *unique constraint* (`UNIQUE(colA, colB, colC)`). The database engine builds an index on the composite set; look‑ups use all parts of the key. This prevents duplicate combinations while allowing each individual column to contain repeats. Composite keys are ideal for join tables (e.g., `OrderItems(order_id, product_id)`), natural identifiers that span multiple attributes, or when legacy schemas preclude a surrogate ID. |
| **Edge Cases** | • Large composite keys increase index size and slow writes.<br>• NULLs: most DBMS disallow NULL in any part of a primary key; unique constraints may allow one NULL per column but not across the set.<br>• Changing a key column requires cascading updates or dropping/re‑creating the key. |
| **Optimize & Communicate** | • Prefer surrogate keys (auto‑increment) for performance, but keep composite uniqueness via a separate `UNIQUE` index when business logic demands it.<br>• Use partial indexes if only a subset of columns is frequently queried.<br>Explain trade‑offs clearly: tighter data integrity vs. write overhead and storage. |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
