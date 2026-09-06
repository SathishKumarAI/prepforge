---
qid: vq_1a17b3bb26__faang__local
question: What are some optimization techniques in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 526
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:59:52-05:00'
sources: []
---

**Clarify**  
You’re asking for *SQL performance tuning*—the ways we reduce query run‑time and resource usage on large tables (e.g., 100M+ rows). I’ll assume a relational DBMS that supports indexes, statistics, and execution plans.

**Approach**  
1. **Indexing & Partitioning** – choose the right key, use covering indexes, apply range or list partitioning.  
2. **Query rewriting** – avoid `SELECT *`, push predicates early, replace subqueries with joins, use window functions sparingly.  
3. **Statistics & Maintenance** – keep stats fresh; rebuild fragmented indexes.  
4. **Execution plan analysis** – spot full table scans, hash joins that can be replaced by merge or nested loops.

**Depth**  

| Technique | What it does | Typical complexity impact |
|-----------|--------------|--------------------------|
| **Covering index** | Index contains all columns needed; no look‑ups to base table. | O(log N) lookup instead of full scan. |
| **Index hints / join order** | Force optimizer to use a cheaper path (e.g., nested loops over hash). | Reduces I/O and CPU by selecting the lowest cost plan. |
| **Partition pruning** | Only scans relevant partitions via predicates on partition key. | Cuts scanned rows from N to N/partitions. |
| **Materialized views** | Pre‑aggregate expensive joins; refresh incrementally. | Query becomes O(1) read on a small table. |
| **Batching & pagination** | Fetch in chunks (e.g., `LIMIT/OFFSET` or keyset pagination). | Keeps memory footprint low, avoids huge sort buffers. |

**Edge Cases**  
- Over‑indexing can hurt DML performance and storage.  
- Stale statistics lead the optimizer to pick bad plans; test after data loads.  
- Partitioning on a non‑selective column may actually increase I/O.

**Optimize & Communicate**  
I’d first run `EXPLAIN` to identify bottlenecks, then apply one change at a time while measuring throughput and resource usage. I’d document the rationale (e.g., “partition pruning reduced scanned rows by 70%”) so future engineers see the trade‑off between read speed and maintenance cost. This systematic, data‑driven approach aligns with FAANG’s emphasis on measurable impact and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
