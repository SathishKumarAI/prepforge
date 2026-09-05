---
qid: vq_7a04d206a4__fp__local
question: How to select unique records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 368
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:15-05:00'
sources: []
---

In data engineering, the *unique‑record* problem is an instance of **set partitioning under equality constraints**: we must partition a multiset of rows into equivalence classes defined by key columns and then pick exactly one representative per class.  
Why this works formally? Let \(R\) be the relation and let \(\mathbf{k}\) denote the key tuple. Define an equivalence relation \(\sim\) on rows: \(r_1 \sim r_2 \iff r_1.\mathbf{k}=r_2.\mathbf{k}\). The quotient set \(R/\!\sim\) is precisely the set of distinct keys. Selecting one row per class is equivalent to computing a *transversal* of this partition, which is guaranteed to exist by the axiom of choice (trivial here because each class is finite).  

In SQL, this is achieved via window functions:  
```sql
SELECT *
FROM (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY key_cols ORDER BY <criteria>) AS rn
  FROM table
) t
WHERE rn = 1;
```
The `ROW_NUMBER()` function assigns a unique rank within each equivalence class; keeping only `rn=1` yields exactly one row per key.  

**Non‑obvious insight:**  
When the “best” row is defined by an aggregate (e.g., latest timestamp), you can replace `ORDER BY <criteria>` with `MAX(timestamp)` in a subquery and join back, avoiding the expensive row numbering on large partitions. This two‑step aggregation reduces memory pressure because only one value per key is stored before the final join.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
