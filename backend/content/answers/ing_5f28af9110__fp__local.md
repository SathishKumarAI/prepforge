---
qid: ing_5f28af9110__fp__local
question: 'Was DynamoDB the right choice? — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 344
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:27:06-05:00'
sources: []
---

**Why DynamoDB was the “right” choice for Canva’s media pipeline**

The core problem Canva solved was *predictable, massive write‑throughput*—50 M uploads/day, each triggering a cascade of transformations and metadata writes that must be durable, latency‑bound, and horizontally scalable.  
From an optimization standpoint, this is a **constrained throughput allocation** problem: we need to maximize write capacity \(C\) while minimizing cost \(E[C]\) under the law of diminishing returns for provisioned resources. DynamoDB’s *pay‑as‑you‑go* model lets us treat each item as an independent key/value pair, so the expected latency is essentially constant (sub‑5 ms) regardless of global scale—an emergent property of its partition‑based architecture.  

A deeper principle at play is **eventual consistency versus strong consistency**. For media uploads, a *weakly consistent* read after write is acceptable; this allows DynamoDB to use *partition key hashing* to distribute load evenly without the coordination overhead that would cripple a relational DB under 50 M TPS.  

**Non‑obvious insight:** The real advantage comes from **automatic sharding and hot‑key mitigation**. By appending a time‑based suffix to each upload’s partition key, Canva turned an inherently write‑heavy key space into a *sliding window* of partitions that DynamoDB can parallelise without manual rebalancing. This design turns what would be a bottleneck into a self‑scaling stream, preserving linear performance as traffic grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
