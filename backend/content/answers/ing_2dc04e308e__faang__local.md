---
qid: ing_2dc04e308e__faang__local
question: 'Explain: Failover Mechanisms — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 459
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:29:45-05:00'
sources: []
---

**Clarify**  
We need a high‑availability design for Instagram’s photo‑storage service that survives component failures (servers, disks, network). Assume: millions of daily uploads, read/write latency < 200 ms, eventual consistency acceptable, cost‑bounded.  

**Approach**  
1. **Data tiering** – store raw images in a replicated object store (S3‑like) with cross‑region replication.  
2. **Metadata service** – use a sharded key‑value store (Cassandra/Spanner) for image IDs → storage pointers, versioned per user.  
3. **Cache layer** – CDN + edge caches to serve hot images; invalidated on write.  
4. **Failover paths** – each tier has active‑passive replicas; health checks push traffic to healthy nodes.  

**Depth**  
- *Object store*: use erasure coding (e.g., Reed–Solomon) for 6‑node parity, ensuring data survives up to 2 node losses per rack.  
- *Metadata* uses quorum reads/writes (majority of replicas) guaranteeing linearizability on critical ops.  
- *Edge cache* tags content with a TTL; on miss, fetches from the nearest object store replica.  
- *Routing*: a lightweight service mesh directs requests based on health probes (latency > 100 ms → fallback).  
Complexities: O(log N) for metadata lookup; storage cost ≈ 2× raw size due to replication.

**Edge Cases**  
- Network partition between regions → read‑only mode with stale data.  
- Simultaneous disk failure in all replicas of a shard → trigger re‑replication from another region.  
- Cache stampede on a new image – mitigate with request coalescing.

**Optimize & Communicate**  
Explain that adding a second CDN tier reduces latency, while sharding metadata by user ID balances load. Highlight trade‑offs: more replicas = higher cost but lower risk of outage. Conclude with monitoring metrics (latency, error rates) and automated rollback scripts to keep the system robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
