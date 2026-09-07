---
qid: ing_03849aaec2__faang__local
question: 'Explain: Terminology — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 512
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:52:16-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *distributed counter* service (e.g., “likes” or “views”) that can be read/written by many clients concurrently. Key assumptions:  

- **High write throughput** – thousands of increments per second.  
- **Strong consistency** for reads after a recent write.  
- Low latency (< 10 ms) and minimal cross‑region traffic.  
- The counter is a single scalar value, not a multi‑key map.

**Approach**  
1. **Sharding + Replication** – split the counter into *N* shards (e.g., 128). Each shard holds a partial sum and is replicated to 3 nodes for fault tolerance.  
2. **Client‑side batching** – clients send “increment” ops in small batches; each batch updates a single local shard, reducing round trips.  
3. **Leader‑follower model per shard** – one leader per shard accepts writes; followers catch up via log replication (Raft).  
4. **Global aggregation service** – periodically aggregates shard totals into the global counter and serves read requests from that cache.

**Depth**  
- *Write path*: client → local shard leader → append to Raft log → replicated to 2 followers → ACK. Latency ≈ one RTT to leader + replication delay (~1 ms).  
- *Read path*: query aggregation service; if stale is acceptable, read from latest shard totals. Complexity: **O(1)** per operation, O(N) for global reads (cached).  
- *Scalability*: adding shards increases parallelism linearly; replication keeps fault tolerance.

**Edge Cases**  
- Network partitions → leaders may step down; clients retry to new leader.  
- Counter overflow – use 64‑bit signed integers and detect wrap‑around.  
- Burst writes → shard buffer size must be tuned to avoid backpressure.

**Optimize & Communicate**  
Explain trade‑offs: stronger consistency (wait for majority) vs. latency. Propose optional “eventual read” endpoint for ultra‑fast reads that may lag by a few milliseconds. Conclude with monitoring metrics: replication lag, shard load imbalance, request latency distribution. This structure shows clear problem understanding, systematic design, technical depth, and foresight into edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
