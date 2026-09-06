---
qid: ing_48dde520d5__fp__local
question: 'Explain: Horizontal Scaling (Scale Out) — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 377
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:40:22-05:00'
sources: []
---

**Horizontal Scaling (Scale‑Out)**  
At its core, a system must serve *N* requests per second while keeping latency below a user‑acceptable threshold. If a single server can handle *S* req/s, the minimal number of machines required is ⌈N/S⌉. This arithmetic stems from conservation of processing capacity—no matter how clever the software, CPU and I/O are finite resources that must be divided among incoming traffic.

For Instagram, users upload media (≈2 GB/day per active account) and view feeds (≈10× more reads). Reads dominate writes by an order of magnitude, so a read‑heavy workload suggests partitioning data into *shards* that can be served independently. Sharding is the geometric manifestation of *divide‑conquer*: each shard occupies its own coordinate space in key‑value storage, allowing parallelism without contention.

The deeper principle is **redundancy as fault tolerance**. By replicating shards across nodes (primary + secondaries), a single node failure does not lose data or service; read traffic can be routed to any replica. This satisfies the *CAP* trade‑off: we choose consistency (C) and partition tolerance (P) while allowing eventual consistency for reads.

A non‑obvious insight is that **write amplification grows quadratically with user base** if all writes must touch every node (e.g., a global feed). Instagram avoids this by keeping write paths local to the uploader’s shard, then asynchronously propagating updates to followers’ feeds. Thus horizontal scaling isn’t just “add more boxes”; it’s reshaping data flow so that each box handles only its share of work, preserving linearity in performance as traffic grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
