---
qid: ing_d77a3de955__faang__local
question: What is Database Sharding? — Sharding | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 484
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:00:26-05:00'
sources: []
---

**Clarify**  
> *“What is database sharding?”*  
We’re asked to explain a technique used to horizontally partition data across multiple machines so that each shard holds a subset of the table(s). I’ll assume the interviewer wants an overview of why we shard, how it’s done (key‑based vs range), and the trade‑offs.

**Approach**  
1. Define sharding as horizontal partitioning for scalability/availability.  
2. Explain common strategies: hash key, range key, directory.  
3. Discuss routing logic (client‑side vs proxy).  
4. Cover operational concerns: rebalancing, cross‑shard joins, consistency.

**Depth**  
Sharding splits a large logical database into smaller physical units (“shards”) so that each node handles only part of the traffic.  
*Hash sharding:* compute `hash(user_id) % N` → shard i. Guarantees uniform distribution but makes range queries expensive.  
*Range sharding:* assign contiguous key ranges (e.g., 0‑10⁶ to shard A, 10⁶‑2×10⁶ to B). Efficient for range scans but uneven load if data is skewed.  
Routing can be handled by a thin client library that maps keys to hosts or via a proxy like Vitess/ProxySQL that keeps the routing table in memory.  

Operationally, adding/removing shards requires re‑balancing (data migration) and careful handling of transactions that span shards—often solved with two‑phase commit or eventual consistency. Replication per shard improves fault tolerance but increases write amplification.

**Edge Cases**  
*Skewed key distribution → hotspot.*  
*Cross‑shard joins become expensive; need denormalization or application‑side aggregation.*  
*Shard failure: routing must redirect while maintaining session affinity.*

**Optimize & Communicate**  
If time allows, mention “elastic sharding” (auto‑scale), “consistent hashing” to minimize data movement, and the cost of sharding versus read replicas. I’d conclude by framing sharding as a trade‑off between horizontal scalability and increased query complexity—exactly what FAANG teams balance when designing large‑scale services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
