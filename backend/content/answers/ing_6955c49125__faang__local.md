---
qid: ing_6955c49125__faang__local
question: How to update the distributed counter? — Distributed Counter System Design
  - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 435
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:48:22-05:00'
sources: []
---

**Clarify**  
We need a *distributed counter* that can be incremented concurrently by many clients and read consistently across all nodes.  
Assumptions to confirm:  
1. Do we need linearizable reads or eventual consistency?  
2. What is the expected traffic (increments per second)?  
3. Are there any failure modes (network partitions, node crashes) we must tolerate?  

**Approach**  
1. Shard the counter across *N* nodes, each maintaining a local delta.  
2. Clients pick a shard (e.g., hash(key) % N) and send an increment request.  
3. Periodically (or on read) aggregate deltas via a **gossip‑style** protocol or a background *aggregator* node that sums all shards.  

**Depth**  
- Each shard stores `delta_i` as an integer in a fast key‑value store (Redis, Memcached).  
- Increment: O(1) write to local delta.  
- Read: either read the aggregator’s sum (O(N)) or perform a *fetch‑and‑add* across shards (latency proportional to N).  
- Consistency: with eventual consistency we accept stale reads; for linearizability we need a distributed lock (e.g., using ZooKeeper) which adds latency.  

**Edge Cases**  
- **Node failure:** shard’s delta is lost → use replication or write-ahead logs.  
- **Network partition:** shards may diverge; reconciliation on merge.  
- **Hotspot shard:** distribute load by randomizing or using consistent hashing with virtual nodes.  

**Optimize & Communicate**  
- Use *compaction* to reset local deltas after aggregation, keeping storage bounded.  
- Expose a REST/GRPC API that transparently selects the shard and handles retries.  
- Explain trade‑offs: lower latency with eventual consistency vs higher overhead for linearizability.  

This design balances scalability, fault tolerance, and performance while keeping the implementation straightforward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
