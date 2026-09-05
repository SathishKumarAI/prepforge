---
qid: vq_1c8b668257__fp__local
question: Which of the following is not correct about Cursor ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 430
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:25:17-05:00'
sources: []
---

**Answer**

The statement that *a cursor can fetch **only one row at a time*** is not correct.

---

### Why this matters

A cursor’s purpose is to “walk” through the result set of a query, but its semantics are governed by *control‑flow* rather than the number of rows it retrieves. In PL/SQL there are three ways to consume a cursor:

| Method | How many rows can you fetch? |
|--------|------------------------------|
| **Explicit fetch** (`FETCH c INTO …`) | One row per `FETCH`. |
| **Implicit fetch** (cursor FOR‑loop) | All rows automatically, one at a time. |
| **Bulk collect** (`BULK COLLECT INTO collection`) | An arbitrary number of rows in a single statement. |

Thus, while an explicit `FETCH` pulls a single row, the cursor *is* capable of handling many rows—either iteratively or en masse.

### Deeper principle

This flexibility reflects the **separation between logical result set and physical retrieval**. The cursor defines *what* to fetch (the query), not *how much*. It behaves like an iterator in functional programming: you can consume it one step at a time, or batch‑process it when performance demands.

### Non‑obvious insight

Because a cursor is essentially an iterator over a virtual table, the same cursor can be used in different contexts (e.g., inside a loop, with `BULK COLLECT`, or even passed to a procedure) without changing its definition. This modularity is why cursors are so powerful—misconceptions about “one row only” overlook this core design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
