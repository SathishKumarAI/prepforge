---
qid: ing_5cce4da8d9__faang__local
question: 'Explain: Probabilistic Data Structures — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 543
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:19:31-05:00'
sources: []
---

**Problem Clarification**  
We need a horizontally scalable counter that supports “increment” and “read‑value” across many nodes with *high availability* and *low latency*. The system should tolerate partitions and node failures while keeping memory and bandwidth usage minimal, even for billions of distinct keys. I’ll assume: 1) counters are integer (non‑negative), 2) approximate counts are acceptable, 3) we can afford eventual consistency, and 4) the traffic pattern is write‑heavy.

**Approach**  
1. **Local probabilistic counter per node** – use a *HyperLogLog*‑style sketch or *Count–Min Sketch (CMS)* to aggregate increments locally.  
2. **Gossip/CRDT aggregation** – periodically merge sketches across nodes using a commutative, associative operation so convergence is guaranteed without coordination.  
3. **Read path** – query the local sketch for an approximate count; if higher accuracy is needed, perform a *consensus* read (e.g., Paxos) on a small subset of replicas.

**Depth & Trade‑offs**  
- CMS offers linear memory in *k* × log(1/ε) where ε is error.  
- HyperLogLog gives cardinality; for integer counts we use *Probabilistic Counting with Stochastic Averaging (PCSA)* or *LogLog* variants.  
- Merge cost is O(k).  
- Accuracy degrades linearly with sketch size and network churn.  
- No single point of failure: merges are idempotent.

**Edge Cases**  
- **High variance keys** – may need per‑key heavy buckets.  
- **Skewed updates** – hot spots can overflow local sketches; handle by sharding counters or dynamic rebalancing.  
- **Network partitions** – counts drift until merge; acceptable if read latency is critical.

**Optimization & Communication**  
1. Use *Bloom filter* prefixes to route increments to the correct node, reducing unnecessary gossip.  
2. Compress sketches with delta‑encoding before transmission.  
3. Expose a “tuneable” API: clients can request tighter bounds (larger k) for critical keys.  

By combining local probabilistic counters with CRDT‑style merges, we achieve sub‑kilobyte per‑counter memory, O(1) increment latency, and eventual consistency suitable for large‑scale distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
