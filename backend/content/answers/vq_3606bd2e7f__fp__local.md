---
qid: vq_3606bd2e7f__fp__local
question: What is an Indexed View?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 364
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:30:54-05:00'
sources: []
---

**Indexed View – a first‑principles perspective**

An indexed view solves the *re‑aggregation* problem that arises when many queries repeatedly compute the same heavy join–group operation over large fact tables.  
In relational algebra, each query is an expression tree; without materialization, every engine must traverse the underlying tables anew. An indexed view stores a *materialized projection* of that sub‑expression—essentially a pre‑computed summary. The engine can then treat the view like any base table: it reads the stored rows instead of re‑executing the joins and aggregations.

Why must it be **indexed**?  
The view’s storage is itself a heap; to support efficient point or range lookups, SQL Server builds a clustered index on the view’s key columns. This transforms the materialized result into an ordinary B‑tree, enabling predicates that filter by those keys to jump directly to relevant rows. The optimizer can then rewrite queries referencing the view as if they were written against this indexed structure.

A non‑obvious insight: **indexing a view forces deterministic semantics**. Because the clustered index must be unique and non‑null on its key columns, SQL Server implicitly enforces *functional dependency* between those keys and all other columns in the view. This guarantees that each combination of key values appears at most once, which is essential for correct query rewriting but often overlooked by developers who think any materialized table will do.

In short, an indexed view is a pre‑computed, uniquely indexed projection that turns an expensive relational expression into a fast lookup structure, grounded in the principle of caching sub‑expressions to avoid repeated work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
