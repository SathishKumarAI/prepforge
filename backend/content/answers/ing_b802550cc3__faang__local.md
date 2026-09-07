---
qid: ing_b802550cc3__faang__local
question: 'Explain: Distributed Cache — Grokking System Design Interview: Patterns
  & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 509
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:51:11-05:00'
sources: []
---

**Distributed Cache – Structured FAANG‑style Answer**

| Step | What I’ll Say |
|------|---------------|
| **Clarify** | “You’re asking about a distributed cache: a horizontally scalable, in‑memory key–value store that lives across multiple nodes to provide low‑latency data access for read‑heavy workloads. I’d confirm assumptions: do we need strong consistency? What’s the traffic pattern (reads vs writes)? Do we have persistence or can we tolerate evictions?” |
| **Approach** | 1️⃣ Pick a cache architecture (e.g., client‑side sharding, consistent hashing). <br>2️⃣ Decide on replication strategy (master–slave, multi‑primary). <br>3️⃣ Add fault tolerance: health checks, automatic failover. <br>4️⃣ Implement eviction policy and TTLs. <br>5️⃣ Expose a simple API (GET/SET/DELETE) with optional transaction support. |
| **Depth** | *Consistent hashing* distributes keys to nodes; when a node joins/leaves only O(1/N) keys move, keeping the system balanced. Replication can be *primary‑secondary*: writes go to the primary and are asynchronously applied to secondaries for eventual consistency (good for session caches). Eviction uses LRU or LFU; we maintain a global clock by gossiping recent usage counters. For fault tolerance, each node runs a heartbeat; on failure the cluster reassigns shards and promotes a secondary. Complexity: O(log N) lookup with a hash ring; write latency is O(1) plus replication delay. |
| **Edge Cases** | *Hot spots* – use virtual nodes or read‑replicas to spread load.<br>*Network partitions* – choose CAP trade‑off (often AP for caches).<br>*Large objects* – store pointers to object storage instead of raw data. |
| **Optimize & Communicate** | We could add a *write‑through cache* backed by a database for durability, or use *read‑through* to populate on miss. For large scale, integrate with a cluster manager (Kubernetes) and monitor latency histograms. I’d explain that in production, we’d start with Redis/Memcached clusters, then move to custom implementation only if we hit specific bottlenecks. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
