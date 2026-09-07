---
qid: ing_a658f01957__faang__local
question: 'Explain: Hash-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 427
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:11:48-05:00'
sources: []
---

**Hash‑Based Sharding – Quick Overview**

| Phase | What to Cover |
|-------|---------------|
| **Clarify** | Restate: “Distribute data across multiple machines by hashing a key so that each shard owns a deterministic range of hash values.” Ask: *What is sharded?* (rows, keys) *Which hash function?* *Consistency guarantees?* |
| **Approach** | 1. Choose a stable hash function (e.g., MurmurHash). <br>2. Map hash → shard via modulo or consistent hashing. <br>3. Store routing metadata in each node or a central service. <br>4. Route reads/writes to the responsible shard. |
| **Depth** | - **Modulo sharding**: `shard_id = hash(key) % N`. Simple, O(1). Re‑hashing required when N changes → data rebalancing overhead. <br>- **Consistent hashing**: virtual nodes on a ring; each key maps to the next clockwise node. Adding/removing shards only moves ~1/N of keys. <br>Complexity: routing O(log N) with balanced virtual nodes; storage per shard is linear in its key count. |
| **Edge Cases** | - Skewed key distribution → hotspot shards. Mitigate by increasing virtual nodes or using a key‑salting scheme.<br>- Node failure: need replication (e.g., 3× replicas). <br>- Hot keys: consider hot‑spot caching or secondary indexing. |
| **Optimize & Communicate** | Highlight that consistent hashing gives graceful scaling and minimal data movement. Explain trade‑offs: more virtual nodes → better load balance but higher memory. Mention monitoring metrics (latency, QPS per shard) to detect imbalance early. Conclude with a brief note on how to handle rebalancing scripts or online migrations without downtime. |

*Word count: ~210 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
