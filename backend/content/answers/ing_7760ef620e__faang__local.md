---
qid: ing_7760ef620e__faang__local
question: 'Explain: Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 479
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:21:27-05:00'
sources: []
---

**1️⃣ Clarify**  
Sharding is a horizontal partitioning strategy used in large‑scale ML systems (e.g., feature stores, model serving). It splits data across multiple nodes so each node holds a subset of the key space. I’ll assume we’re sharding *feature tensors* or *model parameters* for inference, and that consistency can be relaxed.

**2️⃣ Approach**  
1. **Choose shard key** – often a hash of user ID or feature name.  
2. **Determine number of shards** – start with power‑of‑two to simplify routing.  
3. **Routing layer** – a consistent hashing ring (e.g., Ketama) that maps keys to shards.  
4. **Replication & fault tolerance** – maintain N replicas per shard, elect primary for writes.  
5. **Rebalancing** – support dynamic addition/removal of shards with minimal data movement.

**3️⃣ Depth**  
- *Complexity*: O(1) lookup in routing layer; data transfer cost during rebalance is proportional to moved rows (O(M)).  
- *Trade‑offs*: Higher shard count → lower per‑node load but increased network hops for joins. Replication adds read latency but improves availability.  
- *Consistency model*: eventual consistency via gossip or version vectors, acceptable in inference pipelines.

**4️⃣ Edge Cases**  
- **Hot shards**: skewed key distribution leads to hotspots; mitigate with virtual nodes or dynamic rehashing.  
- **Node failure**: ensure failover logic routes to replica without data loss.  
- **Schema evolution**: migrating new feature columns across shards must preserve atomicity.

**5️⃣ Optimize & Communicate**  
- Use *consistent hashing* with virtual nodes to smooth load.  
- Cache shard mappings in a distributed KV store (e.g., etcd) for low‑latency routing.  
- Periodically audit shard sizes and rebalance when skew > 20%.  

Explain reasoning as: “We pick consistent hashing because it gives us O(1) routing, minimal data movement on churn, and we can transparently add replicas for fault tolerance.” This showcases structured problem solving, depth, and communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
