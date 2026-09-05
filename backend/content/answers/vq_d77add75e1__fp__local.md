---
qid: vq_d77add75e1__fp__local
question: what are the various level of persistance in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 437
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:48-05:00'
sources: []
---

In Spark a **RDD** is an immutable lineage graph; recomputing it every time would be expensive.  
Persistency gives the engine a *budget* for how many times to keep intermediate results in memory or disk, trading off CPU vs I/O and fault‑tolerance.  

| Level | Storage medium | Fault‑tolerance | Typical use |
|-------|-----------------|-----------------|-------------|
| `MEMORY_ONLY` | RAM | Re‑compute on loss | Fastest, but drops rows if out of space |
| `MEMORY_AND_DISK` | RAM → disk spill | Same as above | Safer when data exceeds memory |
| `DISK_ONLY` | Disk | Re‑compute on loss | Lowest cost, high latency |
| `MEMORY_ONLY_SER` | Serialized RAM | Loss → recompute | Saves space at cost of deserialization |
| `MEMORY_AND_DISK_SER` | Serialized RAM → disk | Same | Best when memory is scarce |
| `OFF_HEAP` (Spark‑2.0+) | Off‑heap memory via Tungsten | Re‑compute on loss | Enables larger caches without GC pressure |

**Why this hierarchy?**  
The underlying principle is *resource‑constrained optimization*: each level represents a point on the trade‑off curve between **latency** (CPU vs disk) and **availability** (memory capacity). Spark treats persistence as a *constraint* in its execution planner; it chooses the cheapest plan that satisfies all required persistencies.  

A non‑obvious insight: **serialization choice matters more than you think**. Serialized formats (`*_SER`) reduce GC overhead dramatically, often allowing higher effective memory usage than raw objects, even though they add CPU cost for (de)serialization. In practice, profiling a few partitions can reveal that `MEMORY_ONLY_SER` yields 30–50 % speedup on workloads with many small objects—something most people overlook when tuning Spark.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
