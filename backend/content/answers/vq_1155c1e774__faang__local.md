---
qid: vq_1155c1e774__faang__local
question: How to optimize join of 2 big tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 520
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:18-05:00'
sources: []
---

**Clarify**

> *Problem*: Two large fact tables must be joined on a key (e.g., `customer_id`).  
> *Assumptions to confirm*:
> - Both tables are partitioned and stored in a distributed engine (Spark/BigQuery).  
> - The join key is highly selective but not unique.  
> - We can modify table metadata or add indexes, but cannot change the data source.

**Approach**

1. **Analyze cardinality & skew** – run `ANALYZE` to get statistics.  
2. **Choose the right join strategy** – broadcast vs shuffle vs partition‑by‑key.  
3. **Leverage clustering/partitioning** – align partitions on the join key.  
4. **Materialize reusable fragments** – cache intermediate results if reused.

**Depth**

- *Broadcast Join*: If one table < ≈ 200 MB, broadcast it to all workers; O(N) memory per executor, no shuffle.  
- *Shuffle Hash/Sort‑Merge*: For larger tables, hash on the key and partition data (`RANGE` or `HASH`) to minimize network traffic.  
- *Skew Handling*: Detect heavy keys (> threshold rows); spill them to a separate “skew” bucket or use a multi‑pass join (hash then sort‑merge).  
- *Clustered Tables*: If both tables are clustered on the key, the engine can skip unnecessary partitions (`partition pruning`).  

**Edge Cases**

| Scenario | Issue | Test |
|----------|-------|------|
| Key highly skewed | OOM or long GC | Count rows per key > 1 M |
| Both tables huge & unclustered | Excessive shuffle | Measure network bytes |
| Duplicate keys in one table | Cartesian blow‑up | Verify uniqueness constraints |

**Optimize & Communicate**

- Start with a **broadcast** if feasible; it’s the simplest and fastest.  
- If not, enforce **co‑partitioning** on `customer_id` and use a **hash join**.  
- For skewed keys, split them out: first hash‑join the bulk, then merge skew bucket separately.  
- Document each step in logs (e.g., “Broadcasted TableA size 150 MB; Skew keys count 12”).  

This structured plan balances performance, resource usage, and fault tolerance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
