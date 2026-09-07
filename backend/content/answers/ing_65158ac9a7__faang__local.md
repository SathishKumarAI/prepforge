---
qid: ing_65158ac9a7__faang__local
question: 'Explain: General sizing guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 468
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:39:13-05:00'
sources: []
---

**Clarify**  
The interviewer asks for *shard‑sizing best practices* when building an elastic search–style index.  
Key assumptions:  
1. Data is append‑only and query‑heavy (search, analytics).  
2. Shards are immutable once written; we’ll add replicas for read scaling.  
3. Workload is known: 10 TB of logs, 1k writes/s, 100 qps per node.

**Approach**  
1. Estimate *document size* → compute total raw data.  
2. Pick a target *shard size* (50–200 GB) to balance JVM memory and I/O.  
3. Derive shard count = total / target.  
4. Add replicas based on read‑write ratio.

**Depth**  
- **Shard size rule of thumb:** 50 GB – 200 GB. Smaller shards cause overhead; larger shards risk long GC pauses and slow recovery.  
- Compute: `shard_count = ceil(total_size / target_shard)` → e.g., 10 TB/100 GB = 100 shards.  
- Replicas: if reads >> writes, set replica factor to 2–3 for parallelism; otherwise keep 1 to save storage.  
- Monitor: GC time, recovery time, CPU, disk I/O; adjust target shard size if metrics drift.

**Edge Cases**  
- *Skewed data*: highly variable doc sizes → use bulk indexing with consistent schema or pre‑aggregate.  
- *Hot shards*: one shard receives >10× traffic → add replica or re‑index into more balanced shards.  
- *Large single documents*: exceed max index block size; split logically or store as binary.

**Optimize & Communicate**  
Explain that this sizing gives predictable GC, efficient search latency, and recovery time. Iterate on the target shard size based on real metrics: if GC > 30 % of uptime, shrink shards; if query latency > 200 ms, increase replicas. Conclude with a recommendation to start conservative (100 GB) and adjust after observing production workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
