---
qid: ing_6737403a86__faang__local
question: 'Explain: Hashed sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 588
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:44:19-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain *hashed sharding* in the context of database sharding—i.e., how a large table is partitioned across many nodes using a hash function. I’ll assume we’re dealing with a horizontally‑partitioned key/value store (e.g., DynamoDB, Cassandra) and that the interviewer wants both conceptual clarity and a concrete example.

**2️⃣ Approach**  
1. Define sharding & its goals.  
2. Explain the hashed strategy: pick a shard key → apply hash → mod by #shards → route to node.  
3. Highlight benefits (uniform load, no hotspots).  
4. Note caveats (re‑hashing on scale‑up, rebalancing cost).

**3️⃣ Depth**  
- *Sharding* splits a table into smaller “shards” stored on separate servers, reducing contention and improving throughput.  
- In **hashed sharding**, the shard key (often a primary key or user ID) is fed through a deterministic hash function `h(key)`. The result is reduced modulo `N` (current number of shards): `shard = h(key) mod N`. Each shard hosts a contiguous range of hash values, so any read/write can be routed in O(1).  
- Example: 10 M users → 100 shards. User ID 12345 hashes to 6789 → 6789 % 100 = 89 → stored on node 89.  
- **Pros**: Even key distribution, easy routing, no need for range queries across nodes.  
- **Cons**: Adding/removing shards requires a consistent‑hash ring or re‑hashing all keys, leading to data migration and potential downtime.

**4️⃣ Edge Cases**  
- *Hot keys*: Rare but possible if many users share the same hash bucket; mitigated by using a good hash function or adding a secondary sharding layer.  
- *Scale‑up*: When `N` changes, most keys move (O(N))—test migration scripts and verify eventual consistency.  
- *Write amplification*: Ensure write paths can handle routing overhead.

**5️⃣ Optimize & Communicate**  
If I were designing this system, I’d adopt a consistent‑hash ring to minimize key movement on resharding and use a “virtual node” strategy for smoother load balancing. I’d also expose a lightweight API that transparently translates logical keys to physical nodes so application code stays agnostic of sharding logic.

*In summary*, hashed sharding is a deterministic, uniform distribution technique that maps each record to one of many shards via `hash(key) % N`, offering scalability at the cost of costly resharding when the cluster size changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
