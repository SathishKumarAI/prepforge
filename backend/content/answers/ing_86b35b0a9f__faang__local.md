---
qid: ing_86b35b0a9f__faang__local
question: How Does the Distributed Counter Work? — Distributed Counter System Design
  - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 481
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:57:08-05:00'
sources: []
---

**Clarify**  
We need a highly‑available counter (e.g., page views) that can be incremented by many clients and read frequently. Assume: *writes > reads*, *low latency (<10 ms)*, *eventual consistency acceptable*, *no strict ordering required*. Ask about max QPS, persistence needs, rollback semantics.

**Approach**  
1. **Partition the counter** into shards (e.g., by key hash).  
2. Each shard owns a local integer and exposes `inc()` / `get()`.  
3. Clients first query a lightweight *metadata service* to get the responsible shard(s).  
4. Shards are replicated with an asynchronous log (Raft/RAFT‑style) for durability.  
5. Periodically, shards **merge** into a global counter stored in a distributed KV store (e.g., DynamoDB).  

**Depth**  
- **Increment path**: client → shard RPC → local atomic add (CAS or lockless). Shard writes to its WAL; replication guarantees durability.  
- **Read path**: read from the shard’s cached value for low latency; fall back to global counter if stale.  
- **Merge job** runs every 1 s, reads each shard’s delta since last merge, updates global counter atomically (e.g., using compare‑and‑swap). Complexity: O(1) per inc/read, O(n_shards) per merge.  
- **Fault tolerance**: if a shard dies, its replica serves; missed increments are replayed from WAL.

**Edge Cases**  
- Network partitions → shards may diverge; eventual consistency handles it.  
- Shard overload → rebalance by moving key ranges to new shards.  
- Client mis‑routing → metadata cache invalidation strategy.

**Optimize & Communicate**  
Explain that sharding reduces contention, replication gives durability, and periodic merging keeps a single source of truth for analytics dashboards. Mention trade‑offs: higher write latency vs. read speed, consistency model (eventual), and how to monitor drift between shard totals and global counter. This showcases clear problem framing, architectural choices, complexity analysis, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
