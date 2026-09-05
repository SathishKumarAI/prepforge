---
qid: ing_1c0f824e14__fp__local
question: 'Explain: Distributed Object Storage — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 419
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:05:50-05:00'
sources: []
---

**Why we need a distributed object store**

An image‑heavy service like Instagram must persist hundreds of millions of photos, each resized to many resolutions and delivered with sub‑second latency worldwide.  
A single node cannot offer the required throughput, durability, or fault tolerance, so the storage layer must be *horizontal*: data is split across many machines, replicated for reliability, and accessed via a global key.

**From first principles**

1. **Consistency vs. Availability** – The CAP theorem forces us to choose *eventual consistency* (Cassandra‑style) because users tolerate slight lag in seeing their latest upload while we need 99.999% uptime.
2. **Data locality** – By hashing the object key (user id + timestamp) into a *consistent hash ring*, each node owns a contiguous token range, reducing cross‑node traffic for bulk operations (e.g., user profile picture updates).
3. **Replication and erasure coding** – Store 3–4 replicas on distinct racks; if a rack fails, the quorum of remaining replicas still serves reads. For cost‑effective storage at scale, strip objects into erasure‑coded blocks across many nodes.
4. **Metadata service** – A lightweight distributed KV store (e.g., etcd) keeps mapping *object id → [replica locations]*. Reads first hit a local cache; on miss they query the metadata service and then fetch from one of the replicas.

**Non‑obvious insight**

The *write path* is bottlenecked by the “last write wins” conflict resolution. By appending a monotonically increasing version vector (user id + timestamp) to each object, we can let every replica independently accept writes; conflicts are resolved deterministically without coordination, preserving high throughput while still guaranteeing eventual convergence.

This architecture satisfies Instagram’s scale: linearizable reads for critical paths, low‑latency writes, and graceful degradation under node failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
