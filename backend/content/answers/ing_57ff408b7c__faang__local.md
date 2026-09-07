---
qid: ing_57ff408b7c__faang__local
question: 'Explain: Distributed Counter Data Storage — Distributed Counter System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 499
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:08:15-05:00'
sources: []
---

**Clarify**

We need a fault‑tolerant distributed counter that supports high write throughput, linearizable reads, and can scale horizontally.  
Assumptions: *global consistency is required*, writes are frequent, the counter fits in RAM, and we run on commodity servers with at least 3 replicas for quorum.

**Approach**

1. **Sharding & Replication** – split the counter into `N` shards (e.g., using a hash of the key).  
2. **Consensus per shard** – each shard is replicated on 3 nodes and uses Raft/Paxos to ensure linearizability.  
3. **Client API** – `increment()` sends an `INCR` RPC to the leader of the responsible shard; `read()` fetches from a quorum (majority) of replicas.  
4. **Staleness handling** – optionally expose eventual reads by reading any replica.

**Depth**

- *Write path*: client → leader → Raft log append → majority commit → update local state → reply.  
  Latency ≈ network round‑trip + Raft commit (≈ 1–2 ms on LAN).  
- *Read path*: quorum read ensures the latest value; can be optimized with a read‑repair mechanism.  
- *Complexity*: O(1) per operation, constant replication factor.  
- *Failure modes*: if leader fails, Raft elects new leader in <100 ms. Shard failures are isolated.

**Edge Cases**

- **Split brain**: prevented by strict majority voting.  
- **Network partitions**: writes may be blocked until quorum re‑establishes; reads from minority can return stale data.  
- **Hot shard**: rebalance shards or increase replication factor.

**Optimize & Communicate**

To boost throughput, batch increments into a single Raft log entry per client session. For large counters, use *log compaction* (snapshotting) to keep state size small. I’d explain the trade‑off between consistency and latency by showing how Raft guarantees linearizability at the cost of write amplification, and how we mitigate it with batching and efficient serialization.

This design meets FAANG expectations: clear assumptions, a modular architecture, precise complexity analysis, edge‑case handling, and concrete optimization strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
