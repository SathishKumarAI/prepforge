---
qid: ing_df91491182__faang__local
question: 'Explain: Events That Carry State — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 453
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:19:11-05:00'
sources: []
---

**Clarify**  
You’re asking how a Pub/Sub system can deliver *stateful* events (e.g., “order‑updated”) rather than just fire‑and‑forget messages. Key assumptions:  
1. Subscribers need the most recent state of an entity, not every intermediate change.  
2. The system must tolerate high throughput and provide eventual consistency.

**Approach**  
Design a *stateful topic* that stores a single, authoritative record per key (order id). Publishers write updates; subscribers read the latest snapshot or receive incremental deltas. Underlying storage can be a distributed log + cache layer.

**Depth**  
1. **Write path**: Producers append to a partitioned log (`Kafka`‑style). A separate *state store* (e.g., RocksDB, DynamoDB) is updated via an async stream processor that idempotently merges the latest value per key.  
2. **Read path**: Subscribers request `get(key)` from the state store for point queries or subscribe to a change feed (Kafka consumer). The log guarantees ordering; the store guarantees O(1) read of current state. Complexity: writes are *O(log N)* in the log, reads *O(1)* in the key‑value store.  
3. **Consistency**: Use optimistic concurrency control or compare‑and‑set to avoid lost updates. Optional snapshot isolation can be provided by periodically exporting the state store.

**Edge Cases**  
- **Concurrent updates**: resolve via last‑write‑wins or application‑level merge logic.  
- **Backpressure**: if subscribers lag, the log buffer grows; need retention policies.  
- **Failure of state store**: fallback to replaying the log to rebuild state.

**Optimize & Communicate**  
To improve latency, keep a hot cache (Redis) for frequently accessed keys. Explain that this architecture scales horizontally by sharding on key hash and uses proven patterns from event‑sourcing systems. Highlight trade‑offs: added complexity vs. strong per‑entity consistency compared to pure fire‑and‑forget Pub/Sub.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
