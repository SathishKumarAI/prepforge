---
qid: ing_922a2fc569__faang__local
question: 'Explain: Read Replica vs Cache — Readreplicavscache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 453
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:24:28-05:00'
sources: []
---

**Clarify**  
The interview asks how a *read replica* (DB read‑only copy) differs from a *cache* (in‑memory key/value store). Assume we’re dealing with relational data that can be queried via SQL and that latency, consistency, and write traffic are concerns.

**Approach**  
1. Identify the use‑case: high‑volume reads vs. low‑latency lookups.  
2. Compare data freshness, consistency guarantees, storage, and scaling models.  
3. Map trade‑offs to typical performance metrics (throughput, latency, cost).

**Depth**  
| Feature | Read Replica | Cache |
|---------|--------------|-------|
| **Data source** | Replicated from primary DB; changes propagate asynchronously (seconds–minutes). | Stored independently in memory; must be populated via cache‑aside or write‑through. |
| **Consistency** | Eventually consistent; read may miss recent writes. | Strongly consistent per key if write‑through; otherwise eventual. |
| **Latency** | Sub‑millisecond to a few ms (network + query). | Microseconds (in‑process or LAN). |
| **Capacity & cost** | Same schema, disk space, expensive compute/IO. | Limited by RAM, cheaper but smaller. |
| **Use‑case** | Complex queries, joins, analytics that need full schema. | Frequently accessed keys, session data, computed results. |

**Edge Cases**  
- *Hot data*: cache wins; replica may still be slower.  
- *Large result sets*: replicas handle large scans; caches cannot store huge blobs efficiently.  
- *Write‑heavy workloads*: replicas introduce replication lag; caches need eviction policies.

**Optimize & Communicate**  
Explain that a hybrid approach often works: keep a read replica for relational reads, and layer an L1 cache (e.g., Redis) for hot keys. Highlight cost/benefit analysis: caching reduces DB load but adds complexity; replicas simplify query logic but don’t eliminate latency. Conclude by recommending profiling to decide the split point.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
