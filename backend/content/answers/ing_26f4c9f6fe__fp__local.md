---
qid: ing_26f4c9f6fe__fp__local
question: 'Explain: Sharding — How Uber Serves Over 40 Million Reads Per Second from
  Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 403
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:28:03-05:00'
sources: []
---

**Sharding as a Capacity‑Scaling Principle**

The core problem is *latency under load*: each user query must return in < 10 ms while the database holds billions of rows. If every request hit a monolithic table, the read‑write ratio would force either a slow disk or an expensive in‑memory store. Sharding solves this by *partitioning* data so that each node handles only a fraction of the traffic, turning a global bottleneck into many local ones.

1. **Horizontal partitioning** – Uber splits its keyspace (e.g., `user_id`, `location_hash`) across shards. Each shard’s index fits in RAM, and disk I/O is confined to a small subset of SSDs.
2. **Consistent hashing + range‑based routing** – The router computes the target shard deterministically; collisions are negligible because the keyspace is dense. This keeps the lookup cost O(1) per request.
3. **Integrated cache layer** – Instead of an external CDN, Uber deploys a *per‑shard in‑memory cache* (e.g., Memcached). Reads first hit the cache; on miss, they go to disk. The cache size is tuned so that 95 % of hot keys stay resident.
4. **Write‑through + background compaction** – Writes are pipelined into a write‑ahead log and asynchronously merged into the shard’s LSM tree, ensuring durability without blocking reads.

The deeper insight: *sharding turns a global optimization problem (minimize latency) into many local ones (minimize per‑shard contention)*. By aligning the data partition with the physical storage hierarchy, Uber eliminates cross‑node traffic and achieves > 40 M RPS while keeping each node’s I/O bandwidth within realistic limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
