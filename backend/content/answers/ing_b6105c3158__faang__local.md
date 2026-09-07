---
qid: ing_b6105c3158__faang__local
question: Your index will not fit on one machine. How do you shard it, and what breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 489
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:46:31-05:00'
sources: []
---

**Clarify**  
We’re building an inverted‑index (documents → term→ postings) that exceeds a single node’s memory/disk. We need a sharding strategy and must identify what parts of the pipeline become fragile.

*Assumptions to confirm:*  
- Search latency target (< 200 ms).  
- Write/update frequency vs read‑heavy workload.  
- Availability requirement (≥ 99.9 %).  

**Approach**  
1. **Key‑based sharding on term hash** – split the vocabulary into *N* shards, each holding a contiguous token range.  
2. **Secondary replication** – keep a hot replica for read amplification and failover.  
3. **Indexing pipeline** – ingest → parse → assign to shard → write postings atomically.  
4. **Search routing** – query terms are hashed; the relevant shards are contacted in parallel, results merged.

**Depth**  
- *Hash function* (e.g., Murmur64) distributes terms evenly; collisions are rare.  
- Each shard stores its own posting lists on SSD for low‑latency scans.  
- Write path uses write‑ahead logs to guarantee durability per shard.  
- Complexity: O(log N) routing overhead; merge operations stay local to a shard, keeping them linear in shard size.

**Edge Cases**  
- *Skewed term frequency*: “the”, “and” generate huge postings → shard imbalance. Mitigate with **term‑frequency buckets** or *prefix‑based* sharding.  
- *Schema changes*: new fields require re‑sharding; handle via a background migration job.  
- *Network partitions*: replication lag can lead to stale reads; use read‑repair on query.

**Optimize & Communicate**  
Explain that sharding by term hash keeps the write path simple and locality high, but we must monitor shard sizes. Propose a **dynamic rebalancer** that splits over‑full shards and merges under‑used ones. Highlight trade‑offs: more replicas → higher availability but increased storage; finer granularity → lower latency but more routing hops. Conclude by stressing the need for observability (latency dashboards, shard health metrics) to detect when “what breaks” in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
