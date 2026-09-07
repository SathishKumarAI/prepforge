---
qid: vq_d1ba30a618__faang__local
question: What is the difference between UNION and UNION ALL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 381
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:35:10-05:00'
sources: []
---

**Clarify**  
The interviewer wants the semantic and performance differences between SQL’s `UNION` and `UNION ALL`. Key assumptions: we’re dealing with relational databases that support these set operators (e.g., MySQL, PostgreSQL, Oracle).

**Approach**  
1. Define each operator.  
2. Explain how duplicates are handled.  
3. Discuss underlying execution steps and cost implications.

**Depth**  

| Operator | Duplicates | Internals | Complexity |
|----------|------------|-----------|-------------|
| `UNION` | Removes duplicate rows (acts like a `SELECT DISTINCT`) | 1) Executes both SELECTs in parallel, 2) Combines results into a temporary table, 3) Sorts/hashtable to dedupe. | Roughly O((n+m) log(n+m)) for sorting; hash‑based dedup is O(n+m). |
| `UNION ALL` | Keeps all rows, even identical ones | Executes both SELECTs and appends results directly; no sort or hash needed. | O(n+m) – linear in total row count. |

**Edge Cases**  
- Very large result sets: `UNION` may consume extra memory for the dedupe step.  
- When source tables have unique constraints, `UNION ALL` is always cheaper.  
- Column data types must match; otherwise implicit casting occurs.

**Optimize & Communicate**  
If I were writing a query planner, I’d choose `UNION ALL` by default and only switch to `UNION` when the caller explicitly requests deduplication. This reduces CPU cycles and memory usage. In practice, always consider whether duplicates are semantically meaningful before opting for the heavier operator.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
