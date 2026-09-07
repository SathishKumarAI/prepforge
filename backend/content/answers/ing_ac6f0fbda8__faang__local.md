---
qid: ing_ac6f0fbda8__faang__local
question: 'Explain: Sharded Counter — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 450
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:24:58-05:00'
sources: []
---

**Clarify**  
We need a counter that can be incremented from many clients and read accurately, but we want to avoid a single hot‑spot DB row. Assume: *high write volume*, *eventual consistency acceptable for reads*, *no strict ordering required*.

**Approach**  
1. Partition the total count into **N shards** (e.g., 100).  
2. Each shard is stored in a fast key‑value store (Redis, DynamoDB) with its own key.  
3. Increment: pick a shard at random (or round‑robin), perform an atomic `INCR`.  
4. Read: sum all shard values via a batched read or a materialized view that updates on each write.

**Depth**  
- **Atomicity**: Use DB primitives (`INCR` in Redis, `UpdateItem` with `ADD` in DynamoDB) to avoid race conditions.  
- **Consistency**: Reads are eventually consistent; if you need strong consistency, perform a full read of all shards (O(N)) or maintain a global counter via a write‑through cache.  
- **Scalability**: Shard count can grow with traffic; each shard scales independently.  
- **Complexity**: Write O(1), Read O(N) unless you keep a cached aggregate.

**Edge Cases**  
- *Shard exhaustion*: If writes spike, a single shard may become a bottleneck—use more shards or dynamic sharding.  
- *Failure of a shard*: Detect via health checks; if a shard is down, mark it and exclude from sums until recovered.  
- *Drift in counts*: Periodic reconciliation against a ground‑truth source.

**Optimize & Communicate**  
To reduce read latency, maintain an auxiliary “total” key that increments along with shards (write‑through). This gives O(1) reads while keeping per‑shard writes cheap. Explain trade‑offs: higher write cost for faster reads vs. simpler design. Emphasize monitoring shard usage and automated scaling to keep the system robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
