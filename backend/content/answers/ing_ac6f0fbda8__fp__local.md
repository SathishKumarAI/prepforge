---
qid: ing_ac6f0fbda8__fp__local
question: 'Explain: Sharded Counter — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 487
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:11:40-05:00'
sources: []
---

### Sharded Counter – the “distributed counter” problem

**Problem statement**  
We need a globally‑consistent integer that can be incremented by many clients at high rate (e.g., likes on a post). A naïve single counter suffers from a bottleneck: every write must go through one node, creating contention and a single point of failure.

**Why sharding solves it**  
*Sharding* splits the logical counter into *k* independent “shards” (`C1…Ck`). Each shard stores an integer that can be updated locally with no coordination. A global read is the sum `Σ Ci`. Because updates are local, throughput scales linearly with `k`, and no single node becomes a bottleneck.

**Consistency model**  
We accept *eventual consistency*: after all increments finish, every shard will have processed its writes, so the summed value converges to the true count. This is acceptable for counters where exactness at any instant is not critical (likes, page views).

**Implementation details**  

| Layer | Purpose |
|-------|---------|
| **Write path** | Client sends `INC(id)` → router picks shard by hash(`id`) or round‑robin → local counter increments. |
| **Read path** | Aggregator queries all shards in parallel and sums the results. |
| **Compaction / cleanup** | Periodically merge shard values into a single “canonical” counter to reduce read latency. |

**Non‑obvious insight**  
The *shard count* is not fixed by hardware alone; it should be *adaptive*. As traffic grows, we can split under‑utilized shards (e.g., double `k`), redistributing keys via consistent hashing. This keeps per‑shard load balanced without a global lock—an elegant example of *self‑tuning* in distributed systems.

**Summary**  
Sharding turns a single, contention‑prone counter into many independent counters whose sum gives the logical value. It leverages locality for write scalability, accepts eventual consistency, and can auto‑scale by rehashing shards—turning a simple problem into an elegant design pattern grounded in distributed optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
