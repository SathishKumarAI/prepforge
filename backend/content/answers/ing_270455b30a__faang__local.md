---
qid: ing_270455b30a__faang__local
question: 'Explain: Concurrency — Design of a Modern\u00a0Cache - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 607
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:14:25-05:00'
sources: []
---

**1️⃣ Clarify**

*Problem*: Design a distributed cache that supports high‑throughput, low‑latency reads/writes while scaling horizontally and maintaining consistency under concurrent access.  
*Assumptions to confirm*:  
- Size of data set vs. memory per node.  
- Read/write ratio (read‑heavy or balanced).  
- Consistency requirement (strong, eventual).  
- Failure domain (rack/region).

---

**2️⃣ Approach**

1. **Partitioning & Sharding** – consistent hashing with virtual nodes to spread keys evenly and allow seamless rebalancing.  
2. **Replication** – use a tunable quorum (e.g., Raft or 2‑phase commit) for strong consistency; otherwise, eventual via gossip.  
3. **Concurrency Control** – lightweight per‑key locks (optimistic concurrency with version tags) to avoid global mutexes.  
4. **Cache Line Granularity** – align data structures to cache lines to reduce false sharing.  
5. **Hotspot Handling** – detect and migrate hot keys; optionally use a separate “hot” tier or in‑memory lock striping.  
6. **Write‑back / Coherence** – employ write‑through for critical paths, write‑behind with background flushing for bulk ops.

---

**3️⃣ Depth**

- *Sharding*: `hash(key) % num_virtual_nodes → physical node`. Complexity O(1).  
- *Replication*: Raft log replication ensures linearizability; read path can be served from followers with a small read‑repair window.  
- *Locking*: per‑key optimistic version (e.g., Lamport timestamps); if conflict, retry or fallback to distributed lock via Redis/etcd.  
- *Hotspot*: sliding window counter + threshold → trigger re‑hash or allocate dedicated node.

*Complexity*: Read O(1), write O(log N) for Raft commit; space overhead ≈ 3× replication factor.

---

**4️⃣ Edge Cases**

- Node failure during rebalancing → use anti‑entropy to catch up.  
- Split brain in quorum → detect via heartbeats and abort writes until majority restored.  
- Memory pressure → LRU eviction per shard, spill to disk if needed.

---

**5️⃣ Optimize & Communicate**

- **Performance tuning**: batch RPCs, compress payloads, use async I/O.  
- **Observability**: expose latency histograms, cache hit/miss ratios, replication lag.  
- **Narrative**: “We partition the keyspace to avoid contention, replicate for fault‑tolerance, and keep per‑key locks minimal so concurrent traffic scales linearly.”  

This design balances *throughput*, *latency*, and *consistency* while remaining horizontally scalable and resilient to contention—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
