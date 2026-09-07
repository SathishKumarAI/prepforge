---
qid: ing_69ec1b0d00__faang__local
question: 'Explain: Database Tier — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 468
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:50:07-05:00'
sources: []
---

**Clarify**  
The interviewer wants a design that scales the *database tier* for an ML‑heavy service (e.g., feature store or model registry). Assume we need high read/write throughput, low latency, and strong consistency for training data, while also supporting batch ingestion from pipelines. We’ll focus on relational + NoSQL mix, sharding, caching, and replication.

**Approach**  
1. **Data partitioning (sharding)** – Horizontal shard by key (user_id or feature namespace).  
2. **Replication & read‑replicas** – Multi‑region replicas for latency; use quorum reads to preserve consistency.  
3. **Caching layer** – In‑memory store (Redis) with LRU and write‑through policy for hot features.  
4. **Batch ingestion pipeline** – Kafka → Spark → Delta Lake on S3/HDFS for immutable historical data.  
5. **Schema management** – Use Avro/Parquet to enforce versioning; schema registry to avoid breaking changes.

**Depth**  
- Shard key chosen to minimize cross‑shard joins (e.g., hash(user_id)).  
- Use consistent hashing with virtual nodes to rebalance smoothly.  
- Replication factor 3, Raft quorum for writes ensures ACID.  
- Cache invalidation on write‑through; TTL = 5 min for stale reads.  
- Batch jobs run nightly; incremental updates via CDC.  
- Complexity: Read latency O(1) + cache hit rate; Write throughput ~ shard * replicas.

**Edge Cases**  
- Hotspot shards → re‑hash or add hot‑shard replicas.  
- Schema drift – use “read‑schema‑evolution” and fail‑fast writes.  
- Network partitions – fallback to read‑replica with eventual consistency warning.

**Optimize & Communicate**  
Explain trade‑offs: stronger consistency (quorum) vs latency; caching reduces DB load but adds complexity. Mention monitoring (latency, cache hit ratio), auto‑scaling of shards, and cost per request. Conclude by summarizing that this tier balances scalability, reliability, and ML‑specific data needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
