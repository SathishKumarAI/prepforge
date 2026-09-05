---
qid: vq_ece6ed7d1c__fp__local
question: What are ‘inserted’ and ‘deleted’ tables (aka. magic tables)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 541
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:44-05:00'
sources: []
---

### Why “magic” tables exist

When a `INSERT`, `UPDATE` or `DELETE` fires a trigger, the database must know **which rows changed** so it can enforce referential integrity, audit, cascade, etc.  
The naïve solution would be to scan the entire table after each statement—impractical for large datasets.  
Instead, SQL Server (and many RDBMS) capture the *delta* at the moment of execution and expose it as two **virtual tables**:

| Trigger type | `inserted` | `deleted` |
|--------------|------------|-----------|
| INSERT       | new rows   | –         |
| DELETE       | –          | old rows  |
| UPDATE       | new rows   | old rows  |

These are *set‑based*: they contain every row affected by the statement, not just one.  
They allow a single trigger body to treat multi‑row operations identically to single‑row ones, preserving **idempotence** and avoiding race conditions.

### Deeper principle

The tables embody a *difference* operator in relational algebra:  

```
Δ = Δ⁺ ∪ (Δ⁻ \ Δ⁺)
```

where `Δ⁺` (`inserted`) is the addition set, `Δ⁻` (`deleted`) the removal set.  
This delta representation turns an imperative “for each row” loop into a declarative set operation, enabling the optimizer to push predicates, join, and aggregate efficiently—essential for large‑scale ETL.

### Non‑obvious insight

Many people think of triggers as *procedural*; in reality they are **declarative dataflows**.  
Because `inserted`/`deleted` are just virtual tables, you can write a trigger that joins them to another table or aggregates over them—exactly like any ordinary query. This means the same optimizer rules apply, so triggers can scale with the same performance guarantees as regular statements.

> **Bottom line:**  
> The magic tables solve the *change‑detection* problem in a set‑based, optimizer‑friendly way, turning what would be an expensive scan into a lightweight delta that preserves correctness and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
