---
qid: vq_e0d80bae6d__faang__local
question: How to fetch common records from two tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 485
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:39:29-05:00'
sources: []
---

**Clarify**  
> “Common records” usually means rows that match on a key column (or set of columns). I’ll assume we have two tables, `A` and `B`, each with a primary key `id`. We want all `id`s present in both tables. Ask: Do the tables share the same schema? Are there any indexes? Is this a one‑time query or part of a streaming pipeline?

**Approach**  
1. Use an **INNER JOIN** on the key to pull matched rows.  
2. If only keys are needed, use `SELECT A.id FROM A INNER JOIN B ON A.id = B.id`.  
3. For large datasets, consider a **hash join** or *semi‑join* if we only care about existence.  
4. In distributed engines (Spark/Presto), broadcast the smaller table to reduce shuffle.

**Depth**  
```sql
-- SQL
SELECT A.*
FROM   A
JOIN   B ON A.id = B.id;
```
- **Complexity:** O(|A| + |B|) with hash join; O(n log n) if sorting.  
- **Indexing:** If `id` is indexed, the DB can use a *merge join* (O(log n)).  
- **Memory:** Hash tables need memory proportional to the smaller table.

In a streaming context, maintain two state stores keyed by `id`; on each new record, emit if counterpart exists in the other store.

**Edge Cases**  
- Duplicate keys → results duplicate rows; dedupe with `DISTINCT`.  
- Null keys → join will drop them.  
- Very large tables where one side is much bigger → broadcast or use *bucketed* joins.

**Optimize & Communicate**  
Explain that if only the existence of a match matters, a **semi‑join** (`SELECT A.id FROM A WHERE EXISTS (SELECT 1 FROM B WHERE B.id = A.id)`) saves data movement. In Spark, enable `broadcast` for small tables to avoid shuffling. Always profile execution plans and watch for skew; if one key dominates, use *salting* or repartitioning. Conclude by summarizing trade‑offs: join type vs. memory vs. speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
